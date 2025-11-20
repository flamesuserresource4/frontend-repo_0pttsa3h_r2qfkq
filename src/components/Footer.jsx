export default function Footer(){
  return (
    <footer className="bg-black py-14 border-t border-pink-500/20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-pink-200/80 text-sm">© {new Date().getFullYear()} Your Name — All rights reserved.</div>
        <div className="flex items-center gap-4 text-xs uppercase tracking-wider text-pink-300/70">
          <a href="#" className="hover:text-pink-100">Dribbble</a>
          <a href="#" className="hover:text-pink-100">GitHub</a>
          <a href="#" className="hover:text-pink-100">Twitter</a>
        </div>
      </div>
    </footer>
  )
}
