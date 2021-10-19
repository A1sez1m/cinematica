import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Film from './Components/Films';
import Home from './Components/Home';
import Serials from './Components/Serials'
import People from './Components/People'
import Janry from './Components/Janry'
import Janrys from './Components/Janrys';
import Tv from './Components/Tv'
import {Row} from 'react-bootstrap'
import {
    Switch,
    Route,
  } from "react-router-dom";
export default class App extends Component {
    render() {
        return (
            <>
                <Navbar/>
              
               <Row>
               <div className="container w-75">
                    <Switch>
                    <Route path="/Tv/:i" component={Tv}/>
                    <Route path="/janr/:id" component={Janrys}/>
                    <Route path="/serials" component={Serials}/>
                    <Route path= "/people" component={People}/>
                    <Route path="/films" component={Film}/>
                    <Route path="/" component={Home}/>
               </Switch>
               <div className="container w-25">
               <Janry/>
               </div>
                   </div>
               
               </Row>
                
            </>
        )
    }
}
