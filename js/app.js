//Targeting OutPut ID
const outPut = document.getElementById("output"); 

// Adding New Content
function clickFunc(){
  outPut.innerHTML = "Hello, Universe !" + "<br>"+ "I'm Foysal Hasan";
}

// Removing New Content
function resetFunc(){
  outPut.innerHTML = "";
}