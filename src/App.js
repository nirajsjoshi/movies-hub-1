import React from "react";

//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
//aws
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import { GlobalStyle } from "./GlobalStyle";
import { Auth } from 'aws-amplify';


Amplify.configure(awsconfig);
//import "@aws-amplify/ui-react.styles.css";
//Amplify.configure(awsconfig);
Auth.configure(awsconfig);
//Styles

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
};

export default App;
