
import React, { useState, useRef } from 'react';
// import { books } from './data/books';
// import BookCard from './components/BookCard';
// import DetailView from './components/DetailView';
// import AudioPlayer from './components/AudioPlayer';

function Lumina() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleOpenBook = (book) => {
    setSelectedBook(book);
    setIsPlaying(false); // Reset audio when opening new book
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleAudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="p-6 md:p-12">
      {/* Audio Logic */}
      {selectedBook && (
        <AudioPlayer 
          book={selectedBook} 
          isPlaying={isPlaying} 
          toggleAudio={toggleAudio} 
          audioRef={audioRef}
        />
      )}

      {!selectedBook ? (
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              LuminaBooks
            </h1>
            <p className="text-gray-400 text-lg">Knowledge curated. Atmosphere included.</p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {books.map((book) => (
              <BookCard key={book.id} book={book} onClick={() => handleOpenBook(book)} />
            ))}
          </div>
        </div>
      ) : (
        <DetailView 
          book={selectedBook} 
          onBack={() => {
            setSelectedBook(null);
            setIsPlaying(false);
          }} 
        />
      )}
    </div>
  );
}

export default Lumina;
