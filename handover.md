# GetSoloTools 인수인계 문서 (handover.md)

**최종 갱신**: 2026-07-12 (hourly-rate.html 보강까지 반영)
**갱신 방식이 v12까지와 다름**: 이제부터 이 문서는 새 채팅에 붙여넣는 방식이 아니라, **저장소에 직접 보관하고 계속 업데이트**하는 방식으로 운영한다. 새 세션에서는 이 파일(`handover.md`)을 clone 직후 가장 먼저 읽을 것.

---

## 가장 먼저 할 일 (새 세션 시작 시)

1. 사용자가 GitHub Fine-grained Personal Access Token을 준다 (매 세션 새로 발급, `Contents: Read and write`만 체크된 최소 권한, 해당 저장소만).
2. 아래로 clone/pull:
   ```bash
   cd /home/claude && git clone https://canghun13:{TOKEN}@github.com/canghun13/getsolotools.git repo
   cd repo
   git config user.email "getsolotools@users.noreply.github.com"
   git config user.name "GetSoloTools Bot"
   ```
   이미 `/home/claude/repo`가 있으면 `git remote set-url origin`으로 새 토큰 반영 후 `git pull origin main`.
3. **이 파일(`handover.md`)을 가장 먼저 읽는다.** repo 이름(`canghun13/getsolotools`, 브랜치 `main`)은 다시 묻지 않는다.
4. 작업 끝나면 이 문서를 그 세션 작업 내용으로 갱신해서 **반드시 같이 commit & push**한다. 다음 세션이 새 채팅이어도 이 파일만 읽으면 이어서 작업할 수 있어야 한다.
5. 배포 확인:
   ```bash
   curl -s -H "Authorization: token {TOKEN}" "https://api.github.com/repos/canghun13/getsolotools/pages/builds/latest"
   ```
   `curl ... /commits/main`으로 push가 실제 반영됐는지 먼저 확인하고, builds/latest는 갱신이 늦을 수 있으니 너무 집착하지 말 것 (실제로 push는 잘 됐는데 builds/latest API 응답만 몇십 초 지연된 적 있음).
6. 작업 끝나면 사용자가 토큰을 GitHub에서 직접 revoke함 (Claude가 할 일 아님).
7. **⚠️ 사용자 승인 없이 먼저 진행하지 말 것.** "확인해볼까요?"라고 물었으면 답 올 때까지 대기.

---

## 프로젝트 개요

- **사이트**: getsolotools.com (GitHub Pages, `main` 브랜치 자동 배포, push 후 30초~1분 내 반영)
- **타겟**: 미국 프리랜서
- **수익화**: 애드센스 (3차 재심사 대기 중, `ca-pub-5592663499707350`) → 이후 제휴 마케팅(아직 미시작, `privacy.html`에 조건부 고지 문구만 미리 넣어둔 상태)
- **운영 방식**: Claude가 기획/코딩/글쓰기 + GitHub 직접 push까지 전담

---

## 콘텐츠 원칙 (가장 중요)

**"신규 툴/블로그/템플릿을 만들자"는 요청이 오면 반드시 먼저 GSC(서치콘솔) 데이터를 확인.**

판단 기준: **노출(impressions)은 있는데 매칭되는 페이지가 아예 없는 키워드**가 있어야만 신규 제작 근거가 됨. 매칭 페이지가 있는데 순위가 낮은 경우 → **보강**이 답이지 신규 제작이 답이 아님.

**주간 정규 작업**: GSC 데이터는 상위 10위까지만 받는 게 기본. 세션 여유가 있거나 특이 케이스일 때만 사용자가 50위 또는 전체 쿼리를 준다 — 이 경우 롱테일까지 전부 대조해서 확인할 것.

**신규 콘텐츠 작업 시 반드시 지킬 것 (2026-07-12부터 명문화)**:
1. 기존 사이트 파일과 중복 여부 확인 (blog/email-templates/툴 전체 grep)
2. 웹 검색으로 해당 키워드의 경쟁 강도 확인 (대형 사이트가 이미 장악한 키워드인지 — 예: "freelance contract template"은 Wise/LegalTemplates/PandaDoc/Jotform/Contractbook/TemplateLab 등이 장악한 고경쟁 키워드로 확인됨, 2026-07-12)
3. 수익화(애드센스 트래픽/클릭) 관점에서 우선순위 판단 — 노출량 × 개선 가능성으로 판단, 대시보드/시각화 자료는 만들지 않고 텍스트 분석으로 보고

**금지사항 (반복 확인됨)**:
- 색인 요청 (Search Console) X
- SNS 직접 홍보 X
- Product Hunt 재런칭 X
- 마케팅 ROI 관련 툴 X (타겟 벗어남)
- 근거 없이 "혹시 몰라서" 미리 콘텐츠/기능 만들기 X — 사용자가 명시적으로 승인한 것만 진행
- **(2026-07-11 변경)** Late fee 지역 추가는 예전엔 "12개 주로 완결, 추가 금지"였으나 사용자가 직접 취소함. 현재는 GSC에 노출 있고 매칭 없는 주가 나오면 다시 추가 검토 가능 (단, 이것도 매번 사용자 승인 필요).
- 카테고리 확장(예: 금융이면 대출/은행/자산까지) 논의는 있었으나 **타겟(미국 프리랜서) 자체를 벗어나는 확장은 절대 금지**로 재확인됨 (2026-07-11). GSC 데이터 기반 판단 원칙은 유지.

**작업 단위 원칙 (2026-07-11 확립)**: "한 페이지씩"이 아니라 **"한 작업 단위씩"**이 맞는 표현. 하나의 신규/보강 작업에 딸려오는 공통작업(내부링크, blog 목록, sitemap lastmod 등)은 같이 처리하되, 서로 무관한 여러 개선 작업을 한 세션에 몰아넣지 않는다. 이렇게 해야 다음 GSC 데이터에서 "이 보강이 실제로 효과 있었는지"를 명확히 추적할 수 있음.

---

## 사이트 구조 (2026-07-12 기준 실제 수치)

- **툴**: 18개 (Invoice Generator = index.html 포함)
- **이메일 템플릿**: 24개
- **블로그 글**: 41개 (late fee 지역 시리즈 **14개 주**로 확장 완료 — California, New York, Florida, Illinois, Texas, Pennsylvania, Ohio, Colorado, Georgia, Michigan, New Jersey, Washington, **Indiana, Wisconsin**)

### 툴 목록 (18개, 경로는 v12 문서와 동일 — 변경 없음)
Invoice Generator(`/`), Receipt, Quote, Hourly Rate, Tax Estimator, Late Fee, Project Profit, Budget Planner, Contract Generator, Invoice Tracker, Client Proposal, Time Tracker, Milestone Calculator, Savings Calculator, NDA Generator, Client Intake Form, Expense Report, Scope of Work — **18개로 유지, 추가 없음**

### nav 구조
- `nav.js` — `<body>` 바로 다음에 `<script src="/nav.js"></script>` 삽입
- 메뉴 순서: Tools(드롭다운) / Templates / Blog
- 새 툴 추가 시 `nav.js`의 `tools` 배열에도 추가 필요 (현재 신규 툴 계획 없음)

---

## 애드센스 / 제휴 마케팅

- 애드센스 3차 재심사 대기 중. 광고 단위는 승인 전 배치 금지.
- 제휴 마케팅 아직 미시작 (트래픽 부족 + 심사 중 리스크). `privacy.html`에 조건부 고지만 미리 넣어둠. 시작 시점: 애드센스 승인 + 트래픽 유의미하게 붙기 시작할 때. 후보: FreshBooks, QuickBooks, DocuSign 등 (미확정).

---

## 작업 이력

### v12 이전 (2026-07-05~07, 상세는 git log 참고)
- FAQ 스키마(JSON-LD) 6개 페이지 추가
- late-payment-fee.html 내부링크 대폭 강화 (12개 주 전부 개별 링크)
- 앵커텍스트 정리, sitemap lastmod/robots.txt 보완
- 모바일 반응형 테이블 오버플로우 수정 (7개 파일에 `.table-scroll` wrapper 최초 적용)
- 18개 툴 전체에 "What to Use Next" 추천 섹션 추가
- Negotiating Contract Terms 섹션을 how-to-write-a-freelance-contract.html에 추가 (신규 페이지 대신 기존 글 보강 — 콘텐츠 원칙의 대표 사례)

### 2026-07-10 세션
1. **`blog/how-to-find-freelance-clients.html`**: meta/JSON-LD description + 본문 인트로에 "solopreneur" 용어 자연스럽게 추가 (사이트 전체에 이 단어가 0회였던 걸 발견 — 브랜드명이 Solo인데도 안 쓰이고 있었음). 마이크로 보강, title/H1/URL은 유지.
2. **Late fee 지역 시리즈 12개 주 → 14개 주 확장**: Indiana, Wisconsin 신규 블로그 작성 (IC 24-4.6-1-101, Wis. Stat. §138.04 등 실제 법조항 웹 검색으로 확인 후 작성). late-payment-fee.html 카드 그리드, blog/index.html, sitemap.xml 동시 반영. **이 확장은 사용자가 이전 세션에 스스로 정한 "12개 주 완결" 원칙을 이번 세션에 직접 취소하고 승인한 것.**
3. **`late-payment-fee.html` 보강** (GSC 노출 471~485회 대비 순위 69위로 최대 갭이었던 페이지):
   - FAQ 3개 추가 (최대 한도, 이자=연체료 여부, 단리/복리)
   - HowTo 스키마 신규 추가
   - 14개 주 요약 테이블 신규 추가 (기존 카드 위에 quick-scan용)
   - dateModified + 화면상 "Last updated" 표기 추가
4. **반응형 테이블 UX 수정**: 테이블 위에 "↔ Scroll sideways to see all columns" 안내 문구를 8개 파일(late-payment-fee.html 포함 테이블 있는 파일 전체)에 추가. 처음엔 PC에서도 항상 노출되는 버그가 있어서 `.table-scroll-hint` 클래스 + `@media (max-width:700px)`로 모바일 전용으로 재수정함.
5. GSC coverage의 "중복 페이지 2건"은 확인 결과 `index.html` vs `/?ref=producthunt`(예전 Product Hunt 트래킹 파라미터) — 실질적 콘텐츠 중복 아님, 무해함. 조치 불필요.

### 2026-07-12 세션
1. GSC 데이터 재확인 (쿼리 183개, 페이지 67개, 지난 3개월) — **신규 제작 근거 없음** (전부 기존 매칭). late-payment-fee.html은 아직 순위 변화 없음(69.4위, 반영에 시간 더 필요, 07-10 작업분).
2. **`blog/how-to-write-a-freelance-contract.html` 보강** (노출 173회, 순위 85.75위로 두 번째 GSC 갭):
   - 웹 검색으로 "freelance contract template" 키워드 경쟁강도 확인 → Wise/LegalTemplates/PandaDoc/Jotform/Contractbook/TemplateLab 등 대형 사이트가 장악한 고경쟁 영역으로 확인. 헤드텀 1페이지 진입은 현실적으로 어려움.
   - 그 대신 **콘텐츠 결함 발견**: 페이지 제목이 "(With Free Template)"인데 실제 카피&붙여넣기 가능한 템플릿 텍스트가 없었음 (Contract Generator 툴 링크만 있었음). → 9개 섹션을 조합한 실제 템플릿 텍스트 블록 신규 추가.
   - meta description/JSON-LD description에 템플릿 언급 반영, dateModified 갱신.
3. **버그 발견 및 수정**: `sitemap.xml`에 URL 3개(`how-to-write-a-freelance-contract.html`, `late-fee-laws-freelancers-ohio.html`, `freelance-rate-negotiation-guide.html`)가 중복 등록되어 있던 것 발견 → 구버전(lastmod 없는) 항목 제거, 최신 항목만 유지.
4. 이 문서(`handover.md`)를 저장소에 신규 생성 — **이제부터 인수인계는 새 채팅에 문서를 붙여넣는 방식이 아니라 이 파일을 계속 갱신하는 방식으로 전환.**
5. 신규 아이디어 재검토(사용자 요청): GSC 재확인 + "2026 프리랜서 추천 툴" 관련 웹 자료 스캔 → Notion/Trello/QuickBooks/Figma 등 범용 SaaS 카테고리만 나옴, 우리 니치(무료 단일목적 계산기/생성기, 회원가입 없음)와 카테고리 자체가 달라서 참고할 신규 아이디어 없음. **신규 제작은 이번에도 보류.**
6. **`hourly-rate.html` 보강** (노출 87회, 순위 54위, GSC 3순위 보강 후보):
   - 웹 검색으로 "self employed hourly rate calculator" 경쟁강도 확인 → Harvest/Hubstaff/Clockify/Upwork/Rize 등이 장악한 경쟁 영역. 다만 기존 콘텐츠가 이미 이들과 동등한 깊이(공식, 세율, 청구 가능 시간, 벤치마크 테이블)를 갖추고 있는 걸 확인함.
   - FAQPage 스키마에 2개 Q&A 추가("좋은 시급이란", "초보 프리랜서 얼마 받아야 하나"), HowTo 스키마 신규 추가, dateModified + 화면상 "Last updated" 표기 추가.
   - sitemap.xml lastmod 갱신.

---

## 기술 주의사항

### nav.js
- 반드시 `<body>` 바로 다음에 삽입. 새 툴 추가 시 배열도 업데이트 필요 (현재 계획 없음).

### blog/index.html
- `posts` 배열 수동 관리 (최신 글이 배열 맨 앞). desc의 아포스트로피(`'`)는 반드시 큰따옴표(`"`)로 감싸기.

### jsPDF
- ASCII 문자만 지원. PDF 내 Subtotal/Tax/Total 정렬은 `totalsX`/`totalsRight`가 좌우 대칭 패딩(4mm)을 갖도록 맞춰져 있음 — 건드릴 때 대칭 깨지지 않게 주의.

### flex + min-width 버그
- `body`가 `display:flex`인 페이지에 폭 고정된 자식 요소를 넣을 땐 조상 flex item에 `width:100%; min-width:0;` 확인할 것. (`late-payment-fee.html`, `blog/*` 등 대부분의 신규 페이지는 `body`가 flex가 아니라서 해당 없음 — 작업 전에 먼저 `body { display:flex }` 여부부터 확인.)

### 반응형 테이블 (`.table-scroll`)
- 테이블이 있는 페이지는 반드시 `.table-scroll-hint` 클래스(모바일 전용, `@media (max-width:700px)`에서만 `display:flex`)를 테이블 바로 위에 넣을 것. 새로 테이블을 추가하는 경우 이 패턴을 그대로 재사용.
- 2026-07-12 기준 테이블이 있는 파일 8개: `late-payment-fee.html`, `blog/freelance-invoice-vs-receipt.html`, `blog/freelance-tax-guide-for-beginners.html`, `blog/how-to-write-a-freelance-expense-report.html`, `blog/how-to-write-a-scope-of-work-for-freelance-projects.html`, `blog/late-fee-laws-freelancers-ohio.html`, `invoice-tracker.html`, `time-tracker.html`.

### sitemap.xml
- **중복 URL이 생기기 쉬움** (2026-07-12에 3건 발견/수정). 새 URL 추가 시 반드시 `grep -oP '(?<=<loc>)[^<]+' sitemap.xml | sort | uniq -d`로 중복 없는지 확인 후 push.

### 파일 검증 습관 (필수, 매번)
- HTML 수정 후 `python3`의 `html.parser.HTMLParser`로 파싱 검증
- JSON-LD 스키마는 `json.loads()`로 유효성 검증
- JS 있는 파일은 `node --check`로 문법 검증
- `sitemap.xml`은 `xml.etree.ElementTree.parse()`로 유효성 검증 + 위 중복 체크

### 토큰/remote 관련
- 세션마다 새 토큰을 받으면 기존 clone이 남아있어도 `git remote set-url origin https://canghun13:{새토큰}@github.com/canghun13/getsolotools.git`으로 갱신 후 사용할 것. (예전 토큰이 remote에 남아있으면 push 시 "Invalid username or token" 에러 발생함 — 2026-07-10에 실제로 겪음.)

---

## 다음 세션 시작할 때 체크리스트

1. 사용자가 새 토큰 주면 → clone 또는 `remote set-url` + `git pull origin main`
2. **이 handover.md를 가장 먼저 읽는다.**
3. GSC 데이터 받으면 → 노출 있는데 매칭 페이지 없는 키워드부터 확인 (신규 제작 여부 판단 기준). 신규 검토 시 웹 검색으로 경쟁강도 확인 필수.
4. 매칭 페이지는 있는데 순위가 낮으면 → 보강 (내부링크, FAQ 스키마, 실제 콘텐츠 결함(제목 약속과 본문 불일치 등), 신선도 신호 순으로 점검). GSC 노출량 기준으로 우선순위 정렬.
5. 수정 후 항상: 파싱/스키마/JS/XML 검증 → commit → push → `commits/main`으로 반영 확인 → 사용자에게 URL 직접 링크로 보고
6. **작업 끝나면 이 handover.md를 그날 작업 내용으로 갱신해서 같이 push.** (다음 세션이 새 채팅이라는 전제로 작성할 것 — 이전 대화 맥락 없이도 이해 가능해야 함)
7. **사용자 승인 없이 먼저 진행하지 말 것.**

## 현재 열려있는 이슈 (다음에 확인할 것)

- 애드센스 3차 재심사 결과 대기 중
- 미색인 페이지 존재 (GSC coverage: "발견됨-미색인" 3건 + "크롤링됨-미색인" 1건, 2026-07-10/12 데이터 동일하게 확인됨). 기존에 알려진 후보: `blog/how-to-write-a-freelance-proposal.html`, `blog/how-to-write-a-scope-of-work-for-freelance-projects.html`, `email-templates/quote-email.html`. Indiana/Wisconsin 신규 페이지도 아직 크롤링 초기 단계라 이 목록에 포함됐을 가능성 있음 — 다음 GSC 데이터에서 재확인 필요.
- GSC coverage "중복 페이지 2건"은 `index.html` vs `/?ref=producthunt`로 확인 완료, 무해함, 추가 조치 불필요.
- `late-payment-fee.html` (2026-07-10 보강) / `how-to-write-a-freelance-contract.html` (2026-07-12 보강) / `hourly-rate.html` (2026-07-12 보강) — 셋 다 순위 변화까지 시간이 걸릴 것. 다음 GSC 데이터에서 이 세 페이지 순위 변화를 우선 확인할 것 (보강 효과 검증).
- 다음으로 순위 낮고 노출 큰 후보(순서대로): `email-templates/payment-received.html`(노출 61, 순위 69), `quote.html`(노출 58, 순위 45), `project-profit.html`(노출 54, 순위 46) — "한 작업 단위씩" 원칙에 따라 다음 세션에 순서대로 검토.
