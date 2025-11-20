import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_20%_20%,rgba(236,72,153,0.2),transparent),radial-gradient(500px_250px_at_80%_60%,rgba(236,72,153,0.15),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-full md:w-2/3 lg:w-1/2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-pink-500/30 mb-6">
            <span className="h-2 w-2 rounded-full bg-pink-500 animate-pulse" />
            <span className="text-pink-200 text-xs tracking-widest uppercase">Available for select projects</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-pink-100">
            Brutalist glass. Pink energy.
          </h1>
          <p className="mt-6 text-pink-200/80 text-lg leading-relaxed">
            Designer-engineer crafting premium digital products with a love for sharp grids, neon accents, and tactile 3D.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#work" className="px-6 py-3 rounded-xl bg-pink-500 text-black font-semibold shadow-[0_10px_30px_rgba(236,72,153,0.35)] hover:shadow-[0_10px_40px_rgba(236,72,153,0.5)] transition">View Work</a>
            <a href="#contact" className="px-6 py-3 rounded-xl border border-pink-500/40 text-pink-200 hover:text-pink-100 hover:border-pink-500/70 transition backdrop-blur-md bg-white/5">Contact</a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-pink-300/70 text-xs tracking-wider uppercase">
        Scroll
      </div>
    </section>
  )
}
