# GetSoloTools 인수인계 문서 (handover.md)

**최종 갱신**: 2026-07-14 (GA4 트래픽 병목 논의 → 툴 기능 차별화로 방향 전환, Invoice Generator 자동저장 기능 추가)
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

## ⚠️ 콘텐츠 품질 경각심 (2026-07-14 사용자가 명시적으로 강조, 최우선 원칙)

**사용자가 이번 세션에 직접 경고함**: 유사 업종의 다른 사이트들이 애드센스 심사에서 저품질/가치없는 콘텐츠로 계속 반려되고 있고, **이 프로젝트도 이미 2차례 반려됨** (3차 재심사 대기 중). 이건 우연이 아니라 실제 리스크로 취급할 것.

**따라서 앞으로 모든 세션에서 다음을 매 작업마다 자문할 것**:
- 이 콘텐츠가 검색엔진에 이미 존재하는 정보를 재포장한 것에 불과한가, 아니면 실제로 다른 곳에 없는 구체적 가치(우리 사이트의 무료 툴, 실제 사용 가능한 템플릿 텍스트, 정확한 최신 수치)를 더하는가?
- "노출이 있으니까 일단 보강" 이라는 이유만으로 얕은 내용을 늘리지 말 것 — 늘릴 가치가 없으면 손대지 않는 것도 정답임.
- 신규 콘텐츠는 물론이고 **기존 페이지 보강도** 이 기준으로 자체 검열할 것. 스키마/FAQ를 기계적으로 추가하는 반복작업에 매몰되어 "얇은데 형식만 갖춘 콘텐츠"를 양산하지 않도록 매번 실제 콘텐츠 품질을 재확인.
- 애드센스 재심사 결과가 나오면(승인이든 반려든) 그 피드백을 최우선으로 반영해서 이 문서와 원칙을 갱신할 것.

---



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

**작업 단위 원칙 (2026-07-11 확립, 2026-07-12 보완)**: "한 페이지씩"이 아니라 **"한 작업 단위씩"**이 맞는 표현. 하나의 신규/보강 작업에 딸려오는 공통작업(내부링크, blog 목록, sitemap lastmod 등)은 같이 처리하되, 서로 무관한 여러 개선 작업을 한 세션에 몰아넣지 않는다. 이렇게 해야 다음 GSC 데이터에서 "이 보강이 실제로 효과 있었는지"를 명확히 추적할 수 있음.
**2026-07-12 보완**: 다만 이건 "매번 하나 하고 사용자에게 다시 물어봐야 한다"는 뜻이 아니다. 사용자가 우선순위 큐(예: 이 handover.md의 "다음 보강 대기열")를 이미 승인했다면, "진행해"라는 지시 한 번으로 큐 전체를 순서대로 이어서 처리하고, 각 항목마다 "다음 걸로 넘어갈까요?"라고 재확인하지 않는다. 확인 질문에 머뭇거려서 사용자를 답답하게 한 적 있음 — 승인된 큐가 있으면 바로 실행.

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
7. **`email-templates/payment-received.html` 보강** (노출 61회, 순위 69위, GSC 4순위):
   - 핵심 발견: 화면에 FAQ 3개가 있는데 **FAQPage 스키마가 아예 없었음** (Article 스키마만 존재) — 기존 SEO 이력의 "FAQ 스키마 누락" 패턴과 동일. 신규 추가.
   - GSC에 결제확인 관련 롱테일 변형 쿼리(confirmation of payment email, payment received with thanks 등)가 30개 넘게 이 페이지 하나로 몰리는 것 확인.
   - FAQ 2건 추가(클라이언트가 "보냈다"고 했지만 미입금 시 대응, proof of payment와 confirmation email 차이), dateModified + Last updated 표기, sitemap lastmod 갱신.
8. **`quote.html` 보강** (노출 58회, 순위 45위, GSC 5순위): HowTo 스키마 신규, FAQPage 2건 추가(무응답 시 대응, 견적 작성 비용 청구 여부), dateModified + Last updated 표기, sitemap lastmod 갱신.
9. **`project-profit.html` 보강** (노출 54회, 순위 46위, GSC 6순위): HowTo 스키마 신규, FAQPage 2건 추가(적정 수익률 기준, 무급 수정시간 계상 여부), dateModified + Last updated 표기, sitemap lastmod 갱신.
10. **07-12 세션에 확립된 보강 표준 패턴** (앞으로 계속 재사용): ①WebApplication/Article 스키마에 `dateModified` 추가 ②없으면 HowTo 스키마 신규 추가 ③화면에 FAQ 있는데 FAQPage 스키마 없으면 최우선으로 추가 ④GSC 노출은 있으나 미대응된 구체적 질문 1~2개를 FAQ에 추가(스키마+화면 동시) ⑤화면에 "Last updated" 텍스트 추가 ⑥sitemap.xml lastmod 갱신 + 중복 재확인.
11. **대기열 5개 전부 완료** (`budget-planner.html` → `blog/how-to-write-a-freelance-invoice.html` → `tax-estimator.html` → `time-tracker.html` → `invoice-tracker.html`), 사용자 지시 한 번으로 재확인 없이 순서대로 처리:
    - `budget-planner.html`(노출 45, 순위 33): FAQPage 스키마 신규(화면엔 있었는데 스키마 없었음) + FAQ 1건 + HowTo 신규
    - `blog/how-to-write-a-freelance-invoice.html`(노출 37, 순위 37): **FAQ 섹션 자체가 없었음** (다른 후보와 다른 패턴) → 5개 신규 작성(스키마+화면). 부가로 CSS 여분 중괄호 버그 발견 및 수정
    - `tax-estimator.html`(노출 31, 순위 33): FAQPage 스키마 신규 + FAQ 1건
    - `time-tracker.html`(노출 27, 순위 63 — 노출 대비 순위 특히 나쁨): FAQPage 스키마 신규 + FAQ 1건(localStorage 데이터 보존 여부, 실제 코드 확인 후 정확히 작성)
    - `invoice-tracker.html`(노출 25, 순위 27): FAQPage 스키마 신규 + FAQ 1건(localStorage 데이터 보존 여부)
    - **패턴 발견**: 툴 페이지들(계산기류) 상당수가 "화면엔 FAQ 있는데 FAQPage 스키마가 없는" 상태였음. 다음 세션에 아직 안 건드린 나머지 툴 페이지들(receipt.html, client-proposal.html, milestone-calculator.html, savings-calculator.html, nda-generator.html, client-intake-form.html, expense-report.html, scope-of-work.html, contract-generator.html)도 이 문제가 있는지 확인해볼 가치 있음.
12. **나머지 툴 9개 전수 일괄 보강 완료** (같은 세션에 이어서 진행, 사용자가 "다 하라"고 명확히 지시): `receipt.html`, `client-proposal.html`, `milestone-calculator.html`, `savings-calculator.html`, `nda-generator.html`, `client-intake-form.html`, `expense-report.html`, `scope-of-work.html`, `contract-generator.html` — **9개 전부 화면 FAQ는 있는데 FAQPage 스키마가 없는 동일 결함 확인**. Python 스크립트로 화면 FAQ 텍스트를 그대로 파싱해서 FAQPage 스키마 자동 생성(내용 창작 아님, 기존 텍스트 그대로 구조화), dateModified 추가, "Last updated" 표기 추가, sitemap lastmod 일괄 갱신까지 처리. 부가로 `expense-report.html`의 sitemap 항목에 changefreq/priority 자체가 누락돼 있던 것도 발견해서 보완.
   - **결과: 18개 툴 전체가 이제 FAQPage 스키마를 갖춤.** 이 구조적 결함은 완전히 해소된 상태.
   - 반복 작업 자동화 시 사용한 스크립트 패턴(파일 목록 기반 정규식 추출 → JSON-LD 생성 → 삽입)은 `/tmp`에 있었고 세션 종료 시 사라짐 — 필요하면 동일 로직으로 재작성해서 blog/email-templates 쪽에도 같은 진단(화면 FAQ vs 스키마 유무)을 돌려볼 것.

---

### 2026-07-14 세션
1. **GSC 데이터 재확인** (Coverage + Performance zip, 지난 3개월 기준 쿼리 183개/페이지 67개 — 07-12와 동일 범위): 전체 쿼리를 기존 사이트 파일과 대조. **신규 제작 근거 없음** — 노출은 있으나 매칭 페이지가 아예 없는 유의미한 키워드를 찾지 못함 (모든 상위 쿼리가 기존 blog/tool/email-template 중 하나에 이미 매칭됨).
2. **웹 검색으로 최상위 노출 키워드("freelance tax preparation guide", 95회 노출) 경쟁강도 확인** → TurboTax/NerdWallet/H&R Block 등 초대형 사이트가 장악한 영역으로 확인 (07-12에 확인한 "freelance contract template"과 동일한 패턴). 헤드텀 1페이지 진입 기대난.
3. **`blog/freelance-tax-guide-for-beginners.html` 보강** (노출 203회, 순위 82.12 — 이 페이지는 이미 FAQPage 스키마 6개+HowTo 미해당+dateModified를 갖추고 있어 07-12 표준 패턴(스키마 누락 보완)이 적용 대상이 아니었음. 대신 **실제 콘텐츠 결함 발견**: SEP-IRA/Solo 401(k) 한도가 2024년 수치($69,000)로 방치되어 있었고, QBI 공제 구간도 2025년 수치를 2026년 것으로 잘못 표기하고 있었음. 웹 검색으로 2026년 정확한 수치 확인 후 갱신:
   - SEP-IRA 한도 $69,000 → $72,000, Solo 401(k) 종업원 기여분 $23,000 → $24,500 (50-59/64+ 캐치업 $80,000, 60-63세 $83,250 신규 명시)
   - QBI 공제 구간을 2025년 수치($197,300/$394,600)에서 2026년 실제 수치(시작 약 $201,750 단일/$403,500 부부합산, 완전 소멸 약 $276,750/$553,500)로 정정. OBBBA로 인한 영구화 및 신규 $400 최소 공제(저소득 프리랜서에 특히 유리 — 우리 타겟과 직결) 언급 추가.
   - dateModified/화면 "Updated" 표기 2026-07-03 → 2026-07-14, sitemap lastmod 갱신.
   - **이 발견은 "얇은 콘텐츠를 늘리는" 보강이 아니라 세금(YMYL) 페이지의 사실 오류를 바로잡은 것 — 이번 세션에 강조된 콘텐츠 품질 원칙에 부합하는 유형의 작업.**
4. **`blog/freelance-rate-negotiation-guide.html` 보강** (노출 56회, **순위 7.88위로 이미 1페이지권인데 클릭 0** — late fee 주(州) 페이지들 다수에서도 비슷한 "고순위·저클릭" 패턴이 보이나 개별 페이지 노출량이 적어(9~27회) 통계적으로 유의미하다고 보기 어려움; 반면 이 페이지는 노출 56회에도 클릭 0이라 상대적으로 신뢰도 있는 신호로 판단해 이번 세션에 우선 처리):
   - 페이지에 FAQPage 스키마 자체가 없었고(Article 스키마만 존재), 화면에도 FAQ 섹션이 없었음(07-12에 발견한 "화면 FAQ 있는데 스키마 없음" 패턴과 다른 케이스).
   - 본문에 이미 있던 "How to Handle Every Type of Pushback" 시나리오 4개 + 재협상/인상 관련 내용을 그대로 재료 삼아 FAQ 4개 신규 작성(창작이 아니라 기존 본문 내용의 질문형 재구성) + FAQPage 스키마 신규 추가.
   - dateModified 2026-06-22 → 2026-07-14, 화면 "Updated" 표기 갱신, sitemap lastmod 갱신.
5. **관찰(조치 보류)**: late fee 주별 블로그 페이지 중 Illinois(순위 5.73), Texas(순위 7), New Jersey(순위 7.68), Colorado(순위 8.95) 등이 이미 1페이지권인데 클릭 0. 다만 개별 노출량이 9~27회로 적어 위치 대비 기대 클릭수 자체가 1 미만인 경우가 많아 이번엔 "실제 결함"이라 단정하지 않고 관찰만 기록. **다음 GSC 데이터에서 노출량이 누적되면(특히 Illinois/Texas처럼 순위 5~7위인데 여전히 클릭 0이면) 제목/메타 설명 재작성을 검토할 것.**
6. **검증 및 배포**: 두 파일 모두 `html.parser` 파싱 검증 + JSON-LD `json.loads()` 검증 통과, `sitemap.xml`은 `ElementTree` 파싱 검증 + 중복 URL 없음 확인 후 commit & push.
7. **이번 세션에 사용자가 명시적으로 요청**: 이 프로젝트가 애드센스 2차 반려를 받았고 유사 사이트들도 계속 저품질 콘텐츠로 걸리고 있다는 점을 강조 — 문서 상단에 "콘텐츠 품질 경각심" 섹션 신규 추가함 (내용은 위 참고).
8. **CTA 버튼 텍스트 안 보이는 CSS 버그 발견 및 수정** (사용자가 `freelance-rate-negotiation-guide.html` 스크린샷 제보로 발견): `.article-body a { color: var(--accent) }` 규칙이 `.cta-btn { color: #fff }`보다 CSS 명시도가 높아(class+tag(0,1,1) > class(0,1,0)) 파란 배경 버튼 위에 글자도 파란색이 되어 안 보이던 문제. `.article-body a.cta-btn { color: #fff }` 오버라이드로 수정. cta-btn을 쓰는 전체 70여개 파일을 이 패턴(`.article-body`/`.article-wrap`/`.content` + ` a {` 래퍼 규칙)으로 전수 재검사해서 `late-fee-laws-freelancers-ohio.html`에도 동일 버그가 있는 것을 추가로 발견해 같이 수정함. (toc/related-links/related-section/footer-links 클래스는 cta-box의 형제(sibling) div라 실제로는 중첩되지 않아 영향 없음 — 오탐 처리.)
9. **방향 전환: 콘텐츠 보강 → 툴 기능 차별화** (사용자가 명시적으로 요청). 배경: GA4 4주 트래픽이 64명(활성 사용자)에 불과해 콘텐츠 미세 보강만으로는 근본적 트래픽 병목이 안 풀린다는 논의 끝에, "장기적으로 되는 것"의 하나로 툴 자체의 기능 차별화를 오늘 시작하기로 결정. (백링크 후보 리서치는 다음 후보로 남겨둠.)
   - **`index.html`(Invoice Generator, 사이트 최대 트래픽 페이지) 보강**: 경쟁사 웹 검색 결과 무료 인보이스 생성기 상당수가 "새로고침하면 데이터 소실"을 명시하거나(InvoiceQuick), 임시저장 기능이 있는 곳은 전부 회원가입/로그인이 필요함(SmoothLedger, PineBill). 로그인 없이 브라우저 자동저장을 제공하는 경쟁사는 거의 없음(invoicemon 정도가 유일) → 회원가입 없는 사이트 철학과 맞아떨어지는 실질적 차별화 기능으로 판단, `localStorage` 기반 자동저장/복원 구현 (기존 invoice-tracker.html/time-tracker.html의 localStorage 패턴 재사용, 키: `gst_invoice_draft`). 입력 중 자동저장 + "Draft auto-saved" 표시, Clear Form 클릭 시 draft도 같이 삭제. **jsdom으로 저장→새로고침 시뮬레이션→초기화 전체 흐름을 실제로 실행해서 검증** (단순 문법 검사보다 한 단계 더 나아간 검증 — 앞으로 JS 로직이 복잡한 변경엔 이 방식 재사용 가치 있음).
   - **부가로 콘텐츠-실제기능 불일치 2건 발견 및 수정** (같은 파일 작업 중 발견): FAQ "인보이스 저장 가능?" 답변이 옛날 그대로라 "저장 기능 없음"이라고 되어 있었음(지금은 있음, 갱신). FAQ "로고 추가 가능?" 답변도 "향후 추가 예정"이라고 되어 있었는데 **로고 업로드는 이미 구현되어 PDF에도 반영되고 있었음** — 콘텐츠가 실제 기능을 못 따라간 사례.
   - **`index.html`에 FAQPage 스키마가 아예 없었던 것 발견** (2026-07-12에 18개 툴 전수 보강 때 index.html만 누락된 것으로 추정) — 신규 추가 + dateModified 추가.
   - `sitemap.xml`: index.html(`/`) 항목에 `lastmod` 필드 자체가 없던 것 발견, 추가.
   - **다음에 이어갈 것**: 나머지 17개 툴도 같은 방식(경쟁사 리서치 → 실제 기능 격차 확인 → 구현)으로 훑어볼 가치 있음. 특히 traffic이 있는 late-payment-fee.html(계산기), quote.html, receipt.html부터 우선순위.
10. **`index.html` 반응형 버그 수정** (사용자가 402px 폭 스크린샷으로 발견): 항목(Line Item)의 Description 입력칸이 좁은 화면에서 5열 그리드(1fr + qty/price/amount 고정폭 3개) 때문에 극도로 눌려 글자가 안 보이던 문제. 기존엔 380px/500px 두 단계로 컬럼 폭만 계속 줄이는 미봉책이었는데 근본 해결이 안 됐음 → 560px 이하에서 2행 구조(1행: Description 전체폭, 2행: Qty/Price/Amount/삭제버튼)로 CSS Grid만으로 재배치, HTML/JS는 안 건드림. **네트워크 제약으로 헤드리스 브라우저 렌더링 캡처는 못 했고, grid 폭을 402px 기준 직접 계산해서 검증함** — 다음에 이 방식대로 CSS만 고치는 작업이 또 생기면 가능하면 사용자에게 실제 화면 재확인을 요청할 것.

---

## 기술 주의사항

### nav.js
- 반드시 `<body>` 바로 다음에 삽입. 새 툴 추가 시 배열도 업데이트 필요 (현재 계획 없음).

### blog/index.html
- `posts` 배열 수동 관리 (최신 글이 배열 맨 앞). desc의 아포스트로피(`'`)는 반드시 큰따옴표(`"`)로 감싸기.

### jsPDF
- ASCII 문자만 지원. PDF 내 Subtotal/Tax/Total 정렬은 `totalsX`/`totalsRight`가 좌우 대칭 패딩(4mm)을 갖도록 맞춰져 있음 — 건드릴 때 대칭 깨지지 않게 주의.

### `.cta-btn` 텍스트 안 보임 (CSS 명시도 충돌, 2026-07-14 발견)
- 일부 blog 페이지에 `.article-body a { color: var(--accent) }` 같은 래퍼-레벨 링크 색상 규칙이 있는데, 이게 `.cta-btn { color: #fff }`(class 단독, 명시도 0,1,0)보다 명시도가 높아서(class+tag, 0,1,1) 파란 배경 버튼 위에 글자도 파란색으로 깔려 안 보이는 버그 발생. `late-fee-laws-freelancers-ohio.html`, `blog/freelance-rate-negotiation-guide.html` 2건에서 실제 발견 및 수정 완료(`.article-body a.cta-btn { color: #fff }` 오버라이드 추가).
- 앞으로 새 페이지 작성/기존 페이지 CSS 수정 시: `.article-body`/`.article-wrap`/`.content` 등 콘텐츠 전체를 감싸는 래퍼 클래스에 `a { color: ... }` 규칙을 넣을 땐 반드시 `.cta-btn`도 같이 오버라이드했는지 확인할 것. `toc`/`related-links`/`related-section`/`footer-links` 같은 클래스는 보통 cta-box와 형제(sibling) 관계라 영향 없음(2026-07-14에 실제 확인) — 진짜 위험한 건 cta-box를 실제로 감싸는 상위 래퍼 클래스에 링크 색상 규칙이 있는 경우.

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

- 애드센스 3차 재심사 결과 대기 중. **(2026-07-14 추가)** 결과가 나오면 승인/반려 여부와 무관하게 그 피드백을 콘텐츠 원칙에 최우선 반영할 것 — 위 "콘텐츠 품질 경각심" 섹션 참고.
- 미색인 페이지 존재 (GSC coverage: "발견됨-미색인" 3건 + "크롤링됨-미색인" 1건 — 2026-07-10/12/14 데이터 동일하게 확인됨, 3주째 그대로라 단순 크롤링 지연이 아닐 가능성도 있음). 기존에 알려진 후보: `blog/how-to-write-a-freelance-proposal.html`, `blog/how-to-write-a-scope-of-work-for-freelance-projects.html`, `email-templates/quote-email.html`. **다음에 여유 있으면 이 3개 URL을 실제로 하나씩 확인해서(내부링크 있는지, robots 차단 아닌지, 콘텐츠 얇지 않은지) 원인을 좁혀볼 것 — 색인 요청은 금지지만 원인 진단은 유효함.**
- GSC coverage "중복 페이지 2건"은 `index.html` vs `/?ref=producthunt`로 확인 완료, 무해함, 추가 조치 불필요. "리디렉션이 포함된 페이지 3건"은 아직 원인 미확인 — 다음 세션에 어떤 URL인지 GSC에서 직접 확인 필요.
- **다음 GSC 데이터 받으면 최우선으로 확인할 것 (보강 효과 검증)**: 07-10/07-12에 보강한 19개 페이지(`late-payment-fee.html` 포함 — 목록은 아래 참고) + 이번 07-14에 보강한 `blog/freelance-tax-guide-for-beginners.html`, `blog/freelance-rate-negotiation-guide.html` 2개까지 순위 변화 확인.
  - 07-10/07-12 보강 19개: `how-to-write-a-freelance-contract.html`, `hourly-rate.html`, `payment-received.html`, `quote.html`, `project-profit.html`, `budget-planner.html`, `blog/how-to-write-a-freelance-invoice.html`, `tax-estimator.html`, `time-tracker.html`, `invoice-tracker.html`, `receipt.html`, `client-proposal.html`, `milestone-calculator.html`, `savings-calculator.html`, `nda-generator.html`, `client-intake-form.html`, `expense-report.html`, `scope-of-work.html`, `contract-generator.html`, `late-payment-fee.html`.
- **"화면 FAQ / FAQPage 스키마 누락" 문제, 2026-07-12엔 "18개 툴 전체 해소"라고 기록했으나 부정확했음** — 2026-07-14에 `index.html`(Invoice Generator, 18개 중 하나)에서 정확히 같은 결함(화면 FAQ 있는데 스키마 없음)을 추가로 발견해 수정함. 07-12 전수조사 때 index.html이 "Invoice Generator = index.html"이라는 걸 놓쳐서 누락된 것으로 추정. **이제는 진짜로 18개 툴 전체 해소.** blog/email-templates 쪽은 지금까지 `payment-received.html`, `freelance-rate-negotiation-guide.html`(FAQ 신규 작성) 2건만 처리. 나머지 blog(39개)/email-templates(23개)는 전수조사 안 함 — 다음에 여유 있을 때 스캔 가치 있음. **다만 07-14에 강조된 콘텐츠 품질 원칙에 따라, 스캔 결과 스키마가 없는 페이지를 발견해도 기계적으로 FAQ를 끼워 넣지 말고 그 페이지 자체가 노출/클릭 관점에서 보강할 가치가 있는지부터 먼저 판단할 것.**
- **(2026-07-14 신규 관찰, 조치 보류)** late fee 주(州)별 블로그 중 Illinois(순위 5.73), Texas(순위 7), New Jersey(순위 7.68), Colorado(순위 8.95), Michigan(순위 10.48), Georgia(순위 11), Washington(순위 16.55), Pennsylvania(순위 18.2)가 이미 1~2페이지권인데 클릭 0. 개별 노출량이 9~51회로 적어 이번엔 결함이라 단정하지 않았음. **다음 데이터에서 노출이 누적됐는데도(특히 Illinois/Texas처럼 순위 5~7위) 여전히 클릭 0이면 제목/메타 설명 재작성(CTR 개선) 검토할 것.** 이건 07-12까지 써온 "스키마/FAQ 보강" 패턴과는 다른 종류의 문제(콘텐츠 깊이가 아니라 클릭 유도력)라는 점 기억할 것.
- **(2026-07-14 신규, GA4 트래픽 분석)** 지난 4주(6/16~7/13) 활성 사용자 64명, 재방문자 2명뿐. 유입 1위는 (direct)/(none) 47세션, 2위는 indiehackers.com 리퍼럴 15세션인데 신규 사용자는 1명뿐(한 명이 반복 방문). google/organic은 12세션, bing 4세션 — GSC 노출 수백~수천 건 대비 실제 검색 유입이 여전히 매우 작다는 걸 GA4로도 재확인. 도시 데이터는 국제적으로 흩어져 있고(파키스탄/나이지리아/베트남 등) 미국 도시가 거의 안 보임 — 타겟(미국 프리랜서)과 실제 유입원이 어긋나 있다는 신호.
- **(2026-07-14 신규, 전략 방향 논의)** 절대 트래픽이 작아 콘텐츠 미세 보강만으로는 한계가 있다는 사용자와의 논의 끝에, **오늘부터 "툴 기능 차별화"를 새 작업 축으로 추가함** (콘텐츠 보강을 대체하는 게 아니라 병행). 백링크 후보 리서치는 논의는 됐으나 아직 착수 안 함 — 다음에 착수 여부 확인 필요. SNS 홍보/PH 재런칭 금지 원칙 자체는 유지(사용자가 "그럼 그거라도 하자"로 결론 내지 않음, 참고용 논의였음).
- 이후엔 다시 GSC 노출·순위 기준으로 다음 보강 대기열 산정 (신규 데이터 기다리는 중).

