import React, {useState,useEffect} from 'react'
import axios from 'axios';
import {ButtonGroup,Button} from 'react-bootstrap'
import Cards from '../Cards'

export default function Home() {
    const [name,setName] =useState([])
    const [tv1,setTv1] = useState('tv')
  useEffect(() => {
      if(tv1==='tv'){
    const a = axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`);
    a.then((s)=>{
      console.log(s)
      setName(s.data.results)
     })
    }else{
        const b = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`);
        b.then((c)=>{
            console.log(c)
      setName(c.data.results)

        })
    }
  }, [tv1])
   useEffect(() => {
      if(tv1==='tv'){
    const a = axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`);
    a.then((s)=>{
      console.log(s)
      setName(s.data.results)
     })
    }else{
        const b = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`);
        b.then((c)=>{
            console.log(c)
      setName(c.data.results)

        })
    }
  }, [tv1])

    return (
        <>
        <div className='d-flex justify-content-around flex-wrap'>
        <span className="justify-content-end" style={{fontSize: 30}}>Что популярно</span>
            <ButtonGroup aria-label="Basic example">
                <Button variant={tv1 === 'tv' ? 'primary' : 'secondary'} onClick={() =>  setTv1('tv')}>По ТВ</Button> 
                <Button variant={tv1 !== 'tv' ? 'primary' : 'secondary'} onClick={() =>  setTv1('cinemas')}>В кинотеатрах</Button>
            </ButtonGroup>
            </div>
        <Cards name={name}/>

        <div className='d-flex justify-content-around flex-wrap'>
        <span className="justify-content-end" style={{fontSize: 30}}>Что в тренде
</span>
            <ButtonGroup aria-label="Basic example">
                <Button variant={tv1 === 'tv' ? 'primary' : 'secondary'} onClick={() =>  setTv1('tv')}>Сегодня  </Button> 
                <Button variant={tv1 !== 'tv' ? 'primary' : 'secondary'} onClick={() =>  setTv1('cinemas')}>На этот неделя</Button>
            </ButtonGroup>
            </div>
        <Cards name={name}/>
        </>
        
    )
}
