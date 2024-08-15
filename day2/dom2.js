
let products =
[
    {name:"iPhone-15",price:65000},
    {name:"iPhone-16", price:75000},
    {name:"Samsung-A5", price:45000},
    {name:"Color", price:75000},
    {name:"Miami", price:15000}
]

for(let i=0; i<products.length; i++){
let product = document.createElement("div");
product.classList.add("product");


let h3 = document.createElement("h3");
h3.innerText=products[i].name;



let h5 = document.createElement("h5");
h5.innerText=products[i].price;

let btn = document.createElement("button")
btn.classList.add("buy-btn");
btn.innerText="Buy";
console.log(btn)

btn.addEventListener("click",function(){
    console.log(products[i])
})



product.appendChild(h3);
product.appendChild(h5);
product.appendChild(btn)



let day2parent =  document.getElementById("day2-parent")

day2parent.appendChild(product)


}

let image = document.querySelectorAll(".img")[0]
console.log(image)
 function changeImage(){
    image.src = "https://i0.wp.com/picjumbo.com/wp-content/uploads/camping-on-top-of-the-mountain-during-sunset-free-photo.jpg?w=600&quality=80"
 }



