import React from "react";
import Home from "./components/Home";

import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import CartolaMarket from "./components/CartolaMarket";
import AthleteList from "./components/AthleteList";
import TeamList from "./components/TeamList";

function App() {
  return (
    <div>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/atletas">Atletas</Link>
          <Link to="/clubes">Clubes</Link>
        </nav>
        <Route exact component={CartolaMarket} path="/" />
        <Route component={AthleteList} path="/atletas" />
        <Route component={TeamList} path="/clubes" />
      </Router>
    </div>
  );
}

export default App;
