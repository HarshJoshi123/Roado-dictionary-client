import React,{Component} from "react"
import FullCard from "./fullCard.js"
class wordDef extends Component{
  
	render(){
	 	
		return(
    
    <div>
    <FullCard cardContent={this.props.location.state.cardContent} />
    </div>
			)
	}
}
export default wordDef;