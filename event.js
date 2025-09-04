// window events 
window.onload = ()=>{
    alert("hello world")
}

window.onresize=()=>{
    console.log("window is resize")
}
 
window.onscroll = function(){
    alert("scrolling")
}

window.onbeforeunload = (e) =>{
    e.preventDefault()
    alert("window is unloading")
}

let anchor = document.getElementById("anchor")
anchor.onclick = function(event){
    event.preventDefault();
    alert("link is not working")
}