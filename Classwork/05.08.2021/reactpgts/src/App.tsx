import React from "react";
import "./App.css";
// import { Editor } from "./Editor";
// import { Counter } from "./Counter";
// import { Demo } from "./Demo";
// import { ThemeContext, themes } from "./contexts";
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </div>
      </div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users/:id">
          <UserDetails />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
function Home() {
  return <h2>Home</h2>;
}
function About() {
  return <h2>About</h2>;
}
function Users() {
  return (
    <>
      <h2>Users</h2>
      <ul>
        <li>
          <Link to="/users/1">1</Link>
        </li>
        <li>
          <Link to="/users/2">2</Link>
        </li>
        <li>
          <Link to="/users/3">3</Link>
        </li>
        <li>
          <Link to="/users/4">4</Link>
        </li>
      </ul>
    </>
  );
}
function UserArticles() {
  return <h3>User articles</h3>;
}
function UserImages() {
  return <h3>User images</h3>;
}
function UserDetails() {
  const match = useRouteMatch();
  interface RouteParams {
    id: string;
  }
  const { id } = useParams<RouteParams>();
  return (
    <>
      Details about user with id#<b>{id}</b>
      <br />
      <Link to={`${match.url}/articles`}>Articles</Link> |
      <Link to={`${match.url}/images`}>Images</Link>
      <Switch>
        <Route path={`${match.path}/articles`}>
          <UserArticles></UserArticles>
        </Route>
        <Route path={`${match.path}/images`}>
          <UserImages></UserImages>
        </Route>
        <Route path={match.path}>
          <h3>Please select articles or images</h3>
        </Route>
      </Switch>
    </>
  );
}
export default App;
