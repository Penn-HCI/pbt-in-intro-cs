# PBT materials site

The interactive walkthrough at https://penn-hci.github.io/pbt-in-intro-cs/,
built with Next.js and deployed to GitHub Pages by `.github/workflows/deploy.yml`
on every push to `main`.

## Editing content

- Page text: `content/intro.md`, `content/what-is-pbt.md`, `content/how-we-taught.md`
- Lecture slides: `public/pbt-edu/intro-to-pbt-lecture/` (`1.jpg` … `14.jpg` plus `slides.pdf`)
- Code viewers: `public/pbt-edu/pbtIntro.ml`, `public/pbt-edu/queueTest.ml`.
  Links like `[text](#pbtintro-L34)` jump to a line in these files, so update the
  line numbers in `how-we-taught.md` if you edit them.

Markdown extensions (see `components/markdown.tsx`):

- `![Title](/folder/ "14")` shows a 14-slide carousel from `public/folder/`
- `![file.ml](/file.ml#L5-L300 "https://github.com/...")` shows lines 5–300 of a source file

## Running locally

```bash
cd site
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
```

In CI, `BASE_PATH` is set to `/pbt-in-intro-cs` so assets resolve
under the project-pages URL. Locally it is unset and the site is served at `/`.

## Credit

Adapted from [Xiaorui Liu's personal website](https://xiaoruiyliu.github.io/), which is
based on Eric Rawn's [personal website](https://www.ericrawn.media/). Licensed under GPLv3 (see `LICENSE`).
