import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Cards from '../Cards'

export default function Films(props) {
    const [films,setFilms] = useState([])
    useEffect(()=>{
        const d = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`);
        d.then((c)=>{
            console.log(c)
      setFilms(c.data.results)
    })
}, [])
    return (
        <div>
            <h1>Фильмы</h1>
            <Cards name={films}/>
        </div>
    )

}