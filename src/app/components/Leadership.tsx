import { motion } from 'motion/react';
import { Users, FileText, Database } from 'lucide-react';

const examples = [
  {
    icon: Users,
    title: 'Workforce & Labor Visibility',
    description: 'Integrated workforce operations, scheduling, travel coordination, and reporting workflows to improve labor visibility and operational awareness across distributed teams.',
    tags: ['Workforce Intelligence', 'Operational Visibility', 'Labor Analytics'],
  },
  {
    icon: FileText,
    title: 'Financial & Operational Reporting',
    description: 'Unified financial, procurement, and operational reporting workflows to deliver faster executive insights and reduce fragmented reporting processes.',
    tags: ['Executive Reporting', 'Process Automation', 'Decision Support'],
  },
  {
    icon: Database,
    title: 'Data Modernization & Automation',
    description: 'Designed scalable cloud-native data environments that support automated reporting, operational analytics, and long-term infrastructure flexibility.',
    tags: ['Cloud Architecture', 'Workflow Automation', 'Scalable Infrastructure'],
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="relative py-32 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[--color-arenafy-green]/20 rounded-full blur-[140px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[--color-arenafy-green]/15 rounded-full blur-[130px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, delay: 1.5 }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(20,229,128,0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(20,229,128,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* Diagonal green accent line */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <motion.line
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
              stroke="var(--color-arenafy-green)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            />
          </svg>
        </div>
      </motion.div>

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
              USE CASES
            </span>
          </motion.div>
          <h2 className="mb-6 text-white" style={{ fontSize: '3rem', fontWeight: 600, letterSpacing: '-0.03em' }}>
            Operational Intelligence in Practice
          </h2>
          <p className="text-zinc-400 max-w-3xl mx-auto" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
            How Arenafy helps organizations modernize workflows, improve operational visibility, and build scalable analytics infrastructure across complex operational environments.
          </p>
        </motion.div>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <motion.div
              key={example.title}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="relative h-full bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border border-white/10 hover:border-[--color-arenafy-green]/40 rounded-2xl overflow-hidden transition-all duration-500">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[--color-arenafy-green]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glow Effect */}
                <div className="absolute -inset-px bg-gradient-to-br from-[--color-arenafy-green]/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-2xl" />

                <div className="relative z-10 p-8">
                  {/* Icon with strong green highlights */}
                  <div className="mb-6 relative w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, rgba(20,229,128,0.15), rgba(20,229,128,0.05))', border: '1.5px solid rgba(20,229,128,0.4)', boxShadow: '0 0 20px rgba(20,229,128,0.3)' }}>
                    <example.icon style={{ color: '#14e580' }} size={28} strokeWidth={2.5} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-white" style={{ fontSize: '1.375rem', fontWeight: 600 }}>
                    {example.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 text-zinc-400" style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>
                    {example.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {example.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[--color-arenafy-green]/10 border border-[--color-arenafy-green]/20 text-[--color-arenafy-green] rounded-full"
                        style={{ fontSize: '0.75rem', fontWeight: 500 }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent */}
                <motion.div
                  className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[--color-arenafy-green] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
