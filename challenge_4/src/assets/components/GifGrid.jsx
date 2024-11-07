import {useEffect} from 'react';
import {useState} from 'react';
import {GifPrint} from './GifPrint.jsx';
import './GifGrid.css';

export const GifGrid =({category}) => {

    const [images, setImages] = useState([]);
    const [gifs, setGifs] = useState([]);

    const getGifs = async(category) => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=35aBaLD0KHu6vU2V0nrrHOwcVzSDbLhx&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    
        const resp = await fetch(url);
        const {data} = await resp.json();
        
        const gifs = data.map(img => {
            
            return({
                id: img.id,
                title: img.title,
                url: img.images.original.url
            })
        });
    
        return gifs;
    }
    
    const invokeGetGifs = async(category) => {
        try {
        const gifs = await getGifs(category);
        setGifs(gifs);
        }
        catch (error) {}
    }

    useEffect(() => {setImages(invokeGetGifs(category))}, []);

    return(
        <div className = "gifs">
            <h3 className='category'>{category}</h3>
            <GifPrint gifs = {gifs} />
        </div>
    )
}