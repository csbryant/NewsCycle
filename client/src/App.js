import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import PrivateRoute from "./components/ProtectedHOC/ProtectedRoute";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { UserProvider } from "./context/userContext";
import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <Router>
      <UserProvider>
        <StoreProvider>
          <div>
            <Switch>
              <PrivateRoute path="/home">
                <Home />
              </PrivateRoute>

              <Route
                exact
                path="/"
                component={(props) => <Login {...props} />}
              />
              <Route
                exact
                path="/login"
                component={(props) => <Login {...props} />}
              />
              <Route
                exact
                path="/signup"
                component={(props) => <Signup {...props} />}
              />
              <Route>
                <h1>404 NOT FOUND</h1>
              </Route>
            </Switch>
          </div>
        </StoreProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
