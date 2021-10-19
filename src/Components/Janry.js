import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"

function Janry(props) {
    const [janry,setJanry] = useState([])
  useEffect(()=>{
      const d = axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`);
      d.then((s)=>{
          console.log(s)
    setJanry(s.data.genres)
  })}, [])
    return (
        <>
        {janry.map(v=>(
        <div as={Link} to={`/janr/${v.id}`} className="border">
          {v.name}
        </div>
        ))}
    </>
    );
}

export default Janry;