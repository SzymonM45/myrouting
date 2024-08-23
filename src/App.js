import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, NavLink, Route, Routes, } from 'react-router-dom';
import Test from './Test';

const Home = () => {
  return(
<h1>Strona startowa</h1>
  )
}

 const News = () => <h1>Aktualności</h1>
 
 const Contact = () => <h1>Kontakt</h1>

 const ErrorPage = () => <h1>Strona nie istnieje</h1>

class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <header>
          <nav>
            <ul>
              {/* <li><a href="/">Start</a></li>
              <li><a href="/news">Aktualności</a></li>
              <li><a href="/contact">Kontakt</a></li> */}
              <li><NavLink  to="/" className={({ isActive }) => isActive ? "home_selected" : ''}>Start</NavLink></li>

              <li><NavLink to="/news" className={({ isActive }) => isActive ? 
              "news_selected" : ''}>Aktualności</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => isActive ? 
              "contact_selected" : ''}>Kontakt</NavLink></li>
              
            </ul>
          </nav>
        </header>
        <section>
        <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        </section>

        <Test/>

       
      </div>
     
      </Router>

    );
  }

}

export default App;
