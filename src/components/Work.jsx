import { motion, useScroll, useTransform } from 'framer-motion'

const projects = [
  {
    title: 'Fintech Dashboard',
    tags: ['Product Design', '3D', 'WebGL'],
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'E-commerce Experience',
    tags: ['UX', 'Motion', 'Frontend'],
    image: 'https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFLWNvbW1lcmNlJTIwRXhwZXJpZW5jZXxlbnwwfDB8fHwxNzYzNjY4NDkwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Brand Microsite',
    tags: ['Creative Dev', 'Animation'],
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Work() {
  const { scrollYProgress } = useScroll()
  const pinkGlow = useTransform(scrollYProgress, [0, 1], ['0px', '80px'])

  return (
    <section id="work" className="relative bg-black py-28">
      <motion.div style={{ boxShadow: pinkGlow.to(v => `0 0 ${v} rgba(236,72,153,0.2) inset`) }} className="absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-pink-100">Selected Work</h2>
          <p className="text-pink-300/70 max-w-md">A curated mix of product, brand, and experimental builds. Each crafted with precise grids and theatrical motion.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative rounded-2xl overflow-hidden border border-pink-500/20 bg-white/5 backdrop-blur-xl"
            >
              <img src={p.image} alt="" className="h-64 w-full object-cover object-center opacity-80 group-hover:opacity-100 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-widest text-black bg-pink-500 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-pink-100">{p.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
