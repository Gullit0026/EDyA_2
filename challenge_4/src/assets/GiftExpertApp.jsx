import {useState} from 'react'
import {AddCategory} from './components/AddCategory'
import {GifGrid} from './components/GifGrid'
import './GiftExpertApp.css'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Zodiac']);
    const [category, setCategory] = useState('');

    const onAddCategory = (value) => {
        setCategories(list => [...list, value]);
    }

    return(
        <>
            <h1>Categories</h1>

            <AddCategory onAddCategory={onAddCategory}/>
            {
                categories.map((category, key) => {
                    return <GifGrid category={category} key={key}/>
                })
            }
        </>
    )
}