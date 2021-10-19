import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Cards from '../Cards'

export default function Serials() {
    const [serial,setSerial] = useState([])
    useEffect(()=>{
        const w = axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru`);
        w.then((f)=>{
            console.log(f)
            setSerial(f.data.results)
        })
    }, [])
    return (
        <div>
            <h1>TV сериалы шоу</h1>
            <Cards name={serial}/>
        </div>
    )
}
