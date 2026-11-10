// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications (journal articles, datasets, etc.) in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "Conference talks, seminars and posters, in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum vitae.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-first-paper-published-in-mnras-an-improved-planck-pr4-compton-y-map-doi-10-1093-mnras-stad3156-the-map-is-public-on-zenodo-and-the-planck-legacy-archive",
          title: 'First paper published in MNRAS: an improved Planck PR4 Compton-_y_ map (doi:10.1093/mnras/stad3156). The...',
          description: "",
          section: "News",},{id: "news-joined-the-litebird-collaboration-thermal-sz-project-study-group",
          title: 'Joined the LiteBIRD collaboration (thermal SZ project study group).',
          description: "",
          section: "News",},{id: "news-paper-on-arxiv-arxiv-2603-17799-cib-deprojected-hybrid-nilc-y-maps-released-on-zenodo-poster-at-the-60th-rencontres-de-moriond-la-thuile",
          title: 'Paper on arXiv (arXiv:2603.17799); CIB-deprojected Hybrid NILC y-maps released on Zenodo. Poster at...',
          description: "",
          section: "News",},{id: "news-talk-at-the-simons-observatory-foregrounds-working-group",
          title: 'Talk at the Simons Observatory Foregrounds Working Group.',
          description: "",
          section: "News",},{id: "news-talk-at-cosmo-26-leiden",
          title: 'Talk at COSMO-26, Leiden.',
          description: "",
          section: "News",},{id: "news-our-pr4-y-map-was-used-to-study-the-hot-gas-around-the-sombrero-galaxy-li-et-al-apj-1009-72-and-in-frb-tsz-cross-correlations-zhai-et-al-arxiv-2608-09014",
          title: 'Our PR4 y-map was used to study the hot gas around the Sombrero...',
          description: "",
          section: "News",},{id: "news-our-paper-on-polarization-aided-foreground-cleaning-of-thermal-sz-y-maps-is-out-in-jcap-doi-10-1088-1475-7516-2026-08-062",
          title: 'Our paper on polarization-aided foreground cleaning of thermal SZ y-maps is out in...',
          description: "",
          section: "News",},{id: "news-talk-at-cosmoglobe-2026-nordita-stockholm",
          title: 'Talk at Cosmoglobe 2026, Nordita, Stockholm.',
          description: "",
          section: "News",},{id: "news-contributed-talk-on-hybrid-tqu-nilc-at-galactic-science-and-cmb-foregrounds-iac-tenerife",
          title: 'Contributed talk on Hybrid TQU NILC at Galactic Science and CMB Foregrounds, IAC,...',
          description: "",
          section: "News",},{id: "news-talk-on-polarization-informed-component-separation-for-thermal-sz-compton-y-maps-at-the-xii-meeting-on-fundamental-cosmology-córdoba-slides",
          title: 'Talk on polarization-informed component separation for thermal SZ Compton-_y_ maps at the XII...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%68%61%6E%64%72%61%6E@%69%66%63%61.%65%73", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-5805-3901", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=NK2978EAAAAJ", "_blank");
        },
      },{
        id: 'social-ads',
        title: 'NASA ADS',
        section: 'Socials',
        handler: () => {
          window.open("https://ui.adsabs.harvard.edu/public-libraries/MIgXzImOTZWB6_MpgBuSGw", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jyothischandran", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
