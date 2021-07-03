import React,{Component} from "react"
import SearchBar from "material-ui-search-bar";
import {createWord,fetchWord} from "./apiPost.js"
import FormDialog from "./addWordModal.js"
import SimpleCard from "./card.js"
class homePage extends Component{
 state={
  words:[],
  value:"",
  wordDisplay:[]  
 } 
componentDidMount(){
   fetchWord().then(resp=>{
    this.setState({words:resp,wordDisplay:resp});
   }).catch(err=>console.log(err));

}

// handleClick=(wordAdd)=>{
//   // createWord(this.state.value).then(resp=>{
//   //   console.log(resp)
//   // }).catch(err=>console.log(err));
//   console.log("word Add handle click"+wordAdd);

// }
handleSearch=(val)=>{
  if(val==""){
    this.setState({wordDisplay:[...this.state.words]})
    return ;
  }
  let wrds=[...this.state.words];
  wrds=wrds.filter(item=>item.word.includes(val));
  this.setState({wordDisplay:wrds});

}


	render(){
	 console.log(this.state.words);
  	return(
    <div>
   <SearchBar
    value={this.state.value}
    onChange={(newValue) => {this.handleSearch(newValue);}}
   />

<FormDialog   />

  <div>
  {this.state.wordDisplay.map((v,i)=>(
      <SimpleCard cardContent={v} />
  ))}
</div>

    </div>
			)
	}
}
export default homePage;