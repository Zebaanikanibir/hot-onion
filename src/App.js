import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddFood from './Components/AddFood/AddFood';
import Home from './Components/Home/Home';
import Breakfast from './Components/Breakfast/Breakfast';
import Lunch from './Components/Lunch/Lunch';
import Dinner from './Components/Dinner/Dinner';
import Header from './Components/Header/Header';
import FoodDetail from './Components/FoodDetail/FoodDetail';
function App() {
  return (
  
    <Router>
      
      <div>
      <Header></Header>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/addfood">
            <AddFood></AddFood>
          </Route>
          
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/home">
            <Home />
          </Route>
           <Route path="/breakfast">
            <Breakfast />
          </Route>
         
         
          <Route path="/lunch">
            <Lunch />
          </Route>
          
          <Route path="/dinner">
            <Dinner />
          </Route>
          <Route path="/food/:id">
            <FoodDetail></FoodDetail>
          </Route>
          
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
