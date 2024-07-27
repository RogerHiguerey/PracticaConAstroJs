proyecto-futbol-news/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── NewsCard.astro
│   │   ├── MatchResult.astro
│   │   ├── EventCard.astro
│   │   └── admin/
│   │       ├── AdminLayout.astro
│   │       ├── NewsForm.astro
│   │       ├── ResultForm.astro
│   │       └── EventForm.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── noticias/
│   │   │   ├── index.astro
│   │   │   └── [id].astro
│   │   ├── resultados/
│   │   │   ├── index.astro
│   │   │   └── [id].astro
│   │   ├── eventos/
│   │   │   ├── index.astro
│   │   │   └── [id].astro
│   │   └── admin/
│   │       ├── login.astro
│   │       ├── index.astro
│   │       ├── noticias/
│   │       │   ├── index.astro
│   │       │   ├── crear.astro
│   │       │   └── [id].astro
│   │       ├── resultados/
│   │       │   ├── index.astro
│   │       │   ├── crear.astro
│   │       │   └── [id].astro
│   │       └── eventos/
│   │           ├── index.astro
│   │           ├── crear.astro
│   │           └── [id].astro
│   ├── api/
│   │   ├── noticias.js
│   │   ├── resultados.js
│   │   ├── eventos.js
│   │   └── auth.js
│   └── utils/
│       └── auth.js
├── public/
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json