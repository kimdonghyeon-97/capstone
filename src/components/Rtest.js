import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import Home from "./home";
import Next from "./adminpage";

function Rtest(){
    return (
        <Router>
            <div>
                 <Route exact path="/Next" component={Next}/>
                <Route path="/">
                    <Home></Home>
                </Route>
            </div>
        </Router>
    )
}

export default Rtest
