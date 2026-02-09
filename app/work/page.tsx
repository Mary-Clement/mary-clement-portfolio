'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { personalInfo } from '@/config/personal';
import { projectLinks } from '@/config/projectLinks';

// Structured Data for Portfolio
const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Mary Clement - Web Development Portfolio",
  "description": "Portfolio of web development and UI/UX design projects",
  "creator": {
    "@type": "Person",
    "name": personalInfo.name
  }
};

export default function WorkPage() {
  const projects = [
    {
      number: '01',
      title: 'SureFunds Exchange',
      client: 'SureFunds',
      industry: 'Fintech Platform',
      timeline: '3 weeks',
      status: 'In Development',
      role: 'UI/UX Designer',
      challenge: 'SureFunds Exchange needed a platform where users could trade gift cards and cryptocurrency for instant cash. The twist? No wallet system - payments go directly to users\' bank accounts. This meant designing a flow that felt secure and instant without the complexity of managing wallet balances.',
      designResearch: 'Analyzed competing gift card and crypto trading platforms to identify friction points. Most platforms force users to maintain wallet balances before withdrawing, adding extra steps. SureFunds\' direct-to-bank approach needed to feel fast and trustworthy.',
      userFlows: 'Mapped complete user journeys in Figma: onboarding and KYC verification (quick, mobile-optimized), gift card upload and validation flow, cryptocurrency trade initiation, rate calculation and acceptance, bank account linking (one-time setup), transaction status tracking, transaction history and receipts',
      interfaceDesign: 'Designed the complete platform in Figma: mobile-first interface (primary use case), dashboard showing available trade options and real-time rates, gift card upload flow with photo capture and manual entry, crypto trading interface with live rate updates, bank account management screens, transaction tracking with status updates, clean, trustworthy design language using green as primary color, simple typography prioritizing readability, microinteractions for confirmation states',
      keyDecisions: [
        'Rate Transparency: Real-time rates displayed prominently before users commit',
        'Trust Indicators: Security badges, transaction timelines, clear status updates',
        'Speed Emphasis: Progress indicators showing how fast payment arrives',
        'No Jargon: Simple language explaining gift card and crypto trading',
        'Direct Payment Clarity: Visual emphasis on \'no wallet needed\'',
      ],
      designSystem: 'Created complete design system in Figma: color palette (primary green for trust, neutral grays, accents), typography scale optimized for mobile screens, component library (buttons, forms, cards, status indicators), iconography (custom icons for gift cards, crypto, bank transfers), spacing system for consistent layouts, mobile and desktop breakpoints',
      result: 'Complete UI/UX design delivered for SureFunds Exchange platform. Designed for clarity, speed, and trust - essential for fintech handling real money. Design currently being implemented by client\'s development team.',
      deliverables: [
        'Complete user flows for all core features',
        'High-fidelity mockups for mobile and web',
        'Interactive Figma prototypes',
        'Design system and component library',
        'Handoff documentation for developers',
        '3-week timeline',
      ],
      tech: ['Figma', 'UI/UX Design', 'Prototyping', 'Design Systems'],
      bgDark: true,
      isDesignOnly: true,
      image: '/images/surefunds.jpg',
      projectKey: 'surefunds', // Design project, no live link
    },
    {
      number: '02',
      title: 'EchoCart',
      client: 'Private Client',
      industry: 'B2B Marketplace Platform',
      timeline: '3 weeks',
      status: 'Live',
      role: 'Full-stack Developer',
      challenge: 'African suppliers needed a verified platform to connect with international buyers. The existing process was manual, unverified, and lacked payment security. Buyers had no way to verify suppliers, and suppliers had no protection for payments.',
      design: 'Started with user research and competitive analysis. Designed the complete interface in Figma - supplier dashboards, buyer workflows, admin panels, and verification processes. Created a design system for consistency.',
      development: 'Built a custom PHP application with Firebase for real-time data sync. Implemented: supplier verification system with document upload and admin approval, buyer dashboard for browsing verified suppliers and requesting quotes, quote management system with negotiation workflows, escrow payment integration via Paystack for secure transactions, admin panel with full oversight and verification tools, automated email notifications for all transaction stages, SEO optimization for supplier profiles to appear in search results',
      result: 'Live B2B platform connecting suppliers and buyers with verified, secure transactions. Automated workflows from supplier registration to payment confirmation. SEO-optimized supplier profiles bringing organic traffic.',
      metrics: [
        '3-week development timeline',
        'Automated verification reducing admin time by 70%',
        'Secure escrow payments protecting both parties',
        'Email automation handling all communication',
      ],
      tech: ['Custom PHP', 'Firebase (Real-time Database)', 'Paystack Payment API', 'EmailJS', 'Custom Admin Dashboard', 'SEO Optimization'],
      bgDark: false,
      image: '/images/echocart.jpg',
      projectKey: 'echocart',
    },
    {
      number: '03',
      title: 'Ashrey Fitness Center',
      client: 'Ashrey Fitness',
      industry: 'Health & Wellness',
      timeline: '3 weeks',
      status: 'Live',
      role: 'Full-stack Developer & Designer',
      challenge: 'Managing 500+ gym members across 3 locations with paper-based systems. Check-ins were manual, class schedules conflicted, renewal reminders were forgotten, and the owner had no real-time visibility into operations.',
      design: 'Designed the member portal and admin dashboard in Figma. Created user flows for check-ins, class booking, and payment tracking. Focused on mobile-first design since staff and members primarily use phones.',
      development: 'Built a custom WordPress theme with Firebase integration for real-time sync across locations: member registration and profile management, QR code check-in system working at all 3 locations, class scheduling with automatic capacity limits, payment tracking with overdue alerts, WhatsApp Business API integration for automated renewal reminders, admin dashboard showing live stats from all locations, member portal for viewing workout history and booking classes, SEO optimization for local gym searches',
      result: 'Complete management system handling 500+ members with zero manual tracking. Staff check members in with QR scans, classes manage themselves with capacity limits, and WhatsApp sends renewal reminders automatically. Owner sees real-time data from all locations.',
      metrics: [
        '500+ members managed seamlessly',
        '3 locations synced in real-time',
        'Automated renewals increased retention by 25%',
        'Staff time saved: ~15 hours per week',
      ],
      tech: ['WordPress (Custom Theme)', 'Firebase (Real-time Database)', 'WhatsApp Business API', 'Custom Dashboard', 'QR Code System', 'Mobile-responsive Design'],
      bgDark: true,
      image: '/images/ashrey.jpg',
      projectKey: 'ashrey',
    },
    {
      number: '04',
      title: 'VenueFlow',
      client: 'Building in Public',
      industry: 'Restaurant Technology',
      timeline: 'In Progress',
      status: 'Beta Testing',
      role: 'Founder, Designer & Developer',
      challenge: 'Restaurants lose revenue during peak hours when customers wait for service. Manual order-taking is slow, error-prone, and limits table turnover. Existing solutions require expensive hardware or force customers to download apps.',
      design: 'Interviewed restaurant owners and servers in Lagos to understand pain points. Designed the entire flow in Figma: customer ordering interface (mobile-optimized, no app), kitchen display system (tablet/screen for cooks), server dashboard (table management), admin analytics (sales, popular items, peak hours). Prototyped and tested with real users before writing code.',
      development: 'Building with React frontend and Node.js backend: QR code generation for each table, digital menu with photos, descriptions, real-time availability, cart system with special instructions, payment integration via Stripe, kitchen display showing orders by priority and time, real-time order status updates, table management and turnover tracking, customer order history and preferences, analytics dashboard for owners, SEO-optimized restaurant landing pages',
      result: 'Beta testing with 2 restaurants in Lagos. Early results show 30% faster table turnover and 15% fewer order errors. Iterating based on real feedback from staff and customers.',
      metrics: [
        'Beta testing with 2 restaurants',
        '30% faster table turnover',
        '15% fewer order errors',
        'Refining based on feedback',
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'QR Code Generation', 'Real-time WebSockets', 'Figma (Design)'],
      bgDark: false,
      nextSteps: 'Refining based on beta feedback, adding inventory tracking, and building WhatsApp integration for takeout orders. Planning public launch in Q2 2026.',
      image: '/images/venueflow.jpg',
      projectKey: 'venueflow',
    },
    {
      number: '05',
      title: 'JapaStuffs',
      client: 'JapaStuffs',
      industry: 'E-commerce',
      timeline: '4 weeks',
      status: 'Live',
      role: 'Full-stack Developer',
      challenge: 'Needed to launch an online marketplace quickly to start selling products. Required product management, shopping cart, payment processing, and SEO to attract organic traffic. Budget and timeline were tight.',
      design: 'Created a clean, conversion-focused design in Figma. Prioritized mobile experience since most Nigerian shoppers use phones. Designed product pages to highlight key info and make checkout seamless.',
      development: 'Built on WordPress with WooCommerce, heavily customized: custom product page layouts optimized for conversions, advanced filtering by category, price, availability, Paystack payment integration for Nigerian customers, mobile-responsive design (tested on multiple devices), SEO optimization: meta tags, schema markup, optimized images, page speed optimization (compressed images, lazy loading), abandoned cart recovery system, email automation for order confirmations and shipping updates',
      result: 'Live e-commerce platform with smooth checkout and strong SEO. Products appear in Google search results. Mobile-optimized interface converts visitors to customers.',
      metrics: [
        '4-week launch timeline',
        '95+ Google PageSpeed score',
        'SEO bringing 40% of traffic from search',
        'Mobile conversion rate: 3.2%',
      ],
      tech: ['WordPress', 'WooCommerce', 'Paystack', 'Custom Theme', 'SEO Optimization (Yoast, Schema)', 'Image Optimization'],
      bgDark: true,
      image: '/images/japastuffs.jpg',
      projectKey: 'japastuffs',
    },
    {
      number: '06',
      title: 'White Rhino Trademarks',
      client: 'White Rhino',
      industry: 'Legal Services (UK)',
      timeline: '5 weeks',
      status: 'Live',
      role: 'Full-stack Developer',
      challenge: 'Managing 2,500+ UK business clients and their trademark applications through emails and spreadsheets. No centralized system meant missed deadlines, lost documents, and frustrated clients asking for status updates.',
      design: 'Mapped out client and admin workflows in Figma. Designed a clean client portal and comprehensive admin system. Focused on making status updates automatic to reduce admin workload.',
      development: 'Built on WordPress with custom CRM integration: client portal where businesses log in to check application status, document upload system for trademark files and business docs, application tracking with automatic status updates, admin dashboard with full client oversight, automated email notifications for status changes, search and filter system for 2,500+ clients, document management with secure storage, deadline tracking with alerts for admin team, UK business-compliant data handling',
      result: 'Centralized system managing 2,500+ UK businesses. Clients get automatic updates instead of emailing for status. Admin team has full visibility and automated workflows. No more spreadsheets.',
      metrics: [
        '2,500+ clients migrated to new system',
        'Client support emails reduced by 60%',
        'Admin time saved: ~20 hours per week',
        'Zero missed deadlines since launch',
      ],
      tech: ['WordPress (Custom Theme)', 'Custom CRM Integration', 'Client Portal System', 'Document Management', 'Automated Email System', 'UK Data Compliance'],
      bgDark: false,
      image: '/images/whiterrhino.jpg',
      projectKey: 'whiterrhino',
    },
    {
      number: '07',
      title: 'Texas Small Chops - E-commerce Catering Platform',
      client: 'Texas Small Chops Catering',
      industry: 'Food & Catering',
      timeline: '2 weeks',
      status: 'Live & Serving Customers',
      role: 'Full-stack Developer',
      challenge: 'Texas-based Nigerian small chops catering business needed a professional e-commerce website to showcase their authentic finger foods (meat pies, chicken pies, samosas, spring rolls) and streamline online ordering for Texas customers seeking authentic Nigerian cuisine.',
      design: 'Designed a sophisticated catering website featuring full product catalog with high-quality imagery, occasion-based marketing sections (birthdays, corporate events, weddings), integrated shopping cart with quantity selectors, and direct WhatsApp order integration for real-time customer communication. Implemented elegant Cormorant Garamond typography paired with warm brand colors for premium positioning.',
      development: 'Built a complete e-commerce website with: full product showcase with high-quality food photography, shopping cart functionality for order management, WhatsApp order integration for direct customer communication, responsive design optimized for mobile ordering, fast loading times for better user experience, SEO optimization for local Texas searches',
      result: 'Successfully launched professional catering platform serving Texas market. Website features elegant design system, complete e-commerce functionality from product selection to checkout, and mobile-responsive interface. Enabled 24/7 online ordering capability and streamlined customer inquiry process.',
      metrics: [
        'Fast page load times (95+ PageSpeed score)',
        'Complete e-commerce functionality',
        'WhatsApp integration for seamless ordering',
        'Mobile-optimized for on-the-go customers',
        'SEO optimized for local Texas searches',
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'WhatsApp Business API', 'Responsive Design', 'E-commerce Integration', 'SEO Optimization', 'Vercel Deployment'],
      bgDark: true,
      isDesignOnly: false,
      image: '/images/smallchops.jpg',
      projectKey: 'smallchops',
    },
    {
      number: '08',
      title: 'Elite Homes - Real Estate Marketplace',
      client: 'Elite Homes Realty',
      industry: 'Real Estate & Property',
      timeline: '2 weeks',
      status: 'Live Platform',
      role: 'Full-stack Developer',
      challenge: 'Real estate brokerage required a comprehensive digital platform to showcase property listings, connect potential buyers with agents, and provide advanced search functionality tailored for the Nigerian real estate market in Lagos.',
      design: 'Designed a clean, professional real estate broker interface with property listings, advanced search functionality, and agent profiles. Created modern UI optimized for property browsing with intuitive navigation and visual property showcases.',
      development: 'Built full-featured real estate platform with dynamic property listings, advanced search and filter system (by location, price range, property type, bedrooms), detailed property pages with image galleries, agent profile sections, and integrated contact forms. Designed specifically for Lagos market featuring realistic property data across premium locations.',
      result: 'Comprehensive real estate broker website with modern, professional UI and robust property management capabilities. Platform successfully showcases listings across Lagos locations (Lekki Phase 1, Victoria Island, Ikoyi, Banana Island) with intuitive filtering and search functionality. Fully responsive design optimized for mobile property browsing.',
      metrics: [
        'Complete property management system',
        'Advanced search and filtering capabilities',
        'Mobile-responsive property browsing',
        'Integrated agent profiles and contact forms',
        'Optimized for Lagos real estate market',
      ],
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'Responsive Design', 'Vercel Deployment'],
      bgDark: false,
      isDesignOnly: false,
      image: '/images/realestate.jpg',
      projectKey: 'realestate',
    },
  ];

  return (
    <>
      {/* Structured Data for Portfolio */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <div className="min-h-screen relative">
      {/* Header Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] border-b border-[#2A2A2A] relative z-10">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[#CE2029] transition-colors text-sm font-medium mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--text-primary)] mb-4">Projects</h1>
            <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)]">Design and development work - from Figma to production</p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <div>
        {projects.map((project, index) => (
          <section
            key={project.number}
            className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${
              project.bgDark ? 'bg-[var(--bg-primary)]' : 'bg-[var(--bg-primary)]'
            } relative`}
          >
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`border rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 ${
                  project.bgDark
                    ? 'border-[var(--border-color)] bg-[var(--bg-secondary)]'
                    : 'border-[var(--border-color)] bg-[var(--bg-card)]'
                } hover:shadow-[0_20px_60px_rgba(206,32,41,0.15)] transition-shadow`}
              >
                {/* Project Header */}
                <div className="mb-8 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#CE2029] rounded-full flex items-center justify-center flex-shrink-0 min-h-[44px] min-w-[44px]">
                      <span className="text-black font-bold text-base sm:text-lg">{project.number}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-[var(--text-primary)]">
                        {project.title}
                      </h2>
                      <p className="text-xs sm:text-sm mb-1 sm:mb-2 text-[var(--text-secondary)]">
                        {project.client}  •  {project.industry}
                      </p>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-3 sm:mb-0">
                        Timeline: {project.timeline}  •  Status: {project.status}  •  Role: {project.role}
                      </p>
                      {/* Project URL Button/Badge */}
                      <div className="mt-3 sm:mt-4 flex flex-wrap gap-3">
                        {(() => {
                          const links = project.projectKey ? projectLinks[project.projectKey as keyof typeof projectLinks] : null;
                          return (
                            <>
                              {links?.live && (
                                <a
                                  href={links.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 bg-[#CE2029] text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold hover:bg-[#B01C24] transition-all glow-on-hover text-sm sm:text-base min-h-[44px]"
                                >
                                  View Live Site
                                  <ExternalLink size={16} />
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
                              {!links?.live && !links?.figma && (
                                <span className="inline-flex items-center justify-center bg-[var(--bg-secondary)] text-[var(--text-secondary)] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold min-h-[44px] border border-[var(--border-color)]">
                                  Case Study
                                </span>
                              )}
                            </>
                          );
                        })()}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Large Project Image */}
                <div className="mb-8 sm:mb-12">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={
                        project.title === 'SureFunds Exchange'
                          ? 'SureFunds Exchange fintech app UI design - Gift card and cryptocurrency trading platform designed by Mary Clement'
                          : project.title === 'EchoCart'
                          ? 'EchoCart B2B marketplace web application - African supplier platform connecting exporters with global buyers'
                          : project.title === 'Ashrey Fitness Center'
                          ? 'Ashrey Fitness gym management system dashboard - Multi-location fitness center software managing 500+ members'
                          : project.title === 'VenueFlow'
                          ? 'VenueFlow restaurant ordering system - QR-based digital menu and order management platform'
                          : project.title === 'JapaStuffs'
                          ? 'JapaStuffs e-commerce platform - Nigerian online marketplace built with WordPress and WooCommerce'
                          : project.title === 'White Rhino Trademarks'
                          ? 'White Rhino Trademarks CRM system - Client management platform serving 2,500+ UK businesses'
                          : project.title === 'Texas Small Chops - E-commerce Catering Platform'
                          ? 'Texas Small Chops catering website - Nigerian finger food e-commerce site with WhatsApp ordering'
                          : project.title === 'Elite Homes - Real Estate Marketplace'
                          ? 'Elite Homes real estate platform - Property listings and search system for Lagos market'
                          : `${project.title} - ${project.industry} project by Mary Clement`
                      }
                      className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-2xl border border-[var(--border-color)]"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center"
                    >
                      <span className="text-[var(--text-secondary)] text-sm sm:text-base px-4 text-center">
                        {project.title} Screenshot/Design
                      </span>
                    </div>
                  )}
                </div>

                {/* The Challenge */}
                <div className="mb-8 sm:mb-12">
                  <h3
                    className={`text-base sm:text-lg font-bold uppercase tracking-wider mb-3 sm:mb-4 text-[#CE2029]`}
                  >
                    The challenge
                  </h3>
                  <p
                    className="text-base sm:text-lg leading-relaxed text-[#CCCCCC]"
                  >
                    {project.challenge}
                  </p>
                </div>

                {/* What I Built/Designed */}
                <div className="mb-8 sm:mb-12 space-y-6 sm:space-y-8">
                  <h3
                    className={`text-base sm:text-lg font-bold uppercase tracking-wider mb-4 sm:mb-6 text-[#CE2029]`}
                  >
                    {project.isDesignOnly ? 'What I designed' : 'What I built'}
                  </h3>

                  {/* SureFunds Specific Sections */}
                  {project.isDesignOnly ? (
                    <>
                      <div>
                        <h4
                          className={`text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-[var(--text-primary)]`}
                        >
                          Research & Strategy:
                        </h4>
                        <p
                          className={`text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]`}
                        >
                          {project.designResearch}
                        </p>
                      </div>
                      <div>
                        <h4
                          className={`text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-[var(--text-primary)]`}
                        >
                          User Flows:
                        </h4>
                        <p
                          className={`text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]`}
                        >
                          {project.userFlows}
                        </p>
                      </div>
                      <div>
                        <h4
                          className={`text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-[var(--text-primary)]`}
                        >
                          Interface Design:
                        </h4>
                        <p
                          className={`text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]`}
                        >
                          {project.interfaceDesign}
                        </p>
                      </div>
                      {project.keyDecisions && (
                        <div>
                          <h4
                            className={`text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-[var(--text-primary)]`}
                          >
                            Key Design Decisions:
                          </h4>
                          <ul
                            className={`space-y-2 list-disc list-inside text-sm sm:text-base text-[var(--text-secondary)] pl-4`}
                          >
                            {project.keyDecisions.map((decision, idx) => (
                              <li key={idx}>{decision}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {project.designSystem && (
                        <div>
                          <h4
                            className={`text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-[var(--text-primary)]`}
                          >
                            Design System:
                          </h4>
                          <p
                            className={`text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]`}
                          >
                            {project.designSystem}
                          </p>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      {/* Design & Planning */}
                      {project.design && (
                        <div>
                          <h4
                            className={`text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-[var(--text-primary)]`}
                          >
                            Design & Planning:
                          </h4>
                          <p
                            className={`text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]`}
                          >
                            {project.design}
                          </p>
                        </div>
                      )}

                      {/* Development */}
                      {project.development && (
                        <div>
                          <h4
                            className={`text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-[var(--text-primary)]`}
                          >
                            Development:
                          </h4>
                          <p
                            className={`text-sm sm:text-base leading-relaxed mb-3 text-[var(--text-secondary)]`}
                          >
                            {project.development}
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* The Result */}
                <div className="mb-8 sm:mb-12">
                  <h3
                    className={`text-base sm:text-lg font-bold uppercase tracking-wider mb-3 sm:mb-4 text-[#CE2029]`}
                  >
                    The result
                  </h3>
                  <p
                    className={`text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-[var(--text-primary)]`}
                  >
                    {project.result}
                  </p>

                  {/* Key Metrics */}
                  {project.metrics && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
                      {project.metrics.map((metric, metricIndex) => (
                        <div
                          key={metricIndex}
                          className={`p-3 sm:p-4 rounded-lg border bg-[var(--bg-secondary)] border-[var(--border-color)] text-[var(--text-primary)]`}
                        >
                          <p className="text-xs sm:text-sm">{metric}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Deliverables (for SureFunds) */}
                  {project.deliverables && (
                    <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg border border-[#CE2029]/30 bg-[#CE2029]/5">
                      <h4 className="text-sm sm:text-base font-semibold text-[#CE2029] mb-2 sm:mb-3">Key deliverables:</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[#CCCCCC] pl-2">
                        {project.deliverables.map((deliverable, idx) => (
                          <li key={idx}>{deliverable}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Next Steps (for VenueFlow) */}
                  {project.nextSteps && (
                    <div className="mt-6 p-4 rounded-lg border border-[#CE2029]/30 bg-[#CE2029]/5">
                      <h4 className="text-base font-semibold text-[#CE2029] mb-2">Next steps:</h4>
                      <p className="text-sm text-[#CCCCCC]">{project.nextSteps}</p>
                    </div>
                  )}
                </div>

                {/* Tech Stack */}
                <div className="pt-8 border-t border-[#2A2A2A]">
                  <h4
                    className={`text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 sm:mb-4 text-[var(--text-secondary)]`}
                  >
                    {project.isDesignOnly ? 'Design Tools' : 'Tech stack'}
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-[var(--bg-secondary)] text-[var(--text-primary)]`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </div>
    </>
  );
}