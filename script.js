//your JS code here. If required.
const alterTags=()=>{
	const status=document.getElementById("status");
	const newHead=document.createElement("h1");
	newHead.textContent="Entered Metaverse";
	// newHead.setAttribute("id","status");
	status.replaceWith(newHead)
}