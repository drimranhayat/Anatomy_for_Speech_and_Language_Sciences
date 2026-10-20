# Anatomy for Speech and Language Sciences

A complete static study website based on six supplied anatomy PDFs (167 pages). It contains 936 original practice MCQs, 272 comparative key concepts, six module lessons, 14 reference tables, six written-answer models and a zoomable atlas of all source pages.

## Start or publish on GitHub Pages

Open `index.html` directly, or serve this folder using `python -m http.server 8000`. No installation, build, account, API key or external font is required. Upload the contents of this ZIP to a GitHub repository root. In Settings → Pages, select Deploy from a branch → main → / (root), then save. `.nojekyll` is included. This package does not itself publish a live site.

## Course modules

1. Anatomical directions and movements
2. Nose and paranasal sinuses
3. Nasal septum and epistaxis
4. TMJ and muscles of mastication
5. Pharynx, vessels and nerves
6. Tongue, oesophagus and swallowing

The supplied lectures are attributed to Dr Sultan Badar Munir, Riphah International University. Source-page images retain their original wording and printed credits. New explanations and questions are original learning material; the package does not grant a blanket open license to the source illustrations.

## How to study

Read a module lesson, compare its quick tables, then use the key concepts for definitions, examples, comparisons and retrieval prompts. Open linked atlas pages to locate the anatomy. Source images can contain simplified wording, so read the paired clarification. Use the MCQs for instant feedback, then revisit errors and bookmarks. Each lesson also contains a written-answer prompt and model.

## Practice and mock exams

Ordinary practice has 10/20/50/100-question page sizes, defaulting to 20; the final page may contain fewer. Choosing an option immediately opens the correct answer and explanation. Option positions shuffle, but canonical answer identity remains stable. Navigation includes next/previous question, page selection, question map, jump, search, difficulty/topic filters, bookmarks and resume position.

The bank contains 816 concept-focused items and 120 original exam-style cases. Concepts are revisited through definition, application and misconception formats; the total does not imply 936 independent facts. Difficulty levels are editorial learning guides, not empirically calibrated item statistics. The 120 cases support mock exams of 30, 60 or 120 questions with equal representation from all six modules. Mock answers stay hidden until submission. Correct answers earn one point; wrong or unanswered questions earn zero. Only selected answers are recorded as attempted in saved course progress. Tests are untimed and are not an official institutional blueprint or past paper. Repeated tests can repeat cases.

## Progress

Answers, wrong-answer revision, bookmarks, reading settings and preferences save in this browser. Storage is separate from the earlier Speech and Language Sciences, Research Methodology and Multicultural websites. Export course progress before clearing browser data or moving devices. Import replaces the current course progress after confirmation. There is no automatic cross-device synchronization. Mock drafts save separately and are not included in the ordinary progress export. Clearing browser storage removes both records.

## Atlas and display

All 167 pages are included as local WebP images, with module galleries, page navigation, related learning links and fit/150%/200%/300% views. Zoom enlarges available source detail; it does not reconstruct absent scan detail. Most pages load only when opened or scrolled into view. Layouts adapt to phones, tablets and desktops; day/night themes and six module colors are included.

## Scope and references

The Reading guide and `PAGE_AUDIT.md` identify clarifications: movement versus joint classification; nasal drainage and vascular routes; Woodruff terminology; individualized bleeding management; TMJ mechanics; motor versus sensory supply; tongue exceptions; approximate oesophageal landmarks; and coordinated swallowing protection. Source clinical lists are educational, not individual diagnoses, medication instructions or invasive self-treatment protocols.

Recommended textbooks include Gray's Anatomy for Students (5th ed.) and Moore's Clinically Oriented Anatomy (9th ed.). Publisher records and accessible professional resources were checked; complete access to copyrighted textbooks or restricted chapters is not claimed. No invented quotations, page citations or patient results are supplied. See `COVERAGE.md` for topic inventory and evidence limits.

## Files and rebuilding

`data.js`, `essays.js`, `tables.js` and `audit.js` contain the learning data. JSON counterparts support inspection. `app.js`, `engine.js`, `exam.js`, `atlas.js`, `visuals.js` and `styles.css` implement the interface. Images are in `assets/slides/`. The website is ready to use; regeneration is optional:

```
python tools/build_all.py
node tests/check.js
node tests/interface.js
node --check app.js
node --check exam.js
node --check atlas.js
```

The Python data authoring scripts use the standard library. Pre-rendered source images are included; rebuilding text data checks that each expected image exists. No original PDFs or temporary OCR files are needed to run the website.

Automated checks passed. Browser visual rendering and real-device interactions remain unverified because preview infrastructure was unavailable; `VALIDATION.md` records the verification scope.
