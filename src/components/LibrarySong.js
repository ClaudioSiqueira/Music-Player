import React from "react";

const LibrarySong = ({song,setCurrentSong, audioRef, isPlaying}) =>{

    //Event Handlers
    const songSelectHandler = () =>{
        setCurrentSong(song)
        // check if the song is playing
        if(isPlaying){
            const playPromise = audioRef.current.play();
            if(playPromise !== undefined){
                playPromise.then(() =>{
                    audioRef.current.play();
                })               
            }
        }
    }

    return (
        <div onClick={songSelectHandler} className="library-song">
            <img alt={song.name} src={song.cover}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>

        </div>
    )
}

export default LibrarySong;