import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./HeaderComponents/Home";
import TopStories from "./HeaderComponents/TopStories";
import BestStories from "./HeaderComponents/BestStories";
import NewStories from "./HeaderComponents/NewStories";
import SearchStorie from "./HeaderComponents/SearchStorie";
const Body = () => {
    return (
        <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home}/>
          <Route exact path="/topstories" component={TopStories}/>
          <Route exact path="/topstories/:id" component={SearchStorie}/>

          <Route exact path="/beststories" component={BestStories}/>
          <Route exact path="/:type/:id" component={SearchStorie}/>

          <Route exact path="/newstories" component={NewStories}/>
          <Route exact path="/newstories/:id" component={SearchStorie}/>

          <Route exact path="/:id" component={SearchStorie}/>

        </Switch>
      </BrowserRouter>
    )
}

export default Body
