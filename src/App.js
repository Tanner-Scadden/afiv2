import React from 'react';
import './App.css';

// Router
import {HashRouter, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Biography from './Pages/Biography';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/biography" component={Biography} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
