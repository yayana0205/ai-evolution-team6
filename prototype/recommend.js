/**
 * RunFit — 추천 매칭 엔진
 * 순수 JS, 백엔드 없이 동작 (GitHub Pages 호환)
 */

const WIDTH_MAP = { wide: '넓음', normal: '보통', narrow: '좁음' };
const PRONATION_MAP = {
  overpronation: '내전형',
  neutral: '중립형',
  supination: '외전형',
  unknown: '중립형', // 모름은 중립으로 처리 (안전한 기본값)
};
const DISTANCE_MAP = {
  short: '단거리',
  medium: '중거리',
  long: '장거리',
  marathon: '장거리',
};
const BUDGET_MAX = {
  low: 70000,
  mid: 120000,
  high: 200000,
  premium: Infinity,
};

/**
 * 사용자 프로필 + 신발 속성 → 매칭 점수 (0-100)
 *
 * 가중치:
 *   pronation — 35점 (부상 방지 핵심 — MANIFESTO Safety over Performance)
 *   width     — 25점
 *   cushion   — 25점
 *   distance  — 10점
 *   budget    —  5점
 */
function calculateMatchScore(user, shoe) {
  let score = 0;

  // ── 발 아치 타입(pronation) — 35점 ──
  // 부상 방지를 위한 가장 중요한 매칭 요소
  const userPronation = PRONATION_MAP[user.pronation] || '중립형';
  if (user.pronation !== 'unknown' && shoe.pronation) {
    if (shoe.pronation === userPronation) {
      score += 35;
    } else if (shoe.pronation === '중립형') {
      score += 18; // 중립 신발은 어느 발 타입에도 무난
    } else {
      score -= 15; // 반대 타입 신발 착용 → 부상 위험 페널티
    }
  } else {
    score += 18; // 모름이면 중립 기준으로 처리
  }

  // ── 발볼 (25점) ──
  const userWidth = WIDTH_MAP[user.foot_width];
  if (shoe.width === userWidth) {
    score += 25;
  } else if (shoe.width === '보통') {
    score += 12;
  } else if (user.foot_width === 'wide' && shoe.width === '좁음') {
    score -= 15;
  } else if (user.foot_width === 'narrow' && shoe.width === '넓음') {
    score -= 15;
  }

  // ── 쿠션 (25점) ──
  const userCushion = user.preferred_cushion ?? 3;
  const shoeCushion = shoe.cushion ?? 3;
  const cushionDiff = Math.abs(shoeCushion - userCushion);
  score += Math.max(0, 25 - cushionDiff * 8);

  // ── 거리 (10점) ──
  const userDist = DISTANCE_MAP[user.running_distance];
  if (shoe.distance === userDist) {
    score += 10;
  } else if (shoe.distance === '전거리') {
    score += 7;
  }

  // ── 예산 (5점) ──
  const budgetCap = BUDGET_MAX[user.budget] ?? Infinity;
  const price = parseInt(shoe.price) || 0;
  if (price <= budgetCap) score += 5;

  return Math.max(0, Math.min(100, score));
}

/**
 * 우선순위(priorities) 기반 보너스 점수
 * 최대 3개 우선순위 × 5점 = 15점 추가 가능
 */
function priorityBonus(user, shoe) {
  let bonus = 0;
  for (const p of user.priorities || []) {
    if (p === 'speed' && (shoe.weight ?? 3) <= 2) bonus += 5;
    if (p === 'protection' && (shoe.cushion ?? 3) >= 4) bonus += 5;
    if (p === 'comfort' && (shoe.fit ?? 3) >= 4) bonus += 5;
    if (p === 'breathability' && (shoe.breathability ?? 3) >= 4) bonus += 5;
    // 'design'은 데이터로 평가 불가, 보너스 없음
  }
  return bonus;
}

/**
 * 추천 이유 한국어 생성
 */
function generateReason(user, shoe) {
  const reasons = [];
  const userWidth = WIDTH_MAP[user.foot_width];
  const userPronation = PRONATION_MAP[user.pronation] || '중립형';

  // pronation 매칭 이유 (가장 먼저 표시 — 부상 방지 핵심)
  if (user.pronation && user.pronation !== 'unknown' && shoe.pronation) {
    if (shoe.pronation === userPronation) {
      reasons.push(`${userPronation} 전용 지지 구조`);
    } else if (shoe.pronation === '중립형') {
      reasons.push('중립형 범용 설계');
    }
  }

  if (shoe.width === userWidth) {
    reasons.push(`${userWidth} 발볼에 잘 맞음`);
  }

  const cushionDiff = Math.abs((shoe.cushion ?? 3) - (user.preferred_cushion ?? 3));
  if (cushionDiff <= 1) {
    reasons.push('원하시는 쿠션감과 일치');
  }

  const userDist = DISTANCE_MAP[user.running_distance];
  if (shoe.distance === userDist) {
    reasons.push(`${userDist} 러닝에 최적화`);
  } else if (shoe.distance === '전거리') {
    reasons.push('범용 데일리 트레이너');
  }

  if (user.priorities?.includes('speed') && (shoe.weight ?? 3) <= 2) {
    reasons.push('가벼운 무게');
  }
  if (user.priorities?.includes('protection') && (shoe.cushion ?? 3) >= 4) {
    reasons.push('충분한 쿠션으로 부상 방지');
  }
  if (user.priorities?.includes('breathability') && (shoe.breathability ?? 3) >= 4) {
    reasons.push('통기성 우수');
  }

  return reasons.length > 0 ? reasons.join(' · ') : '균형 잡힌 선택지';
}

/**
 * 메인 추천 함수
 * @param {object} userProfile - 폼 입력
 * @param {array} products - product_profiles.json 로드 결과
 * @returns {array} 매칭 점수 내림차순, 상위 5개
 */
function getRecommendations(userProfile, products) {
  const scored = products
    .map((shoe) => {
      const baseScore = calculateMatchScore(userProfile, shoe);
      const bonus = priorityBonus(userProfile, shoe);
      const total = Math.min(100, baseScore + bonus);
      return {
        ...shoe,
        match_score: total,
        reason: generateReason(userProfile, shoe),
      };
    })
    .sort((a, b) => b.match_score - a.match_score);

  return scored.slice(0, 5);
}
