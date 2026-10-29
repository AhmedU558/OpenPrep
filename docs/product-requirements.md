# OpenPrep — product requirements

OpenPrep (working title, configurable through `NEXT_PUBLIC_APP_NAME`) is an independent, free, open-source practice platform for exam preparation. Its first content set is USMLE Step 1, Step 2 CK and Step 3. It aims to match the **educational workflows** of commercial question banks. It does not copy their content, branding, or implementation.

## 1. Sources and method

Requirements come from UWorld's **publicly readable** marketing pages, read in a browser on 2026-10-29 without logging in:

| Page | URL |
|---|---|
| USMLE overview | https://medical.uworld.com/usmle/ |
| Feature tour | https://medical.uworld.com/usmle/features/ |
| Study Planner | https://medical.uworld.com/usmle/features/study-planner/ |
| Flashcards | https://medical.uworld.com/usmle/features/flashcards/ |
| My Notebook | https://medical.uworld.com/usmle/features/my-notebook/ |
| UAsk (AI assistant) | https://medical.uworld.com/usmle/features/uask/ |

**Not accessed:** the logged-in QBank, the free demo (it requires an account), self-assessments, the Medical Library, the mobile app, and any network traffic or scripts. No question text, explanations, images, or videos were copied. Where a workflow could only be seen described in marketing copy, the design below is our own, based on the general educational use case. Such items are marked **[assumption]**.

## 2. Verified observations (from the public pages)

1. **Question banks by exam.** Separate banks exist for Step 1, Step 2 CK and Step 3. Questions are clinical vignettes organized **by subject and system**. *(overview, features)*
2. **Create Test.** Users build custom tests from the bank by subject and system. **Tutor mode** shows the explanation after each question, and **Timed mode** is more exam-like. *(features)*
3. **Exam-like interface.** The interface is described as mirroring the real exam. *(overview, features)*
4. **Explanations.** Each answer has a detailed explanation of why every option is right or wrong, with illustrations, charts, and graphs. *(features)*
5. **Self-assessments.** Formal practice exams: Step 1/2 CK have **four 60-minute blocks of 40 unique questions**. Afterwards the user gets explanations, a ranking against other students, and an **estimated score**. *(features)*
6. **Previous Tests.** A list of created tests. Paused tests can be **resumed**, and finished tests show detailed results. The list can also be used to search previously reviewed explanations. *(features)*
7. **Performance.** Three views: **Overall** (total answered, overall performance), **Reports** (by subject, system, topic), and **Graphs** (progression by date and by test). *(features)*
8. **Peer comparison.** The percentage of users choosing each answer option, plus percentile rank and average time compared with others. *(features)*
9. **Flashcards.** Premade decks plus user-created cards made by **highlighting explanation content**. Users rate how well they knew a card, and **spaced repetition** adjusts when it comes back. Cards can be filtered by subject or keyword. The flashcard tab tracks cards due, personal goals, difficulty settings, and stats (daily study time, time per card, total reviewed). *(features, flashcards)*
10. **My Notebook.** Users copy text and graphics from explanations into a personal notebook, organize it in tabs and nested pages (up to 4 levels), add their own notes, **tag** entries, and search. *(my-notebook)*
11. **Study Planner.** The user enters start date, end date, and **available study hours**. The planner generates **daily practice tests and tasks** covering the subjects and systems they need, shown as a calendar or list. Tasks can be reassigned by drag and drop, and the plan adapts to progress. *(study-planner)*
12. **AI assistant (UAsk).** Answers questions in context while studying, and its answers can be turned into notebook entries or flashcards. It is grounded in the vendor's content. *(uask)*
13. **Sync and mobile.** Progress saves and syncs across devices, and an app exists. *(features)*
14. **Help.** How-to guide, FAQ, and contact form. *(features)*
15. **Educators.** A separate learning platform where instructors assign content and track students. *(overview)* This is out of scope for v1.
16. **Step 3 CCS.** Computer-based case simulations are part of Step 3 review. *(overview)* This is out of scope for v1 (see §5).

## 3. Assumptions about in-app behavior [assumption]
These are common question-bank interaction patterns that the public pages imply but do not show in detail. They are implemented the way we think works best:
- In the exam screen: question navigator, mark/flag, strike-out of answer options, text highlighting, lab-value reference, calculator, notes, and keyboard shortcuts.
- In timed mode, explanations are hidden until the block ends. In tutor mode, the answer is locked after submission.
- "Reset bank" means clearing usage without deleting notes or flashcards.

## 4. Users and roles
| Role | Can |
|---|---|
| Guest (demo) | Practice seeded questions. Progress lives only in that browser session and is not saved to the server. |
| Learner | Everything in §6 for their **own** data only. |
| Editor | Create and edit questions, move them through draft → review, and import content. |
| Admin | Everything an editor can do, plus publish, manage topics, manage users and roles, and read the audit log. |

Roles are checked on the server for every request. The client never decides authorization.

## 5. Out of scope for v1 (documented, not hidden)
- **Peer statistics** ("% chose this option", percentile, estimated score). These need a large real user base and a validated scoring model. Showing invented numbers would mislead learners. The data model lets them be added once enough anonymized answer data exists, and they appear only when a minimum sample size is reached.
- **CCS case simulations**: a separate, complex simulation product. Listed as future work.
- **Educator platform, video library, medical library**: content-heavy products.
- **Native mobile apps**: the web app is responsive and installable as a PWA in a later phase.

## 6. Functional requirements (summary — details in `feature-matrix.md`)
A Accounts · B Question bank · C Exam engine · D Learning tools · E Analytics · F Planner · G Content management · H Accessibility. These follow the project brief. Each feature ID (A1, B3, …) is defined in the feature matrix and referenced in tests.

## 7. Non-functional requirements
- **Zero-cost core:** no paywalls, premium locks, billing, or usage limits. Local development needs no paid service.
- **Security:** OWASP Top 10 coverage, server-side authorization, IDOR protection, CSRF protection, rate-limited auth endpoints, no secrets in the repository.
- **Accessibility:** WCAG 2.2 AA target, full keyboard operation of the exam screen, visible focus states, screen-reader labels.
- **Performance:** question pages under 200 KB of JavaScript on first load where possible, paginated lists, and indexed queries.
- **Content honesty:** seed questions are original and labeled as demo content. No fabricated references. Every question stores its source and license.
