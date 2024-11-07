import {useState} from 'react'
import { useEffect } from 'react';
import './GifPrint.css'

export const GifPrint = (gifs) => {

    return(
        <>
            {
                gifs.gifs.map((gif) => {
                    return(
                        <div className = "gif">
                            <h3 className = "gifTitle">{gif.title}</h3>
                            <p className = "gifId">{gif.id}</p>
                            <img className = "gifImg" src = {gif.url} />
                        </div>
                    )
                })
            }
        </>
    )
}
