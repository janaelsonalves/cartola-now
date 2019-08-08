import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
// import { connect } from "react-redux";

// import { addTodo } from "./actions";

// const Home = lazy(() => import("./Home.jsx"));

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/public",
    component: Public
    // exact: false
  },
  {
    path: "/private",
    component: Private
    // exact: false
  }
];

function RouterConfig(props) {
  return (
    <div>
      <BrowserRouter>
        <NavMenu />
        {/* <Suspense fallback={<div>Loading..</div>}> */}
        {routes.map((route, index) => (
          <RouteRender {...props} key={index} {...route} />
        ))}
        {/* </Suspense> */}
      </BrowserRouter>
    </div>
  );
}

function NavMenu() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/public">Public</Link>
      <Link to="/private">Private</Link>
    </nav>
  );
}

function Home(props) {
  return (
    <div>
      Home
      <button onClick={props.onSave}>Save</button>
    </div>
  );
}

function Public(props) {
  return <div>Public</div>;
}

function Private(props) {
  return <div>Private</div>;
}

function RouteRender(route) {
  return (
    <Route exact={route.exact} path={route.path} component={route.component} />
  );
}

export default RouterConfig;
