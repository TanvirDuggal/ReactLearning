import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/nav'
import About from './components/About'
import Shop from './components/Shop'
import Post from './components/PostData'

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route path='/about' component={About}/>
          <Route path='/shop'  component={Shop}/>
        </Switch>
      </div>
      <Post/>
    </Router>
    
  );
}

export default App;
