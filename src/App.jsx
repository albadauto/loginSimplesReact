import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Main from './components/Main';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {

  return ( 
    <Router>
    <div className='container-main'>
      <Route path='/' exact component={LoginForm} />
      <Route path='/Main' exact component={Main} />

    </div>
   </Router>
  )
}
 
export default App;