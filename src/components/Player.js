import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause , faAngleLeft , faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Player = ({currentSong, isPlaying, setIsPlaying, audioRef}) =>{
    // Event Handlers
    const playSongHandler = () =>{
        if(isPlaying){
            audioRef.current.pause();
        }else{
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying)
    }

    const timeUpdateHandler = (e) =>{
        const currentTime = e.target.currentTime
        const duration = e.target.duration

        setSongInfo({
            currentTime: currentTime,
            duration
        })
    }
    
    const inputDragHandler = (e) =>{
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime:e.target.value})
    }

    const formatTime = (time) =>{
        return(
            Math.floor(time/ 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    // State
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    })
    return (
        <div className="player">
            <div className="time-control">
                <p>{formatTime(songInfo.currentTime)}</p>
                <input
                    min={0}
                    max={songInfo.duration}
                    value={songInfo.currentTime}
                    onChange={inputDragHandler}
                    type="range">
                </input>
                <p>{formatTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x"/>
                <FontAwesomeIcon
                    onClick={playSongHandler}
                    className="play"
                    icon={isPlaying ? faPause : faPlay} size="2x"
                />
                <FontAwesomeIcon className="slip-forward" icon={faAngleRight} size="2x"/>
            </div>
            <audio 
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef}
                src={currentSong.audio}>
            </audio>
        </div>
    )
}

export default Player;