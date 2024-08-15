

console.log("This is Carousel")

let m = 100;
setInterval(function(){
    let carousel = document.getElementById("carousel");
    carousel.style.transition = "1s"
    carousel.style.marginLeft= -m+"%"
    m = m+100;

    if(m>400)
    {
        setTimeout(function(){
            carousel.style.transition = "0s";
        carousel.style.marginLeft = "0%";
        m = 0;

        },1000)
        
    }

},3000)