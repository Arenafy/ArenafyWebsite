import { motion } from 'motion/react';
import { Database, HardDrive, RefreshCw, Shield, BarChart3, Layers } from 'lucide-react';
import { useState } from 'react';

const methodologies = [
  {
    icon: Database,
    title: 'Data Ingestion',
    description:
      'Reliable analytics begin with reliable data movement. Arenafy designs ingestion frameworks that connect operational systems, cloud platforms, APIs, and external data sources into centralized analytics environments. Our approach prioritizes scalability, maintainability, and operational continuity while reducing manual effort and fragmented reporting workflows. Whether working with ERP systems, workforce platforms, operational databases, or third-party applications, we focus on creating structured pipelines that support consistent, trustworthy data flow across the organization.',
  },
  {
    icon: HardDrive,
    title: 'Data Storage',
    description:
      'Modern organizations require storage environments capable of supporting both operational scale and long-term analytical flexibility. Arenafy helps organizations implement cloud-native storage architectures designed for performance, reliability, and future growth. Our approach emphasizes structured data organization, accessibility, governance, and cost-conscious infrastructure planning. By building scalable storage foundations, organizations are better positioned to support reporting, automation, AI initiatives, and evolving operational requirements.',
  },
  {
    icon: RefreshCw,
    title: 'Data Transformation',
    description:
      'Raw operational data often exists across fragmented systems and inconsistent formats, limiting visibility and slowing decision-making. Arenafy develops transformation workflows that standardize, enrich, and organize data into analytics-ready structures that support operational reporting and executive visibility. Our methodology focuses on maintainable transformation logic, scalable processing, and business-aligned reporting structures that improve consistency across dashboards, workflows, and analytical environments.',
  },
  {
    icon: Shield,
    title: 'Data Security',
    description:
      'Modern data environments require security approaches that balance accessibility, governance, and operational control. Arenafy incorporates structured security and governance practices throughout the analytics lifecycle, including access management, role-based visibility, auditability, and infrastructure best practices. Our goal is to help organizations build analytics environments that support operational transparency while maintaining appropriate controls around sensitive systems and organizational data.',
  },
  {
    icon: BarChart3,
    title: 'Data Visualization',
    description:
      'Data is most valuable when it supports faster, more informed decisions. Arenafy designs reporting and visualization environments that transform complex operational data into accessible, actionable insights for both leadership and operational teams. Our approach emphasizes usability, clarity, and business alignment while avoiding unnecessary complexity. By focusing on operational visibility and decision support, we help organizations improve awareness across workflows, performance metrics, and organizational initiatives.',
  },
  {
    icon: Layers,
    title: 'Data Modeling',
    description:
      'Strong analytics environments depend on scalable, well-structured data models that support consistency across reporting and operational workflows. Arenafy develops data models designed to improve reporting reliability, simplify analytical logic, and support long-term infrastructure scalability. Our methodology emphasizes dimensional modeling, maintainable relationships, performance optimization, and business-context alignment to create analytical environments capable of supporting evolving organizational needs over time.',
  },
];

export function Methodology() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="methodology" className="relative py-32 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[--color-arenafy-green]/20 rounded-full blur-[140px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-[--color-arenafy-green]/15 rounded-full blur-[130px]"
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

      {/* Vertical green accent line */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-[--color-arenafy-green] to-transparent"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
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
              OUR APPROACH
            </span>
          </motion.div>
          <h2 className="mb-6 text-white" style={{ fontSize: '3rem', fontWeight: 600, letterSpacing: '-0.03em' }}>
            Our Methodology
          </h2>
          <p className="text-zinc-400 max-w-3xl mx-auto" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
            Arenafy approaches modern data infrastructure as a connected operational ecosystem. From ingestion and storage to transformation, security, and visualization, we design scalable analytics environments that support long-term flexibility, visibility, and intelligent decision-making.
          </p>
        </motion.div>

        {/* Methodology List - Vertical Layout */}
        <div className="space-y-6">
          {methodologies.map((methodology, index) => (
            <motion.div
              key={methodology.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                role="button"
                tabIndex={0}
                className="relative bg-zinc-900/50 backdrop-blur-sm border border-white/10 hover:border-[--color-arenafy-green]/40 rounded-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setExpandedIndex(expandedIndex === index ? null : index);
                  }
                }}
                aria-expanded={expandedIndex === index}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[--color-arenafy-green]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glow Effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-[--color-arenafy-green]/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-2xl" />

                {/* Content */}
                <div className="relative z-10 p-8">
                  <div className="flex items-start gap-6">
                    {/* Icon with green highlights */}
                    <motion.div
                      className="relative flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                      style={{
                        background: 'linear-gradient(135deg, rgba(20,229,128,0.15), rgba(20,229,128,0.05))',
                        border: '1.5px solid rgba(20,229,128,0.4)',
                        boxShadow: '0 0 20px rgba(20,229,128,0.3)',
                      }}
                    >
                      <methodology.icon style={{ color: '#14e580' }} size={32} strokeWidth={2.5} />
                    </motion.div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      {/* Title and Expand Indicator */}
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <h3 className="text-white transition-colors duration-300" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                          {methodology.title}
                        </h3>
                        <motion.div
                          className="flex-shrink-0 text-[--color-arenafy-green]"
                          animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </motion.div>
                      </div>

                      {/* Description - expandable */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: expandedIndex === index ? 'auto' : '0px',
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p
                          className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 pb-2"
                          style={{ fontSize: '1rem', lineHeight: 1.7 }}
                        >
                          {methodology.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Left Accent Bar */}
                <motion.div
                  className="absolute inset-y-0 left-0 w-1"
                  style={{
                    background: 'linear-gradient(to bottom, transparent, #14e580, transparent)',
                    boxShadow: '0 0 10px rgba(20,229,128,0.5)',
                  }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
