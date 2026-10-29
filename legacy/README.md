# OpenUworld

A free, open-source, local-first question bank for **USMLE Step 1, Step 2 CK and Step 3**.
No server, no account, no build step: open `index.html` in a browser.

> Not affiliated with or endorsed by UWorld, NBME, or FSMB. Contains no UWorld content.
> Every built-in question is original and licensed CC BY-SA 4.0.

## Features
- **Tutor mode** (explanation after each question) and **timed mode** (90 s per question, block clock)
- Custom tests filtered by exam, subject, system, keyword, and pool (all / unused / incorrect / omitted / correct / marked)
- **Practice exams**: up to 8 timed blocks of 40, with a 45-minute shared break timer between blocks and combined results at the end
- Retry a test's incorrect questions as a new test in one click
- Select explanation text and add it to your notes
- Click any image to enlarge it; light / dark / auto theme; press **M** to mark
- **Study planner**: set your exam date, get a daily question target, track your streak, and start today's questions in one click
- Suspend a test and resume it later
- Mark questions, strike out choices (right-click), saved highlights, A–E / ←→ / Enter keys, adjustable text size
- Searchable lab reference ranges and a calculator
- Explanations with educational objectives; review any previous test, filtered by correct / incorrect / marked
- Per-question notes plus a searchable **Notebook**
- Performance by exam, subject and system; score trend; average time per question
- Flashcards: missed questions are added automatically, with doubling-interval review
- **Write your own questions** in Library → My questions (create, edit, delete, export as JSON)
- Import question packs (JSON); download and merge progress backups
- Progress is saved **on your own computer** (`data/progress.json`) and synced to your other devices on the same Wi-Fi. No cloud and no account.

## Run (recommended: progress saved on your computer)
Requires [Node.js](https://nodejs.org) 18 or newer. There is nothing to install.

```bash
node server.js
```

Open <http://localhost:8642>. Progress is saved to `data/progress.json` a few seconds after every change. Back that file up to keep your history safe. `data/` is git-ignored, so it never gets pushed.

**Phone or tablet:** start the server with `node server.js --lan` and open the `http://192.168.x.x:8642` address it prints on that device. Each answer, note, mark, highlight and flashcard is merged by timestamp, so studying on two devices doesn't overwrite either one. `--lan` lets anyone on your Wi-Fi open the app, so use it only on a network you trust.

**Without Node:** you can open `index.html` directly. Progress then stays only in that browser. Use **Library → Download progress backup** now and then.

## Question format
`questions.js` holds the built-in bank. You can also import a `.json` array of question objects from the Library tab:

```json
{
  "id": "s1-0100",
  "exam": "Step 1",
  "subject": "Pathology",
  "system": "Cardiovascular",
  "stem": "Vignette...\n\nWhich of the following...?",
  "choices": ["A text", "B text", "C text", "D text", "E text"],
  "answer": 2,
  "explanation": "Why C is right, and **why** the others are wrong.",
  "objective": "One-line takeaway (optional)",
  "image": "images/ecg1.png"
}
```

`answer` is the 0-based index of the correct choice. `**bold**`, `*italic*` and blank-line paragraphs work in `stem` and `explanation`. `image` is optional.

## Contributing questions
Add original questions only. Do not copy from commercial question banks or copyrighted review books.
Run `node test.js` before opening a PR; it checks every built-in question.

## License
Code: MIT (see `LICENSE`). Built-in questions: CC BY-SA 4.0.
