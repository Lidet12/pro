import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages/Login';
import { Main } from './pages/main/Main';
import { Createpost } from './pages/create-post/Createpost'
import { Navbar } from './compontents/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Main />}/>
          <Route path="/Login" element={ <Login />}/>
          <Route path="/Createpost" element={ <Createpost />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
