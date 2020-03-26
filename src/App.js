import React from 'react';
import './App.css';
import Home from './admin/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Calendar from './admin/sidebar-components/calendar';
import Map from './admin/sidebar-components/maps';
import Products from './admin/sidebar-components/products';
import Customers from './admin/sidebar-components/customers';
import Gallery from './admin/sidebar-components/gallery';
import Analytics from './admin/sidebar-components/Analytics';
import Navigbar from './admin/navbar';
import Sidebar from './admin/sidebar';
function App() {
  return (
    <div >
      <Router>
      <Route    path="/" component={Navigbar} /> 
      <Route   exact path="/" component={Home} />
      <Route    path="/" component={Sidebar} />
        
        
        <Route path="/analytics" component={Analytics} />
        <Route path="/calendar" render={() => <Calendar />} />
        <Route path="/maps" render={() => <Map />} />
        <Route path="/products" render={() => <Products />} />
        <Route path="/customers" render={() => <Customers />} />
        <Route path="/gallery" render={() => <Gallery />} />

      </Router>
    </div >
  );
}

export default App;
