import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { BrowserRouter, Router,Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import DevNavigationBar from "./components/DevLandingComponents/NavigationBar/NavigationBar";
import DevLanding from "./pages/DevLandingPage/DevLandingPage";
import BusinessLanding from "./pages/BusinessLanding/BusinessLandingPage";
import PhotographyLanding from "./pages/PhotographyLanding/PhotographyLandingPage";
import ThankYou from "./pages/ThankYou";
//import Register from "./components/auth/Register";
import Login from "./components/Admin/auth/Login";
import PrivateRoute from "./components/DevLandingComponents/private-route/PrivateRoute";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import LandingPage from "./pages/LandingPage/LandingPage";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./admin";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
       
        <Router>
          <div className="App">
            {/* Main Landing Page */}
            <Route exact path="/" component={LandingPage} />

            {/*Business Landing Page*/}
            <Route exact path="/business" component={BusinessLanding} />

             {/*Photography Landing Page*/}
            <Route exact path="/photography" component={PhotographyLanding} />

            {/*Dev Landing Page */}
            <Route exact path="/developer" component={DevNavigationBar}/>
            <Route exact path="/developer" component={DevLanding} />
            {/* <Route exact path="/register" component={Register} /> */}

            {/*Contact From Thank you Message */}
            <Route exact path="/thankyou" component={ThankYou}/>

            {/*Admin Login */}
            <Route exact path="/admin" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>


          </div>
        </Router>
       
        
      </Provider>
    );
  }
}
export default App;

