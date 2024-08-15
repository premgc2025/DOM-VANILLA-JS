
console.log("This is window scroll page");



// Scroll section2
// let navSection2 = document.getElementById("link-section2")

// navSection2.addEventListener("click",()=>{

//  document.getElementById("section2").scrollIntoView({behavior:"smooth"});
 
// })

// let navSection3 = document.getElementById("link-section3")

// navSection3.addEventListener("click",()=>{

//  document.getElementById("section3").scrollIntoView({behavior:"smooth"});
 
// })


// Passing argument in function

let navSection1 = document.getElementById("link-section1")

navSection1.addEventListener("click",()=>{
    windowScroll("section1")
})

let navSection2 = document.getElementById("link-section2")

navSection2.addEventListener("click",()=>{
    windowScroll("section2")
})

let navSection3 = document.getElementById("link-section3")

navSection3.addEventListener("click",()=>{
    windowScroll("section3")
})

let navSection4 = document.getElementById("link-section4")

navSection4.addEventListener("click",()=>{
    windowScroll("section4")
})





// Scroll Function

function windowScroll(wscroll){
    document.getElementById(wscroll).scrollIntoView({behavior:"smooth"});

}

// Window Y-axis measure
window.addEventListener("scroll",()=>{

  
    
    // Nav bar color effect 
    if(window.scrollY>=500)
        {
         document.getElementById("nav").style.backgroundColor="white"
        }
        else{
            document.getElementById("nav").style.backgroundColor="lightslategray"
        }

        // Top button base on scroll

        if(window.scrollY>=200)
        {
            document.getElementById("top-btn").style.display="flex"
        }
        else{
            document.getElementById("top-btn").style.display="none"

        }

})


// Move to top

let topbtn = document.getElementById("top-btn");
topbtn.addEventListener("click",()=>{
    window.scrollTo({top:0,behavior:"smooth"})
})