import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import { useStateValue } from './StateProvider';
import './App.css';

function App() {
  const [{ user }, dispatch] = useStateValue();
  
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>ffdfd
                <Route path="/"><h1>Welcome Screen</h1></Route>
              </Switch>
            </div>
          </>
        )}        
      </Router>
    </div>
  );
}

export default App;
