# jyothischandran.github.io

Source for my academic website, **<https://jyothischandran.github.io>**.

I'm Jyothis Chandran, a PhD candidate at the Instituto de Física de Cantabria (IFCA, CSIC–UC) in Santander, working on CMB component separation and thermal SZ Compton-_y_ maps.

The site is built with [Jekyll](https://jekyllrb.com/) on top of the [al-folio](https://github.com/alshedivat/al-folio) theme (v0.14.7) and deployed with GitHub Actions.

## Where things live

| What                            | File                                          |
| ------------------------------- | --------------------------------------------- |
| Homepage text, tagline, photo   | `_pages/about.md`, `assets/img/my_photo.jpg`  |
| News items on the homepage      | `_news/*.md` (one file per item)              |
| Publications                    | `_bibliography/papers.bib`                    |
| Talks                           | `_pages/talks.md`                             |
| CV                              | `assets/pdf/cv.pdf` (shown on `_pages/cv.md`) |
| Profile links (email, ORCID, …) | `_data/socials.yml`                           |
| Site title, description, footer | `_config.yml`                                 |
| Website plan and open to-dos    | `HANDOFF.md` (not published)                  |

### Adding a news item

Create `_news/YYYY-MM-DD-short-name.md`:

```markdown
---
layout: post
date: 2026-11-20
inline: true
related_posts: false
sitemap: false
---

Short announcement, with [links](https://example.org) in Markdown.
```

The homepage shows the five most recent items; `/news/` lists all of them.

### Adding a publication

Paste the BibTeX entry (from ADS or arXiv) into `_bibliography/papers.bib`, then add any of these optional fields:

- `abbr = {JCAP}`: the venue badge.
- `arxiv = {2603.17799}`, `pdf = {https://arxiv.org/pdf/2603.17799}`: buttons.
- `abstract = {...}`: an "Abs" button that expands the abstract.
- `bibtex_show = {true}`: a "Bib" button that expands the BibTeX.
- `selected = {true}`: also list the paper on the homepage.
- `preview = {figure.png}`: a thumbnail from `assets/img/publication_preview/`.

My name is highlighted automatically (`scholar:` in `_config.yml`). In long author lists it stays visible even when the rest are collapsed.

## Previewing locally

Any of these works:

- **GitHub Codespaces / VS Code dev container:** open the repo in a Codespace (or "Reopen in Container" in VS Code). In the container's terminal, run `bundle install` once; `bin/entry_point.sh` then serves the site on port 8080.
- **Docker:** `docker compose up`, then open <http://localhost:8080>.
- **Ruby:** with Ruby 3.3 and its development headers (`ruby-devel` on Fedora), run `bundle install` and then `bundle exec jekyll serve`.

Run `npx prettier . --check` before pushing; CI runs the same check.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to the `gh-pages` branch. After each deploy, `broken-links-site.yml` checks the live site for broken links. `update-citations.yml` refreshes Google Scholar citation counts three times a week.

Wait for one deploy to finish before pushing again: two overlapping deploys can finish out of order.

## Credits and licence

Theme: [al-folio](https://github.com/alshedivat/al-folio) by Maruan Al-Shedivat and contributors, MIT licence (see `LICENSE`). The theme's own documentation (installation, customization, FAQ) lives in the upstream repository.
