export default function AudioPlayer({ trackName, isPlaying, toggleAudio }) {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="glass p-4 rounded-2xl flex items-center gap-4 animate-bounceIn">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-tighter text-blue-300 font-bold">Reading Mood</span>
          <span className="text-xs opacity-70 italic truncate w-32">{trackName}</span>
        </div>
        <button onClick={toggleAudio} className="bg-blue-500 hover:bg-blue-400 p-3 rounded-full shadow-lg transition-all">
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}