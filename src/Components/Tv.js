import React, {  useEffect,useState} from 'react'; 
import {useParams} from 'react-router-dom'; 
import axios from 'axios'; 
import { Row } from 'react-bootstrap' 
import {Card} from 'react-bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css'; 
 
function Tv(props) { 
    let {i} = useParams(); 
    const [names, setNames] = useState([]) 
 
useEffect(()=>{ 
    axios.get(`https://api.themoviedb.org/3/tv/${i}?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`) 
    .then((a) => { 
        console.log(a); 
        setNames(a.data) 
    }) 
}, [i]) 
    return ( 
        <div> 
          <Row>
        <> 
          <Card className="container w-75 m-4"> 
              <Card.Img  style={{position:'absolute',width:720}} variant="top" src={'https://image.tmdb.org/t/p/w500' + names.backdrop_path} /> 
              <Card.Img style={{width:200, position:'relative',top:180,left:40}} variant="top" src={'https://image.tmdb.org/t/p/w500' + names.poster_path} /> 
              <Card.Body> 
                <Card.Title style={{ textDecoration: 'none',}}></Card.Title>
                <Card.Text style={{position:'relative'}} >{names.tagline}</Card.Text>  
                <Card.Text style={{position:'relative',left:300,top:30,color:"white"}}><h1>{names.name}</h1></Card.Text> 
                <Card.Text style={{position:'relative',left:300,top:50}}><h3>{names.type}</h3></Card.Text> 
              </Card.Body> 
            </Card> 
        </> 
        </Row>
        </div> 
    ); 
} 
 
export default Tv;