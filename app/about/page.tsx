'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Mail, Linkedin, Zap, Code2, MessageSquare, Target, ExternalLink } from 'lucide-react';
import { personalInfo, getWhatsAppLink, getEmailLink } from '@/config/personal';
import { SiFigma, SiReact, SiNodedotjs, SiNextdotjs, SiJavascript, SiHtml5, SiCss3, SiPhp, SiWordpress, SiWoocommerce, SiFirebase, SiPostgresql, SiSupabase, SiStripe, SiGit, SiGithub, SiVercel, SiTailwindcss, SiFramer } from 'react-icons/si';

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] border-b border-[#2A2A2A] relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-[#CE2029] text-sm uppercase tracking-widest font-semibold mb-4"
            >
              About
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-primary)] mb-4">
              I&apos;m Mary Clement
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#CCCCCC] max-w-3xl">
              A full-stack developer who believes fast delivery and quality code aren&apos;t mutually exclusive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[40%_60%] gap-12 items-start">
            {/* Left: Profile Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#CE2029]/20 blur-xl animate-pulse"></div>
                <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-[0_0_0_4px_rgba(206,32,41,0.2),0_8px_32px_rgba(0,0,0,0.3)]">
                  <Image
                    src="/images/profile-pic.jpg"
                    alt="Mary Clement - Web developer in Lagos sharing her story and approach to building production-ready systems"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-center"
                    priority
                    quality={95}
                  />
                </div>
              </div>
            </motion.div>

            {/* Right: Story */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 md:mb-8">
                From Lagos to Global Clients
              </h2>
              <div className="space-y-6 text-base sm:text-lg text-[#CCCCCC] leading-relaxed">
                <p>
                  I&apos;ve been building websites and web applications for over 5 years, starting with WordPress sites for local Nigerian businesses and evolving into full-stack development for international clients. What started as a side hustle became my full-time focus when I realized I could deliver production-ready systems faster than traditional agencies without sacrificing quality.
                </p>
                <p>
                  My approach is simple: design in Figma, build in code, and ship fast. I don&apos;t believe in 3-month timelines for projects that can be done in 3 weeks. I use strategic AI assistance (tools like Cursor AI) to accelerate repetitive tasks while maintaining complete control over architecture, business logic, and user experience.
                </p>
                <p>
                  I&apos;ve worked with businesses across Nigeria, UK, and US - from fitness centers managing 500+ members to UK legal services managing 2,500+ business clients to B2B marketplaces connecting African suppliers with international buyers. Each project is different, but the goal is always the same: build something that works, looks professional, and drives real business results.
                </p>
                <p>
                  When I&apos;m not coding, I&apos;m creating content about building in public, sharing real founder stories, and helping other developers see that you can move fast without breaking things. Based in Lagos, available globally, always focused on shipping.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)] relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              How I Work
            </h2>
            <p className="text-lg sm:text-xl text-[#CCCCCC] max-w-2xl mx-auto">
              Fast delivery. Production quality. No compromises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                icon: Zap,
                title: 'Speed Without Shortcuts',
                description: 'I deliver in 3 weeks what most developers take 3 months to build. Not by cutting corners, but by using strategic AI assistance for repetitive tasks while I focus on architecture, business logic, and edge cases.',
              },
              {
                icon: Code2,
                title: 'Full-Stack, Full Ownership',
                description: 'I design in Figma AND build in code. No handoff confusion, no lost-in-translation moments. When you work with me, you get one person who owns the entire process from wireframe to deployment.',
              },
              {
                icon: MessageSquare,
                title: 'Clear Communication',
                description: 'I don\'t disappear for weeks. You get regular updates, honest timelines, and direct communication. If something changes, you know immediately. If there\'s a problem, we solve it together.',
              },
              {
                icon: Target,
                title: 'Results-Focused',
                description: 'I don\'t just build features - I build solutions that solve business problems. Every project includes performance optimization, SEO basics, mobile responsiveness, and admin training so your team can manage it.',
              },
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-8 hover:border-[#CE2029]/50 hover:shadow-[0_10px_40px_rgba(206,32,41,0.15)] transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-[#CE2029]/10 rounded-full flex items-center justify-center mb-6">
                  <principle.icon className="w-8 h-8 text-[#CE2029]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3">
                  {principle.title}
                </h3>
                <p className="text-base text-[#CCCCCC] leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              What I Work With
            </h2>
          </motion.div>

          {/* Design Tools */}
          <div className="mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-2">Design</h3>
              <div className="w-16 h-0.5 bg-[#CE2029]"></div>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {[
                { name: 'Figma', icon: SiFigma, color: '#F24E1E', subtext: 'UI/UX Design' },
                { name: 'Framer', icon: SiFramer, color: '#0055FF', subtext: 'Prototyping' },
              ].map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(206,32,41,0.15)] hover:border-[rgba(206,32,41,0.3)] cursor-pointer group"
                >
                  <tool.icon 
                    className="w-10 h-10 mx-auto mb-3 transition-transform group-hover:scale-110" 
                    style={{ color: tool.color }}
                  />
                  <div className="text-[#FFFFFF] text-[0.95rem] font-medium mt-3">{tool.name}</div>
                  {tool.subtext && (
                    <div className="text-[#888888] text-[0.85rem] mt-1">{tool.subtext}</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Development */}
          <div className="mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-2">Development</h3>
              <div className="w-16 h-0.5 bg-[#CE2029]"></div>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {[
                { name: 'React', icon: SiReact, color: '#61DAFB', subtext: 'Frontend' },
                { name: 'Next.js', icon: SiNextdotjs, color: '#000000', subtext: 'Framework' },
                { name: 'Node.js', icon: SiNodedotjs, color: '#339933', subtext: 'Runtime' },
                { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', subtext: 'Language' },
                { name: 'HTML5', icon: SiHtml5, color: '#E34F26', subtext: 'Markup' },
                { name: 'CSS3', icon: SiCss3, color: '#1572B6', subtext: 'Styling' },
                { name: 'PHP', icon: SiPhp, color: '#777BB4', subtext: 'Backend' },
                { name: 'WordPress', icon: SiWordpress, color: '#21759B', subtext: 'CMS' },
                { name: 'WooCommerce', icon: SiWoocommerce, color: '#96588A', subtext: 'E-commerce' },
                { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', subtext: 'Utility CSS' },
              ].map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(206,32,41,0.15)] hover:border-[rgba(206,32,41,0.3)] cursor-pointer group"
                >
                  <tool.icon 
                    className="w-10 h-10 mx-auto mb-3 transition-transform group-hover:scale-110" 
                    style={{ color: tool.color }}
                  />
                  <div className="text-[#FFFFFF] text-[0.95rem] font-medium mt-3">{tool.name}</div>
                  {tool.subtext && (
                    <div className="text-[#888888] text-[0.85rem] mt-1">{tool.subtext}</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-2">Databases</h3>
              <div className="w-16 h-0.5 bg-[#CE2029]"></div>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {[
                { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', subtext: 'Backend' },
                { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', subtext: 'Database' },
                { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E', subtext: 'Backend' },
              ].map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(206,32,41,0.15)] hover:border-[rgba(206,32,41,0.3)] cursor-pointer group"
                >
                  <tool.icon 
                    className="w-10 h-10 mx-auto mb-3 transition-transform group-hover:scale-110" 
                    style={{ color: tool.color }}
                  />
                  <div className="text-[#FFFFFF] text-[0.95rem] font-medium mt-3">{tool.name}</div>
                  {tool.subtext && (
                    <div className="text-[#888888] text-[0.85rem] mt-1">{tool.subtext}</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Integrations */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-2">Integrations</h3>
              <div className="w-16 h-0.5 bg-[#CE2029]"></div>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {[
                { name: 'Stripe', icon: SiStripe, color: '#635BFF', subtext: 'Payments' },
                { name: 'Git', icon: SiGit, color: '#F05032', subtext: 'Version Control' },
                { name: 'GitHub', icon: SiGithub, color: '#181717', subtext: 'Repository' },
                { name: 'Vercel', icon: SiVercel, color: '#000000', subtext: 'Deployment' },
              ].map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(206,32,41,0.15)] hover:border-[rgba(206,32,41,0.3)] cursor-pointer group"
                >
                  <tool.icon 
                    className="w-10 h-10 mx-auto mb-3 transition-transform group-hover:scale-110" 
                    style={{ color: tool.color }}
                  />
                  <div className="text-[#FFFFFF] text-[0.95rem] font-medium mt-3">{tool.name}</div>
                  {tool.subtext && (
                    <div className="text-[#888888] text-[0.85rem] mt-1">{tool.subtext}</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Working Together */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)] relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 text-center">
              Let&apos;s Build Something
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-6">
                I&apos;m Currently Taking On:
              </h3>
              <ul className="space-y-4">
                {[
                  'Custom web applications',
                  'WordPress & WooCommerce sites',
                  'SaaS platforms & dashboards',
                  'E-commerce & marketplace builds',
                  'Business automation systems',
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3 text-base sm:text-lg text-[#CCCCCC]"
                  >
                    <span className="text-[#CE2029] mt-1">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-6">
                Good Fit If You:
              </h3>
              <ul className="space-y-4">
                {[
                  'Value speed and clear communication',
                  'Need production-ready code, not prototypes',
                  'Want one person who owns the whole process',
                  'Appreciate transparency and regular updates',
                  'Have a clear business problem to solve',
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3 text-base sm:text-lg text-[#CCCCCC]"
                  >
                    <span className="text-[#CE2029] mt-1">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Ready to Start?
            </h2>
            <p className="text-base sm:text-lg text-[#CCCCCC] mb-8 sm:mb-12 max-w-2xl mx-auto">
              I&apos;m booking projects for {personalInfo.availableFrom}. Let&apos;s talk about yours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#CE2029] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold hover:bg-[#B01C24] transition-all glow-on-hover inline-flex items-center justify-center gap-2 text-sm sm:text-base min-h-[44px]"
              >
                <MessageCircle size={18} />
                Book a Discovery Call
              </a>
              <Link
                href="/work"
                className="bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold hover:border-[#CE2029] transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base min-h-[44px]"
              >
                View My Work
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

