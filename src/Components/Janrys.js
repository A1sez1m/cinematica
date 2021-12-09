import React, {useState, useEffect,} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios'
import {Card,ListGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default function Janrys() {
    let {id} = useParams();
    const [dog, setDog] = useState([])
    useEffect(()=>{
        const f =axios.get(`https://api.themoviedb.org/3/discover/tv?with_genres=${id}&api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`);
        f.then((e)=>{
            console.log(e)
            setDog(e.data.results)
        }) 
    }, [id] )
    return (
        <div> 
        <Card style={{ width: '20rem', marginLeft: '-15%' }}> 
            <ListGroup variant="flush"> 
            {dog.map(a => ( 
                <ListGroup.Item as={Link} to={`/genres/${a.id}`}>{a.name}</ListGroup.Item> 
            ))} 
            </ListGroup> 
            </Card> 
        </div>
    )
}
