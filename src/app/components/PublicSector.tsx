import { motion, useScroll, useTransform } from 'motion/react';
import { Building2, Lock, Scale, Shield, Database, Zap } from 'lucide-react';
import { useRef } from 'react';

export function PublicSector() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={ref} id="public-sector" className="relative py-32 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-[40rem] h-[40rem] bg-[--color-arenafy-green]/15 rounded-full blur-[150px]"
        style={{ y: y1 }}
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-[35rem] h-[35rem] bg-[--color-arenafy-green]/12 rounded-full blur-[140px]"
        style={{ y: y2 }}
        animate={{ opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[--color-arenafy-green]/10 rounded-full blur-[160px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(20,229,128,0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(20,229,128,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Vertical green accent bars */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-[--color-arenafy-green] to-transparent"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-[--color-arenafy-green] to-transparent"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, delay: 2, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-1.5 bg-[--color-arenafy-green]/10 border border-[--color-arenafy-green]/30 rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[--color-arenafy-green]" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
              MODERN INFRASTRUCTURE
            </span>
          </motion.div>
          <h2 className="mb-6 text-white" style={{ fontSize: '3rem', fontWeight: 600, letterSpacing: '-0.03em' }}>
            Preparing Organizations for AI-Driven Operations
          </h2>
          <p className="text-zinc-400 max-w-3xl mx-auto" style={{ fontSize: '1.25rem', lineHeight: 1.7 }}>
            Arenafy helps organizations modernize data infrastructure, connect fragmented systems, and deliver scalable analytics capabilities that improve visibility and decision-making.
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Feature Cards */}
          <div className="space-y-6">
            {[
              {
                icon: Building2,
                title: 'Enterprise Scale',
                description: 'Proven capability to deliver complex data infrastructure projects for large organizations with demanding requirements.',
              },
              {
                icon: Lock,
                title: 'Security First',
                description: 'Architectural approaches aligned with enterprise security standards and compliance requirements.',
              },
              {
                icon: Scale,
                title: 'Operational Excellence',
                description: 'Focus on sustainable, maintainable systems that support long-term organizational success.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative p-6 bg-zinc-900/50 backdrop-blur-sm border border-white/10 hover:border-[--color-arenafy-green]/40 rounded-xl transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[--color-arenafy-green]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex items-start gap-4">
                  <div className="relative flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, rgba(20,229,128,0.15), rgba(20,229,128,0.05))', border: '1.5px solid rgba(20,229,128,0.4)', boxShadow: '0 0 20px rgba(20,229,128,0.3)' }}>
                    <feature.icon style={{ color: '#14e580' }} size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-white" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                      {feature.title}
                    </h3>
                    <p className="text-zinc-400" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Visual Panel */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Glassmorphic Panel */}
            <div className="relative h-full min-h-[400px] bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[--color-arenafy-green]/10 via-transparent to-emerald-500/10" />

              {/* Floating Stats */}
              <div className="relative z-10 space-y-8">
                {[
                  { icon: Shield, label: 'Security & Compliance', value: 'Enterprise-grade' },
                  { icon: Database, label: 'Data Infrastructure', value: 'Cloud-native' },
                  { icon: Zap, label: 'Integration Speed', value: 'Optimized' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <div className="relative w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(20,229,128,0.15), rgba(20,229,128,0.05))', border: '1.5px solid rgba(20,229,128,0.4)', boxShadow: '0 0 15px rgba(20,229,128,0.3)' }}>
                      <stat.icon style={{ color: '#14e580' }} size={20} strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-zinc-400" style={{ fontSize: '0.8125rem' }}>
                        {stat.label}
                      </div>
                      <div className="text-white" style={{ fontSize: '1rem', fontWeight: 600 }}>
                        {stat.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Animated Background Pattern */}
              <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20">
                <svg viewBox="0 0 200 200">
                  {[...Array(5)].map((_, i) => (
                    <motion.circle
                      key={i}
                      cx="100"
                      cy="100"
                      r={30 + i * 15}
                      stroke="var(--color-arenafy-green)"
                      strokeWidth="1"
                      fill="none"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.3 }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                    />
                  ))}
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Government Contracting Card */}
        <motion.div
          className="relative p-10 bg-gradient-to-br from-zinc-900/80 to-black/80 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Gradient Accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[--color-arenafy-green] to-transparent" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[--color-arenafy-green]/10 rounded-full blur-[100px]" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[--color-arenafy-green]/30 to-emerald-500/30 rounded-xl flex items-center justify-center">
              <Shield className="text-[--color-arenafy-green]" size={32} />
            </div>
            <div className="flex-1">
              <h3 className="mb-4 text-white" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                Building the Foundation for Intelligent Operations
              </h3>
              <p className="text-zinc-400 mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                Modern AI systems depend on connected infrastructure, reliable operational data, and scalable workflows. Arenafy helps organizations prepare their systems for the next generation of operational intelligence.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[--color-arenafy-green]/10 border border-[--color-arenafy-green]/30 hover:bg-[--color-arenafy-green]/20 text-[--color-arenafy-green] rounded-lg transition-all duration-300"
                style={{ fontSize: '0.9375rem', fontWeight: 600 }}
              >
                Discuss Requirements
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
