import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/ShopPage';
import LoginAndRegister from './components/login and register/Login-Register.component';
import Header from './components/header/header-component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={LoginAndRegister} />
      </Switch>
    </div>
  );
}

export default App;
