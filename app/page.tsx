'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Mail, Linkedin, ExternalLink, Star, Quote } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo, getWhatsAppLink, getEmailLink } from '@/config/personal';
import { projectLinks } from '@/config/projectLinks';
import { testimonials } from '@/config/testimonials';
import StructuredData from './components/StructuredData';
import { SiFigma, SiReact, SiNodedotjs, SiNextdotjs, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiPhp, SiWordpress, SiWoocommerce, SiFirebase, SiPostgresql, SiMysql, SiSupabase, SiStripe, SiGit, SiGithub, SiVercel, SiNetlify, SiTailwindcss, SiFramer } from 'react-icons/si';
import { BiCodeAlt } from 'react-icons/bi';
import { BsCheckCircle } from 'react-icons/bs';
import { HiRocketLaunch } from 'react-icons/hi2';

function AnimatedStat({ end, suffix = '', duration = 2, label }: { end: number; suffix?: string; duration?: number; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-2">
        {isInView && <CountUp end={end} duration={duration} />}{suffix}
      </div>
      <div className="text-[var(--text-secondary)] text-xs sm:text-sm">{label}</div>
      <div className="w-12 h-0.5 bg-[#CE2029] mx-auto mt-4 green-accent-line"></div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen relative overflow-hidden">
      {/* Floating Orbs Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#CE2029]/5 rounded-full blur-[60px] floating-orb-1"></div>
        <div className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-[#CE2029]/3 rounded-full blur-[80px] floating-orb-2"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-[#CE2029]/4 rounded-full blur-[50px] floating-orb-3"></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 bg-[var(--bg-primary)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Mobile: Image First, Then Content */}
          <div className="flex flex-col lg:grid lg:grid-cols-[60%_40%] gap-8 md:gap-12 items-center">
            {/* Professional Photo - Mobile: Top, Desktop: Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end w-full lg:w-auto"
            >
              <div className="relative">
                {/* Red Glow Effect (Option C) */}
                <div className="absolute inset-0 rounded-full bg-[#CE2029]/20 blur-xl animate-pulse"></div>
                <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden shadow-[0_0_0_4px_rgba(206,32,41,0.2),0_8px_32px_rgba(0,0,0,0.3)]">
        <Image
                    src="/images/profile-pic.jpg"
                    alt="Mary Clement - Full-Stack Web Developer and UI/UX Designer based in Lagos, Nigeria"
                    width={450}
                    height={450}
                    className="w-full h-full object-cover object-center"
          priority
                    quality={95}
                  />
                </div>
              </div>
            </motion.div>

            {/* Left Content - Mobile: Bottom, Desktop: Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="order-2 lg:order-1 w-full"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block text-[#CE2029] text-sm uppercase tracking-widest font-semibold mb-4"
              >
                Web Developer & UI/UX Designer
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--text-primary)] mb-6 md:mb-8 leading-tight"
              >
                Building software that works
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-base sm:text-lg text-[#CCCCCC] mb-6 md:mb-8 leading-relaxed max-w-xl"
              >
                I design in Figma and build in code. From SaaS platforms to e-commerce stores, enterprise systems, and fintech apps - I handle the complete process. Based in Lagos, working globally.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#CE2029] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold hover:bg-[#B01C24] transition-all glow-on-hover inline-flex items-center justify-center gap-2 text-base min-h-[44px]"
                >
                  Get started
                  <ArrowRight size={20} />
                </a>
                <Link
                  href="/work"
                  className="border-2 border-[#CE2029] text-[#CE2029] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold hover:bg-[#CE2029]/10 transition-all inline-flex items-center justify-center gap-2 text-base min-h-[44px]"
                >
                  View my work
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)] relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <AnimatedStat end={25} suffix="+" label="Projects delivered" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-2">3 weeks</div>
                <div className="text-[var(--text-secondary)] text-xs sm:text-sm">Average timeline</div>
                <div className="w-12 h-0.5 bg-[#CE2029] mx-auto mt-4 green-accent-line"></div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AnimatedStat end={2500} suffix="+" label="Users across platforms" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <AnimatedStat end={6} label="Live production systems" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How I Work Section - Visual Timeline */}
      <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)] relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-[#CE2029] text-sm uppercase tracking-widest font-semibold mb-4"
            >
              How I work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4"
            >
              From idea to production in weeks
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto px-4"
            >
              {personalInfo.name} handles the complete process - from design to deployment
            </motion.p>
          </motion.div>

          {/* Timeline Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-4 relative">
            {/* Step 1: Discovery & Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="timeline-step relative bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-5 sm:p-6 md:p-8 hover:border-[#CE2029]/50 hover:shadow-[0_10px_40px_rgba(206,32,41,0.15)] transition-all hover:-translate-y-2"
            >
              <div className="absolute top-4 right-4 w-8 h-8 bg-[#CE2029]/10 text-[#CE2029] rounded-full flex items-center justify-center font-bold text-sm">
                01
              </div>
              <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-[var(--bg-primary)] border-2 border-[var(--border-color)] rounded-full group">
                <SiFigma className="w-10 h-10 text-[#CE2029]" />
                <div className="absolute inset-[-10px] bg-[#CE2029]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-2 text-center">Discovery & Design</h3>
              <p className="text-center text-[var(--text-secondary)] text-xs sm:text-sm mb-4 sm:mb-6">Week 1</p>
              <ul className="space-y-2 list-none pl-0">
                <li className="text-xs sm:text-sm text-[var(--text-secondary)] pl-5 sm:pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#CE2029] before:font-bold">User research & strategy</li>
                <li className="text-xs sm:text-sm text-[var(--text-secondary)] pl-5 sm:pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#CE2029] before:font-bold">Wireframes & user flows</li>
                <li className="text-xs sm:text-sm text-[var(--text-secondary)] pl-5 sm:pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#CE2029] before:font-bold">High-fidelity mockups in Figma</li>
                <li className="text-xs sm:text-sm text-[var(--text-secondary)] pl-5 sm:pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#CE2029] before:font-bold">Interactive prototypes</li>
                <li className="text-xs sm:text-sm text-[var(--text-secondary)] pl-5 sm:pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#CE2029] before:font-bold">Design system creation</li>
              </ul>
            </motion.div>

            {/* Connecting Line 1 - Desktop only */}
            <div className="hidden lg:block absolute top-[100px] left-[25%] w-[calc(25%-16px)] h-0.5 bg-[var(--border-color)] overflow-hidden pointer-events-none">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="h-full bg-[#CE2029] origin-left"
              />
            </div>

            {/* Step 2: Development */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="timeline-step relative bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-5 sm:p-6 md:p-8 hover:border-[#CE2029]/50 hover:shadow-[0_10px_40px_rgba(206,32,41,0.15)] transition-all hover:-translate-y-2"
            >
              <div className="absolute top-4 right-4 w-8 h-8 bg-[#CE2029]/10 text-[#CE2029] rounded-full flex items-center justify-center font-bold text-sm">
                02
              </div>
              <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-[var(--bg-primary)] border-2 border-[var(--border-color)] rounded-full group">
                <BiCodeAlt className="w-10 h-10 text-[#CE2029]" />
                <div className="absolute inset-[-10px] bg-[#CE2029]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-2 text-center">Development</h3>
              <p className="text-center text-[var(--text-secondary)] text-xs sm:text-sm mb-4 sm:mb-6">Weeks 2-3</p>
              <ul className="space-y-2 list-none pl-0">
                <li className="text-xs sm:text-sm text-[var(--text-secondary)] pl-5 sm:pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#CE2029] before:font-bold">Frontend development (React/WordPress)</li>
                <li className="text-xs sm:text-sm text-[var(--text-secondary)] pl-5 sm:pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#CE2029] before:font-bold">Backend architecture (Node.js/PHP)</li>
                <li className="text-xs sm:text-sm text-[var(--text-secondary)] pl-5 sm:pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#CE2029] before:font-bold">Database design & setup</li>
                <li className="text-xs sm:text-sm text-[var(--text-secondary)] pl-5 sm:pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#CE2029] before:font-bold">API integrations</li>
                <li className="text-xs sm:text-sm text-[var(--text-secondary)] pl-5 sm:pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#CE2029] before:font-bold">Real-time features</li>
              </ul>
            </motion.div>

            {/* Connecting Line 2 - Desktop only */}
            <div className="hidden lg:block absolute top-[100px] left-[50%] w-[calc(25%-16px)] h-0.5 bg-[var(--border-color)] overflow-hidden pointer-events-none">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-full bg-[#CE2029] origin-left"
              />
            </div>

            {/* Step 3: Testing & Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="timeline-step relative bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-5 sm:p-6 md:p-8 hover:border-[#CE2029]/50 hover:shadow-[0_10px_40px_rgba(206,32,41,0.15)] transition-all hover:-translate-y-2"
            >
              <div className="absolute top-4 right-4 w-8 h-8 bg-[#CE2029]/10 text-[#CE2029] rounded-full flex items-center justify-center font-bold text-sm">
                03
              </div>
              <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-[var(--bg-primary)] border-2 border-[var(--border-color)] rounded-full group">
                <BsCheckCircle className="w-10 h-10 text-[#CE2029]" />
                <div className="absolute inset-[-10px] bg-[#CE2029]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-2 text-center">Testing & Optimization</h3>
              <p className="text-center text-[var(--text-secondary)] text-xs sm:text-sm mb-4 sm:mb-6">Week 3</p>
              <ul className="space-y-2 list-none pl-0">
                <li className="text-xs sm:text-sm text-[var(--text-secondary)] pl-5 sm:pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#CE2029] before:font-bold">Quality assurance testing</li>
                <li className="text-xs sm:text-sm text-[var(--text-secondary)] pl-5 sm:pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#CE2029] before:font-bold">Performance optimization</li>
                <li className="text-xs sm:text-sm text-[var(--text-secondary)] pl-5 sm:pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#CE2029] before:font-bold">Security hardening</li>
                <li className="text-xs sm:text-sm text-[var(--text-secondary)] pl-5 sm:pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#CE2029] before:font-bold">Cross-device testing</li>
                <li className="text-xs sm:text-sm text-[var(--text-secondary)] pl-5 sm:pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#CE2029] before:font-bold">Bug fixes</li>
              </ul>
            </motion.div>

            {/* Connecting Line 3 - Desktop only */}
            <div className="hidden lg:block absolute top-[100px] left-[75%] w-[calc(25%-16px)] h-0.5 bg-[var(--border-color)] overflow-hidden pointer-events-none">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="h-full bg-[#CE2029] origin-left"
              />
            </div>

            {/* Step 4: Launch & Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="timeline-step relative bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-5 sm:p-6 md:p-8 hover:border-[#CE2029]/50 hover:shadow-[0_10px_40px_rgba(206,32,41,0.15)] transition-all hover:-translate-y-2"
            >
              <div className="absolute top-4 right-4 w-8 h-8 bg-[#CE2029]/10 text-[#CE2029] rounded-full flex items-center justify-center font-bold text-sm">
                04
              </div>
              <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-[var(--bg-primary)] border-2 border-[var(--border-color)] rounded-full group">
                <HiRocketLaunch className="w-10 h-10 text-[#CE2029]" />
                <div className="absolute inset-[-10px] bg-[#CE2029]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-2 text-center">Launch & Support</h3>
              <p className="text-center text-[var(--text-secondary)] text-xs sm:text-sm mb-4 sm:mb-6">Week 4</p>
              <ul className="space-y-2 list-none pl-0">
                <li className="text-xs sm:text-sm text-[var(--text-secondary)] pl-5 sm:pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#CE2029] before:font-bold">Production deployment</li>
                <li className="text-xs sm:text-sm text-[var(--text-secondary)] pl-5 sm:pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#CE2029] before:font-bold">Documentation delivery</li>
                <li className="text-xs sm:text-sm text-[var(--text-secondary)] pl-5 sm:pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#CE2029] before:font-bold">Team training (if needed)</li>
                <li className="text-xs sm:text-sm text-[var(--text-secondary)] pl-5 sm:pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#CE2029] before:font-bold">Post-launch monitoring</li>
                <li className="text-xs sm:text-sm text-[var(--text-secondary)] pl-5 sm:pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#CE2029] before:font-bold">Ongoing support</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 relative inline-block">
              What I build
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 100 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-[#CE2029] mt-2"
              ></motion.div>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                number: '01',
                title: 'UI/UX Design & Prototyping',
                description: 'Interface design in Figma from wireframes to high-fidelity mockups. User flows, prototypes, and design systems. Specializing in fintech, e-commerce, and SaaS products.',
              },
              {
                number: '02',
                title: 'E-commerce & Digital Stores',
                description: 'Complete online stores with shopping carts, payment integration, and product management. Built on WordPress/WooCommerce or custom solutions. Mobile-optimized for maximum conversions.',
              },
              {
                number: '03',
                title: 'Enterprise Software & SaaS Products',
                description: 'Custom business software - SaaS platforms, CRM systems, and enterprise applications tailored to your specific needs.',
              },
              {
                number: '04',
                title: 'Full-Stack Development',
                description: 'Complete web applications from design to deployment. Custom WordPress themes, React apps, or hybrid solutions. Built for performance and SEO.',
              },
            ].map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-8 hover:border-[#CE2029]/50 hover:shadow-[0_10px_40px_rgba(206,32,41,0.3)] transition-all group cursor-pointer hover:-translate-y-2"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#CE2029] rounded-full flex items-center justify-center flex-shrink-0 min-h-[44px] min-w-[44px]">
                    <span className="text-black font-bold text-xs sm:text-sm">{service.number}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-2 sm:mb-3">{service.title}</h3>
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">{service.description}</p>
                  </div>
                  <ArrowRight className="text-[var(--text-secondary)] group-hover:text-[#CE2029] group-hover:translate-x-2 transition-all flex-shrink-0" size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Stack Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-12 sm:mb-16">Tools I work with</h2>

            {/* Design Tools */}
            <div className="mb-12 sm:mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold text-[#FFFFFF] mb-2">Design Tools</h3>
                <div className="w-16 h-0.5 bg-[#CE2029]"></div>
              </motion.div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                {[
                  { name: 'Figma', icon: SiFigma, color: '#F24E1E', subtext: 'UI/UX Design' },
                  { name: 'Framer', icon: SiFramer, color: '#0055FF', subtext: 'Prototyping' },
                  { name: 'Adobe XD', icon: null, color: '#FF61F6', subtext: 'Design' },
                ].map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(206,32,41,0.15)] hover:border-[rgba(206,32,41,0.3)] cursor-pointer group"
                  >
                    {tool.icon ? (
                      <tool.icon 
                        className="w-10 h-10 mx-auto mb-3 transition-transform group-hover:scale-110" 
                        style={{ color: tool.color }}
                      />
                    ) : (
                      <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                        XD
                      </div>
                    )}
                    <div className="text-[#FFFFFF] text-[0.95rem] font-medium mt-3">{tool.name}</div>
                    {tool.subtext && (
                      <div className="text-[#888888] text-[0.85rem] mt-1">{tool.subtext}</div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages & Frameworks */}
            <div className="mb-12 sm:mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold text-[#FFFFFF] mb-2">Languages & Frameworks</h3>
                <div className="w-16 h-0.5 bg-[#CE2029]"></div>
              </motion.div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                {[
                  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', subtext: 'Language' },
                  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', subtext: 'Type-safe' },
                  { name: 'HTML5', icon: SiHtml5, color: '#E34F26', subtext: 'Markup' },
                  { name: 'CSS3', icon: SiCss3, color: '#1572B6', subtext: 'Styling' },
                  { name: 'PHP', icon: SiPhp, color: '#777BB4', subtext: 'Backend' },
                  { name: 'React', icon: SiReact, color: '#61DAFB', subtext: 'Frontend' },
                  { name: 'Next.js', icon: SiNextdotjs, color: '#000000', subtext: 'Framework' },
                  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', subtext: 'Runtime' },
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

            {/* CMS & Databases */}
            <div className="mb-12 sm:mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold text-[#FFFFFF] mb-2">CMS & Databases</h3>
                <div className="w-16 h-0.5 bg-[#CE2029]"></div>
              </motion.div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                {[
                  { name: 'WordPress', icon: SiWordpress, color: '#21759B', subtext: 'CMS' },
                  { name: 'WooCommerce', icon: SiWoocommerce, color: '#96588A', subtext: 'E-commerce' },
                  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', subtext: 'Backend' },
                  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', subtext: 'Database' },
                  { name: 'MySQL', icon: SiMysql, color: '#4479A1', subtext: 'Database' },
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

            {/* Payments & APIs */}
            <div className="mb-12 sm:mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold text-[#FFFFFF] mb-2">Payments & APIs</h3>
                <div className="w-16 h-0.5 bg-[#CE2029]"></div>
              </motion.div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                {[
                  { name: 'Paystack', icon: null, color: '#00B67A', subtext: 'Payments' },
                  { name: 'Stripe', icon: SiStripe, color: '#635BFF', subtext: 'Payments' },
                  { name: 'WhatsApp API', icon: null, color: '#25D366', subtext: 'Messaging' },
                  { name: 'REST APIs', icon: null, color: '#FFFFFF', subtext: 'Integration' },
                ].map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(206,32,41,0.15)] hover:border-[rgba(206,32,41,0.3)] cursor-pointer group"
                  >
                    {tool.icon ? (
                      <tool.icon 
                        className="w-10 h-10 mx-auto mb-3 transition-transform group-hover:scale-110" 
                        style={{ color: tool.color }}
                      />
                    ) : tool.name === 'Paystack' ? (
                      <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-[#00B67A] flex items-center justify-center text-white font-bold text-xs">
                        PS
                      </div>
                    ) : tool.name === 'WhatsApp API' ? (
                      <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold text-xs">
                        WA
                      </div>
                    ) : (
                      <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-[#CE2029] flex items-center justify-center text-white font-bold text-xs">
                        API
                      </div>
                    )}
                    <div className="text-[#FFFFFF] text-[0.95rem] font-medium mt-3">{tool.name}</div>
                    {tool.subtext && (
                      <div className="text-[#888888] text-[0.85rem] mt-1">{tool.subtext}</div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Version Control & Deployment */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold text-[#FFFFFF] mb-2">Version Control & Deployment</h3>
                <div className="w-16 h-0.5 bg-[#CE2029]"></div>
              </motion.div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                {[
                  { name: 'Git', icon: SiGit, color: '#F05032', subtext: 'Version Control' },
                  { name: 'GitHub', icon: SiGithub, color: '#181717', subtext: 'Repository' },
                  { name: 'Vercel', icon: SiVercel, color: '#000000', subtext: 'Deployment' },
                  { name: 'Netlify', icon: SiNetlify, color: '#00C7B7', subtext: 'Deployment' },
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
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              What Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-[#CCCCCC] max-w-2xl mx-auto">
              Real feedback from businesses I&apos;ve worked with
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 sm:p-8 hover:shadow-[0_8px_24px_rgba(206,32,41,0.15)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-[rgba(206,32,41,0.3)]" size={32} />
                </div>

                {/* Testimonial Text */}
                <p className="text-base sm:text-lg text-[#CCCCCC] leading-relaxed mb-6">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 mb-4">
                  {/* Client Photo */}
                  {testimonial.image ? (
                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-[rgba(206,32,41,0.2)] flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={`${testimonial.name} - ${testimonial.company} testimonial for Mary Clement web development services`}
                        width={60}
                        height={60}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-[60px] h-[60px] rounded-full bg-[#CE2029]/20 border-2 border-[rgba(206,32,41,0.2)] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#CE2029] font-bold text-base">
                        {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}

                  {/* Client Name & Title */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base sm:text-lg font-bold text-[var(--text-primary)] mb-0.5">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[#888888]">
                      {testimonial.title}
                      {testimonial.company && ` • ${testimonial.company}`}
                    </p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#CE2029] text-[#CE2029]"
                      size={16}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">Featured projects</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: 'SureFunds Exchange',
                category: 'Fintech Design',
                description: 'UI/UX design for gift card and crypto trading platform. Direct-to-bank payments with no wallet complexity.',
                tech: 'Figma • UI/UX Design • Prototyping',
                image: '/images/surefunds.jpg',
                key: 'surefunds',
              },
              {
                title: 'EchoCart',
                category: 'Marketplace Platform',
                description: 'B2B marketplace connecting African suppliers with global buyers. Full-stack build in 3 weeks.',
                tech: 'Custom PHP • Firebase • Paystack',
                image: '/images/echocart.jpg',
                key: 'echocart',
              },
              {
                title: 'Ashrey Fitness',
                category: 'Management System',
                description: 'Multi-location gym management serving 500+ members. Designed and built complete system.',
                tech: 'Figma • WordPress • Firebase • WhatsApp API',
                image: '/images/ashrey.jpg',
                key: 'ashrey',
              },
              {
                title: 'VenueFlow',
                category: 'SaaS Product',
                description: 'QR-code restaurant ordering platform with real-time kitchen updates. Building in public.',
                tech: 'Figma • React • Node.js • PostgreSQL',
                image: '/images/venueflow.jpg',
                key: 'venueflow',
              },
            ].map((project, index) => {
              const links = projectLinks[project.key as keyof typeof projectLinks];
              return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl overflow-hidden hover:shadow-[0_10px_40px_rgba(206,32,41,0.3)] transition-all cursor-pointer group hover:-translate-y-2"
              >
                {project.image && (
                  <div className="h-40 sm:h-48 bg-[var(--bg-primary)] border-b border-[var(--border-color)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                    <img
                      src={project.image}
                      alt={
                        project.title === 'SureFunds Exchange' 
                          ? 'SureFunds Exchange fintech app UI design - Gift card and cryptocurrency trading platform designed by Mary Clement'
                          : project.title === 'EchoCart'
                          ? 'EchoCart B2B marketplace web application - African supplier platform connecting exporters with global buyers'
                          : project.title === 'Ashrey Fitness'
                          ? 'Ashrey Fitness gym management system dashboard - Multi-location fitness center software managing 500+ members'
                          : project.title === 'VenueFlow'
                          ? 'VenueFlow restaurant ordering system - QR-based digital menu and order management platform'
                          : `${project.title} - ${project.category} project by Mary Clement`
                      }
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-4 sm:p-6">
                  <span className="inline-block bg-[#CE2029] text-white text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-2 sm:mb-3">{project.title}</h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-3 sm:mb-4 leading-relaxed">{project.description}</p>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-4 opacity-70">{project.tech}</p>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                    <Link
                      href="/work"
                      className="text-[#CE2029] font-semibold text-sm inline-flex items-center justify-center gap-2 group-hover:gap-4 transition-all min-h-[44px]"
                    >
                      View Case Study
                      <ArrowRight size={16} />
                    </Link>
                    {links?.live && (
                      <a
                        href={links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#CE2029] text-white px-4 py-2.5 rounded-full font-semibold text-sm hover:bg-[#B01C24] transition-all glow-on-hover min-h-[44px]"
                      >
                        View Live Site
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {links?.figma && (
                      <a
                        href={links.figma}
            target="_blank"
            rel="noopener noreferrer"
                        className="inline-flex items-center justify-center border border-[rgba(206,32,41,0.3)] text-[#CE2029] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[rgba(206,32,41,0.1)] hover:border-[#CE2029] transition-all min-h-[44px] leading-none"
                      >
                        Design Project
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--text-primary)] px-4">
              design <span className="text-[#CE2029]">•</span> build <span className="text-[#CE2029]">•</span> launch
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] border-t border-[var(--border-color)] relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Ready to start?
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Whether you need a complete platform, just design work, or help bringing your existing designs to life - let&apos;s talk. I work with startups, SMEs, and established businesses across Nigeria and internationally.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 px-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#CE2029] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold hover:bg-[#B01C24] transition-all glow-on-hover inline-flex items-center justify-center gap-2 text-sm sm:text-base min-h-[44px]"
              >
                <MessageCircle size={18} />
                <span className="whitespace-nowrap">WhatsApp (fastest response)</span>
              </a>
              <a
                href={getEmailLink()}
                className="bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold hover:border-[#CE2029] transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base min-h-[44px]"
              >
                <Mail size={18} />
                Email
          </a>
          <a
                href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
                className="bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold hover:border-[#CE2029] transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base min-h-[44px]"
          >
                <Linkedin size={18} />
                LinkedIn
          </a>
            </div>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] px-4">Currently booking projects for {personalInfo.availableFrom}</p>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}