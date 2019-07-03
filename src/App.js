import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import "./App.css";
import LoginForm from "./LoginForm";
import Home from "./Home";
import About from "./About";

function App(props) {
  const { glbId, id, userMessage } = props;
  console.log(glbId, id, userMessage);
  const auth = {
    glbId: "",
    id: "",
    userMessage: ""
  };
  return (
    <div className="App">
      {/* <LoginForm {...auth} /> */}
      <Router>
        <Nav />
        <div>
          <Route
            exact
            path="/"
            render={() =>
              auth.glbId.length > 0 ? (
                <Redirect to="/" />
              ) : (
                <LoginForm {...auth} />
              )
            }
          />
          {/* <Route path="/" exact render={} component={Home} /> */}
          <Route path="/about/" component={About} />
        </div>
      </Router>
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;
