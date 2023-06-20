


function display() {
  let div = document.getElementById("e1");
  let pdf = document.getElementById("pdf");

  let button = document.getElementById("button")

  if (pdf.style.display === "none") {
    //div.style.display = "block";
    //pdf.removeAttribute("hidden");
    //div.innerHTML = "hello";
    pdf.style.display = "block";

    button.innerHTML = "<b>HIDE</b>"
  } else {
    //div.style.display = "none";
    //div.innerHTML = "none";
    //pdf.setAttribute("hidden", "hidden");
    pdf.style.display = "none";
    button.innerHTML = "<b>SHOW</b>"
  }
}



function mousepos(){
  const show = document.getElementById("show")

  document.addEventListener("mousemove" , function(e){
    var posx = e.clientX
    var posy = e.clientY
    console.log(posx,posy)

  })

}


document.addEventListener("keydown",function(event){
  const key = event.key;
  if (key == "Escape"){
    display()

  }
})



const dateContainer = document.getElementById("dateContainer");

const currentDate = new Date();

const options = { 
  weekday: "long", 
  month: "long", 
  day: "numeric", 
  year: "numeric" 
};

const formattedDate = currentDate.toLocaleDateString("en-US", options);

dateContainer.textContent = formattedDate;





