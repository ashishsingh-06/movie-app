import './App.scss';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className='container'>
          <Routes>
            <Route path='/' exact={true} element={<Home/>}></Route>
            <Route path='/movie/:imdbID' element={<MovieDetail/>}></Route>
            <Route path="*" element={<PageNotFound/>}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
