//your JS code here. If required.
const alterTags=()=>{
	const status=document.getElementById("status");
	if(status.textContent==="Entered Metaverse"){
		return;
	}else{
		const newHead=document.createElement("h1");
		newHead.textContent="Entered Metaverse";
		newHead.setAttribute("id","status");
		status.replaceWith(newHead)
	}
}