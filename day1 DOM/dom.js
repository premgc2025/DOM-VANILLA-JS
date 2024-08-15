
// Select using Class Name

let eles = document.getElementsByClassName("ele")[0]


console.log(eles)

// Select using Tag Name
let p = document.getElementsByTagName("p")
console.log(p)

// Select using Id

let id = document.getElementById("containerid");
id.innerHTML="This is JavaScript DOM";

id.addEventListener("mouseover",doSomething)

console.log(id)

// Event Handle

function doSomething()
{
    id.style.backgroundColor = "lightgray";
    id.style.height = "25rem"
    eles.style.backgroundColor="red";
eles.style.height ="3rem"
  
}