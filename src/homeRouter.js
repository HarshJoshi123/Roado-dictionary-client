import React,{Component} from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import homePage from "./homePage.js";
import wordDef from "./wordDef.js";
class homeRouter extends Component{
 render(){
 	return(
  <Router>
 <Switch>
 <Route exact path="/" component={homePage} />
 <Route exact path="/:word" component={wordDef} />
 </Switch>
  </Router>

 		)
 }


}
export default homeRouter;