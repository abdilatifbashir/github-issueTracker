import React from 'react';
import Layout from "./layout";
import MoreDetails from "./components/moreDetails"
import Menu from "./components/menu"
import Login from "./components/login"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <hr />
     <Switch>
      <Route exact path="/" component={Layout} />
      <Route exact path="/more-details/:issue_id" component={MoreDetails }/>
      <Route exact path="/login" component={Login} />
        
     </Switch>
    </div>
    </Router>
  );
}

export default App;
