import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home';
import Shop from '../Shop';
import Cart from '../Cart';

const Routes = () => {

  return(
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/shop' component={Shop}/>
        <Route exact path='/cart' component={Cart}/>
      </Switch>
  );
}

export default Routes;