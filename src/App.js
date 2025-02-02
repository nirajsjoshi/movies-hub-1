import React from 'react';

//Routing 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
//aws
import Amplify from 'aws-amplify';
import config from './aws-exports';
import {withAuthenticator} from '@aws-amplify/ui-react';
import {GlobalStyle} from './GlobalStyle';

Amplify.configure(config);

//Styles


const App= ()=> {
  return (
    <Router>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:movieId' element={<Movie/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>  
      <GlobalStyle/>
    </Router>
  );
};

export default withAuthenticator(App);
