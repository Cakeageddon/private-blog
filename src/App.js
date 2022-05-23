import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect,
} from 'react-router-dom';
import './App.css';
import TopMenu from "./components/TopMenu";
import '././components/TopMenu.css'
import HomePage from './pages/home/Home'
import LoginPage from './pages/login/Login'
import BlogPostSummaryPage from "./pages/blogposts/Blogposts";
import BlogPostPage from "./pages/blogpostpage/Blogpostpage"

function PrivateRoute ({ children, isAuth, ...rest }) {
    return (
        <Route {...rest}>
            {isAuth ? children : <Redirect to="/login" />}
        </Route>
    )
}

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);




  return (
      <Router>
          <TopMenu isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated} className="topmenu" />
          <Switch>

              <Route exact path="/">
                  <HomePage/>
              </Route>

              <Route path="/login">
                  <LoginPage toggleAuth={toggleIsAuthenticated} />
              </Route>


              <PrivateRoute exact path="/blogposts" isAuth={isAuthenticated}>
                  <BlogPostSummaryPage />
              </PrivateRoute>


              <PrivateRoute exact path="/blogposts/:id" isAuth={isAuthenticated}>
                  <BlogPostPage/>
              </PrivateRoute>

          </Switch>
      </Router>
  );
}

export default App;
