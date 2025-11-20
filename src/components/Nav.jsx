import { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className={`mx-4 mt-4 rounded-2xl border ${scrolled ? 'bg-black/50 backdrop-blur-xl border-pink-500/20 shadow-[0_0_40px_rgba(236,72,153,0.15)]' : 'bg-black/30 backdrop-blur-lg border-pink-500/10'}`}>
        <div className="flex items-center justify-between px-5 py-4">
          <a href="#home" className="font-black tracking-tight text-pink-400 text-xl">
            <span className="px-3 py-1 bg-pink-600 text-black rounded-md mr-2">//</span>
            YOUR NAME
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm uppercase tracking-wider text-pink-200 hover:text-pink-400 transition">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-500 text-black font-semibold shadow-[0_10px_30px_rgba(236,72,153,0.35)] hover:shadow-[0_10px_40px_rgba(236,72,153,0.5)] transition">
              <Download size={16} /> Resume
            </a>
          </div>
          <button className="md:hidden text-pink-200" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              className="md:hidden overflow-hidden border-t border-pink-500/10"
            >
              <div className="px-5 py-4 flex flex-col gap-4">
                {links.map(l => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-pink-200 hover:text-pink-400">
                    {l.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-500 text-black font-semibold w-max">
                  <Download size={16} /> Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
