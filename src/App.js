import React from 'react';
import {Switch,Route} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import Details from './component/Details';
import Chart from './component/Chart';
import Default from './component/Default';


function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/Details" component={Details}/>
        <Route path="/Chart" component={Chart}/>
        <Route component={Default}/>
        </Switch>
      
    </React.Fragment>
    
  );
}

export default App;
