<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SoleMate — Office Hours 6 Forcing Questions</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #ffffff;
    --text: #1a1a1a;
    --text-secondary: #4b5563;
    --text-muted: #6b7280;
    --border: #e5e7eb;
    --border-strong: #d1d5db;
    --blockquote-border: #d1d5db;
    --blockquote-bg: #f9fafb;
    --code-bg: #f3f4f6;
    --code-border: #e5e7eb;
    --table-header-bg: #f9fafb;
    --table-row-alt: #fafafa;
    --hr-color: #e5e7eb;
    --accent: #2563eb;
    --tag-bg: #eff6ff;
    --tag-color: #1d4ed8;
    --strong-color: #111827;
    --h1-color: #111827;
    --h2-color: #111827;
    --h3-color: #374151;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 15px;
    line-height: 1.7;
    color: var(--text);
    background: var(--bg);
    padding: 48px 0;
    -webkit-font-smoothing: antialiased;
  }

  .page {
    max-width: 720px;
    margin: 0 auto;
    padding: 0 32px;
  }

  /* ── HEADINGS ── */
  h1 {
    font-size: 26px;
    font-weight: 600;
    color: var(--h1-color);
    letter-spacing: -0.02em;
    line-height: 1.3;
    margin-bottom: 6px;
    margin-top: 0;
  }
  h2 {
    font-size: 20px;
    font-weight: 600;
    color: var(--h2-color);
    letter-spacing: -0.01em;
    margin-top: 44px;
    margin-bottom: 4px;
    line-height: 1.35;
  }
  h3 {
    font-size: 16px;
    font-weight: 500;
    color: var(--h3-color);
    margin-top: 22px;
    margin-bottom: 8px;
    line-height: 1.4;
  }
  h2 + h3 { margin-top: 12px; }

  /* ── PARAGRAPH ── */
  p {
    margin-bottom: 14px;
    color: var(--text);
  }
  p:last-child { margin-bottom: 0; }

  /* ── STRONG / EM ── */
  strong { font-weight: 600; color: var(--strong-color); }
  em { font-style: italic; }

  /* ── BLOCKQUOTE ── */
  blockquote {
    border-left: 3px solid var(--blockquote-border);
    background: var(--blockquote-bg);
    margin: 16px 0;
    padding: 12px 18px;
    border-radius: 0 6px 6px 0;
  }
  blockquote p {
    color: var(--text-secondary);
    font-size: 14px;
    margin-bottom: 6px;
  }
  blockquote p:last-child { margin-bottom: 0; }
  blockquote strong { color: var(--text); }

  /* ── HR ── */
  hr {
    border: none;
    border-top: 1px solid var(--hr-color);
    margin: 36px 0;
  }

  /* ── CODE ── */
  code {
    font-family: 'Fira Code', 'Menlo', monospace;
    font-size: 13px;
    background: var(--code-bg);
    border: 1px solid var(--code-border);
    border-radius: 4px;
    padding: 1px 6px;
    color: #c2185b;
  }
  pre {
    background: var(--code-bg);
    border: 1px solid var(--code-border);
    border-radius: 8px;
    padding: 16px 18px;
    overflow-x: auto;
    margin: 14px 0;
  }
  pre code {
    background: none;
    border: none;
    padding: 0;
    color: var(--text-secondary);
    font-size: 13px;
    line-height: 1.6;
  }

  /* ── TABLE ── */
  .table-wrap {
    overflow-x: auto;
    margin: 16px 0;
    border-radius: 8px;
    border: 1px solid var(--border);
  }
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
  }
  thead tr {
    background: var(--table-header-bg);
  }
  th {
    font-weight: 600;
    color: var(--text);
    padding: 10px 14px;
    text-align: left;
    border-bottom: 1px solid var(--border);
    white-space: nowrap;
  }
  td {
    padding: 10px 14px;
    color: var(--text-secondary);
    border-bottom: 1px solid var(--border);
    vertical-align: top;
    line-height: 1.6;
  }
  tbody tr:last-child td { border-bottom: none; }
  tbody tr:nth-child(even) { background: var(--table-row-alt); }

  /* ── LISTS ── */
  ul, ol {
    padding-left: 22px;
    margin: 10px 0 14px;
  }
  li {
    margin-bottom: 5px;
    color: var(--text-secondary);
    line-height: 1.65;
  }
  li strong { color: var(--strong-color); }

  /* checkbox list */
  ul.checklist { list-style: none; padding-left: 4px; }
  ul.checklist li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 4px 0;
  }
  ul.checklist li::before {
    content: '☐';
    font-size: 14px;
    color: var(--text-muted);
    flex-shrink: 0;
    margin-top: 1px;
  }

  /* ── ITALIC LABEL BLOCK ── */
  .label-block {
    font-size: 13px;
    font-weight: 500;
    color: var(--text-muted);
    margin-bottom: 16px;
    letter-spacing: 0.01em;
  }

  /* ── FOOTER ── */
  .footer {
    margin-top: 48px;
    padding-top: 20px;
    border-top: 1px solid var(--hr-color);
    font-size: 13px;
    color: var(--text-muted);
    font-style: italic;
  }

  /* ── SUMMARY TABLE (종합 평가) ── */
  .summary-section {
    background: #f9fafb;
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 24px 24px 20px;
    margin-top: 40px;
  }
  .summary-section h2 {
    margin-top: 0;
    font-size: 17px;
    margin-bottom: 16px;
  }
  .summary-section blockquote {
    margin-top: 20px;
    background: white;
  }

  /* ── Q SECTION WRAPPER ── */
  .q-section {
    margin-top: 0;
  }
  .q-section h2 {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }
  .q-num {
    font-size: 12px;
    font-weight: 600;
    color: white;
    background: #374151;
    border-radius: 4px;
    padding: 2px 8px;
    letter-spacing: 0.03em;
    flex-shrink: 0;
  }

  /* ── PERSONA BOX ── */
  .persona-box {
    background: #fffbeb;
    border: 1px solid #fde68a;
    border-radius: 8px;
    padding: 14px 18px;
    margin: 14px 0;
  }
  .persona-box p {
    color: #92400e;
    font-size: 14px;
    margin-bottom: 6px;
  }
  .persona-box p:last-child { margin-bottom: 0; }

  @media print {
    body { padding: 24px 0; font-size: 13px; }
    .page { padding: 0 24px; }
    h1 { font-size: 22px; }
    h2 { font-size: 17px; margin-top: 32px; }
  }
</style>
</head>
<body>
<div class="page">

  <h1>OFFICE HOURS — 6 FORCING QUESTIONS</h1>
  <p class="label-block">SoleMate — YC 스타일 제품 검증 세션</p>

  <blockquote>
    <p><strong>방법론:</strong> gstack <code>/office-hours</code> Startup Mode</p>
    <p><em>"코드를 작성하기 전에 전제를 검증하라.<br>
    특정한 사람 한 명을 이름으로 말하지 못한다면, 그게 지금 당장 배워야 할 가장 중요한 것이다."</em></p>
    <p><strong>참고 문서:</strong> MANIFEST v2 · PREMORTEM v2 · WHYTREE v2</p>
  </blockquote>

  <hr>

  <!-- Q1 -->
  <div class="q-section">
    <h2><span class="q-num">Q1</span> Demand Reality</h2>
    <h3>실제로 누가, 얼마나 절박하게 이것을 필요로 하는가?</h3>

    <blockquote>
      <p><em>"Interest is not demand. Waitlists, signups, 'that's interesting' — none of it counts.<br>
      Behavior counts. Money counts. Panic when it breaks counts."</em></p>
    </blockquote>

    <p><strong>SoleMate의 답변</strong></p>
    <p>MANIFEST는 "러닝 인구 1,000만 시대"를 선언하지만, 이것은 시장 규모이지 수요 증거가 아니다.</p>
    <p>진짜 수요가 있는 사람은 이런 사람이다.</p>

    <blockquote>
      <p><em>서울마라톤 D-3개월. 훈련 중 무릎이 아프기 시작했다. 러닝화가 문제인 것 같다.<br>
      블로그 10개를 읽었는데 다 다른 말을 한다. 15만 원짜리 신발을 또 잘못 사면 안 된다.<br>
      대회는 이미 신청했고, 훈련을 멈출 수 없다.</em></p>
    </blockquote>

    <p>이 사람은 "관심"이 아니라 <strong>공황</strong> 상태다. 이게 수요다.</p>

    <div class="table-wrap">
      <table>
        <thead><tr><th>구분</th><th>내용</th></tr></thead>
        <tbody>
          <tr><td>수요가 있는 사람</td><td>첫 풀마라톤 D-90일 이내, 훈련 중 통증을 경험한 러너</td></tr>
          <tr><td>수요가 없는 사람</td><td>카페에서 러닝화 추천 글을 읽는 캐주얼 러너</td></tr>
          <tr><td>행동 증거</td><td>러닝 카페·유튜브·블로그 탐색에 수십 분 이상 쓰는 사람</td></tr>
          <tr><td>돈 증거</td><td>러닝화 평균 구매가 15만 원 — 실패 비용이 크다 (WHYTREE L3)</td></tr>
        </tbody>
      </table>
    </div>

    <p><strong>미해결 질문</strong></p>
    <ul>
      <li>지금까지 실제 러너를 만나서 이 가설을 검증한 적이 있는가?</li>
      <li>PREMORTEM 전체 어디에도 사용자 인터뷰 결과가 없다. 이것이 가장 큰 리스크다.</li>
    </ul>
  </div>

  <hr>

  <!-- Q2 -->
  <div class="q-section">
    <h2><span class="q-num">Q2</span> Status Quo</h2>
    <h3>지금 사람들은 이 문제를 어떻게 해결하고 있는가?</h3>

    <blockquote>
      <p><em>"만약 사람들이 이미 해결하고 있다면, 그 해결책이 경쟁자다."</em></p>
    </blockquote>

    <p><strong>SoleMate의 답변</strong></p>
    <p>MANIFEST는 "카페 추천글, 인플루언서 협찬 리뷰, 지인 추천"을 현재 대안으로 지목한다. 그러나 가장 강력한 경쟁자를 빠뜨리고 있다.</p>

    <div class="table-wrap">
      <table>
        <thead><tr><th>현재 대안</th><th>강점</th><th>약점</th></tr></thead>
        <tbody>
          <tr><td>오프라인 전문 러닝샵 직원</td><td>발을 직접 보고, 기록 듣고, 신겨본다 — 가장 정확</td><td>수도권 집중, 영업시간 제한</td></tr>
          <tr><td>네이버·무신사 리뷰</td><td>방대한 데이터, 즉시 접근 가능</td><td>노이즈 많음, 개인화 없음</td></tr>
          <tr><td>러닝 카페·커뮤니티</td><td>경험자의 생생한 조언</td><td>편향 있음, 탐색 시간 소요</td></tr>
          <tr><td>인플루언서 리뷰</td><td>신뢰감, 시각적 정보</td><td>협찬 의심, 개인화 없음</td></tr>
          <tr><td>지인 추천</td><td>신뢰도 높음</td><td>발 조건이 다를 수 있음</td></tr>
        </tbody>
      </table>
    </div>

    <p><strong>SoleMate의 진짜 경쟁 우위가 될 수 있는 영역</strong></p>
    <p>오프라인 전문샵이 없는 지역 + 매장 방문이 어려운 시간 + 구매 전 정보 탐색 단계.<br>
    이 세 조건이 겹치는 순간, SoleMate가 가장 빠른 해답이 된다.</p>

    <p><strong>미해결 질문</strong></p>
    <ul>
      <li>SoleMate가 오프라인 러닝샵 직원보다 나은 추천을 줄 수 있는가?</li>
      <li>없다면, 오프라인샵의 보완재로 포지셔닝하는 것이 더 현실적이다.</li>
    </ul>
  </div>

  <hr>

  <!-- Q3 -->
  <div class="q-section">
    <h2><span class="q-num">Q3</span> Desperate Specificity</h2>
    <h3>가장 절박하게 필요로 하는 사람은 정확히 누구인가?</h3>

    <blockquote>
      <p><em>"'Enterprises in healthcare'는 고객이 아니다.<br>
      'Everyone needs this'는 아무도 못 찾겠다는 뜻이다.<br>
      이름, 직책, 회사, 이유가 있어야 한다."</em></p>
    </blockquote>

    <p><strong>SoleMate의 답변</strong></p>
    <p>MANIFEST의 "러닝 인구 1,000만"은 타겟이 아니다. 그 안에서 가장 절박한 사람을 좁혀야 한다.</p>

    <p><strong>페르소나: 김지현, 35세, 마케팅 팀장</strong></p>

    <div class="persona-box">
      <p>작년 하프를 완주했다. 올해 서울마라톤 풀코스에 도전하려고 등록했다.</p>
      <p>훈련 3주차에 왼쪽 무릎 바깥이 아프기 시작했다. IT밴드 증후군이라는 걸 알았다.</p>
      <p>유튜브에서 "내전이 문제"라는 말을 들었지만 내가 내전인지 외전인지 모른다.</p>
      <p>신발을 바꿔야 할 것 같은데 뭘 사야 할지 모르겠다. 대회는 4개월 뒤다.</p>
    </div>

    <p>이 사람에게 SoleMate는 단순한 추천 서비스가 아니라 <strong>대회 완주를 지켜주는 도구</strong>다.</p>

    <p><strong>절박함의 3가지 조건</strong></p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>조건</th><th>김지현의 상황</th></tr></thead>
        <tbody>
          <tr><td>실패 비용이 크다</td><td>대회 등록비 + 4개월 훈련 시간이 걸려 있다</td></tr>
          <tr><td>시간 압박이 있다</td><td>대회까지 4개월, 훈련을 멈출 수 없다</td></tr>
          <tr><td>돈을 쓸 의지가 있다</td><td>부상 방지를 위해 20~30만 원 신발도 고려한다</td></tr>
        </tbody>
      </table>
    </div>

    <p><strong>타겟 우선순위</strong></p>
    <ol>
      <li><strong>첫 풀마라톤 준비자</strong> — 가장 절박, 가장 높은 구매 의도</li>
      <li><strong>부상 후 복귀 러너</strong> — 이미 한 번 실패 경험, 신중한 선택 동기</li>
      <li><strong>하프 기록 단축 목표자</strong> — 장비 업그레이드 의지 높음</li>
    </ol>
  </div>

  <hr>

  <!-- Q4 -->
  <div class="q-section">
    <h2><span class="q-num">Q4</span> Narrowest Wedge</h2>
    <h3>지금 당장 만들어야 할 가장 작은 버전은 무엇인가?</h3>

    <blockquote>
      <p><em>"Not: a full platform. But: the one thing that solves the most desperate problem."</em></p>
    </blockquote>

    <p><strong>SoleMate의 답변</strong></p>
    <p>PREMORTEM C1이 스스로 진단한 가장 치명적인 리스크: <strong>입력 이탈률</strong>.</p>
    <p>그런데 WHYTREE How Down을 보면 여전히 신체 조건 + 러닝 조건 + 대회 선택 3개 폼을 설계하고 있다. 이것이 <strong>알고 있지만 실행에 반영하지 못한 모순</strong>이다.</p>

    <p><strong>Before vs After</strong></p>
    <div class="table-wrap">
      <table>
        <thead><tr><th></th><th>기존 설계</th><th>2-Input MVP</th></tr></thead>
        <tbody>
          <tr><td>필수 입력</td><td>성별·발모양·폭·아치·체중·기록·목표기록·대회·예산 (9개)</td><td>성별 + 목표대회 (2개)</td></tr>
          <tr><td>내전/외전</td><td>필수 입력</td><td>결과 화면 선택 보정으로 격하</td></tr>
          <tr><td>예상 완료 시간</td><td>3~5분</td><td>15초</td></tr>
          <tr><td>이탈 리스크</td><td>매우 높음 ⭐⭐⭐⭐⭐</td><td>대폭 감소</td></tr>
        </tbody>
      </table>
    </div>

    <p><strong>실제 구현 결과</strong> (<code>feature/2-input-mvp</code> 브랜치, 커밋 <code>8dae8bb</code>)</p>
    <pre><code>입력 1: 성별 선택 (카드 탭, 1초)
입력 2: 목표 대회/유형 선택 (카드 탭, 5초)
────────────────────────────────
→ 즉시 추천 3종 출력
[선택] 내전/외전 보정 (결과 화면에서 1탭)</code></pre>

    <p><strong>핵심 판단</strong></p>
    <blockquote>
      <p>아무도 완료하지 않는 추천 폼은 0%의 정확도와 같다.<br>
      입력 장벽을 낮추는 것이 추천 정확도보다 먼저다.</p>
    </blockquote>
  </div>

  <hr>

  <!-- Q5 -->
  <div class="q-section">
    <h2><span class="q-num">Q5</span> Observation &amp; Surprise</h2>
    <h3>실제 사용자를 관찰했는가? 예상과 다른 것을 발견했는가?</h3>

    <blockquote>
      <p><em>"The user's words beat the founder's pitch. 항상."</em></p>
    </blockquote>

    <p><strong>SoleMate의 답변</strong></p>
    <p>솔직하게 말하면, <strong>아직 없다.</strong></p>
    <p>세 문서(MANIFEST·PREMORTEM·WHYTREE) 어디에도 실제 러너를 만나서 들은 이야기가 없다. PREMORTEM의 리스크 목록은 전부 팀의 합리적 추론이지, 관찰 기반 인사이트가 아니다.</p>

    <p><strong>지금 당장 해야 할 것</strong></p>
    <pre><code>러너 5명 × 10분 인터뷰
딱 한 가지만 물어본다:

"마지막으로 러닝화를 살 때,
 가장 힘들었던 순간이 언제였나요?"</code></pre>
    <p>이 한 질문이 9개 입력 폼보다 더 많은 것을 알려준다.</p>

    <p><strong>예상되는 Surprise (가설)</strong></p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>팀의 전제</th><th>실제 발견할 가능성</th></tr></thead>
        <tbody>
          <tr><td>사람들이 "데이터 기반 추천"을 원한다</td><td>사람들은 "확신"을 원한다 — 데이터는 확신의 수단일 뿐</td></tr>
          <tr><td>내전/외전이 핵심 변수다</td><td>많은 러너가 자신의 발 타입을 모르고, 알고 싶지도 않다</td></tr>
          <tr><td>대회 코스 정보가 중요하다</td><td>첫 풀코스 러너에게는 "부상 없이 완주"가 유일한 목표다</td></tr>
          <tr><td>앱으로 접근할 것이다</td><td>구매 직전 네이버쇼핑 안에서 검색하는 사람이 더 많을 수 있다</td></tr>
        </tbody>
      </table>
    </div>

    <p><strong>실행 항목</strong></p>
    <ul class="checklist">
      <li>러닝 커뮤니티(마라톤온라인 카페, 스트라바 한국) 설문 1개 게시</li>
      <li>러너 5명 전화/대면 인터뷰 (10분씩)</li>
      <li>입력 폼 종이 프로토타입 테스트 — "여기서 멈추고 싶은 순간이 언제인가요?"</li>
    </ul>
  </div>

  <hr>

  <!-- Q6 -->
  <div class="q-section">
    <h2><span class="q-num">Q6</span> Future-Fit</h2>
    <h3>1년 후에도 이 서비스가 방어 가능한가?</h3>

    <blockquote>
      <p><em>"진짜 해자(moat)는 무엇인가?<br>
      대기업이 따라 만들면 당신은 어디로 가는가?"</em></p>
    </blockquote>

    <p><strong>SoleMate의 답변</strong></p>
    <p><strong>위협 시나리오</strong></p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>시점</th><th>위협</th></tr></thead>
        <tbody>
          <tr><td>6개월 후</td><td>무신사·네이버쇼핑이 내부 AI 추천 강화</td></tr>
          <tr><td>1년 후</td><td>나이키·아식스가 자체 AI 핏 시스템 출시 (Nike Fit 이미 존재)</td></tr>
          <tr><td>2년 후</td><td>대형 이커머스가 구매 데이터 기반 추천 고도화</td></tr>
        </tbody>
      </table>
    </div>

    <p><strong>SoleMate의 현재 포지셔닝의 약점</strong></p>
    <p>"데이터 기반 추천"은 방어 가능한 해자가 아니다.<br>
    데이터와 AI는 자본이 있는 곳이 더 잘 할 수 있다.</p>

    <p><strong>진짜 해자가 될 수 있는 것</strong></p>
    <p>WHYTREE L4가 말하는 핵심 심리적 욕구로 돌아가야 한다.</p>
    <blockquote>
      <p><em>"올바른 선택을 했다는 확신"</em><br>
      <em>"러닝을 오래 즐기고 싶다"</em></p>
      <p>이 감정적 연결은 데이터로 복제할 수 없다. 이것이 해자의 씨앗이다.</p>
    </blockquote>

    <div class="table-wrap">
      <table>
        <thead><tr><th>해자 유형</th><th>구체적 방법</th></tr></thead>
        <tbody>
          <tr><td><strong>커뮤니티</strong></td><td>"이 신발로 서울마라톤 완주했어요" 후기 DB 축적</td></tr>
          <tr><td><strong>부상 데이터</strong></td><td>신발별 부상 패턴 데이터 — 어디에도 없는 정보</td></tr>
          <tr><td><strong>대회 코스 특화</strong></td><td>코스별 실제 착용 데이터 — 국내 10대 대회 러너 리뷰</td></tr>
          <tr><td><strong>관계 지속성</strong></td><td>추천 → 구매 → 피드백 → 재추천 플라이휠</td></tr>
        </tbody>
      </table>
    </div>

    <p><strong>장기 포지셔닝 제안</strong></p>
    <pre><code>러닝화 추천 서비스 (지금)
        ↓
러너의 "부상 없는 러닝 라이프" 코치 (1년 후)
        ↓
국내 러너 커뮤니티의 가장 신뢰받는 장비 데이터베이스 (3년 후)</code></pre>

    <p>추천은 관계의 시작이다.<br>
    리뷰·피드백·재추천이 축적되는 플라이휠이 진짜 서비스다.</p>
  </div>

  <hr>

  <!-- 종합 평가 -->
  <div class="summary-section">
    <h2>종합 평가</h2>
    <div class="table-wrap" style="border:none; border-radius:0; margin:0;">
      <table>
        <thead><tr><th>질문</th><th>현재 상태</th><th>긴급도</th></tr></thead>
        <tbody>
          <tr><td>Q1 Demand Reality</td><td>수요 가설은 있지만 검증 증거 없음</td><td>🔴 즉시</td></tr>
          <tr><td>Q2 Status Quo</td><td>오프라인 러닝샵을 경쟁자로 명시하지 않음</td><td>🟠 중요</td></tr>
          <tr><td>Q3 Desperate Specificity</td><td>타겟이 "1,000만 러너"로 너무 넓음</td><td>🔴 즉시</td></tr>
          <tr><td>Q4 Narrowest Wedge</td><td><strong>2-Input MVP로 구현 완료 ✅</strong></td><td>✅ 해결</td></tr>
          <tr><td>Q5 Observation</td><td>실제 사용자 관찰 전무</td><td>🔴 즉시</td></tr>
          <tr><td>Q6 Future-Fit</td><td>진짜 해자 미정의</td><td>🟠 중요</td></tr>
        </tbody>
      </table>
    </div>
    <blockquote>
      <p><strong>핵심 한 줄:</strong><br>
      SoleMate는 문제 정의는 설득력 있지만, Q1·Q3·Q5 — 실제 사람에 대한 답이 없다.<br>
      지금 당장 러너 5명을 만나는 것이 어떤 기능 개발보다 우선순위가 높다.</p>
    </blockquote>
  </div>

  <p class="footer">SoleMate Team · gstack /office-hours 6 Forcing Questions · 2026</p>

</div>
</body>
</html>
