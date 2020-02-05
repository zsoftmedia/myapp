import React, { Component } from 'react';
import NavBar from '../Component/Header/NavBar/NavBar';
import About from '../Component/about/AboutUs';
import Contact from '../Component/Contact/Contact';
import Order from '../Component/Order/Order';
import Manu from '../Component/manu/Menu';
import OrderMau from '../Component/ManuAndOrderButton/ManuOrder';
import Footer from '../Component/Footer/Footer';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.scss';
class App extends Component{
  render(){
    const Home =()=>(
      <div className="App">
      
      <div className="card">
     <div className="MainImage">
        <p className="weMake">We Make</p>
        <p className="TheBest">The Best</p>
        <p className="Pizza">pizza</p>
        <p className="InTheCity">In The City</p>
        <OrderMau/>
        <Footer/>
          </div>
      </div>
      </div>
    );
  return (
   
    <div className="App">
    <Router>
     <NavBar/>
     <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/about" component={About} />
     <Route path="/contact"component={Contact}/>
     <Route path="/order" component={Order}/>
     <Route path="/manu" component={Manu}/>
    
     </Switch>
     </Router>
    </div>

    
    
  );}
  
}

export default App;
