import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-slideshow-image/dist/styles.css';
import  './App.css'
import Home from './Home';
import Resume from './Resume';
import Portfolio from './Portfolio';
import User from './User';
import AdminPanel from './AdminPanel';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import PrivateRoute from './components/PrivateRoute';
import portfolioItems from './portfolioItems';
import projectView from './projectView';
import projectAdd from './projectAdd'
import resumeItems from './resumeItems';
import resumeItemView from './resumeItemView';
import resumeItemAdd from './resumeItemAdd';

export default function App() {
  return (
        <Router>
          <div>
            <Navigation>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/login">User</Link>
                </li>
                <li>
                  <Link to="/AdminPanel">Listing</Link>
                </li>
              </ul>
            </Navigation>

            <Switch>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/login">
                <User />
              </Route>
              <PrivateRoute path="/AdminPanel">
                   <AdminPanel />
                   <PrivateRoute component={resumeItems} exact path="/resume" />
                  <PrivateRoute component={resumeItemView} exact path={"/resume/:id"} />
                  <PrivateRoute component={resumeItemAdd} exact path="/resume/add-item" /> 
                  <PrivateRoute component={portfolioItems} exact path="/portfolio" />
                  <PrivateRoute component={projectView} exact path={`/portfolio/:id`} /> 
                  <PrivateRoute component={projectAdd} exact path="/portfolio/add-project" />
              </PrivateRoute>
              <Route path="/">
                <Home />
              </Route>
              </Switch>
              <Footer />
        </div>
      </Router>
  );
}