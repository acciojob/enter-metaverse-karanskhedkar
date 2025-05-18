//your JS code here. If required.
const alterTags=()=>{
	const status=document.getElementById("status");
	if(status.parentNode){
		status.parentNode.removeChild(status)
	}
	const newHead=document.createElement("h1");
	newHead.textContent="Entered Metaverse";
	newHead.setAttribute("id","status");
	document.body.prepend(newHead)
}