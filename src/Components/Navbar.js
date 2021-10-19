import React, {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Navbar,Nav, Container,Image,NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Navbars(props) {
  const [janry,setJanry] = useState([])
  useEffect(()=>{
      const d = axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`);
      d.then((s)=>{
          console.log(s)
    setJanry(s.data.genres)
  })
}, [])
    return (
      <>
        <div>
            <Navbar bg="dark" expand="lg" variant='dark'>
  <Container>
    <Navbar.Brand as={Link} to="/">
    <Image src="https://cinematica.kg/99c13a566f8363476f14db5420aaee6b.png" height="30" class="d-inline-block align-top" alt="Cinematica Logo"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Главная</Nav.Link>
        <Nav.Link as={Link} to="/films">Фильмы</Nav.Link>
        <Nav.Link as={Link} to="/serials">Сериалы</Nav.Link>
        <Nav.Link as={Link} to="/people">Люди</Nav.Link>
        <NavDropdown title="Жанры TV" id="basic-nav-dropdown">
         {janry.map(v=>(
          <NavDropdown.Item  as={Link} to={`/janr/${v.id}`}>{v.name}
            </NavDropdown.Item>
        ))}
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
                </>
    )
}
