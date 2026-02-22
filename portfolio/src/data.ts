import adaptoImage from './assets/adapto.png'
import epitrelloImage from './assets/epitrello.png'
import copyMeImage from './assets/copyme.png'
import pixelWarImage from './assets/pixel-war.png'

export const name = 'JUNOT MONTPRE'
export const firstName = 'JUNOT'
export const lastName = 'MONTPRE'
export const githubAvatarUrl = 'https://github.com/mpjunot.png'
export const heroDescription =
  'Junior Full-Stack Developer — 5th year at Epitech Paris. Open to internships, fixed-term or permanent positions from March. Ideas, code and design in one place.'
export const readmeSubtitle =
  'Full Stack Developer | Final year student at Epitech'
export const readmeBio =
  'Passionate about creating innovative web solutions and exploring the full spectrum of software development.'
export const aboutParagraphs = [
  "5th year student at Epitech Paris, specializing in Full Stack development. Epitech's pedagogy is project-based and autonomy-driven: few lectures, lots of hands-on practice, self-directed learning and teamwork. This has built my ability to learn quickly, adapt and deliver real projects.",
  "Exchange program at Beijing Jiaotong University (Computer Science & AI). Motivated by continuous learning and exploring new tools, I pay close attention to quality and detail.",
]
export const aboutExperiences = [
  { role: 'Full-Stack development (React, TypeScript, Node.js, Docker)', company: 'Peinture Soleil' },
  { role: 'Front-End (HTML/CSS/JS)', company: 'Tiktak Production' },
]
export const aboutQualities = ['Rigor', 'Autonomy', 'Teamwork', 'Adaptability']

export const skills = {
  frontend: ['React', 'React Native', 'Next.js', 'Flutter', 'HTML/CSS'],
  backend: ['Node.js', 'NestJS', 'FastAPI'],
  languages: [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'Python', level: 'Advanced' },
    { name: 'C', level: 'Advanced' },
    { name: 'C++', level: 'Intermediate' },
    { name: 'Dart', level: 'Intermediate' },
  ],
  devops: ['Terraform', 'Docker', 'GitHub Actions', 'CI/CD', 'GCP'],
  graphicLibraries: ['shadcn/ui', 'MUI', 'Tailwind CSS', 'Framer Motion'],
  stateLibraries: ['TanStack Query', 'Redux'],
  formLibraries: ['Zod', 'React Hook Form'],
  icons: ['Lucide React'],
}
export const tools = ['Git', 'Docker', 'Google Cloud Platform', 'Terraform', 'IA', 'VSCode', 'Vim', 'Emacs', 'Cursor', 'JetBrains']

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
      'Collaborative project management: boards, lists, cards, assignments. GraphQL API with auth and real-time. Stack: Next.js, NestJS, PostgreSQL, Prisma.',
    link: 'https://github.com/mpjunot/epitrello',
    image: epitrelloImage,
  },
  {
    title: 'Pixel War',
    description:
      'Serverless Discord bot on GCP: web UI, collaborative canvas, microservices. Cloud Functions Gen2, API Gateway, Pub/Sub, Firestore. Stack: Python, Terraform, App Engine.',
    link: 'https://github.com/mpJunot/Pixel-War',
    image: pixelWarImage,
  },
  {
    title: 'Adapto',
    description:
      'Business management web app for SMBs: invoicing, employees, attendance, quotes. Stack: React, MUI, TypeScript, Node.js, Docker.',
    link: 'https://github.com/lucasmael/InternalProject',
    image: adaptoImage,
  },
  {
    title: 'CopyMe',
    description:
      'Mobile app for basketball movement analysis with AI (detection & tracking). Epitech project combining sport and AI. Stack: React, Python, FastAPI, YOLO.',
    link: 'https://github.com/mpjunot/copyme',
    image: copyMeImage,
  },
]
