import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({songs, setCurrentSong, currentSong,audioRef, isPlaying, setSongs}) =>{
    return(
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => <LibrarySong songs={songs} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} setCurrentSong={setCurrentSong} currentSong={currentSong} song={song}/>)}
            </div>
        </div>
    )
}

export default Library