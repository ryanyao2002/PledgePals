import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import logo from './logo.svg';
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/navbar/Navbar";
import Requests from './components/Requests.jsx';
import SendReq from './components/Sendreq.jsx';
import Friends from "./components/Friends.jsx";
import AcceptRequests from './components/AcceptRequests.jsx';


function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/requests' component={Requests} />
          <Route exact path = "/request_accept" component={AcceptRequests} />
          <Route exact path='/sendreq' component={SendReq} />
          <Route exact path = "/friends" component={Friends} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
