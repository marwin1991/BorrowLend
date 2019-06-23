import React from "react";
import {Route, Switch} from "react-router-dom";
import MainPage from "./MainPage";
import Login from "./Login";

export default () =>
    <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/login" exact component={Login}/>
    </Switch>;