# GetSoloTools 인수인계 문서 (handover.md)

**최종 갱신**: 2026-07-24 (late-fee 주(州) 시리즈 밖으로 첫 확장 — "Freelance Isn't Free Act" 주법 클러스터 + Kill Fee Clause 신규 콘텐츠. 상세는 "2026-07-24 세션" 항목 참고)
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

---

**⚠️ (2026-07-16) 콘텐츠 전략 전환 — 위 "GSC 노출 있어야만 신규" 원칙에 대한 예외가 생김.**

사용자가 이번 세션에 명시적으로 지적함: "신규 진행 안 한 지 너무 오래됐다, 롱테일 키워드를 많이 보유해두지 않으면 위험하다, 이제부턴 진행하는 쪽으로 하라." 이는 위 "노출 있는데 매칭 페이지 없는 키워드만 신규 근거"라는 오래된 보수 원칙을 **명시적으로 완화/전환**하라는 지시임.

**전환된 원칙**: late fee 주(州) 시리즈처럼 **이미 이 사이트에서 저경쟁·롱테일임이 실증된 콘텐츠 축**은, 개별 주마다 GSC 노출을 기다리지 않고 선제적으로 확장해도 됨. 근거: 2026-07-16 세션에 "[주] late fee calculator" 키워드를 웹 검색으로 확인한 결과 주(州) 수식어가 붙은 즉시 전용 경쟁자가 거의 사라지는 패턴을 반복 확인함(New York/Florida/Illinois/Pennsylvania/Georgia/Indiana/Wisconsin/Washington 8개 주 전부 동일 패턴, 이후 Massachusetts/North Carolina/Virginia/Arizona/Minnesota 5개 주 신규 제작 전에도 동일하게 재확인). 즉 "노출이 이미 있어야 신규 근거"가 아니라 **"이미 검증된 저경쟁 패턴이면 노출이 아직 안 잡혀도 선제 확장 가능"**으로 바뀜.

**다만 다음은 그대로 유지**:
- 신규 콘텐츠는 여전히 기존 파일과 중복 확인 필수 (같은 주를 두 번 만들지 않기 등)
- 웹 검색으로 경쟁강도 확인은 계속 필수 (전용 경쟁자가 이미 있는 키워드라면 확장 근거 약해짐)
- **콘텐츠 품질 경각심 원칙(아래 섹션)은 전환되지 않음** — 양을 늘리는 게 목적이 아니라 각 신규 페이지도 실제 법령 1차 자료 검증, 800단어 이상, FAQ, 실질적 정보 제공이라는 기존 품질 기준을 그대로 지킬 것. "많이 만들라"는 지시를 "대충 빨리 만들라"로 해석하지 말 것.
- 타겟(미국 프리랜서) 밖으로 벗어나는 확장은 여전히 금지
- 사용자 승인 원칙도 유지되나, "이 축으로 계속 확장해도 된다"는 승인은 이번 세션에 포괄적으로 받은 것으로 취급 — late fee 주 시리즈를 남은 31개 주로 계속 확장할 때 매번 재승인받을 필요는 없음(단, 세션당 5개 내외로 배치를 나누고 매 배치마다 법령 검증·품질 검증은 생략하지 말 것).

**다음 후보 주(31개 남음, 우선순위 없음, 프리랜서/긱이코노미 인구·경제 규모 기준으로 다음 5개 정도 우선 검토 권장)**: Tennessee, Missouri, Maryland, Oregon, Nevada, Connecticut, Utah, South Carolina, Alabama, Kentucky 등. 다음 세션에 이어서 진행할 것.

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

## 사이트 구조 (2026-07-20 기준 실제 수치)

- **툴**: 18개 (Invoice Generator = index.html 포함)
- **이메일 템플릿**: 24개 (25개 파일이나 sending-nda.html 등 포함, v12 이후 변경 없음)
- **블로그 글**: 58개 (late fee 지역 시리즈 29개 주 + 그 외 29개 — 이번 세션에 late-fee 시리즈 밖 첫 신규 클러스터 2건 추가: `blog/freelance-isnt-free-act-states-guide.html`, `blog/freelance-kill-fee-clause.html`). 29개 주 전부 미니 계산기 위젯 + FAQPage 스키마 + "인접 주 비교" 콘텐츠 보유.

### 툴 목록 (18개, 경로는 v12 문서와 동일 — 변경 없음)
Invoice Generator(`/`), Receipt, Quote, Hourly Rate, Tax Estimator, Late Fee, Project Profit, Budget Planner, Contract Generator, Invoice Tracker, Client Proposal, Time Tracker, Milestone Calculator, Savings Calculator, NDA Generator, Client Intake Form, Expense Report, Scope of Work — **18개로 유지, 추가 없음**

### nav 구조
- `nav.js` — `<body>` 바로 다음에 `<script src="/nav.js"></script>` 삽입
- 메뉴 순서: Tools(드롭다운) / Templates / Blog
- 새 툴 추가 시 `nav.js`의 `tools` 배열에도 추가 필요 (현재 신규 툴 계획 없음)

---

## 애드센스 / 제휴 마케팅

- **애드센스 3차 재심사 이미 제출함** (2026-07-14, 사용자가 직접 넣음). 결과 대기 중. 광고 단위는 승인 전 배치 금지.
- **(2026-07-14) 재심사 전 콘텐츠 분량 전수 감사 완료**: blog 41개 전체를 정확히 재측정(첫 시도 때 정규식 버그로 본문이 2블록으로 나뉜 글의 뒷부분을 놓쳐서 실제보다 훨씬 적게 나온 적 있었음 — 재측정 시 본문 추출 로직 반드시 `<body>~</body>` 전체에서 footer만 제외하고 셀 것, article-body 첫 블록에서 멈추는 정규식 쓰지 말 것). **정확한 결과: 800단어 미만은 California/Texas/New York late fee 페이지 3개뿐(713~784단어), 나머지 38개는 800~2,753단어로 충분함.** "가치없는 콘텐츠" 반려 사유와 관련해 분량 자체는 문제가 아니라고 결론. 이 3개는 FAQ가 아예 없고 dateModified가 5/13 이후 안 바뀐 상태라는 별도 격차는 있으나, **사용자가 "충분하면 하지 마라"고 명시적으로 보류 지시함 — 다음에 여유 있을 때 처리 (이번엔 손대지 않음).**
- **(2026-07-14, 사용자 언급)** 애드센스가 계속 반려되면 제휴 마케팅으로 전환하는 것도 고려 중이라고 언급함(확정 아님, 참고용 발언). 제휴 마케팅 자체는 아직 미시작 (트래픽 부족 + 심사 중 리스크). `privacy.html`에 조건부 고지만 미리 넣어둠. 원래 시작 조건은 "애드센스 승인 + 트래픽 유의미하게 붙기 시작할 때"였는데, **애드센스 3차도 반려되면 이 순서 자체를 재검토할 필요 있음 — 다음 세션에 애드센스 결과 나오면 먼저 물어볼 것.** 후보: FreshBooks, QuickBooks, DocuSign 등 (미확정).

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
9. **방향 전환: 콘텐츠 보강 → 툴 기능 차별화** (사용자가 명시적으로 요청). 배경: GA4 4주 트래픽이 64명(활성 사용자)에 불과해 콘텐츠 미세 보강만으로는 근본적 트래픽 병목이 안 풀린다는 논의 끝에, "장기적으로 되는 것"의 하나로 툴 자체의 기능 차별화를 오늘 시작하기로 결정.
   - **`index.html`(Invoice Generator, 사이트 최대 트래픽 페이지) 보강**: 경쟁사 웹 검색 결과 무료 인보이스 생성기 상당수가 "새로고침하면 데이터 소실"을 명시하거나(InvoiceQuick), 임시저장 기능이 있는 곳은 전부 회원가입/로그인이 필요함(SmoothLedger, PineBill). 로그인 없이 브라우저 자동저장을 제공하는 경쟁사는 거의 없음(invoicemon 정도가 유일) → 회원가입 없는 사이트 철학과 맞아떨어지는 실질적 차별화 기능으로 판단, `localStorage` 기반 자동저장/복원 구현 (기존 invoice-tracker.html/time-tracker.html의 localStorage 패턴 재사용, 키: `gst_invoice_draft`). 입력 중 자동저장 + "Draft auto-saved" 표시, Clear Form 클릭 시 draft도 같이 삭제. **jsdom으로 저장→새로고침 시뮬레이션→초기화 전체 흐름을 실제로 실행해서 검증** (단순 문법 검사보다 한 단계 더 나아간 검증 — 앞으로 JS 로직이 복잡한 변경엔 이 방식 재사용 가치 있음).
   - **부가로 콘텐츠-실제기능 불일치 2건 발견 및 수정** (같은 파일 작업 중 발견): FAQ "인보이스 저장 가능?" 답변이 옛날 그대로라 "저장 기능 없음"이라고 되어 있었음(지금은 있음, 갱신). FAQ "로고 추가 가능?" 답변도 "향후 추가 예정"이라고 되어 있었는데 **로고 업로드는 이미 구현되어 PDF에도 반영되고 있었음** — 콘텐츠가 실제 기능을 못 따라간 사례.
   - **`index.html`에 FAQPage 스키마가 아예 없었던 것 발견** (2026-07-12에 18개 툴 전수 보강 때 index.html만 누락된 것으로 추정) — 신규 추가 + dateModified 추가.
   - `sitemap.xml`: index.html(`/`) 항목에 `lastmod` 필드 자체가 없던 것 발견, 추가.
   - **(2026-07-14 후속) 나머지 17개 툴도 전부 처리 완료** — 아래 11번 항목 참고.
10. **`index.html` 반응형 버그 수정** (사용자가 402px 폭 스크린샷으로 발견): 항목(Line Item)의 Description 입력칸이 좁은 화면에서 5열 그리드(1fr + qty/price/amount 고정폭 3개) 때문에 극도로 눌려 글자가 안 보이던 문제. 기존엔 380px/500px 두 단계로 컬럼 폭만 계속 줄이는 미봉책이었는데 근본 해결이 안 됐음 → 560px 이하에서 2행 구조(1행: Description 전체폭, 2행: Qty/Price/Amount/삭제버튼)로 CSS Grid만으로 재배치, HTML/JS는 안 건드림. **네트워크 제약으로 헤드리스 브라우저 렌더링 캡처는 못 했고, grid 폭을 402px 기준 직접 계산해서 검증함** — 다음에 이 방식대로 CSS만 고치는 작업이 또 생기면 가능하면 사용자에게 실제 화면 재확인을 요청할 것.
11. **브라우저 자동저장(draft save) 기능을 18개 툴 전체에 적용 완료** (같은 세션 후반, 사용자가 "차별화/틈새전략으로 최대한 하자"고 명시적으로 요청). 배경: 경쟁사 리서치 결과 무료 인보이스/문서 생성기 상당수가 새로고침 시 데이터 소실을 명시하거나, 저장 기능이 있는 곳은 전부 회원가입이 필요함 — 로그인 없는 브라우저 자동저장은 진짜 차별화 포인트로 판단.
    - **적용 완료 (16개)**: `index.html`(Invoice), `receipt.html`, `quote.html`, `hourly-rate.html`, `tax-estimator.html`, `late-payment-fee.html`(사이트 최대 트래픽), `project-profit.html`, `budget-planner.html`, `contract-generator.html`, `client-proposal.html`, `milestone-calculator.html`, `savings-calculator.html`, `nda-generator.html`, `client-intake-form.html`, `expense-report.html`, `scope-of-work.html`.
    - **제외 (2개, 이미 다른 방식으로 영구 저장됨)**: `invoice-tracker.html`, `time-tracker.html` — 이 둘은 원래부터 localStorage 기반 리스트 관리 앱이라 "draft 1개 저장" 패턴이 아니라 이미 다건 영구 저장 구조. 손댈 필요 없음.
    - **구현 패턴**: `localStorage` 키를 `gst_{tool}_draft` 형식으로 통일, 문서 생성기류(폼+동적 리스트+체크박스/탭 상태)는 입력마다 자동저장 후 새로고침 시 복원 + "Clear Form" 클릭 시 삭제, 계산기류(입력만 있고 PDF 없는 것들)는 `calc()` 실행 시마다 자동저장(별도 Clear 버튼 없음 - 값 자체가 계속 남아있는 게 자연스러움).
    - **검증 방식**: 매 파일마다 (1) HTML 파싱 검증 (2) 추출한 인라인 JS `node --check` 문법 검증 (3) **jsdom으로 실제 저장→새로고침 시뮬레이션→복원→Clear 전체 흐름을 실행해서 검증** — 특히 체크박스/탭 선택 상태(tax-estimator의 filing status, receipt의 결제수단)까지 복원 후 계산 결과가 원본과 일치하는지까지 확인.
    - **발견한 버그 1건**: `milestone-calculator.html`은 원래 초기화 로직이 `DOMContentLoaded` 밖에서 동기 실행되고 있었음(다른 17개는 전부 `DOMContentLoaded` 안에 있었음) — 실제 브라우저에서는 문제없지만 패턴 통일 및 테스트 신뢰성을 위해 다른 파일들과 동일하게 감쌈.
    - **FAQ 신규 추가한 파일들**: 저장 기능이 새로 생긴 파일 중 기존에 "저장 가능한가요?" 류 질문이 없던 곳은 FAQ 1개씩 신규 작성 + FAQPage 스키마 동기화 (contract-generator, quote, receipt, client-proposal, client-intake-form, nda-generator, scope-of-work).
    - 전부 `dateModified`/sitemap `lastmod` 갱신 완료.

---

### 2026-07-16 세션

1. **GSC 데이터 재확인** (Performance + Coverage zip, 지난 3개월 기준 쿼리 193개/페이지 66개 — 07-14와 거의 동일 범위, 소폭 변동). 전체 쿼리를 기존 사이트 파일과 재대조. **신규 페이지 제작 근거는 이번에도 없음** — 노출은 있으나 매칭 페이지가 아예 없는 키워드를 찾지 못함. 대신 **의도 불일치(intent mismatch)라는 새로운 유형의 갭을 발견**했음(아래 2번).
2. **핵심 발견 — "[주] late fee calculator" 쿼리군의 콘텐츠-의도 불일치**: New York(55회 노출) / Florida(54) / Illinois(52) / Pennsylvania(43) / Georgia(17) / Indiana(15) / Wisconsin(11) / Washington(9) — 총 8개 주에서 "late fee calculator"라는 계산기 의도 쿼리가 검색되고 있는데, 매칭되는 페이지(`blog/late-fee-laws-freelancers-{주}.html`)는 법률 정보 글일 뿐 실제 계산기가 없었음. 페이지 자체의 종합 순위는 이미 5~10위로 나쁘지 않은데(예: NY 5.57위, Illinois 5.73위) 계산기 의도 쿼리 단독으로는 순위가 급락함(예: NY "new york late fee calculator" 쿼리 단독 87.93위) — 페이지가 정보 검색엔 걸리지만 계산기 검색엔 안 걸린다는 뜻으로 해석.
3. **웹 검색으로 경쟁강도 확인**: 범용 "late fee calculator"는 freelancewithus.com, teamzlab, thedigizone, usfinancecalculators, everydaybudd 등 5개 이상의 전용 계산기 사이트가 이미 장악한 영역(예전에 확인한 "freelance contract template", "freelance tax preparation guide"와 같은 고경쟁 패턴). 반면 **주(州) 수식어가 붙은 롱테일 키워드("new york late fee calculator" 등)는 검색 결과에 주(州)별로 특화된 경쟁 콘텐츠가 전혀 없었음** — 이미 5~10위로 어느 정도 자리 잡은 우리 페이지에 실제 계산기 기능만 얹으면 승산이 있다고 판단, 신규 페이지 대신 **기존 8개 페이지 보강**으로 진행.
4. **8개 주 페이지에 인라인 미니 계산기 위젯 신규 추가** (New York/Florida/Illinois/Pennsylvania/Georgia/Indiana/Wisconsin/Washington):
   - 자체완결형 위젯(금액/연체일수/월이율 입력 → 즉시 연체료·총액 계산, 순수 JS, 외부 의존성 없음)을 각 페이지 인트로 바로 다음(첫 `<h2>` 앞)에 배치 — "계산기" 검색 의도로 들어온 사용자가 스크롤 없이 바로 사용 가능하도록.
   - 기본값: 월 1.5%(연 18%, 업계 표준) — 각 페이지 본문에 이미 서술돼 있던 "표준 요율"과 일치시킴(신규 주장 없음). 위젯 하단에 grace period/compounding/PDF 등 고급 기능을 위한 전체 계산기(`late-payment-fee.html`)로 연결되는 링크 포함 — 카니발라이제이션이 아니라 퍼널 구조.
   - **FAQPage 스키마 + 화면 FAQ 2개씩 신규 추가**(이 8개 페이지는 지금까지 Article 스키마만 있고 FAQ 자체가 없었음 — 07-12/07-14에 다른 페이지들에서 발견한 것과 같은 유형의 결함): "무료 [주] late fee 계산기가 있나요?" / "[주]에서 집행 가능한 연체료 요율은?" — 후자는 각 페이지에 이미 있던 주(州)법정 기본이율 서술을 질문형으로 재구성한 것.
   - dateModified/화면 "Updated Jul 16, 2026" 표기/sitemap lastmod 전체 갱신.
5. **부수적으로 발견한 콘텐츠 버그 3건 수정**: Florida/Illinois/Washington 3개 페이지에서 과거(07-10) 내부링크 강화 작업 때 CTA 링크가 문장 한가운데 잘못 삽입되어 문법이 깨져 있었음. 예: Florida 원문이 `"1.5% per month Run the numbers instantly with our [계산기 링크]. (18% annually) is the most common rate..."`처럼 읽혀서 실제로 문장이 성립하지 않았음. 링크를 문장 끝의 독립된 문장으로 재배치해 수정. (Georgia/Michigan/New Jersey/Ohio/Colorado/Indiana/Pennsylvania/Texas/Wisconsin은 같은 패턴으로 전수 검사했으나 이상 없음 확인.)
6. **title/meta description 갱신**: 8개 페이지 모두 title에 "calculator"라는 단어가 전혀 없었음(예: "Late Fee Laws for Freelancers in New York" — 정작 쿼리는 "new york late fee calculator"). 위젯 추가로 실제 콘텐츠가 계산기를 포함하게 됐으므로 title/meta description/JSON-LD description에 "Calculator" 반영(과장 아님, 실제 기능과 일치). "{주} Late Fee Calculator + Laws for Freelancers – GetSoloTools" 형식으로 통일. H1과 JSON-LD headline은 기존 랭킹 시그널 보존을 위해 손대지 않음.
7. **검증**: 8개 파일 모두 (1) `html.parser` 파싱 검증 (2) JSON-LD `json.loads()` 검증 — 스키마 2개(Article+FAQPage)씩 (3) 추출 JS `node --check` 문법 검증 (4) **jsdom으로 실제 브라우저 환경에서 계산 위젯 실행 — 기본값(1000/30일/1.5%→$15 수수료/$1015 총액)과 값 변경 후 재계산(5000/45일/2%→$150/$5150)까지 시뮬레이션해서 수식 정확성 확인**.
8. **작업 중 버그 자체 발견 및 수정 (자동화 스크립트의 부작용)**: FAQ 섹션을 삽입하는 python 스크립트가 처음엔 `article-body`를 닫는 `</div>`보다 앞에 FAQ를 넣어야 하는데 앵커 문자열을 잘못 잡아서 8개 파일 전부 `<div>` 여닫음이 어긋나는(13 close vs 12 open) 구조적 버그가 생겼었음. **`html.parser.HTMLParser`는 태그 짝이 안 맞아도 에러를 던지지 않아서 1차 검증에서 못 잡았음** — `html.count('<div')` vs `html.count('</div>')` 개수 비교로 뒤늦게 발견해 즉시 재수정함. **앞으로 자동화 스크립트로 div 등 블록 요소를 삽입/이동할 때는 HTMLParser 파싱 성공 여부만으로 안심하지 말고 반드시 여닫음 태그 개수 비교를 별도로 할 것.**
9. **GSC Coverage 데이터 관찰(조치 보류)**: "발견됨 - 미색인" 4건(07-14엔 3건이었음, +1), "크롤링됨 - 미색인" 3건(동일), "리디렉션 포함 페이지" 3건(동일, 원인 미확인 상태 유지), "중복 페이지" 2건(기존에 index.html vs `?ref=producthunt`로 확인 완료, 무해). 색인 요청은 여전히 금지 — 다음 GSC 데이터에서 계속 미색인이면 어떤 URL인지 GSC UI에서 직접 확인 필요(사용자 액션).
10. **처리하지 않은 것 (의도적 보류)**: Ohio는 "ohio late fee calculator" 단독 쿼리 노출이 2회로 미미하고 페이지 종합 순위(9.83위)·CTR도 이미 다른 8개보다 나은 편이라 이번 배치에서 제외. California/Texas/Colorado/Michigan/New Jersey는 이번 GSC 데이터에 "[주] late fee calculator" 형태의 명시적 쿼리가 없어서 제외(향후 노출 생기면 동일 패턴 적용 검토). `blog/index.html`의 각 글 목록 blurb(짧은 설명)는 title/meta와 별개로 손대지 않음 — canonical 메타가 아니라 우선순위 낮음.

11. **(같은 세션, 후반) 사용자가 콘텐츠 확장 전략 전환을 명시적으로 지시** — "신규 진행 안 한 지 너무 오래됐다, 롱테일 키워드를 많이 보유 못해두면 위험하다, 이제부턴 진행하는 쪽으로 하라." 위 1~10번에서 확인한 "주(州) 수식어가 붙으면 전용 경쟁자가 사실상 없다"는 패턴을 근거로, GSC 노출을 기다리지 않고 **late fee 주 시리즈를 선제적으로 확장**하기로 방향 전환 (상세 원칙은 문서 상단 "콘텐츠 전략 전환" 섹션 참고).
12. **Late fee 주 시리즈 14개 주 → 19개 주 신규 확장**: Massachusetts, North Carolina, Virginia, Arizona, Minnesota 5개 주 신규 작성.
    - 선정 기준: 프리랜서/긱이코노미 인구가 크고 기존 19개(당시 14개)와 지역적으로 겹치지 않는 주.
    - **전부 1차 법령 자료로 검증 후 작성** (law.lis.virginia.gov, malegislature.gov, azleg.gov, revisor.mn.gov, ncleg.gov 등 각 주 공식 법전/의회 사이트를 직접 web_fetch/검색). 실제로 조사 중 다음을 확인해 **잘못된 정보를 걸러냄**: (a) 매사추세츠의 "Fair Business Invoice Settlement Act"는 SEO 아그리게이터 사이트가 마치 현행법처럼 인용하고 있었으나 실제로는 2026년 기준 **아직 통과되지 않은 발의 법안(House Bill H297)**임을 malegislature.gov 원문 확인으로 발견 — 페이지에 포함하지 않음, 실제 제정된 M.G.L. c.231 §6C(계약 이자율 12%)와 c.93A(불공정거래)만 인용. (b) 미네소타의 "월 8% 연체료 상한"이라는 한 아그리게이터의 서술은 Minn. Stat. §334.01 원문 대조 결과 **연 8%(연간 상한)를 잘못 읽은 오류**로 확인 — 정정된 수치로 작성.
    - 각 주 핵심 내용: Massachusetts(계약이자 12%/년 전미 최고 수준, 소액소송 $7,000, 계약시효 6년, Ch.93A 기업간 불공정거래 구제), North Carolina(법정이율 8%/년, 소액소송 $10,000 전국 상위권, 계약시효 3년로 단축 — 유의사항으로 강조), Virginia(법정이율 6%/년, **오픈계정 인보이스 60일 경과시 별도 조항 없이도 자동 이자 발생**하는 Va. Code §6.2-302(C) 특징 소개 — 이런 조항이 있는 주는 지금까지 없었음, 실질적 차별 정보), Arizona(기본이율 10%/년이나 서면합의 시 상한 자체가 없음 — A.R.S. §44-1201, 대신 소액소송 한도가 $3,500로 전국 최저권이라 Justice Court($10,000)로 안내), Minnesota(법정이율 6%/년·서면계약 상한 8%/년이나 사업자간 거래 예외조항 있음, Conciliation Court 소액소송 $15,000 전국 최상위권).
    - **처음부터 미니 계산기 위젯 내장** (8개 기존 주 보강 때 검증한 동일 패턴 재사용) — "계산기" 검색 의도에 신규 페이지부터 바로 대응, 신규 페이지가 이번 세션 앞부분에서 발견한 "의도 불일치" 문제를 아예 안 겪도록 설계.
    - FAQPage 스키마 3개 + 화면 FAQ, 본문 1,535~1,752단어 (품질 기준 800단어 대비 여유 확보, 07-14에 확립된 콘텐츠 품질 원칙 준수).
    - `late-payment-fee.html` 비교표(19개 주로 확장) + 카드 그리드(5개 카드 추가) + dateModified 갱신, `blog/index.html` 최신순 5개 추가, `sitemap.xml` 5개 URL 추가.
    - 검증: HTML 파싱 + JSON-LD + div 짝 맞음 + jsdom 계산 시뮬레이션(기본값 $1000/30일/1.5%→$15, 변경값 $3000/45일/1.5%→$67.50, 5개 파일 전부 일치) 전부 통과.
13. **다음 배치 후보(31개 주 남음)**: Tennessee, Missouri, Maryland, Oregon, Nevada, Connecticut, Utah, South Carolina, Alabama, Kentucky 등 우선 검토 권장. 다음 세션에 "진행해"라는 지시만으로 5개 내외씩 이어서 확장 가능 (매 배치 법령 1차자료 검증 및 품질 검증은 생략 금지 — 위 콘텐츠 전략 전환 섹션 참고).

---

### 2026-07-18 세션

**사용자가 이번 세션에 명시적으로 지시**: "축소하지 말고 5개 신규 다 하고 보강도 다 해라, 전부 지금 확장해야 한다, 롱테일 최대한 많이 잡아놔야 한다." — 07-16에 세운 "선제 확장" 원칙을 재확인하며 신규+보강을 동시에 최대한 진행하라는 포괄적 승인.

1. **GSC 데이터 재확인** (Performance + Coverage zip, 쿼리 197개/페이지 71개). **신규 페이지 제작 근거는 이번에도 없음** — 노출은 있으나 매칭 페이지가 없는 키워드를 찾지 못함(전부 기존 blog/tool/email-template에 매칭). **가장 의미 있는 신호**: 07-16에 미니 계산기 위젯을 추가한 late fee 주(州) 페이지들에서 처음으로 실제 클릭이 발생함 — New York(2클릭/22노출/6.05위), Ohio(1클릭/143노출/9.56위), California(1클릭/69노출/6.46위), New Jersey(1클릭/20노출/7.4위). 다만 "[주] late fee calculator" 개별 쿼리 순위는 여전히 나쁨(NY 88.19위 등) — 위젯 반영 2일차라 재랭킹 판단은 이름, 다음 세션에 재확인 필요.
2. **Late fee 주 시리즈 19개 주 → 24개 주 신규 확장**: Tennessee, Missouri, Maryland, Oregon, Nevada 5개 주 신규 작성.
   - 선정 기준: handover.md에 기록된 "우선 검토 권장" 순서(프리랜서/긱이코노미 인구 기준) 그대로 따름.
   - **전부 1차 법령 자료로 검증** (law.justia.com, 각 주 legislature 공식 사이트, findlaw 등 교차검증 후 작성). 검증 과정에서 아그리게이터 사이트의 오류 2건을 추가로 발견해 제외함: (a) Tennessee/Maryland 관련 자료 중 "Tenn. Code § 66-28-201(d) 5일 grace period"는 landlord-tenant(주거임대) 법령이지 상업 인보이스 법령이 아님을 확인해 페이지에서 제외. (b) "Md. Code Real Prop. § 8-208 5%/월 상한"도 마찬가지로 임대차법 오적용 사례로 확인, 대신 실제 상사채권 이자율 조항(Md. Const. Art. III §57 / Com. Law §12-102, 6%/년)만 인용. 이는 07-16 세션에서 발견한 매사추세츠/미네소타 건과 같은 유형의 아그리게이터 오류 패턴 — 앞으로도 "임대차법과 상사채권법을 혼동한 2차 자료"는 계속 경계할 것.
   - 각 주 핵심 내용: **Tennessee**(written contract는 formula rate, 무약정시 10%/년 — Tenn. Code §47-14-103, **General Sessions Court 소액소송 한도 $25,000로 Delaware와 함께 전미 최고**), **Missouri**(무약정시 9%/년 — §408.020, Small Claims Division $5,000로 이웃 Illinois의 절반), **Maryland**(헌법상 기본 6%/년, **3년 시효로 전국 최단 축**), **Oregon**(무약정시 9%/년 — ORS 82.010, $10,000 소액소송, **변호사가 판사 허가 없이는 출석 불가한 독특한 규정** ORS 46.415), **Nevada**(고정 %가 아닌 **prime rate+2% 변동금리** — NRS 99.040, $10,000 소액소송, **임금압류 면제 82%로 전국 최고 수준의 채무자 보호** NRS 21.090(1)(g)).
   - 웹 검색으로 "[주] late fee calculator" 경쟁강도 재확인 — 5개 주 전부 임대(rent) 전용 계산기(rentlatefee.com 등)만 상위 노출, 프리랜서/B2B 인보이스 전용 경쟁자 없음을 확인. 기존 19개 주와 동일한 저경쟁 패턴 재확인.
   - **처음부터 미니 계산기 위젯 + "인접 주 비교" 섹션(compare-table) + FAQ 3개 내장** — 07-16 세션에서 발견한 "의도 불일치" 문제를 신규 페이지부터 원천 차단하고, 동시에 이번 세션에 사용자가 강조한 "문제해결/비교분석형 콘텐츠가 AI 검색에 유리하다"는 방향을 신규 페이지 설계에 처음부터 반영. 비교 데이터는 전부 이미 사이트에 게시된 인접 주 페이지의 검증된 수치를 재인용(신규 조사 아님) — Tennessee↔Virginia/North Carolina, Missouri↔Illinois, Maryland↔Virginia/Pennsylvania, Oregon↔Washington/California, Nevada↔Arizona/California.
   - 본문 1,720~1,880단어 (품질 기준 800단어 대비 여유 확보).
   - `late-payment-fee.html` 비교표(24개 주로 확장) + 카드 그리드(5개 카드 추가) + dateModified 갱신, `blog/index.html` 최신순 5개 추가, `sitemap.xml` 5개 URL 신규 추가.
3. **기존 19개 주 페이지 전수 재검사 — 새로운 유형의 구조적 결함 발견**: FAQ 섹션이 화면에도 스키마에도 **아예 없는** 페이지가 6개나 남아있었음(California, Texas, Ohio, Colorado, Michigan, New Jersey — 전부 5월~6월 초에 만들어진 초기 페이지들). 07-12/07-14에 "화면 FAQ는 있는데 스키마만 없는" 패턴은 이미 해소했다고 기록했으나, 이 6개는 그보다 더 근본적으로 FAQ 자체가 없었던 케이스로, 이번에 처음 발견함.
   - 6개 페이지 전부 **FAQ 2개씩 신규 작성** (스키마+화면 동시): 기존 본문에 이미 서술된 이자율/소액소송 정보를 질문형으로 재구성(창작 아님) + 신규 "인접 주 비교" FAQ 1개씩. dateModified 및 화면 "Updated" 표기 신규 추가(California/Texas는 "Updated" 표기 자체가 처음 생김).
4. **나머지 13개 주 페이지(이미 FAQ 2~3개 보유) 전부에 "인접 주 비교" FAQ 1개씩 추가**: New York, Florida, Illinois, Pennsylvania, Georgia, Washington, Indiana, Wisconsin, Massachusetts, North Carolina, Virginia, Arizona, Minnesota — 13개 전부.
   - 비교 데이터는 전부 **이미 사이트에 게시된 이웃 주 페이지에서 실제 추출한 수치**를 재사용(신규 법령 조사 없음, 사실관계 재확인만): 예) "Arizona의 $3,500 소액소송 한도는 California($12,500)와 Nevada($10,000)에 비해 두드러지게 낮다", "New Jersey의 $3,000은 이웃 Pennsylvania($12,000)의 4분의 1 수준" 등. 진짜 접경 관계가 없는 Texas/Colorado는 "인접 주"가 아니라 "전국 대비" 프레이밍으로 정직하게 서술(허위로 접경 주장하지 않음).
   - Python 스크립트로 JSON-LD FAQPage 배열과 화면 아코디언에 동시 삽입(수작업 반복 대신 자동화, 단 문구 자체는 각 주마다 개별 검증된 사실로 직접 작성) — 07-16 세션에서 겪었던 "div 짝 안 맞는" 자동화 버그를 교훈 삼아 삽입 전후 앵커 문자열의 고유성(정확히 1회 등장)을 먼저 assert로 검증한 뒤 삽입.
   - 19개 페이지 전부 dateModified `2026-07-18` 갱신, 화면 "Updated" 날짜도 동일 갱신(기존에 "Updated" 표기가 없던 Massachusetts/North Carolina/Virginia/Arizona/Minnesota 5개는 이번에 신규로 표기 추가됨).
5. **`sitemap.xml` 추가 결함 발견**: 19개 기존 주 페이지 lastmod 일괄 갱신 작업 중, California/Texas/Colorado/Michigan/New Jersey **5개 URL에 `<lastmod>` 필드 자체가 없었던 것**을 발견(과거 세션에 이미 한 번 비슷한 패턴을 `expense-report.html`에서 발견한 적 있음 — sitemap 필드 누락이 산발적으로 계속 나오는 편이니 앞으로도 sitemap 수정 시 항상 `lastmod` 존재 여부를 개별 확인할 것). 5건 모두 신규 추가로 수정.
6. **검증**: 신규 5개 + 수정 19개, 총 24개 파일 전부 (1) `html.parser` 파싱 (2) `<div>`/`</div>` 개수 일치 (3) JSON-LD `json.loads()` 유효성 (4) FAQPage 스키마 항목 수 = 화면 `<details>` 개수 일치 — 4중 검증 스크립트로 일괄 통과 확인. 신규 5개 페이지의 계산기 위젯은 추가로 jsdom으로 기본값(1000/30일/1.5%→$15/$1015)과 변경값(3000/45일/1.5%→$67.50/$3067.50) 실행 검증. `sitemap.xml`은 `ElementTree` 파싱 + 중복 URL 없음 + lastmod 누락 없음(오늘 건드린 파일 기준) 확인.
7. **처리하지 않은 것 (의도적 보류)**: blog 47개 중 late-fee 시리즈 24개를 제외한 나머지 28개 blog와 정적 페이지(about/privacy/contact)의 sitemap lastmod 누락은 오늘 건드린 범위 밖이라 손대지 않음 — 다음에 여유 있을 때 전수 스캔 가치 있음. late-payment-fee.html 자체의 lastmod는 07-14로 방치돼 있던 것도 이번에 07-18로 갱신함(비교표/카드그리드를 실제로 수정했으므로).

**다음 배치 후보 (21개 주 남음, 2026-07-20 기준)**: Connecticut, Utah, Kansas, Iowa, South Dakota, North Dakota, Nebraska, Idaho, Montana, Wyoming, New Mexico, West Virginia, Mississippi, Arkansas, Delaware, Rhode Island, New Hampshire, Vermont, Maine, Alaska, Hawaii — **Kentucky/South Carolina/Alabama/Louisiana/Oklahoma는 2026-07-20에 완료, 목록에서 제외.** 다음 세션에 "진행해"라는 지시만으로 5개 내외씩 이어서 확장 가능 — 단 매 배치 법령 1차자료 검증 및 경쟁강도 확인은 생략 금지. **West Virginia(Kentucky/Maryland/Virginia와 접경 — 이제 3개 주와 인접), Kansas/Arkansas(Missouri/Oklahoma와 접경 — 이제 2개 주와 인접), Mississippi(Alabama/Louisiana/Tennessee와 접경 — 3개 주와 인접)** 등은 이미 게시된 주들과 "인접 주 비교" 콘텐츠를 자연스럽게 이어갈 수 있는 지리적 이점이 갈수록 커지고 있어 다음 배치 우선순위로 특히 고려할 만함.

**(같은 세션, 사용자 스크린샷 제보로 발견한 버그 수정)** 사용자가 8개 페이지를 직접 확인하다가 신규 5개 주(Tennessee/Missouri/Maryland/Oregon/Nevada)의 "How X Compares to Nearby States" 비교표가 모바일에서 반응형이 아닌 것을 지적함. 실제로 `.compare-table`이 `width:100%`만 있고 `min-width`가 없어서, 기존 8개 데이터 테이블(`.table-scroll`/`.table-scroll-hint` 패턴 적용된)과 다르게 좁은 화면에서 컬럼이 그냥 눌리는 구조였음 — 신규 페이지 작성 시 기존 테이블 반응형 패턴을 놓친 실수. 5개 파일 전부 `.table-scroll`(가로 스크롤 wrapper) + `.table-scroll-hint`(모바일 전용 안내 문구) CSS 추가하고 `.compare-table`에 `min-width:420px` 부여, `<table>`을 `<div class="table-scroll">`로 감싸는 방식으로 수정 — 사이트 전체 테이블 반응형 패턴과 완전히 통일시킴. div 짝/JSON-LD/파싱 전부 재검증 후 commit & push 완료. **앞으로 신규 페이지에 테이블을 넣을 때는 반드시 이 패턴(`/mnt` 문서 "반응형 테이블" 섹션 참고)을 처음부터 적용할 것 — 이번처럼 사후 수정하지 않도록.**

---

### 2026-07-20 세션 (일요일 주간 작업)

**사용자가 이번 세션에 추가로 지시한 원칙 2가지**: ① AI 검색(ChatGPT/Perplexity 등)은 도메인 권위보다 콘텐츠 자체의 품질이 훨씬 중요해지고 있으므로, 페이지에 "문제해결/비교분석" 위주 콘텐츠를 넣는 것이 웹 검색과 AI 검색 양쪽에 유리하다는 점을 신규 작업에 반영할 것. ② 수익화(애드센스 트래픽/클릭) 관점에서 작업 우선순위를 판단할 것. 둘 다 이번 세션 작업에 반영함 — 아래 참고.

1. **GSC 데이터 재확인** (Performance + Coverage zip, 쿼리 198개/페이지 74개, 지난 3개월 기준 — 07-18과 거의 동일 범위). 전체 쿼리를 기존 사이트 파일과 재대조. **신규 페이지 제작 근거는 이번에도 없음** — 노출은 있으나 매칭 페이지가 없는 키워드를 찾지 못함(전부 기존 blog/tool/email-template에 매칭됨, 재확인 완료).
2. **07-16/07-18 작업분 효과 관찰 (조치 없음, 관찰만)**:
   - 07-16에 위젯을 추가한 8개 주(NY/FL/IL/PA/GA/IN/WI/WA) 중 NY(2클릭/23노출/6.13위)·OH(1클릭/147노출/9.54위)·CA(1클릭/69노출/6.46위)·NJ(1클릭/20노출/7.4위)는 07-18과 거의 동일한 수치 유지 — 클릭이 늘지도 줄지도 않음. "[주] late fee calculator" 개별 쿼리 순위도 여전히 60~90위대로 정체(예: NY "new york late fee calculator" 88.31위, 07-18의 88.19위와 사실상 동일) — 2~4일 간격으로는 순위 변화를 판단하기엔 너무 이름. 계속 관찰 필요.
   - 07-18에 신규 작성한 5개 주(Tennessee/Missouri/Maryland/Oregon/Nevada)는 이번 GSC 데이터에 **아직 전혀 노출되지 않음** (페이지 노출 0). Coverage의 "발견됨 - 현재 색인이 생성되지 않음"이 3건→4건으로 증가한 것과 일치 — 신규 페이지가 아직 크롤링/색인되지 않은 것으로 보임. 색인 요청은 금지 원칙 유지, 다음 세션에 재확인.
3. **Late fee 주 시리즈 24개 주 → 29개 주 신규 확장**: Kentucky, South Carolina, Alabama, Louisiana, Oklahoma 5개 주 신규 작성.
   - **선정 기준을 이번 세션에 조정함**: 기존엔 handover에 적힌 순서를 그대로 따랐으나, 이번엔 ① 프리랜서/긱이코노미 인구가 큰 주를 우선하고 ② 이미 게시된 주와 접경해서 "인접 주 비교" 콘텐츠의 밀도를 높일 수 있는 주를 함께 고려해 5개를 선정함. Kentucky(접경 6개 주 중 5개가 이미 게시됨: IL/IN/OH/VA/TN — 압도적으로 유리), South Carolina(NC/GA 접경, NC와 3년 시효가 정확히 일치해 비교 콘텐츠 밀도 높음), Alabama(FL/GA/TN 접경, 3개 중 3개 게시됨), Oklahoma(TX/MO/CO 접경, 3개 게시됨), Louisiana(TX만 실제 접경, 나머지 AR/MS는 미게시 — 유일하게 접경 이점이 약한 선택이었으나 민사법 체계 자체가 다른 주라는 독자적인 콘텐츠 가치가 있어 포함).
   - **전부 1차 법령 자료로 검증** (law.justia.com, lawserver.com, 각 주 legislature 공식 사이트, docdraft.ai 등 교차검증). 웹 검색으로 "[주] late fee calculator" 경쟁강도도 5개 주 전부 재확인 — 기존 24개 주와 동일하게 임대(rent) 전용 계산기나 범용 다중 주 목록 사이트만 있을 뿐, 프리랜서/B2B 인보이스 전용 경쟁자는 5개 주 전부 없음을 확인.
   - 각 주 핵심 내용(문제해결/비교분석 프레이밍 적용): **Kentucky**(KRS 360.010, 8% 기본이율이나 $15,000 이하 서면계약은 19% 또는 연준할인율+4%p 중 낮은 쪽까지 허용, $15,000 초과는 상한 없음 — **소액소송 한도 $2,500로 로드아일랜드와 함께 전미 최저**인데 서면계약 시효는 10~15년으로 전미 최장급이라는 극단적 대조가 핵심 콘텐츠), **South Carolina**(S.C. Code §34-31-20, 8.75%라는 이례적으로 정밀한 법정이율, 계약/불법행위 불문 3년 통일 시효 — North Carolina와 시효가 정확히 일치하는 점을 비교 콘텐츠로 활용), **Alabama**(Ala. Code §8-8-1, 서면 유무에 따라 6%/8% 이율이 갈리는 구조, $6,000 소액소송 한도로 Georgia($15,000)·Florida($8,000)보다 낮음), **Louisiana**(La. R.S. 9:3500, **미국에서 유일하게 민사법(civil law) 체계를 쓰는 주** — "statute of limitations" 대신 "prescription" 용어 사용, 계약이율 상한 12%/년으로 타 주 표준인 18%보다 낮아 프리랜서가 월 1%로 낮춰 써야 함, **$5,000 Small Claims Division 판결은 항소 자체가 불가능**하다는 독특한 규정), **Oklahoma**(15 O.S. §266, 기본 6%지만 서면계약 시 상한 없음, $10,000 소액소송 한도로 Missouri($5,000)와 Texas($20,000) 사이 정중앙).
   - **처음부터 미니 계산기 위젯 + "How X Compares to Nearby States" 비교표(본문 H2 섹션) + FAQ 3개(계산기 여부/이율/인접주 비교) 내장** — 07-18 패턴 그대로 재사용. 비교 데이터는 전부 이미 게시된 인접 주 페이지에서 실제 인용된 수치를 재사용(신규 조사 아님, 예: Tennessee 10%/$25,000, Illinois 5%/$10,000, Virginia 6%/$5,000, Missouri 9%/$5,000, Georgia 7%/$15,000, Florida 소액소송 $8,000, Texas 18%/$20,000, North Carolina 3년 시효/$10,000).
   - **Louisiana는 진짜 접경 주가 Texas 하나뿐**이라 비교표에 Texas 1개 행만 사용(07-18 원칙대로 허위로 접경 관계를 만들지 않음). 다만 민사법 체계라는 주제 자체가 독자적인 비교 콘텐츠 가치를 가지므로 콘텐츠 품질 기준(실제 가치 제공)은 충족한다고 판단.
   - 본문 870~987단어(FAQ 제외, 품질 기준 800단어 이상 충족), FAQ 포함하면 전부 1,100단어 이상.
   - `late-payment-fee.html` 비교표(29개 주로 확장) + 카드 그리드(5개 카드 추가) + dateModified 07-18→07-20 갱신, `blog/index.html` 최신순 5개 추가, `sitemap.xml` 5개 URL 신규 추가(lastmod 포함).
4. **검증**: 신규 5개 파일 전부 (1) `html.parser` 파싱 (2) `<div>`/`</div>` 개수 일치(13/13, 5개 전부) (3) JSON-LD `json.loads()` 유효성(스키마 2개씩) (4) FAQPage 스키마 항목 수(3개) = 화면 `<details>` 개수(3개) 일치 (5) `node --check`로 계산기 위젯 JS 문법 검증 (6) **jsdom으로 실제 계산 실행 — 기본값(1000/30일)과 변경값(3000/45일) 둘 다 검증, Louisiana만 1%/월 기본값(월 1.5%가 아닌 12%/년 상한 반영)이라 $10.00/$1010.00 → $45.00/$3045.00로 다르게 나오는 것까지 확인**, 나머지 4개 주는 $15.00/$1015.00 → $67.50/$3067.50로 기존 패턴과 일치. `late-payment-fee.html`/`blog/index.html`은 파싱+div짝+JSON-LD 재검증, `sitemap.xml`은 `ElementTree` 파싱 + 중복 URL 없음 + lastmod 5건 모두 존재 확인. 전부 통과.
5. **처리하지 않은 것 (의도적 보류, 재진단 후 보류로 결론)**: 처음엔 Washington(56노출/0클릭/페이지 평균 16.57위)을 포함해 Illinois/Texas/Colorado/Georgia/Pennsylvania/Wisconsin이 "고순위인데 클릭 0"인 CTR(제목/메타) 문제로 보여서 재작성을 검토했으나, **쿼리 단위로 재확인한 결과 착시로 판명**됨 — 실제 헤드키워드("[주] late fee calculator") 순위는 Illinois 71.12위/Pennsylvania 75.52위/Georgia 73.59위/Wisconsin 74위/Washington 36.7위로 전부 페이지 5~7 밖이라, 제목/메타를 손봐도 소용없는 순수 순위(경쟁) 문제로 재확인 — 상세 근거는 아래 "현재 열려있는 이슈" 07-20 항목 참고. 이번 세션엔 이 착시를 밝혀낸 것 외에 실질적인 보강 작업은 수행하지 않음. blog 57개 중 late-fee 시리즈 29개를 제외한 나머지 28개 blog와 정적 페이지의 sitemap lastmod 전수 스캔도 이번엔 범위 밖.

---

### 2026-07-24 세션 (late-fee 주 시리즈 밖으로 첫 확장)

**사용자 지시**: "키워드를 다양하게 해서 폭넓게 찾아봐라. 리스트 뽑고 경쟁강도 체크하고, 강하면 롱테일로, 가장 좋은 건 클러스터로 뚫는 거다. 중요기능은 경쟁이 강해도 결국 해야된다." — late-fee 주 시리즈(24→29개 주까지 확장 완료)를 벗어나 처음으로 다른 축의 키워드를 탐색한 세션.

1. **광범위 키워드 리서치 + 경쟁강도 체크** (웹서치로 5개 이상 클러스터 후보 조사):
   - **보류 (경쟁 매우 강함)**: 직업별 인보이스 템플릿(freelance graphic designer/writer invoice template — Canva/QuickBooks/Template.net/Plutio가 이미 직업별로 촘촘히 커버), 프리랜서 주별 소득세 계산기(setaxcalculator.com/countrytaxcalc.com이 이미 50개 주 전용 계산기 보유, YMYL 영역이라 신뢰도 검증도 까다로움), Upwork/Fiverr 수수료 계산기(Upwork 공식 계산기가 1위, Indy/Corcava 등도 이미 포화).
   - **진행 — Kill fee clause**: SitePoint/WorkContractReview/HostDevHub 등 소수 경쟁자만 있고 대형 플레이어 없음, contract-generator.html 툴과 바로 연결 가능해 채택.
   - **진행 — Freelance Isn't Free Act 주법**: late-fee 시리즈와 똑같은 "주별 법률 차이" 패턴인데 아무도 프리랜서 실용가이드 관점으로 안 판 완전한 빈틈 발견. 경쟁자 검색 결과가 전부 로펌 client-alert(Jackson Lewis/Nixon Peabody/Vedder Price/Littler 등)나 주정부 공식 페이지뿐 — "기업이 컴플라이언스 지켜야 할 것" 관점만 있고 "프리랜서가 이 법으로 뭘 할 수 있는지" 관점은 전무. 사용자에게 이 발견을 보고하고 진행 승인받음("찾으면 그때 하는게 맞다 다하자").
2. **Freelance Isn't Free Act 클러스터 실행**:
   - 1차 자료 교차검증(Illinois labor.illinois.gov, NY dol.ny.gov + Venable/KMM/Sova Law 등 로펌 알림, CA leginfo.legislature.ca.gov SB988 원문 + LCW/Fenton&Keller 등)으로 3개 주 정확한 수치 확보: **Illinois**(FWPA, 2024.7.1 시행, $500 문턱, 30일 지급, 3배 배상), **New York**(FIFA 주법, 2024.8.28 시행, $800 문턱, 30일 지급, 2배 배상+AG 벌금 최대 $25,000), **California**(SB 988/FWPA, 2025.1.1 시행, $250 문턱 — 셋 중 가장 낮음, 30일 지급, 2배 배상, **단 Labor Code §2778(b)(2)에 열거된 특정 "professional services" 직종에만 적용**되는 게 IL/NY보다 좁은 핵심 차이점).
   - 신규 허브 페이지 `blog/freelance-isnt-free-act-states-guide.html` 작성(970단어) — IL/NY/CA 3개 주법 + NYC(2017 원조)/LA(2023)/미니애폴리스/시애틀/콜럼버스(OH) 도시조례까지 비교표에 포함, "내가 해당되는지" 판단 기준(위치/금액/직종) 및 "클라이언트가 안 줄 때 뭘 해야하는지" 실행 단계까지 다룸. contract-generator.html·late-payment-fee.html·기존 3개 주 페이지로 상호링크.
   - **기존 New York 페이지에서 팩트 오류 발견 및 수정**: 기존 문구가 "FIFA는 NYC에만 적용, 뉴욕주 나머지 지역은 2배 배상 없음"이라고 돼있었는데 이는 2024.8.28 뉴욕주 전체 확대 이전 기준의 오래된 서술이었음. highlight-box로 "이전에 봤을 수 있는 오래된 안내를 정정한다"고 명시적으로 설명, FAQ 3개→4개(주 확대 관련 질문 추가), dateModified 07-24 갱신.
   - **기존 California 페이지에 SB 988 섹션 완전히 누락돼있던 것 발견 및 신규 추가**: 기존엔 AB5(근로자 분류 테스트)만 다루고 있었는데, SB988은 AB5와 별개의 법(계약/지급 요건)이라 혼동하기 쉬운 지점을 명시적으로 구분해서 설명, 직종 제한 목록도 highlight-box로 강조. FAQ 2개→3개, dateModified 07-24 갱신.
   - Illinois 페이지는 기존에 이미 정확하고 상세했으므로 내용 수정 없이 허브 페이지로의 상호링크 한 줄만 추가.
3. **Kill Fee Clause 클러스터 실행**: 신규 페이지 `blog/freelance-kill-fee-clause.html` 작성(933단어) — 킬피 개념(잡지/출판업계 용어 기원 설명), 단계별 요율 비교표(착수 전 없음/초기 25%/중반 50%/완료 후 75~100%), 보증금(deposit)과의 차이 설명, 실제 계약서에 바로 쓸 수 있는 조항 문구(clause-box), 클라이언트가 거부할 때의 대응 절차(Freelance Isn't Free 언급 → 소액소송 → 변호사 서면통지). contract-generator.html·late-payment-fee.html·신규 허브 페이지로 상호링크.
4. **연동**: `blog/index.html` 최신순 2개 추가(신규 허브 페이지가 최상단), 총 blog 파일 58개 = index.html 항목 58개 정확히 일치 확인. `sitemap.xml`에 신규 URL 2개 추가 + 수정된 IL/NY/CA 3개 페이지 lastmod를 07-18→07-24로 갱신.
5. **검증**: 신규 2개 + 수정 3개, 총 5개 blog 파일 + `blog/index.html` 전부 (1) `html.parser` 파싱 (2) `<div>`/`</div>` 개수 일치 (3) JSON-LD `json.loads()` 유효성 — 스크립트로 일괄 통과 확인. `blog/index.html`은 추가로 `node --check`로 posts 배열 JS 문법 검증. `sitemap.xml`은 `ElementTree` 파싱 + 중복 URL 없음 확인, 총 URL 105개.
6. **다음 배치 후보로 고려할 만한 것 (이번엔 진행 안 함)**: 이번 세션에 보류한 3개 클러스터(직업별 인보이스 템플릿/주별 소득세 계산기/플랫폼 수수료 계산기)는 경쟁이 매우 강하지만 "중요기능은 경쟁이 강해도 결국 해야된다"는 원칙에 따라 롱테일 진입 전략(예: 특정 소득 구간·특정 주 조합처럼 아주 좁힌 키워드)을 다시 설계해서 재검토할 가치가 있음 — 다음에 시간 여유 있을 때 논의.

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
- 2026-07-20 기준 테이블이 있는 파일 18개: `late-payment-fee.html`, `blog/freelance-invoice-vs-receipt.html`, `blog/freelance-tax-guide-for-beginners.html`, `blog/how-to-write-a-freelance-expense-report.html`, `blog/how-to-write-a-scope-of-work-for-freelance-projects.html`, `blog/late-fee-laws-freelancers-ohio.html`, `invoice-tracker.html`, `time-tracker.html`, `blog/late-fee-laws-freelancers-tennessee.html`, `blog/late-fee-laws-freelancers-missouri.html`, `blog/late-fee-laws-freelancers-maryland.html`, `blog/late-fee-laws-freelancers-oregon.html`, `blog/late-fee-laws-freelancers-nevada.html`, `blog/late-fee-laws-freelancers-kentucky.html`, `blog/late-fee-laws-freelancers-south-carolina.html`, `blog/late-fee-laws-freelancers-alabama.html`, `blog/late-fee-laws-freelancers-louisiana.html`, `blog/late-fee-laws-freelancers-oklahoma.html`. **신규 5개는 처음부터 `.table-scroll`/`.table-scroll-hint`/`min-width:420px` 패턴을 적용해서 작성함 — 07-18에 겪었던 사후수정 실수를 반복하지 않음.**

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
7. **사용자 승인 없이 먼저 진행하지 말 것.** 다만 (2026-07-14 사용자가 명시적으로 지적함) 같은 작업 축에서 이미 방향을 확정했으면 — 예: "차별화/틈새전략으로 최대한 해라"처럼 명시적으로 전권을 준 경우 — 그 이후 유사한 개별 작업(예: 18개 툴 각각에 자동저장 적용)마다 다시 확인받지 말고 계속 진행할 것. 매번 재확인은 사용자를 짜증나게 함. **새로운 종류/방향의 작업으로 넘어갈 때만** 승인을 구하면 됨.

## 현재 열려있는 이슈 (다음에 확인할 것)

- **(2026-07-24 추가, 다음 최우선 확인 대상)** 이번 세션에 신규 작성한 2개 페이지(`freelance-isnt-free-act-states-guide.html`, `freelance-kill-fee-clause.html`)는 late-fee 시리즈와 다른 새로운 키워드 축이라 GSC에 어떤 쿼리로 잡히는지 지금까지의 late-fee 패턴과 다를 수 있음 — 다음 GSC 데이터에서 "freelance isn't free act", "kill fee clause" 계열 쿼리 노출 여부부터 확인. 기존 New York/California 페이지 팩트 수정(NY주 전체 확대, CA SB988 추가)이 순위나 클릭에 영향을 주는지도 함께 관찰. 보류한 3개 클러스터(직업별 인보이스 템플릿/주별 소득세 계산기/플랫폼 수수료 계산기)는 롱테일로 좁혀서 재검토할 가치가 있다고 판단했으니, 사용자가 이어가길 원하면 그 방향으로 키워드를 다시 좁혀서 설계할 것.
- **(2026-07-20 추가, 다음 최우선 확인 대상)** 이번 세션에 신규 작성한 5개 주(Kentucky/South Carolina/Alabama/Louisiana/Oklahoma)는 아직 GSC에 전혀 노출되지 않음 — 다음 세션에서 색인 여부부터 확인. 07-16 위젯 8개 주(NY/OH/CA/NJ 등)는 07-18 대비 클릭/순위에 유의미한 변화 없음(2~4일 간격은 여전히 판단하기엔 이름) — 계속 관찰. 07-18 신규 5개 주(TN/MO/MD/OR/NV)도 이번 세션까지 노출 0으로 아직 색인 전 단계로 추정.
- **(2026-07-20 추가, 중요한 착시 정정 — 다음 세션에서 같은 실수 반복하지 말 것)** 페이지 단위 GSC 데이터만 보면 Illinois(평균 5.73위)/Texas(7.3위)/Colorado(10.04위)/Georgia(12.86위) 등이 "순위는 좋은데 클릭 0"으로 보여서 제목/메타(CTR) 문제로 오판하기 쉬움. 그러나 **쿼리 단위로 재확인하면 전혀 다름** — 실제 헤드키워드 "[주] late fee calculator"의 순위는 Illinois 71.12위, Pennsylvania 75.52위, Georgia 73.59위, Wisconsin 74위, Washington("washington state late fee") 36.7위로 전부 페이지 5~7 밖. 페이지 단위 평균 순위가 좋아 보이는 건 노출량이 거의 없는 롱테일 변형 쿼리들이 섞여 평균을 끌어올린 착시이고, 실질적으로는 **여전히 순위(경쟁) 문제이지 CTR 문제가 아님** — 제목/메타를 손봐도 소용없는 위치. **다음에 "고순위·저클릭" 페이지를 볼 때는 반드시 페이지 단위 평균 순위가 아니라 실제 타겟 헤드키워드의 쿼리 단위 순위를 확인한 뒤에 CTR 재작성 여부를 판단할 것.**
- **(2026-07-18 추가, 다음 최우선 확인 대상)** 07-16에 위젯을 추가한 8개 주(NY/FL/IL/PA/GA/IN/WI/WA) 중 NY/OH/CA/NJ 4개 페이지에서 이번 세션 GSC 데이터에 처음으로 실제 클릭이 잡혔음(각 1~2클릭). 다음 GSC 데이터에서 이 클릭이 늘어나는지, 그리고 "[주] late fee calculator" 개별 쿼리 순위(07-18 기준 여전히 60~90위대)가 좁혀지는지 최우선 확인. 이번 세션에 신규 작성한 5개 주(TN/MO/MD/OR/NV)와 인접주 비교 FAQ를 추가한 19개 기존 페이지도 다음 GSC 데이터에서 순위/클릭 변화가 있는지 함께 확인할 것 — 특히 "인접 주 비교" FAQ가 AI 검색(예: ChatGPT/Perplexity 답변에 인용되는지)에서 효과가 있는지는 GSC만으로는 안 보이므로, 사용자가 별도로 체감하는 바가 있으면 다음 세션에 공유받을 것.

- 애드센스 3차 재심사 결과 대기 중. **(2026-07-14 추가)** 결과가 나오면 승인/반려 여부와 무관하게 그 피드백을 콘텐츠 원칙에 최우선 반영할 것 — 위 "콘텐츠 품질 경각심" 섹션 참고.
- 미색인 페이지 존재 (GSC coverage: "발견됨-미색인" 3건 + "크롤링됨-미색인" 1건 — 2026-07-10/12/14 데이터 동일하게 확인됨, 3주째 그대로라 단순 크롤링 지연이 아닐 가능성도 있음). 기존 후보 3개(`blog/how-to-write-a-freelance-proposal.html`, `blog/how-to-write-a-scope-of-work-for-freelance-projects.html`, `email-templates/quote-email.html`) **2026-07-14에 직접 점검 완료**: robots noindex 없음, sitemap 포함됨, canonical 누락은 사이트 전체 공통이라 이 페이지들만의 특이사항 아님. 대신 콘텐츠 결함 2건 발견해 수정(quote-email.html FAQPage 스키마 누락, freelance-proposal.html FAQ 자체 없음+2개월간 dateModified 갱신 이력 없음+내부링크 보강). scope-of-work 블로그는 특이 결함 없음(canonical 있음, 내부링크 5건 정상) — **아직 미색인이면 순수 크롤링 시간/신규 도메인 문제일 가능성이 높다는 뜻.** 색인 요청은 여전히 금지, 다음 GSC 데이터에서 이 3개가 여전히 미색인인지만 재확인.
- GSC coverage "중복 페이지 2건"은 `index.html` vs `/?ref=producthunt`로 확인 완료, 무해함, 추가 조치 불필요. "리디렉션이 포함된 페이지 3건"은 아직 원인 미확인 — 다음 세션에 어떤 URL인지 GSC에서 직접 확인 필요.
- **(2026-07-16 추가, 다음 최우선 확인 대상)** 이번 세션에 미니 계산기 위젯 + title/meta 갱신한 8개 주 페이지(New York/Florida/Illinois/Pennsylvania/Georgia/Indiana/Wisconsin/Washington)의 "[주] late fee calculator" 쿼리별 순위 변화를 다음 GSC 데이터에서 최우선 확인할 것. 페이지 종합 순위(5~10위대)는 이미 나쁘지 않았으니, **쿼리 단독 순위(예: NY는 87.93위였음)가 좁혀지는지가 이 작업의 성공 여부를 가르는 핵심 지표.** 클릭 수도 함께 확인(현재 이 8개 페이지 전부 클릭 0에 가까움).
- **다음 GSC 데이터 받으면 최우선으로 확인할 것 (보강 효과 검증)**: 07-10/07-12에 보강한 19개 페이지(`late-payment-fee.html` 포함 — 목록은 아래 참고) + 이번 07-14에 보강한 `blog/freelance-tax-guide-for-beginners.html`, `blog/freelance-rate-negotiation-guide.html` 2개까지 순위 변화 확인.
  - 07-10/07-12 보강 19개: `how-to-write-a-freelance-contract.html`, `hourly-rate.html`, `payment-received.html`, `quote.html`, `project-profit.html`, `budget-planner.html`, `blog/how-to-write-a-freelance-invoice.html`, `tax-estimator.html`, `time-tracker.html`, `invoice-tracker.html`, `receipt.html`, `client-proposal.html`, `milestone-calculator.html`, `savings-calculator.html`, `nda-generator.html`, `client-intake-form.html`, `expense-report.html`, `scope-of-work.html`, `contract-generator.html`, `late-payment-fee.html`.
- **"화면 FAQ / FAQPage 스키마 누락" 문제, 2026-07-12엔 "18개 툴 전체 해소"라고 기록했으나 부정확했음** — 2026-07-14에 `index.html`(Invoice Generator, 18개 중 하나)에서 정확히 같은 결함(화면 FAQ 있는데 스키마 없음)을 추가로 발견해 수정함. 07-12 전수조사 때 index.html이 "Invoice Generator = index.html"이라는 걸 놓쳐서 누락된 것으로 추정. **이제는 진짜로 18개 툴 전체 해소.** blog/email-templates 쪽은 지금까지 `payment-received.html`, `freelance-rate-negotiation-guide.html`, `how-to-write-a-freelance-proposal.html`(전부 FAQ 신규 작성), `quote-email.html`(스키마만 추가) 4건 처리. 나머지 blog(38개)/email-templates(22개)는 전수조사 안 함 — 다음에 여유 있을 때 스캔 가치 있음. **다만 07-14에 강조된 콘텐츠 품질 원칙에 따라, 스캔 결과 스키마가 없는 페이지를 발견해도 기계적으로 FAQ를 끼워 넣지 말고 그 페이지 자체가 노출/클릭 관점에서 보강할 가치가 있는지부터 먼저 판단할 것.**
- **(2026-07-14 신규 관찰, 조치 보류)** late fee 주(州)별 블로그 중 Illinois(순위 5.73), Texas(순위 7), New Jersey(순위 7.68), Colorado(순위 8.95), Michigan(순위 10.48), Georgia(순위 11), Washington(순위 16.55), Pennsylvania(순위 18.2)가 이미 1~2페이지권인데 클릭 0. 개별 노출량이 9~51회로 적어 이번엔 결함이라 단정하지 않았음. **다음 데이터에서 노출이 누적됐는데도(특히 Illinois/Texas처럼 순위 5~7위) 여전히 클릭 0이면 제목/메타 설명 재작성(CTR 개선) 검토할 것.** 이건 07-12까지 써온 "스키마/FAQ 보강" 패턴과는 다른 종류의 문제(콘텐츠 깊이가 아니라 클릭 유도력)라는 점 기억할 것.
- **(2026-07-14 신규, GA4 트래픽 분석)** 지난 4주(6/16~7/13) 활성 사용자 64명, 재방문자 2명뿐. 유입 1위는 (direct)/(none) 47세션, 2위는 indiehackers.com 리퍼럴 15세션인데 신규 사용자는 1명뿐(한 명이 반복 방문). google/organic은 12세션, bing 4세션 — GSC 노출 수백~수천 건 대비 실제 검색 유입이 여전히 매우 작다는 걸 GA4로도 재확인. 도시 데이터는 국제적으로 흩어져 있고(파키스탄/나이지리아/베트남 등) 미국 도시가 거의 안 보임 — 타겟(미국 프리랜서)과 실제 유입원이 어긋나 있다는 신호.
- **(2026-07-14, 백링크 관련 사용자 판단)** 사용자가 Semrush로 백링크 현황 직접 확인(백링크 92개, 추천 도메인 27개, Authority Score 2) 후 **"백링크는 할 수 있는 만큼 충분히 했다"고 명확히 결론 내림.** Claude가 처음엔 디렉토리 위주 저품질 링크라는 점을 짚었으나, 사용자가 이미 인지하고 있고 이 이상 디렉토리를 늘리는 건 의미 없다고 판단한 것 — **앞으로 세션에서 백링크 관련 제안이나 재검토를 먼저 꺼내지 말 것.** 사용자가 먼저 얘기 꺼내지 않는 한 이 주제는 종결된 것으로 취급.
- **(2026-07-14, 우선순위 재확인)** 사용자가 "지금은 콘텐츠가 가장 중요하다"고 명확히 함. 오늘 시작한 "툴 기능 차별화"는 콘텐츠 작업을 대체하는 게 아니라 병행하는 것이며, **콘텐츠(GSC 기반 보강/신규 판단)가 우선순위 1번이라는 원칙은 변하지 않았음.** 다음 세션에서 GSC 데이터가 새로 오면 콘텐츠 작업부터 먼저 처리하고, 여유가 있을 때 툴 차별화를 이어갈 것.
- 이후엔 다시 GSC 노출·순위 기준으로 다음 보강 대기열 산정 (신규 데이터 기다리는 중).
- **(2026-07-14, 툴 차별화 1단계 완료)** 18개 툴 전체에 브라우저 자동저장 기능 적용 완료 (상세는 위 "작업 이력 > 2026-07-14 세션" 11번 항목 참고). **다음 툴 차별화 후보로 고려할 만한 것**: (1) 아직 안 건드린 다른 종류의 기능 격차 — 예를 들어 PDF 커스터마이징(색상/로고 위치), CSV 내보내기, 이메일로 바로 전송 같은 기능은 이번엔 조사 안 함. (2) 이번엔 "저장 기능"이라는 한 가지 축만 팠는데, 다른 축(예: 다국어/다통화 지원 강화, 모바일 UX)도 경쟁사 리서치 없이 아직 안 봄. 다만 콘텐츠 작업이 항상 우선순위 1번이라는 원칙 유지.

