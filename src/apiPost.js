export const createWord=(word)=>{
console.log("haha"+word);
return fetch(`https://roado-dictionary.herokuapp.com/word`,{
method:"POST",
headers:{
	Accept:"application/json",
	'Content-type':"application/json"
},
body:JSON.stringify({word})
}).then(response=>{
	console.log("No error")
	return response.json()
}).catch(err=>
	console.log("bruh"+err)
)
}

export const fetchWord=()=>{
return fetch(`https://roado-dictionary.herokuapp.com/`,{
method:"GET",
headers:{
	Accept:"application/json"
	//Authorization:`Bearer ${token}`
}
}).then(response=>{
	console.log("No error while fetching");
	return response.json()
}).catch(err=>
	console.log(err)
)
}
