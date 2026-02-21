import adaptoImage from './assets/adapto.png'
import epitrelloImage from './assets/epitrello.png'
import copyMeImage from './assets/copyme.png'
import pixelWarImage from './assets/pixel-war.png'

export const name = 'JUNOT MONTPRE'
export const firstName = 'JUNOT'
export const lastName = 'MONTPRE'
export const githubAvatarUrl = 'https://github.com/mpjunot.png'
export const heroDescription =
  'Développeur Full-Stack junior — 5ᵉ année Epitech Paris. En recherche de stage, CDD ou CDI dès mars. Idées, code et design au même endroit.'
export const readmeSubtitle =
  'Full Stack Developer | Final year student at Epitech'
export const readmeBio =
  'Passionate about creating innovative web solutions and exploring the full spectrum of software development.'
export const aboutParagraphs = [
  "Étudiant en 5ᵉ année à Epitech Paris, spécialisé en développement Full Stack. La pédagogie d'Epitech repose sur l'apprentissage par projet et l'autonomie : peu de cours magistraux, beaucoup de pratique, de recherche personnelle et de travail en groupe. Cette formation m'a forgé une capacité à apprendre rapidement, à m'adapter et à livrer des projets concrets.",
  "Échange universitaire à Beijing Jiaotong University (Computer Science & IA). Motivé par l'apprentissage continu et l'exploration de nouveaux outils, j'accorde une attention particulière à la qualité et aux détails.",
]
export const aboutExperiences = [
  { role: 'Développement Full-Stack (React, TypeScript, Node.js, Docker)', company: 'Peinture Soleil' },
  { role: 'Front-End (HTML/CSS/JS)', company: 'Tiktak Production' },
]
export const aboutQualities = ['Rigueur', 'Autonomie', 'Travail en équipe', 'Adaptabilité']
export const contactEmail = 'junot-hery-nantenaina.montpre@epitech.eu'
export const contactPhone = '06 52 07 02 08'
export const contactLinks = [
  { label: 'GitHub', href: 'https://github.com/mpjunot', icon: 'github' as const },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/junot-montpre/', icon: 'linkedin' as const },
  { label: 'Email', href: 'mailto:junot-hery-nantenaina.montpre@epitech.eu', icon: 'email' as const },
]
export const projects = [
  {
    title: 'Epitrello',
    description:
      'Outil de gestion de projets collaboratif : boards, listes, cartes, assignations. API GraphQL avec authentification et temps réel. Stack : Next.js, NestJS, PostgreSQL, Prisma.',
    link: 'https://github.com/mpjunot/epitrello',
    image: epitrelloImage,
  },
  {
    title: 'Pixel War',
    description:
      'Bot Discord serverless sur GCP : interface web, canvas collaboratif, microservices. Cloud Functions Gen2, API Gateway, Pub/Sub, Firestore. Stack : Python, Terraform, App Engine.',
    link: 'https://github.com/mpJunot/Pixel-War',
    image: pixelWarImage,
  },
  {
    title: 'Adapto',
    description:
      "Application web de gestion d'entreprise pour PME : facturation, gestion des employés, suivi de présence, devis. Stack : React, MUI, TypeScript, Node.js, Docker.",
    link: 'https://github.com/lucasmael/InternalProject',
    image: adaptoImage,
  },
  {
    title: 'CopyMe',
    description:
      "Application mobile d'analyse des mouvements au basketball avec l'IA (détection et suivi). Projet Epitech combinant sport et intelligence artificielle. Stack : React, Python, FastAPI, YOLO.",
    link: 'https://github.com/mpjunot/copyme',
    image: copyMeImage,
  },
]
