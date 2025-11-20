import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-black py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-pink-500/20 bg-white/5 backdrop-blur-xl p-8"
          >
            <h3 className="text-3xl font-black text-pink-100 mb-4">About</h3>
            <p className="text-pink-200/80 leading-relaxed">
              I design and build ambitious interfaces blending brutalist structure with glassy tactility. My toolkit spans product strategy, design systems, creative development, and real‑time 3D.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {['Product', 'Design Systems', 'Motion', '3D/WebGL', 'Frontend', 'Prototyping'].map(s => (
                <div key={s} className="px-3 py-2 rounded-lg bg-black/40 border border-pink-500/20 text-pink-200 text-sm">
                  {s}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-pink-500/20 bg-gradient-to-br from-pink-500/20 to-transparent p-1"
          >
            <div className="rounded-[22px] bg-black p-8 h-full">
              <div className="text-pink-200/80 leading-loose text-sm">
                — 8+ years shipping cross‑platform experiences
                <br/>— Awarded for motion craft and product impact
                <br/>— Comfortable from Figma to codebase
                <br/>— Currently exploring haptics and spatial UI
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {['Figma','React','Three.js','Spline','Framer','GSAP'].map(t => (
                  <div key={t} className="px-3 py-2 rounded-lg bg-white/5 backdrop-blur-xl border border-pink-500/20 text-center text-pink-100 text-xs">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
