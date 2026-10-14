---
layout: page
permalink: /cv/
title: cv
description: Curriculum vitae.
nav: true
nav_order: 4
---

<a href="{{ '/assets/pdf/cv.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener noreferrer">
  <i class="fa-solid fa-file-pdf"></i> Download CV (PDF)
</a>

*Last updated: October 2026.*

<iframe src="{{ '/assets/pdf/cv.pdf' | relative_url }}" width="100%" height="900px" style="border: 1px solid var(--global-divider-color); border-radius: 6px; margin-top: 1.5rem;">
  Your browser does not display embedded PDFs.
  <a href="{{ '/assets/pdf/cv.pdf' | relative_url }}">Download the CV instead.</a>
</iframe>

<!--
  NOTE ON al-folio VERSIONS
  Recent al-folio ships a dedicated `layout: cv` that renders a CV from
  assets/json/resume.json, with an optional PDF download button set via a
  `cv_pdf:` key in this front matter. If your version has it and you would
  rather have an HTML CV than an embedded PDF, replace the front matter with:

      ---
      layout: cv
      permalink: /cv/
      title: cv
      nav: true
      nav_order: 4
      cv_pdf: cv.pdf
      description: Curriculum vitae.
      ---

  and delete the body of this file. Check _layouts/ for cv.liquid (or cv.html)
  before switching — if it is absent, keep the version above, which needs
  nothing but the PDF.
-->
