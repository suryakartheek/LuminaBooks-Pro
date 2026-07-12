export default function DetailView({ book, onBack }) {
  return (
    <div className="animate-slideIn max-w-5xl mx-auto mt-6">
      <button onClick={onBack} className="glass px-8 py-3 rounded-xl mb-10 hover:bg-white/10 transition-all flex items-center gap-3 group">
        <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to Library
      </button>
      
      <div className="glass rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
        <div className="lg:w-2/5 relative">
          <img src={book.image} alt={book.title} className="w-full h-full object-cover min-h-[400px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        
        <div className="lg:w-3/5 p-8 md:p-14 overflow-y-auto max-h-[85vh]">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2">{book.title}</h2>
          <p className="text-2xl text-blue-400 mb-10 font-medium">{book.author}</p>
          
          <div className="space-y-10">
            <section>
              <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 font-bold mb-6">Key Takeaways</h3>
              <ul className="space-y-4 text-white/90">
                {book.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1 flex-shrink-0">✦</span>
                    <span className="text-white/80 leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 font-bold mb-6">Deep Dive Summary</h3>
              <p className="text-white/70 leading-relaxed text-lg font-light">{book.summary}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
