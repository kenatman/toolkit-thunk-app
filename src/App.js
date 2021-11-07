import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import "./styles/App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={Detail} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
