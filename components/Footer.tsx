import Link from 'next/link';
import { Linkedin, Twitter, Instagram, Github, Mail } from 'lucide-react';
import { personalInfo } from '@/config/personal';

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border-color)] py-16 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">{personalInfo.name}</span>
              <span className="w-2 h-2 bg-[#CE2029] rounded-full"></span>
            </div>
            <p className="text-[var(--text-secondary)] text-xs sm:text-sm mb-2">{personalInfo.title}</p>
            <p className="text-[var(--text-secondary)] text-xs sm:text-sm mb-3 sm:mb-4">{personalInfo.location}</p>
            <p className="text-[#CE2029] text-xs font-medium">
              design • build • launch
            </p>
          </div>

          {/* Column 2: Work */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Work</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/work" className="text-[var(--text-secondary)] hover:text-[#CE2029] transition-colors text-xs sm:text-sm min-h-[44px] flex items-center">
                  SureFunds Exchange
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-[var(--text-secondary)] hover:text-[#CE2029] transition-colors text-xs sm:text-sm min-h-[44px] flex items-center">
                  EchoCart
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-[var(--text-secondary)] hover:text-[#CE2029] transition-colors text-xs sm:text-sm min-h-[44px] flex items-center">
                  Ashrey Fitness
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-[var(--text-secondary)] hover:text-[#CE2029] transition-colors text-xs sm:text-sm min-h-[44px] flex items-center">
                  VenueFlow
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-[var(--text-secondary)] hover:text-[#CE2029] transition-colors text-xs sm:text-sm min-h-[44px] flex items-center">
                  JapaStuffs
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-[var(--text-secondary)] hover:text-[#CE2029] transition-colors text-xs sm:text-sm min-h-[44px] flex items-center">
                  White Rhino
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Connect</h4>
            <ul className="space-y-2 sm:space-y-3">
              {personalInfo.linkedin && (
                <li>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-secondary)] hover:text-[#CE2029] transition-colors text-xs sm:text-sm inline-flex items-center gap-2 min-h-[44px]"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                </li>
              )}
              {personalInfo.twitter && (
                <li>
                  <a
                    href={personalInfo.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-secondary)] hover:text-[#CE2029] transition-colors text-xs sm:text-sm inline-flex items-center gap-2 min-h-[44px]"
                  >
                    <Twitter size={16} />
                    Twitter
                  </a>
                </li>
              )}
              {personalInfo.instagram && (
                <li>
                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-secondary)] hover:text-[#CE2029] transition-colors text-xs sm:text-sm inline-flex items-center gap-2 min-h-[44px]"
                  >
                    <Instagram size={16} />
                    Instagram
                  </a>
                </li>
              )}
              {personalInfo.github && (
                <li>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-secondary)] hover:text-[#CE2029] transition-colors text-xs sm:text-sm inline-flex items-center gap-2 min-h-[44px]"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-[var(--text-secondary)] hover:text-[#CE2029] transition-colors text-xs sm:text-sm inline-flex items-center gap-2 min-h-[44px]"
                >
                  <Mail size={16} />
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
            <ul className="space-y-2">
              <li className="text-[var(--text-secondary)] text-xs sm:text-sm">UI/UX Design</li>
              <li className="text-[var(--text-secondary)] text-xs sm:text-sm">Full-Stack Development</li>
              <li className="text-[var(--text-secondary)] text-xs sm:text-sm">Design + Development</li>
              <li className="text-[var(--text-secondary)] text-xs sm:text-sm">Enterprise Software & SaaS</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[var(--border-color)] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[var(--text-secondary)] text-xs sm:text-sm text-center sm:text-left">© 2026 {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}