import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Film from './Components/Films';
import Home from './Components/Home';
import Serials from './Components/Serials'
import People from './Components/People'
import Janry from './Components/Janry'
import Janrys from './Components/Janrys';
import Tv from './Components/Tv';
// import {Row} from 'react-bootstrap'
import {
    Switch,
    Route,
  } from "react-router-dom";
export default class App extends Component {
    render() {
        return (
            <>
                <Navbar/>
               <div className="d-flex">
               <div className="container d-block;">
                    <Switch>
                    <Route path="/Tv/:i" component={Tv}/>
                    <Route path="/janr/:id" component={Janrys}/>
                    <Route path="/serials" component={Serials}/>
                    <Route path= "/people" component={People}/>
                    <Route path="/films" component={Film}/>
                    <Route path="/" component={Home}/>
               </Switch>
               </div>
               <div className="d-block;">
                <Janry/>
               </div>
                  
               
               </div>
                
            </>
        )
    }
}
