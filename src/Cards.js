import React from 'react'; 
import {Card,Row} from 'react-bootstrap'; 
import { Link } from 'react-router-dom'; 
  
function Cards(props) { 
    return ( 
      
        <div className="d-flex justify-content-around flex-wrap">
        {props.name.map(v => (
             <> 
           <Row>
            <Card as={Link} to={`/Tv/${v.id}`} className="p-2 m-4 text:center" style={{ textDecoration: 'none', width: '12rem' }}> 
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500' + v.poster_path} /> 
                        <Card.Body> 
                            <Card.Title>{v.title}</Card.Title> 
                            <Card.Text>{v.release_date}</Card.Text> 
                            <h4 align="center" style={{color:'#1E90FF'}}>{v.name}</h4>
                            <p align="center" >{v.first_air_date}</p>
                        </Card.Body> 
                        </Card> 
          </Row>
 </>
    ))}
         </div> 
      
    ); 
} 
 
export default Cards;