export default function BookCard({ book, onClick }) {
  return (
    <div 
      className="glass rounded-[2rem] p-5 cursor-pointer flex flex-col h-full transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] hover:bg-white/10 hover:border-white/30"
      onClick={onClick}
    >
      <div className="overflow-hidden rounded-2xl mb-6 shadow-2xl h-80 flex-shrink-0">
        <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow">
        <h3 className="text-2xl font-bold mb-1 line-clamp-2">{book.title}</h3>
        <p className="text-white/40 font-medium">{book.author}</p>
      </div>
    </div>
  );
}