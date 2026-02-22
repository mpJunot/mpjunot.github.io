# Junot Montpre — Portfolio

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success?style=flat-square)](https://mpjunot.github.io)

Professional portfolio — Junior Full-Stack developer, 5th year Epitech Paris. Looking for internship, fixed-term or permanent position from March.

---

## 🌐 Site

**[https://mpjunot.github.io](https://mpjunot.github.io)**

---

## 🛠 Tech stack

| Area        | Technologies                                      |
| ----------- | -------------------------------------------------- |
| Frontend    | React 19, TypeScript, Vite, Tailwind CSS           |
| Animations  | Framer Motion                                     |
| Hosting     | GitHub Pages (CI/CD via GitHub Actions)           |

---

## 📁 Repository structure

```
├── portfolio/                 # React app (Vite)
│   ├── src/
│   │   ├── App.tsx           # Main page
│   │   ├── data.ts           # Content (projects, skills, contact)
│   │   └── assets/
│   ├── index.html
│   └── package.json
└── .github/workflows/
    └── deploy.yml            # Build & deploy to GitHub Pages
```

---

## 🚀 Getting started

**Prerequisites:** Node.js 20+, pnpm

```bash
cd portfolio
pnpm install
pnpm dev
```

→ [http://localhost:5173](http://localhost:5173)

**Production build:**

```bash
pnpm run build
```

Output: `portfolio/dist/`

---

## 📦 Deployment

Deployment runs automatically on every push to `main`:

1. **Deploy static content to Pages** workflow (`.github/workflows/deploy.yml`)
2. Build in `portfolio/`
3. Upload `portfolio/dist` to GitHub Pages

**Required:**  
**Settings → Pages → Build and deployment → Source** = **GitHub Actions**.

---

## 📄 Contact

- **Email:** junot-hery-nantenaina.montpre@epitech.eu  
- **LinkedIn:** [linkedin.com/in/junot-montpre](https://www.linkedin.com/in/junot-montpre/)  
- **GitHub:** [github.com/mpJunot](https://github.com/mpJunot)

---

© 2025 Junot Montpre — All rights reserved.
