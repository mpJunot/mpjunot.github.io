import { motion } from 'framer-motion';
import {
  name,
  firstName,
  lastName,
  aboutParagraphs,
  aboutExperiences,
  aboutQualities,
  skills,
  tools,
  contactEmail,
  contactPhone,
  contactLinks,
  projects,
  readmeSubtitle,
  readmeBio,
} from './data';
import lightningImg from './assets/lightning.png';

const ease = [0.22, 1, 0.36, 1];

function IconGitHub({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? 'w-5 h-5'}
      fill='currentColor'
      viewBox='0 0 24 24'
    >
      <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' />
    </svg>
  );
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? 'w-5 h-5'}
      fill='currentColor'
      viewBox='0 0 24 24'
    >
      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
    </svg>
  );
}

function IconEmail({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? 'w-5 h-5'}
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
      />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg
      className='w-4 h-4 group-hover:translate-x-1 transition-transform'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M17 8l4 4m0 0l-4 4m4-4H3'
      />
    </svg>
  );
}

export default function App() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className='cyberpunk-bg' aria-hidden>
        <div className='cyberpunk-grid' />
        <div className='cyberpunk-orbs'>
          <div className='cyberpunk-orb cyberpunk-orb-1' />
          <div className='cyberpunk-orb cyberpunk-orb-2' />
          <div className='cyberpunk-orb cyberpunk-orb-3' />
        </div>
        <div className='cyberpunk-lines' />
        <div className='cyberpunk-flash' />
        <div className='cyberpunk-flash-strong' />
        <div className='lightning-overlay' aria-hidden>
          <div className='lightning-screen-flash' />
          <div
            className='lightning-bolt'
            style={{ left: '5%', top: '8%', height: '92%', width: '180px', animationDelay: '0s' }}
          >
            <img src={lightningImg} alt='' className='w-full h-full object-contain object-top' />
          </div>
          <div
            className='lightning-bolt'
            style={{ right: '8%', top: '8%', height: '92%', width: '140px', animationDelay: '0.05s' }}
          >
            <img src={lightningImg} alt='' className='w-full h-full object-contain object-top scale-x-[-1]' />
          </div>
          <div
            className='lightning-bolt'
            style={{ left: '50%', top: '8%', height: '92%', width: '100px', transform: 'translateX(-50%)', animationDelay: '0.1s' }}
          >
            <img src={lightningImg} alt='' className='w-full h-full object-contain object-top' />
          </div>
        </div>
        <div className='cyberpunk-scanlines' />
        <div className='cyberpunk-vignette' />
      </div>

      <div className='relative z-10 min-h-screen flex flex-col text-[#fafafa]'>
        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className='fixed top-0 left-0 right-0 z-20 flex justify-end items-center gap-1 sm:gap-2 px-4 py-3 sm:px-8 sm:py-4 bg-[var(--color-surface)]/90 backdrop-blur-sm text-sharp'
          style={{
            fontFamily: 'var(--font-sans)',
            boxShadow: '0 0 20px rgba(167,139,250,0.1)',
          }}
        >
          <a
            href='#projets'
            onClick={scrollToSection('projets')}
            className='px-4 py-2 rounded-full text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--neon-violet)] hover:border-[var(--neon-violet)] hover:shadow-[0_0_12px_rgba(167,139,250,0.35)] border border-transparent transition-all duration-300'
          >
            Projects
          </a>
          <a
            href='#a-propos'
            onClick={scrollToSection('a-propos')}
            className='px-4 py-2 rounded-full text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--neon-violet)] hover:border-[var(--neon-violet)] hover:shadow-[0_0_12px_rgba(167,139,250,0.35)] border border-transparent transition-all duration-300'
          >
            About
          </a>
          <a
            href='#skills'
            onClick={scrollToSection('skills')}
            className='px-4 py-2 rounded-full text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--neon-violet)] hover:border-[var(--neon-violet)] hover:shadow-[0_0_12px_rgba(167,139,250,0.35)] border border-transparent transition-all duration-300'
          >
            Skills
          </a>
          <a
            href='#contact'
            onClick={scrollToSection('contact')}
            className='px-4 py-2 rounded-full text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--neon-violet)] hover:border-[var(--neon-violet)] hover:shadow-[0_0_12px_rgba(167,139,250,0.35)] border border-transparent transition-all duration-300'
          >
            Contact
          </a>
        </motion.nav>

        <header
          className='relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-20 pb-12 overflow-hidden isolate bg-[var(--color-surface)]/65'
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          <div
            className='absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(167,139,250,0.15),rgba(34,211,238,0.05),transparent_70%)] pointer-events-none'
            aria-hidden
          />
          <div className='relative z-10 w-full max-w-5xl mx-auto text-sharp px-4'>
            <div className='flex flex-col items-center justify-center gap-12 md:gap-16'>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.15 }}
                className='text-center overflow-visible shrink-0'
              >
                {/* Nom en deux lignes : plus lisible et plus impactant avec le décalage */}
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight flex flex-col items-center gap-y-2 sm:gap-y-3'>
                  <span
                    className='neon-name neon-flicker-first bg-clip-text text-transparent bg-gradient-to-r from-[#a78bfa] via-[#c4b5fd] to-[#22d3ee] leading-tight'
                    style={{
                      textShadow:
                        '0 0 20px rgba(167,139,250,0.9), 0 0 40px rgba(167,139,250,0.6), 0 0 60px rgba(167,139,250,0.35), 0 0 80px rgba(34,211,238,0.25)',
                    }}
                  >
                    {firstName}
                  </span>
                  <span
                    className='neon-name neon-flicker-last bg-clip-text text-transparent bg-gradient-to-r from-[#a78bfa] via-[#c4b5fd] to-[#22d3ee] block leading-tight ml-6 sm:ml-10 md:ml-12'
                    style={{
                      textShadow:
                        '0 0 20px rgba(167,139,250,0.9), 0 0 40px rgba(167,139,250,0.6), 0 0 60px rgba(167,139,250,0.35), 0 0 80px rgba(34,211,238,0.25)',
                    }}
                  >
                    {lastName}
                  </span>
                </h1>
              </motion.div>
              {/* Carte profil type README + GitHub Stats dans la même div */}
              <motion.div
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24, delay: 0.35 }}
                whileHover={{ scale: 1.01, transition: { duration: 0.25 } }}
                className='w-full max-w-4xl mx-auto rounded-xl border border-[rgba(167,139,250,0.25)] bg-[var(--color-surface-elevated)]/90 overflow-visible'
                style={{
                  boxShadow:
                    '0 0 30px rgba(167,139,250,0.15), 0 0 60px rgba(167,139,250,0.08)',
                }}
              >
                <div className='flex items-center gap-2 px-4 py-2 border-b border-[rgba(167,139,250,0.15)] bg-[rgba(0,0,0,0.2)] text-sm text-[var(--color-text-muted)]'>
                  <span>mpJunot / README.md</span>
                  <svg
                    className='w-4 h-4 opacity-70'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                    />
                  </svg>
                </div>
                <div className='px-5 py-5'>
                  <h2 className='text-xl font-bold text-[#e9d5ff] mb-1'>
                    Junot Montpre
                  </h2>
                  <p className='text-sm font-medium text-[var(--neon-violet)] mb-2'>
                    {readmeSubtitle}
                  </p>
                  <p className='text-sm text-[var(--color-text-muted)] leading-relaxed mb-5'>
                    {readmeBio}
                  </p>
                  <h3 className='text-lg font-semibold mb-3 tracking-wide text-[#c4b5fd]'>
                    GitHub Stats
                  </h3>
                  <div className='flex flex-wrap items-start gap-4 justify-start overflow-visible'>
                    <img
                      height={180}
                      className='h-[180px] w-auto object-contain block'
                      src='https://github-readme-stats.anuraghazra1.vercel.app/api?username=mpjunot&show_icons=true&include_all_commits=true&theme=radical'
                      alt='GitHub stats'
                    />
                    <img
                      height={180}
                      className='h-[180px] w-auto object-contain block'
                      src='https://github-readme-stats.anuraghazra1.vercel.app/api/top-langs/?username=mpjunot&theme=radical'
                      alt='Most used languages'
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </header>

        <section
          id='a-propos'
          className='relative z-10 border-t border-[rgba(167,139,250,0.2)] bg-[var(--color-surface)]/75'
        >
          <motion.div
            initial={{ opacity: 0, maxHeight: 0 }}
            whileInView={{ opacity: 1, maxHeight: 800 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 1, ease }}
            className='overflow-hidden'
          >
            <div className='py-20 sm:py-28 px-6 flex flex-col items-center justify-center max-w-4xl mx-auto'>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease, delay: 0.2 }}
                className='text-2xl font-semibold mb-6 tracking-wide text-[#c4b5fd] neon-text'
                style={{
                  textShadow:
                    '0 0 25px rgba(167,139,250,0.7), 0 0 50px rgba(167,139,250,0.4)',
                }}
              >
                About
              </motion.h2>
              <div className='max-w-3xl mx-auto space-y-6 text-center'>
                {aboutParagraphs.map((paragraph, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease, delay: 0.2 + i * 0.1 }}
                    className='text-lg text-[var(--color-text-muted)] leading-relaxed'
                    style={{ textShadow: '0 0 15px rgba(167,139,250,0.2)' }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease, delay: 0.4 }}
                  className='pt-4'
                >
                  <h3 className='text-base font-semibold text-[#c4b5fd] mb-3'>
                    Experience
                  </h3>
                  <ul className='space-y-2 text-[var(--color-text-muted)]'>
                    {aboutExperiences.map((exp, i) => (
                      <li key={i} className='text-lg leading-relaxed'>
                        <span className='text-[#e9d5ff]'>{exp.role}</span>
                        <span className='text-[var(--color-text-muted)]'>
                          {' '}
                          — {exp.company}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease, delay: 0.5 }}
                  className='pt-4'
                >
                  <div className='flex flex-wrap justify-center gap-2'>
                    {aboutQualities.map((q, i) => (
                      <span
                        key={i}
                        className='px-3 py-1 rounded-full text-sm font-medium border border-[rgba(167,139,250,0.35)] text-[var(--color-text-muted)] bg-[var(--color-surface-elevated)]/50'
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills & Tools */}
        <section
          id='skills'
          className='relative z-10 py-20 sm:py-28 px-6 border-t border-[rgba(167,139,250,0.2)] bg-[var(--color-surface)]/75'
        >
          <div className='max-w-4xl mx-auto'>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className='text-2xl font-semibold mb-10 tracking-wide text-[#c4b5fd] neon-text text-center'
              style={{
                textShadow:
                  '0 0 25px rgba(167,139,250,0.7), 0 0 50px rgba(167,139,250,0.4)',
              }}
            >
              Skills & Tools
            </motion.h2>
            <div className='grid gap-6 sm:grid-cols-2'>
              <motion.div
                initial={{ opacity: 0, y: 32, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: 'spring', stiffness: 280, damping: 24, delay: 0.1 }}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                }}
                whileTap={{ scale: 0.99 }}
                className='rounded-2xl border border-[rgba(167,139,250,0.25)] bg-[var(--color-surface-elevated)]/90 p-6'
                style={{
                  boxShadow:
                    '0 0 20px rgba(167,139,250,0.1), 0 0 40px rgba(167,139,250,0.05)',
                }}
              >
                <h3 className='text-lg font-semibold text-[#c4b5fd] mb-4'>
                  Skills
                </h3>
                <div className='space-y-4 text-sm text-[var(--color-text-muted)]'>
                  <div>
                    <span className='text-[#e9d5ff] font-medium'>Frontend</span>
                    <p className='mt-1 flex flex-wrap gap-2'>
                      {skills.frontend.map((s) => (
                        <span
                          key={s}
                          className='px-2.5 py-1 rounded-lg bg-[rgba(167,139,250,0.12)] border border-[rgba(167,139,250,0.2)]'
                        >
                          {s}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div>
                    <span className='text-[#e9d5ff] font-medium'>Backend</span>
                    <p className='mt-1 flex flex-wrap gap-2'>
                      {skills.backend.map((s) => (
                        <span
                          key={s}
                          className='px-2.5 py-1 rounded-lg bg-[rgba(167,139,250,0.12)] border border-[rgba(167,139,250,0.2)]'
                        >
                          {s}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div>
                    <span className='text-[#e9d5ff] font-medium'>Languages</span>
                    <ul className='mt-1 space-y-1.5'>
                      {skills.languages.map((lang) => (
                        <li
                          key={lang.name}
                          className='flex items-center justify-between gap-3 text-sm text-[var(--color-text-muted)]'
                        >
                          <span className='px-2.5 py-1 rounded-lg bg-[rgba(34,211,238,0.1)] border border-[rgba(34,211,238,0.25)]'>
                            {lang.name}
                          </span>
                          <span className='text-[#c4b5fd] text-xs font-medium tabular-nums'>
                            {lang.level}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className='text-[#e9d5ff] font-medium'>
                      DevOps & Infra
                    </span>
                    <p className='mt-1 flex flex-wrap gap-2'>
                      {skills.devops.map((s) => (
                        <span
                          key={s}
                          className='px-2.5 py-1 rounded-lg bg-[rgba(167,139,250,0.12)] border border-[rgba(167,139,250,0.2)]'
                        >
                          {s}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 32, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: 'spring', stiffness: 280, damping: 24, delay: 0.2 }}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                }}
                whileTap={{ scale: 0.99 }}
                className='rounded-2xl border border-[rgba(167,139,250,0.25)] bg-[var(--color-surface-elevated)]/90 p-6'
                style={{
                  boxShadow:
                    '0 0 20px rgba(167,139,250,0.1), 0 0 40px rgba(167,139,250,0.05)',
                }}
              >
                <h3 className='text-lg font-semibold text-[#c4b5fd] mb-4'>
                  Tools
                </h3>
                <div className='space-y-4'>
                  <div>
                    <span className='text-[#e9d5ff] font-medium text-sm'>
                      Tools
                    </span>
                    <p className='mt-1 flex flex-wrap gap-2'>
                      {tools.map((t) => (
                        <span
                          key={t}
                          className='px-3 py-1.5 rounded-lg text-sm font-medium border border-[rgba(34,211,238,0.25)] bg-[rgba(34,211,238,0.08)] text-[var(--color-text-muted)]'
                        >
                          {t}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div>
                    <span className='text-[#e9d5ff] font-medium text-sm'>
                      UI Libraries
                    </span>
                    <p className='mt-1 flex flex-wrap gap-2'>
                      {skills.graphicLibraries.map((s) => (
                        <span
                          key={s}
                          className='px-2.5 py-1 rounded-lg text-sm border border-[rgba(167,139,250,0.2)] bg-[rgba(167,139,250,0.08)] text-[var(--color-text-muted)]'
                        >
                          {s}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div>
                    <span className='text-[#e9d5ff] font-medium text-sm'>
                      State
                    </span>
                    <p className='mt-1 flex flex-wrap gap-2'>
                      {skills.stateLibraries.map((s) => (
                        <span
                          key={s}
                          className='px-2.5 py-1 rounded-lg text-sm border border-[rgba(167,139,250,0.2)] bg-[rgba(167,139,250,0.08)] text-[var(--color-text-muted)]'
                        >
                          {s}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div>
                    <span className='text-[#e9d5ff] font-medium text-sm'>
                      Forms & Validation
                    </span>
                    <p className='mt-1 flex flex-wrap gap-2'>
                      {skills.formLibraries.map((s) => (
                        <span
                          key={s}
                          className='px-2.5 py-1 rounded-lg text-sm border border-[rgba(167,139,250,0.2)] bg-[rgba(167,139,250,0.08)] text-[var(--color-text-muted)]'
                        >
                          {s}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div>
                    <span className='text-[#e9d5ff] font-medium text-sm'>
                      Icons
                    </span>
                    <p className='mt-1 flex flex-wrap gap-2'>
                      {skills.icons.map((s) => (
                        <span
                          key={s}
                          className='px-2.5 py-1 rounded-lg text-sm border border-[rgba(167,139,250,0.2)] bg-[rgba(167,139,250,0.08)] text-[var(--color-text-muted)]'
                        >
                          {s}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projets */}
        <section
          id='projets'
          className='relative z-10 py-20 sm:py-28 px-6 bg-[var(--color-surface)]/75'
        >
          <div className='max-w-4xl mx-auto'>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className='text-2xl font-semibold mb-10 tracking-wide text-[#c4b5fd] neon-text'
              style={{
                textShadow:
                  '0 0 25px rgba(167,139,250,0.7), 0 0 50px rgba(167,139,250,0.4)',
              }}
            >
              Projects
            </motion.h2>
            <div className='grid gap-6 sm:grid-cols-2'>
              {projects.map((project, i) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  initial={{ opacity: 0, y: 36, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22, delay: i * 0.1 }}
                  whileHover={{
                    scale: 1.03,
                    y: -6,
                    transition: { type: 'spring', stiffness: 320, damping: 22 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className='card-neon group block overflow-hidden rounded-2xl bg-[var(--color-surface-elevated)] border border-[rgba(167,139,250,0.25)] transition-colors duration-300 hover:border-[var(--neon-violet)]'
                  style={{
                    boxShadow:
                      '0 0 20px rgba(167,139,250,0.15), 0 0 40px rgba(167,139,250,0.05)',
                  }}
                >
                  <div className='neon-img-shortcircuit relative aspect-video w-full overflow-hidden'>
                    <img
                      src={project.image}
                      alt={project.title}
                      className='neon-img w-full h-full object-cover'
                    />
                    <div className='short-circuit-overlay' aria-hidden />
                    <div
                      className='short-circuit-line short-circuit-line-1'
                      aria-hidden
                    />
                    <div
                      className='short-circuit-line short-circuit-line-2'
                      aria-hidden
                    />
                    <div
                      className='short-circuit-spark short-circuit-spark-1'
                      aria-hidden
                    />
                    <div
                      className='short-circuit-spark short-circuit-spark-2'
                      aria-hidden
                    />
                  </div>
                  <div className='p-6'>
                    <h3
                      className='text-lg font-semibold text-[#e9d5ff] transition-all duration-300 group-hover:text-[var(--neon-violet)]'
                      style={{ textShadow: '0 0 15px rgba(167,139,250,0.4)' }}
                    >
                      {project.title}
                    </h3>
                    <p className='mt-2 text-sm text-[var(--color-text-muted)]'>
                      {project.description}
                    </p>
                    <span
                      className='mt-3 inline-flex items-center gap-1 text-sm text-[var(--neon-cyan)] transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]'
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(167,139,250,0.6))',
                      }}
                    >
                      View project
                      <IconArrow />
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <motion.section
          id='contact'
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className='relative z-10 py-20 sm:py-28 px-6 border-t border-[rgba(167,139,250,0.2)] bg-[var(--color-surface)]/75'
        >
          <div className='max-w-4xl mx-auto text-center'>
            <h2
              className='text-2xl font-semibold mb-6 tracking-wide text-[#c4b5fd] neon-text'
              style={{
                textShadow:
                  '0 0 25px rgba(167,139,250,0.7), 0 0 50px rgba(167,139,250,0.4)',
              }}
            >
              Contact
            </h2>
            <p className='text-[var(--color-text-muted)] mb-8'>
              Have a project in mind or a question? Get in touch.
            </p>
            <div className='flex flex-wrap justify-center gap-4 mb-6'>
              <a
                href={`mailto:${contactEmail}`}
                className='inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border-2 border-[var(--neon-cyan)] text-[var(--neon-cyan)] transition-all duration-300 hover:bg-[rgba(34,211,238,0.15)]'
                style={{
                  boxShadow:
                    '0 0 20px rgba(34,211,238,0.3), 0 0 40px rgba(34,211,238,0.15)',
                }}
              >
                <IconEmail />
                {contactEmail}
              </a>
              <a
                href={`tel:+33${contactPhone.replace(/\s/g, '').replace(/^0/, '')}`}
                className='inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border-2 border-[var(--neon-violet)] text-[var(--neon-violet)] transition-all duration-300 hover:bg-[rgba(167,139,250,0.15)]'
                style={{
                  boxShadow:
                    '0 0 15px rgba(167,139,250,0.4), 0 0 30px rgba(167,139,250,0.15)',
                }}
              >
                {contactPhone}
              </a>
            </div>
            <div className='flex flex-wrap justify-center gap-6 mt-10'>
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={
                    link.icon === 'email' ? `mailto:${contactEmail}` : link.href
                  }
                  target={link.icon === 'email' ? undefined : '_blank'}
                  rel={
                    link.icon === 'email' ? undefined : 'noopener noreferrer'
                  }
                  aria-label={link.label}
                  className='flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(167,139,250,0.3)] text-[var(--color-text-muted)] hover:text-[var(--neon-violet)] hover:border-[var(--neon-violet)] transition-all duration-300'
                  style={{ boxShadow: '0 0 15px rgba(167,139,250,0.1)' }}
                >
                  {link.icon === 'github' && <IconGitHub />}
                  {link.icon === 'linkedin' && <IconLinkedIn />}
                  {link.icon === 'email' && <IconEmail />}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className='relative z-10 py-16 px-6 border-t-2 border-[var(--neon-violet)] bg-[var(--color-surface)]/80'
          style={{
            boxShadow:
              '0 -2px 0 0 rgba(167,139,250,0.4), 0 -4px 30px 0 rgba(167,139,250,0.2), inset 0 1px 0 0 rgba(167,139,250,0.1)',
          }}
        >
          <div className='max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6'>
            <p
              className='text-[#a78bfa] text-sm neon-text-cyan'
              style={{ textShadow: '0 0 15px rgba(167,139,250,0.5)' }}
            >
              © {currentYear} — {name}
            </p>
            <div className='flex gap-6'>
              <a
                href='https://github.com/mpjunot'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#a78bfa] transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(167,139,250,0.9)]'
                style={{ filter: 'drop-shadow(0 0 8px rgba(167,139,250,0.5))' }}
                aria-label='GitHub'
              >
                <IconGitHub className='w-6 h-6' />
              </a>
              <a
                href='https://www.linkedin.com/in/junot-montpre/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#22d3ee] transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.9)]'
                style={{ filter: 'drop-shadow(0 0 8px rgba(34,211,238,0.5))' }}
                aria-label='LinkedIn'
              >
                <IconLinkedIn className='w-6 h-6' />
              </a>
            </div>
          </div>
        </motion.footer>
      </div>
    </>
  );
}
