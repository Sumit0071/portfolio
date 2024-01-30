"use client";
import React, { useState } from 'react';
import { playSong, pauseSong, nextSong, prevSong, searchSongs } from '../../../api/send/musicPlayer';

const MusicCard = ( { albumCover, name, artist } ) => {
    const [isPlaying, setIsPlaying] = useState( false );

    const playPauseHandler = () => {
        setIsPlaying( !isPlaying );
        if ( isPlaying ) {
            pauseSong();
        } else {
            playSong();
        }
        // Add logic to play/pause the song
    };

    const nextSongHandler = () => {
        // Add logic to play the next song
        nextSong();
    };

    const prevSongHandler = () => {
        // Add logic to play the previous song
        prevSong();
    };

    const searchSongsHandler = async ( query ) => {
        // Add logic to search for songs based on the query
        const searchResults = await searchSongs( query );
        console.log( 'Search results:', searchResults );
    };

    return (
        <div className="music-card">
            <img src={albumCover} alt="Album Cover" className="album-cover" />
            <div className="song-info">
                <h2>{name}</h2>
                <p>{artist}</p>
            </div>
            <div className="controls">
                <button onClick={prevSongHandler}><i className="fa fa-backward"></i></button>
                <button onClick={playPauseHandler}><i className={isPlaying ? "fa fa-pause" : "fa fa-play"}></i></button>
                <button onClick={nextSongHandler}><i className="fa fa-forward"></i></button>
                <input type="text" placeholder="Search songs..." onChange={( e ) => searchSongsHandler( e.target.value )} />
            </div>
        </div>
    );
};

export default MusicCard;
