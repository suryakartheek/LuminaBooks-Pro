import { useState, useRef } from 'react';
import { books } from './data/books';
import BookCard from './components/BookCard';
import DetailView from './components/DetailView';
import AudioPlayer from './components/AudioPlayer';

function App() {
  const [activeBook, setActiveBook] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  const openBook = (book) => {
    setActiveBook(book);
    audioRef.current.src = book.track;
    audioRef.current.pause();
    setIsPlaying(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeBook = () => {
    setActiveBook(null);
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="p-6 md:p-12 min-h-screen">
      {!activeBook ? (
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              LuminaBooks
            </h1>
            <p className="text-gray-400 text-lg">Knowledge curated. Atmosphere included.</p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {books.map(book => (
              <BookCard key={book.id} book={book} onClick={() => openBook(book)} />
            ))}
          </div>
        </div>
      ) : (
        <>
          <DetailView book={activeBook} onBack={closeBook} />
          <AudioPlayer 
            trackName={activeBook.trackName} 
            isPlaying={isPlaying} 
            toggleAudio={toggleAudio} 
          />
        </>
      )}
    </div>
  );
}

export default App;