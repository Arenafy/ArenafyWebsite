import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,65,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(0,255,65,0.08),transparent_50%)]" />
      </div>

      {/* Animated Grid */}
      <motion.div className="absolute inset-0 opacity-20" style={{ y }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,255,65,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,255,65,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </motion.div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-[--color-arenafy-green] rounded-full opacity-20 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-emerald-500 rounded-full opacity-15 blur-[100px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-32 pb-20 text-center"
        style={{ opacity }}
      >
        {/* Label */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 bg-[--color-arenafy-green]/10 border border-[--color-arenafy-green]/30 rounded-full mb-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Zap size={14} className="text-[--color-arenafy-green]" />
          <span className="text-[--color-arenafy-green]" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
            Modern Data Infrastructure & Analytics
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="mb-6 text-white" style={{ fontSize: '4rem', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.03em' }}>
            Turning Operational Data
            <br />
            Into{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#80ff80] via-[#00ff41] to-[#00cc66] bg-clip-text text-transparent">
                Actionable Intelligence
              </span>
              <motion.div
                className="absolute -inset-2 bg-[--color-arenafy-green]/20 blur-xl rounded-lg"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          className="mb-12 text-zinc-300 max-w-3xl mx-auto"
          style={{ fontSize: '1.25rem', lineHeight: 1.6 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Arenafy partners with organizations to modernize data systems, integrate enterprise platforms, and deliver
          actionable intelligence through cloud analytics, automation, and AI-enabled infrastructure.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#capabilities"
            className="group relative px-8 py-4 bg-white/5 text-white hover:bg-white/10 border border-white/20 hover:border-[--color-arenafy-green]/50 transition-all duration-300 rounded-lg backdrop-blur-sm flex items-center gap-2 overflow-hidden"
            style={{ fontSize: '1rem', fontWeight: 600 }}
          >
            <span className="relative z-10">Explore Capabilities</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-[--color-arenafy-green]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 bg-white/5 text-white hover:bg-white/10 border border-white/20 hover:border-[--color-arenafy-green]/50 transition-all duration-300 rounded-lg backdrop-blur-sm relative overflow-hidden"
            style={{ fontSize: '1rem', fontWeight: 600 }}
          >
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-[--color-arenafy-green]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
