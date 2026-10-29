# Feature matrix

Basis column: **V#** = verified observation number in `product-requirements.md` §2. **A** = our own design for the general educational use case [assumption].
Independently implementable: ✅ yes · ⚠️ partially · ❌ not in v1 (reason given).
Test IDs refer to the brief's required test areas (T1–T15) and the files in `tests/` and `e2e/`.

## A. Accounts
| ID | Feature | Purpose / workflow | Basis | UI | Backend / data | Impl. | Test |
|---|---|---|---|---|---|---|---|
| A1 | Register | Email + password → account | A | `/register` form | `User`, password hash (scrypt), unique email | ✅ | T1 e2e register |
| A2 | Login / logout | Session cookie (httpOnly, SameSite=Lax) | A | `/login`, header menu | `Session` table, expiry, rotation | ✅ | T1 |
| A3 | Password reset | Email link → set a new password | A | `/forgot-password`, `/reset-password` | Single-use hashed token with expiry. SMTP (Mailpit locally) | ✅ | T1, T13 |
| A4 | Profile & preferences | Name, theme, font size, default exam | A | `/settings` | `User.preferences` JSON (validated) | ✅ | T13 |
| A5 | Guest / demo mode | Try questions without an account | A | "Try demo" button | Demo sessions are not saved to the server | ✅ | T3 |
| A6 | Authorization | Users can only see their own data | A | — | `userId` scoping in every query, role checks | ✅ | T2, T15 |

## B. Question bank
| ID | Feature | Purpose / workflow | Basis | UI | Backend / data | Impl. | Test |
|---|---|---|---|---|---|---|---|
| B1 | Browse by exam/subject/system/topic/difficulty | Find what to practice | V1, V2 | `/questions` with filter sidebar and counts | `Question`, `Topic` tree, indexes on (examId, subjectId, systemId, status) | ✅ | T3 |
| B2 | Search | Keyword search across stem and explanation | V6 | Search box | Postgres full-text search (`tsvector` + GIN index) | ✅ | T3 |
| B3 | Random & targeted practice | Pools: unused / incorrect / marked / omitted / correct / all | V2 | Create Test pool radios | `Response` history per user | ✅ | T3 |
| B4 | Original content | Seeded demo bank, labeled as demo | A | "Demo content" badge | `Question.source`, `license`, `isDemo` | ✅ | T14 |
| B5 | Single- and multiple-answer questions | SBA and "select all that apply" | A | Radio vs. checkbox | `Question.type`, `correctOptionIds[]` | ✅ | T4 |
| B6 | Clinical vignettes / case questions | Multi-paragraph stems, linked case sets | V1 | Rich text stem | Markdown stem (sanitized), optional `caseId` | ✅ | T4 |
| B7 | Image questions | Licensed images in the stem or explanation | V4 | Zoomable image | `Asset` with license metadata. Uploads are type- and size-checked | ✅ | T13 (upload validation) |
| B8 | Explanations & references | Why each option is right or wrong; key points | V4 | Per-option explanation, takeaway box | `Option.explanation`, `Question.keyPoints`, `references[]` | ✅ | T4 |
| B9 | Bookmarks (mark), notes, tags | Personal annotations | V6, V10 | Flag button, note drawer, tag chips | `Bookmark`, `Note`, `Tag` (per user) | ✅ | T5 |
| B10 | Report an error | Flag content problems to editors | A | "Report issue" dialog | `ContentReport` with status. Shown in the admin queue | ✅ | T11 |
| B11 | Import / export | JSON format, documented and validated | A | Admin import page | Zod schema, transactional bulk insert | ✅ | T11, T13 |

## C. Practice & exam engine
| ID | Feature | Purpose / workflow | Basis | UI | Backend / data | Impl. | Test |
|---|---|---|---|---|---|---|---|
| C1 | Tutor (untimed) and Timed modes | Learn vs. simulate | V2 | Mode switch in Create Test | `Session.mode` | ✅ | T6 |
| C2 | Custom count & topics | Build a block | V2 | Create Test form | Pool query + random sample on the server | ✅ | T3 |
| C3 | Answer, submit, validate | Choose → submit → feedback (tutor) | V2 | Option list, Submit | Server checks option IDs belong to the item; scoring only on the server | ✅ | T4 |
| C4 | Next / previous, navigator | Move freely within a block | A | Navigator rail, ←/→ keys | `SessionItem.position` | ✅ | T5 |
| C5 | Flag for review | Mark items | V6 | Flag toggle, flagged filter | `SessionItem.flagged` | ✅ | T5 |
| C6 | Change answer before submission | Allowed until the item or block is submitted | A | — | Item state machine | ✅ | T4 |
| C7 | Pause / resume ("suspend") | Continue later | V6 | Suspend button, Resume in Previous Tests | Session state `PAUSED`; the clock stops | ✅ | T8 |
| C8 | Submit & score | End the block → score | V2, V5 | End Block dialog | Transactional submit, idempotent | ✅ | T6, T7 |
| C9 | Negative marking (configurable) | For exams that use it | A | Advanced option | `Session.negativeMark` (default 0 for USMLE) | ✅ | T7 |
| C10 | Session recovery | Refresh or crash → state restored | A | Auto-resume banner | Every answer saved to the server immediately | ✅ | T8 |
| C11 | Server-side timing | Prevent clock tampering | A | Countdown shows server time | `deadlineAt`, active-time accounting; answers after the deadline are rejected | ✅ | T6 |
| C12 | Practice exam (multi-block, break) | Exam simulation | V5 | Block x of N, break screen | `Exam` → `Session[]` blocks, shared 45-minute break budget | ✅ | T6 |
| C13 | Exam tools: strike-out, highlight, lab values, calculator, font size | Exam-like interface | V3 (A for details) | Toolbar | Strike-outs and highlights saved per item | ✅ | T12 |
| C14 | Estimated score / percentile | Readiness | V5, V8 | — | Needs real peer data | ❌ see PRD §5 | — |

### Session state machine (C)
```
CREATED --start--> IN_PROGRESS --pause--> PAUSED --resume--> IN_PROGRESS
IN_PROGRESS --submit / deadline--> SUBMITTED (terminal, scored once)
CREATED|PAUSED --abandon--> ABANDONED (terminal, not scored)
```
Items: `UNSEEN → ANSWERED (answer changeable) → LOCKED (tutor submit or block submit)`.

## D. Learning tools
| ID | Feature | Purpose / workflow | Basis | UI | Backend / data | Impl. | Test |
|---|---|---|---|---|---|---|---|
| D1 | Per-option explanations, key points | Understanding | V4 | Explanation panel | See B8 | ✅ | T4 |
| D2 | References | Further reading | V4 | Reference list | `references[]`. Demo items use only verifiable general references (e.g. guideline names) and never invented citations | ✅ | T4 |
| D3 | Notebook (notes + clip from explanation) | Personal study notes | V10 | `/notebook`, "Add selection to notebook" | `NotebookPage` tree (max depth 4), tags, full-text search | ✅ | T5 |
| D4 | Review answered / wrong-answer review | Remediation | V6 | Results → filter incorrect, "Retry incorrect" | `Response` | ✅ | T9 |
| D5 | Flashcards with spaced repetition | Retention | V9 | `/flashcards` deck view, Again/Hard/Good/Easy | `Card` + SM-2 scheduling (`ease`, `interval`, `due`) | ✅ | T9 |
| D6 | Create card from selection | Quick transfer | V9 | "Make flashcard" from selected text | `Card.sourceQuestionId` | ✅ | T9 |
| D7 | Study lists / collections | Saved sets of questions | A | `/collections` | `Collection`, `CollectionItem` | ✅ | T5 |
| D8 | AI study assistant (optional) | Ask about the current question | V12 | "Ask" panel, hidden when no provider is configured | Provider abstraction: none / Ollama (local) / OpenAI-compatible (user key, server-side) | ⚠️ optional, off by default | T13 (no provider = feature hidden) |

## E. Analytics
| ID | Feature | Basis | UI | Backend / data | Impl. | Test |
|---|---|---|---|---|---|---|
| E1 | Overall accuracy, used/unused, avg time | V7 | `/performance` Overall | Aggregate SQL over `Response` | ✅ | T10 |
| E2 | By subject / system / topic | V7 | Reports tab, sortable table + bars | GROUP BY with indexes | ✅ | T10 |
| E3 | History & score trend | V7 | Graphs tab (line chart) | Per-session scores | ✅ | T10 |
| E4 | Time per question | V8 (own data only) | Column + histogram | `Response.timeMs` | ✅ | T10 |
| E5 | Daily / weekly activity, streak, goals | A | Activity heatmap, streak tile | Daily rollup query | ✅ | T10 |
| E6 | Weak-topic identification | A | "Focus next" list | Lowest accuracy with at least N attempts | ✅ | T10 |
| E7 | Downloadable report | A | "Download CSV / print PDF" | CSV export endpoint; print stylesheet | ✅ | T10 |
| E8 | Peer comparison | V8 | — | Needs a real user base | ❌ PRD §5 | — |

## F. Planner
| ID | Feature | Basis | UI | Backend / data | Impl. | Test |
|---|---|---|---|---|---|---|
| F1 | Exam date, start date, hours/day | V11 | `/planner` setup | `StudyPlan` | ✅ | T10 |
| F2 | Generated daily tasks covering subjects/systems | V11 | Calendar + list | `PlanTask` rows from a deterministic scheduler | ✅ | unit |
| F3 | Adjust targets, move tasks | V11 | Edit day, move task | Update `PlanTask.date` | ✅ | unit |
| F4 | Progress against plan | V11 | Progress bar, today card | Join tasks with sessions | ✅ | T10 |
| F5 | Reminders | A | Browser notification (opt-in) and .ics export | No paid push service | ⚠️ browser only | manual |

## G. Content management
| ID | Feature | Basis | UI | Backend / data | Impl. | Test |
|---|---|---|---|---|---|---|
| G1 | Admin dashboard | A | `/admin` | Counts, report queue | ✅ | T11 |
| G2 | Create / edit questions | A | Question editor with preview | Zod-validated server actions | ✅ | T11 |
| G3 | Bulk import / export | A | Upload JSON, download JSON | Transactional, dry-run report | ✅ | T11 |
| G4 | Topic & category management | A | Tree editor | `Exam`, `Subject`, `System`, `Topic` | ✅ | T11 |
| G5 | Draft → review → published | A | Status badges, transitions | `Question.status`, allowed transitions by role | ✅ | T11 |
| G6 | Source & license metadata | A | Required fields | `source`, `license`, `attribution` | ✅ | T11 |
| G7 | Audit trail | A | Audit log page | `AuditLog` (actor, action, entity, diff) | ✅ | T11 |
| G8 | Role-based permissions | A | Users page (admin) | `User.role` checked on the server | ✅ | T2 |

## H. Accessibility & usability
| ID | Feature | Test |
|---|---|---|
| H1 | Responsive layouts at 375 / 768 / 1280 px | T12 Playwright viewports |
| H2 | Full keyboard operation of the exam (A–J, ←/→, M, Enter) | T12 |
| H3 | Labels, focus rings, `aria-live` feedback, radio-group semantics | T12 axe-core |
| H4 | Contrast ≥ 4.5:1, light/dark themes | T12 axe-core |
| H5 | Empty, loading, and error states on every data view | T13 |
