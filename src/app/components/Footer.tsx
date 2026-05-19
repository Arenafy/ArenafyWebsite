import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="relative py-16 bg-black border-t border-white/10">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="src/imports/Arenafy_Logo_White.png"
              alt="Arenafy"
              className="h-[1.925rem] w-auto object-contain"
            />
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a
              href="#capabilities"
              className="text-zinc-400 hover:text-[--color-arenafy-green] transition-colors duration-300"
              style={{ fontSize: '0.9375rem', fontWeight: 500 }}
            >
              Capabilities
            </a>
            <a
              href="#public-sector"
              className="text-zinc-400 hover:text-[--color-arenafy-green] transition-colors duration-300"
              style={{ fontSize: '0.9375rem', fontWeight: 500 }}
            >
              Public Sector
            </a>
            <a
              href="#leadership"
              className="text-zinc-400 hover:text-[--color-arenafy-green] transition-colors duration-300"
              style={{ fontSize: '0.9375rem', fontWeight: 500 }}
            >
              Leadership
            </a>
            <a
              href="#contact"
              className="text-zinc-400 hover:text-[--color-arenafy-green] transition-colors duration-300"
              style={{ fontSize: '0.9375rem', fontWeight: 500 }}
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-zinc-500" style={{ fontSize: '0.875rem' }}>
            © {new Date().getFullYear()} Arenafy. All rights reserved.
          </div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className="mt-8 h-px bg-gradient-to-r from-transparent via-[--color-arenafy-green]/30 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    </footer>
  );
}
