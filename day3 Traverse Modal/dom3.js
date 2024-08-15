// Travers DOM

let ul = document.getElementById("dom3-ul").parentElement.children[0].children[1].parentElement
console.log(ul)

let li = document.getElementsByTagName("li")
console.log(li[1].innerText)

let ulquerry = document.querySelectorAll("li")
console.log(ulquerry)



let login = document.getElementById("login-btn")
login.addEventListener("click",function(){
    document.getElementById("overlayid").style.display = "flex"
})

let close = document.getElementById("close-btn")
close.addEventListener("click",function(){
    document.getElementById("overlayid").style.display = "none"
})
// Timer apply 
setTimeout(function(){
    document.getElementById("overlayid").style.display = "flex"

},3000)