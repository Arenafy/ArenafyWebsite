import { motion } from 'motion/react';
import { Database, GitBranch, Cloud, Workflow, LineChart, Shield } from 'lucide-react';

const capabilities = [
  {
    icon: Database,
    title: 'Data & Analytics',
    description: 'Transform raw data into strategic insights with modern data warehousing, dimensional modeling, and advanced analytics infrastructure.',
    gradient: 'from-emerald-500/20 to-[--color-arenafy-green]/20',
  },
  {
    icon: GitBranch,
    title: 'Systems Integration',
    description: 'Seamlessly connect disparate enterprise systems to enable unified data flows, reduce silos, and improve operational efficiency.',
    gradient: 'from-teal-500/20 to-cyan-500/20',
  },
  {
    icon: Cloud,
    title: 'Cloud Data Infrastructure',
    description: 'Design and implement scalable cloud-native data platforms on Azure and AWS optimized for performance, security, and cost.',
    gradient: 'from-[--color-arenafy-green]/20 to-lime-500/20',
  },
  {
    icon: Workflow,
    title: 'Automation & Workflow',
    description: 'Streamline complex business processes through intelligent automation, reducing manual effort and operational overhead.',
    gradient: 'from-cyan-500/20 to-emerald-500/20',
  },
  {
    icon: LineChart,
    title: 'Operational Intelligence',
    description: 'Build real-time dashboards and reporting systems that surface critical metrics and enable data-driven decision making.',
    gradient: 'from-lime-500/20 to-[--color-arenafy-green]/20',
  },
  {
    icon: Shield,
    title: 'Advisory & Strategy',
    description: 'Strategic consulting to align technology investments with business objectives and navigate complex digital transformations.',
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="relative py-32 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[--color-arenafy-green]/20 rounded-full blur-[140px]"
          animate={{ y: [0, 50, 0], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[--color-arenafy-green]/15 rounded-full blur-[130px]"
          animate={{ y: [0, -50, 0], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[--color-arenafy-green]/10 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      {/* Green accent lines */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[--color-arenafy-green] to-transparent"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[--color-arenafy-green] to-transparent"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, delay: 1.5, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
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
              WHAT WE DO
            </span>
          </motion.div>
          <h2 className="mb-6 text-white" style={{ fontSize: '3rem', fontWeight: 600, letterSpacing: '-0.03em' }}>
            Capabilities
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
            Enterprise-grade solutions for data infrastructure, analytics, and systems integration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Card */}
              <div className="relative h-full p-8 bg-zinc-900/50 backdrop-blur-sm border border-white/10 hover:border-[--color-arenafy-green]/40 rounded-2xl transition-all duration-500 overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Glow Effect */}
                <div className="absolute -inset-px bg-gradient-to-br from-[--color-arenafy-green]/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-2xl" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with green highlights */}
                  <motion.div
                    className="relative mb-6 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(20,229,128,0.15), rgba(20,229,128,0.05))',
                      border: '1.5px solid rgba(20,229,128,0.4)',
                      boxShadow: '0 0 20px rgba(20,229,128,0.3), inset 0 0 20px rgba(20,229,128,0.1)',
                    }}
                    whileHover={{ rotate: 5 }}
                  >
                    <capability.icon style={{ color: '#14e580' }} size={28} strokeWidth={2.5} />
                  </motion.div>

                  {/* Title with green underline */}
                  <div className="relative mb-3">
                    <h3 className="text-white transition-colors duration-300" style={{ fontSize: '1.375rem', fontWeight: 600 }}>
                      {capability.title}
                    </h3>
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 rounded-full"
                      style={{ backgroundColor: '#14e580', boxShadow: '0 0 8px rgba(20,229,128,0.5)' }}
                      initial={{ width: 0 }}
                      whileInView={{ width: '50px' }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                    />
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                    {capability.description}
                  </p>
                </div>

                {/* Animated Border with strong green */}
                <motion.div
                  className="absolute inset-x-0 bottom-0 h-1 rounded-full"
                  style={{
                    background: 'linear-gradient(to right, transparent, #14e580, transparent)',
                    boxShadow: '0 0 10px rgba(20,229,128,0.5)'
                  }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Top border accent */}
                <div className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-[#14e580] to-transparent opacity-60" style={{ boxShadow: '0 0 8px rgba(20,229,128,0.4)' }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-[--color-arenafy-green] border border-[--color-arenafy-green]/30 hover:bg-[--color-arenafy-green]/10 rounded-full transition-all duration-300 group"
            style={{ fontSize: '0.9375rem', fontWeight: 600 }}
          >
            Discuss Your Requirements
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
