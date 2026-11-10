# Website handoff: jyothischandran.github.io

This file briefs Claude Code on Jyo's personal academic website (al-folio theme on GitHub Pages). It covers what to do now (Phase 1), what is planned for later (Phase 2), and what Jyo does by hand (Phase 3).

## 0. Context and ground rules

**Owner.** Jyothis Chandran (Jyo) is a PhD candidate at IFCA (CSIC–UC), Santander, supervised by R. Belén Barreiro and Mathieu Remazeilles. Thesis submission is expected in March 2027. He works on CMB component separation and is a member of the LiteBIRD collaboration (thermal SZ group).

**Source of truth.** Use `assets/pdf/cv.pdf` (and its LaTeX source, if it is in the repo or nearby) for facts, dates, IDs and links. Do not invent numbers, dates, IDs or URLs. If something is missing, leave a `TODO(Jyo):` marker and list it at the end of the session.

**Workflow.**

1. **Exclude this file from the build.** Add `HANDOFF.md` to the `exclude:` list in `_config.yml`, so Jekyll doesn't publish it as a page.
2. **Use a branch.** Work on `site-cleanup`, with one commit per task below and clear commit messages.
3. **Check the al-folio version first.** Key names in `_config.yml` and `_data/socials.yml` differ between versions, so read the local files and their comments before editing.
4. **Search before deleting.** Before deleting any asset, `grep` the repo for references to it.
5. **Preview locally.** Use `bundle exec jekyll serve` or `docker compose up`, whichever the repo supports.
6. **Never push to `main` without Jyo's approval.** Show a summary of the changes and the remaining TODOs first.

## Phase 1: do now

### 1.1 Remove al-folio demo content

The live sitemap currently lists about 90 URLs, and only 5 are real pages (about, publications, talks, cv, home). The Ctrl-K search also exposes demo posts, projects, a book page and placeholder socials.

- **Demo collections.** Delete the contents of `_posts/`, `_news/`, `_projects/` and `_books/`. `_news/` is refilled with real items in 1.4.
- **Unused pages.** Delete everything in `_pages/` except `about.md`, `publications.md`, `cv.md`, the talks page and `404.md`. This includes blog, books, projects, people, teaching, repositories, dropdown, news, profiles, and any stub certifications, theses or presentations pages. Check each one first and keep it if it contains Jyo's own content.
- **Blog settings.** Keep the blog-related settings in `_config.yml` intact. Jyo wants to blog later, and re-enabling should only need `_pages/blog.md` restored from upstream al-folio.
- **Books collection.** Remove the books collection from `_config.yml`, along with any jekyll-archives config that exists only for books.
- **Demo assets.** Delete unreferenced demo assets: `assets/pdf/example_pdf.pdf`, demo images in `assets/img/` (numbered images, demo backgrounds, book covers), demo `assets/jupyter/` notebooks and demo `assets/json/` files. Never delete `my_photo*` or `cv.pdf`.
- **Demo data files.** Check `_data/` (repositories.yml, coauthors.yml, venues.yml and similar). Empty or delete demo entries that are no longer used.

**Acceptance check.**

- After a build, `_site/sitemap.xml` lists only real pages.
- `_site/assets/js/search-data.js` contains only real pages, real publications and real socials.

### 1.2 Fix socials (`_data/socials.yml`, or wherever this al-folio version keeps them)

The current placeholders open Einstein's Google Scholar profile, an example INSPIRE profile, alberteinstein.com, `you@example.com` and `example_pdf.pdf`. Replace them as follows, in this display order:

- **Email:** `chandran@ifca.es`. TODO(Jyo): the CV uses `chandran@ifca.unican.es`; pick one and make the site footer, about page and CV consistent.
- **ORCID:** `0000-0002-5805-3901` (from the CV).
- **Google Scholar:** take the user ID from the hyperlink in the CV source. If it isn't available, TODO(Jyo).
- **NASA ADS library:** take the link from the CV source. If this al-folio version has no ADS key, add a custom entry with the academicons ADS icon (`ai-ads`).
- **INSPIRE-HEP:** TODO(Jyo) for the author ID; remove the entry if there isn't one.
- **GitHub:** take the username from the CV source.
- **LinkedIn:** TODO(Jyo) for the handle.
- **Instagram:** TODO(Jyo) for the handle. Place it last among the profiles.
- **CV:** `/assets/pdf/cv.pdf`.
- **Remove:** `rss_icon` and the `custom_social` placeholder.

Then set `social: true` on the about page.

### 1.3 Publications (`_bibliography/papers.bib`)

- **JCAP 2026 (now published).** Replace the arXiv-only entry with the entry below. Check that `Compton-$y$` renders correctly.
  ```bibtex
  @article{Chandran2026JCAP,
    abbr        = {JCAP},
    title       = {Enhanced foreground mitigation in thermal {SZ} {Compton-$y$} maps via polarization and deprojection},
    author      = {Chandran, Jyothis and Remazeilles, Mathieu and Barreiro, R. B.},
    journal     = {Journal of Cosmology and Astroparticle Physics},
    volume      = {2026},
    number      = {08},
    pages       = {062},
    year        = {2026},
    month       = aug,
    doi         = {10.1088/1475-7516/2026/08/062},
    arxiv       = {2603.17799},
    pdf         = {https://arxiv.org/pdf/2603.17799},
    selected    = {true},
    bibtex_show = {true}
  }
  ```
- **MNRAS 2023.** The venue currently renders as the raw macro `\mnras`. Set `journal = {MNRAS}`, `volume = {526}`, `pages = {5682--5698}`, `selected = {true}` and `bibtex_show = {true}`.
- **All entries.** Remove the annotation text that appears in the venue line (for example "Preprint; first-author work on…" or "Peer-reviewed journal article; first-author paper"). It probably sits in `note`, `annotation` or similar fields.
- **Website buttons.** Remove `website` and `html` fields that only duplicate the DOI.
- **Abstracts and previews.** Add an `abstract` to each first-author paper; ask Jyo or copy it from arXiv. Add a `preview` image (one key figure per paper) in `assets/img/publication_preview/` once Jyo supplies the figures.
- **LiteBIRD papers.** Add the three LiteBIRD collaboration papers listed in the CV that are missing from the site: arXiv:2607.25285 (Aizawa et al.), arXiv:2607.20080 (Vinzl et al.) and arXiv:2606.23207 (Novelli et al.). Get the BibTeX from ADS or arXiv. Check that Jyo's name stays visible when the author list is truncated, and adjust `max_author_limit` if needed.
- **Zenodo DOIs.** The site and the CV give different DOIs, probably version DOIs versus concept DOIs. TODO(Jyo): confirm which to use; the concept DOI resolves to the latest version and is usually better for "cite this".
  - CIB-deprojected map: site has `10.5281/zenodo.18876143`, CV has `10.5281/zenodo.18876142`.
  - PR4 y-map: site has `10.5281/zenodo.7947597`, CV has `10.5281/zenodo.7940376`.
- **Moriond proceedings.** Do not add them until they appear; they are delayed.
- **Self-highlighting.** Check that `_config.yml` scholar settings (`last_name`, `first_name`) bold Jyo's name in every entry.

### 1.4 Homepage (`_pages/about.md`)

Switch on the homepage modules: `news: true`, `selected_papers: true` and `social: true`.

**Subtitle / tagline:**

```
PhD candidate · CMB component separation · thermal SZ
```

**About text.** Draft below. TODO(Jyo): confirm the free-free wording. Jyo describes that work as GNILC, while the CV says "ILC and NILC pipelines".

> I'm a PhD candidate at the Instituto de Física de Cantabria (IFCA, CSIC–UC) in Santander, supervised by Belén Barreiro and Mathieu Remazeilles. I develop component-separation methods that extract faint cosmological signals from multi-frequency CMB data.
>
> Much of my work so far has been on the thermal Sunyaev–Zeldovich (tSZ) effect, the imprint of hot gas in galaxy clusters and the cosmic web. I produced the _Planck_ PR4 NILC Compton-_y_ map (MNRAS 2023). It is public through the _Planck_ Legacy Archive and Zenodo and is used by other groups. I then developed a multi-Stokes Hybrid NILC that uses _Planck_ polarization maps to clean Galactic dust and synchrotron from the essentially unpolarized tSZ signal, combined with selective deprojection of CIB spectral moments (JCAP 2026).
>
> Within the Horizon Europe RadioForegroundsPlus project, I'm now working on non-parametric, GNILC-based reconstruction of Galactic free-free emission, and on convolutional neural networks for detecting extragalactic point sources in CMB maps. As a member of the LiteBIRD collaboration's thermal SZ group, I'm working towards a forecast for the tSZ × ISW cross-correlation. More broadly, I'm interested in secondary anisotropies, spectral distortions, cross-correlations with galaxy surveys, and line intensity mapping.

An optional closing line about a personal or community interest can be added later.

**News items (`_news/`).** Use one file per item with `inline: true`. TODO(Jyo): exact days. Use the 1st of the month as a placeholder and flag it.

| Date            | Text                                                                                                                                                              |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-11         | Talk on polarization-informed component separation for tSZ _y_-maps at the XII Meeting on Fundamental Cosmology, Córdoba (link the slides).                       |
| 2026-10         | Contributed talk on Hybrid _TQU_ NILC at _Galactic Science and CMB Foregrounds_, IAC, Tenerife.                                                                   |
| 2026-09         | Talk at _Cosmoglobe 2026_, Nordita, Stockholm.                                                                                                                    |
| 2026-08-27      | Our paper on polarization-aided foreground cleaning of tSZ _y_-maps is out in JCAP (link the DOI).                                                                |
| 2026-08         | Talk at COSMO-26, Leiden.                                                                                                                                         |
| 2026-05         | Talk at the Simons Observatory Foregrounds Working Group.                                                                                                         |
| 2026-03         | Paper on arXiv; CIB-deprojected Hybrid NILC _y_-maps released on Zenodo. Poster at the 60th Rencontres de Moriond, La Thuile.                                     |
| 2026, TODO date | Our PR4 _y_-map was used to study hot gas around the Sombrero galaxy (Li et al., ApJ 1009, 72) and in FRB–tSZ cross-correlations (Zhai et al., arXiv:2608.09014). |
| 2024-01         | Joined the LiteBIRD collaboration (thermal SZ project study group).                                                                                               |
| 2023-12         | First paper published in MNRAS: an improved PR4 Compton-_y_ map (map public on Zenodo and the PLA).                                                               |

### 1.5 Metadata and SEO (`_config.yml`)

- **Meta description:**
  `description: "PhD candidate at IFCA (CSIC–UC) working on CMB component separation: Planck PR4 thermal SZ Compton-y maps, Galactic foregrounds and LiteBIRD."`
- **Social previews and structured data:** set `serve_og_meta: true` and `serve_schema_org: true`. These make link previews work on WhatsApp, Slack and LinkedIn.
- **Preview image:** set `og_image` to the profile photo for now. Replace it with a _y_-map image in Phase 2.
- **Search Console:** add `google_site_verification:` with `TODO(Jyo)`; Jyo gets the code from Google Search Console.
- **Keywords:** set `keywords` (if supported) to: CMB, component separation, Sunyaev-Zeldovich, Compton-y, Planck PR4, NILC, foregrounds, LiteBIRD.
- **Site URL:** confirm that `url` is `https://jyothischandran.github.io` and `baseurl` is empty.

### 1.6 Talks page

- **Slides.** Add slide or poster links for every talk. TODO(Jyo): links for the IAC, Cosmoglobe, COSMO-26, SO FG WG and Moriond talks.
- **Earlier talks.** Ask Jyo whether there are 2024–25 talks or seminars to add, since the gap is noticeable.

### 1.7 Items for Jyo to check (report these; don't edit the CV PDF)

- **Talks table in the CV.** In the text extracted from the PDF, the dates and locations look shifted one row against the talk titles (for example, COSMO-26 appears next to "Sep 2026, Stockholm"). This may be a two-column extraction artifact, but check the table visually.
- **Email and Zenodo DOIs.** Resolve the inconsistencies noted in 1.2 and 1.3.

### 1.8 Finish

1. Run a clean build and check every page in both light and dark mode.
2. Check `sitemap.xml` and the Ctrl-K search.
3. Run the repo's broken-link check if it has one.
4. Give Jyo a summary, the diff and the TODO list, then push after approval.

## Phase 2: planned, do not implement yet

**Data products page** (`/data/`), with one section per product:

- **PR4 NILC _y_-map (2023).**
  - Links: _Planck_ Legacy Archive and Zenodo (DOI per 1.3).
  - Released with its masks.
  - Results: 7% lower thermal noise and 34% less CIB contamination than the PR2 _y_-map; σ8 = 0.76 ± 0.02 from map skewness.
  - Used by: Li et al. 2026 (Sombrero) and Zhai et al. 2026 (FRB–tSZ).
  - Usage: 655 downloads and 1,166 views (Zenodo, October 2026); refresh before publishing.
- **Hybrid _TQU_ NILC with CIB moment deprojection (2026).**
  - Link: Zenodo.
  - Result: 40–45% lower cross-correlation with IRAS 100 µm than the temperature-only map.
  - Used by: Zhai et al.
  - Usage: 110 downloads (October 2026).
- **Each section should include:**
  - A Mollweide preview and a zoom on a cluster such as Coma.
  - Download links.
  - Nside, beam FWHM, units, and file and mask names, all TODO(Jyo) from the papers or READMEs (do not guess).
  - Recommended masks and known caveats.
  - A three-line healpy quick-start.
  - A "How to cite" box (paper plus dataset DOI) and a "Used by" list.

**Research pages**, one short page per area, with one figure, two paragraphs and links:

- tSZ _y_-maps from _Planck_ PR4
- Multi-Stokes Hybrid NILC and CIB deprojection
- Galactic free-free reconstruction (GNILC)
- CNN point-source detection (RadioForegroundsPlus)
- LiteBIRD tSZ × ISW forecast

**Notebooks** for using the products, in a public GitHub repo linked from the data page:

- Load the map and apply masks.
- Compute pseudo-Cℓ with NaMaster.
- Compute one-point PDF and skewness.
- Optional: stack on a cluster catalogue.
- Optional: cross-correlate with a galaxy catalogue.

**Blog**, once `_pages/blog.md` is restored:

- First post: "Why polarization helps clean an unpolarized signal." Outline: tSZ has essentially no polarization, but dust and synchrotron are polarized; Q/U maps carry information about the foregrounds with zero tSZ response; adding them to the ILC suppresses Galactic residuals; one before/after figure.
- Later: occasional personal and research-life posts.

**Visual identity:**

- A _y_-map crop as the homepage banner and OG image.
- A small cluster blob as the favicon, replacing the current sparkle emoji.

**Interactive _y_-map (stretch goal):**

- Convert the HEALPix map to HiPS (hipsgen) and embed Aladin Lite.
- Watch tile volume on GitHub Pages: keep low orders only, or host the tiles elsewhere.

**Code releases (longer term):**

- GNILC and PS-CNN code, after cleanup, docs and a licence.
- A JOSS paper would make the software citable.

**Community page:** later, for the early-career Indian CMB researchers group, once its activities start. It could host a talk schedule and a list of past presenters.

## Phase 3: Jyo does by hand (not Claude Code)

- **Profile links.** Put the site URL on the IFCA staff page, LinkedIn, Google Scholar (homepage field), ORCID (websites), INSPIRE, ADS (via ORCID), GitHub profile, Instagram and Facebook bios, and the email signature.
- **Search Console.** Verify the site, then submit `sitemap.xml` once Phase 1 is live.
- **Slides and posters.** Add the URL or a QR code to the final slide of talks and to posters.
- **Zenodo records.** Optionally add the site as a related identifier on the records.
