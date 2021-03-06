import React, { useState, useRef }from "react";

// import styles
import "./styles/app.scss"

// import components
import Player from "./components/Player"; 
import Song from "./components/Song";
import Library from "./components/Library";

// import util
import data from "./util";

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  // Ref
  const audioRef = useRef(null)

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player 
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
      />
      <Library setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} currentSong={currentSong}/>
    </div>
  );
}

export default App;
