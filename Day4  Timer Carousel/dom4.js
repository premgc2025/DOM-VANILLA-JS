
console.log("This is Timer and Carousel")

// setTimeout, clearTimeout

let timerStart = document.getElementById("timer-start")
 let timer;
timerStart.addEventListener("click",function(){
  timer=  setTimeout(function(){
        console.log("this is time for carousel")
    
    },3000)

})

let timerStop = document.getElementById("timer-stop")

timerStop.addEventListener("click",function(){
  clearTimeout(timer)

})

// setIntervel, clearIntervel
let count=0;
let intervel = setInterval(function(){
    count++
    console.log(count,"This is setIntervel after 3 second")
    if(count===5)
    {
        clearInterval(intervel);
    }
},3000)

