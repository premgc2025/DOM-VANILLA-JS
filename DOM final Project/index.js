console.log("DOM Final Project")

const customers = [
    { name: "PREM GC", city: "RaniBan",email:"premgcemail@gmail.com", phone: 9874563210 },
    { name: "Bidhan Khanal", city: "Osaka", email:"bkhanal@gmail.com", phone: 9884563211 },
    { name: "Pravaker Paudel", city: "Patan", email:"pravaker@gmail.com", phone: 9974563212 },
    { name: "Kripesh Lamichhane", city: "Kathmandu", email:"kripesh@gmail.com", phone: 9774563213 },
    { name: "Mahesh Man Suwal", city: "Kathmandu", email:"maheshmansuwal@gmail.com", phone: 9974563215 },
    { name: "Ram Chandra Paudel", city: "Pokhara", email:"cpaudel@gmail.com", phone: 9974563214 },
    { name: "Shree Thapa", city: "Butwal", email:"shreethapa@gmail.com", phone: 9974563216 },
    { name: "Shyam Thap", city: "Bhaktapur",email: "thapa@gmail.com", phone: 9974563219 },
    { name: "Chandra Mani Dhungana", city: "Biratnagar", email:"dhungana@gmail.com", phone: 9874563214 },
    { name: "Bijay Thapa", city: "Patan", email:"bthapa@gmail.com", phone: 9874563217 },
    { name: "PREM GC", city: "RaniBan", email:"premgcemail@gmail.com", phone: 9874563210 },
    { name: "Bidhan Khanal", city: "Osaka", email:"bkhanal@gmail.com", phone: 9884563211 },
    { name: "Pravaker Paudel", city: "Patan", email:"pravaker@gmail.com", phone: 9974563212 },
    { name: "Bikash Thapa", city: "Bhaktapur", email:"bthapa@gmail.com", phone: 9974563215 },
    { name: "Ram Chandra Paudel", city: "Pokhara", email:"cpaudel@gmail.com", phone: 9974563214 },
    { name: "Shree Thapa", city: "Butwal", email:"shreethapa@gmail.com", phone: 9974563216 },
    { name: "Shyam Thap", city: "Bhaktapur", email:"thapa@gmail.com", phone: 9974563219 },
    { name: "Chandra Mani Dhungana", city: "Biratnagar", email:"dhungana@gmail.com", phone: 9874563214 },
]

let filterCustomers = customers;

// Carousel 
let count = 1;
let currentSlide = 1;

// Function for carousel
function goSlide(slideNo) {

    document.getElementById("carousel").style.transition = "1s"
    document.getElementById("carousel").style.marginLeft = -(slideNo) * 100 + "%";
}

// auto carousel
let end = setInterval(() => {
    currentSlide++;
    goSlide(currentSlide);


    if (currentSlide > 4) {
        setTimeout(() => {
            document.getElementById("carousel").style.transition = "0s"
            document.getElementById("carousel").style.marginLeft = -100 + "%";
            currentSlide = 1;

        }, 1000)
    }


    // count++;
    // if (count >= 4) {
    //     currentSlide = 1;
    //     clearInterval(end)
    // }
}, 5000)

// Next Button Carousel

document.getElementById("next").addEventListener("click", () => {
    currentSlide++;
    goSlide(currentSlide)

    if (currentSlide > 4) {
        setTimeout(() => {
            document.getElementById("carousel").style.transition = "0s"
            document.getElementById("carousel").style.marginLeft = -100 + "%";
            currentSlide = 1;

        }, 1000)
    }
})

// Previous button for Carousel
document.getElementById("prev").addEventListener("click", () => {


    currentSlide--;
    goSlide(currentSlide)


    if (currentSlide < 1) {
        setTimeout(() => {
            document.getElementById("carousel").style.transition = "0s"
            document.getElementById("carousel").style.marginLeft = -400 + "%";
            currentSlide = 4;

        }, 1000)
    }
})

// Pagination
let page = 1;
let totalPage = Math.ceil(filterCustomers.length / 5);

// Page Button
for (let i = 1; i <= totalPage; i++) {
    let button = document.createElement("button")
    button.innerText = i;
    button.classList.add("p-number")

    document.getElementById("number-btn").appendChild(button)
    button.addEventListener("click", () => {
        page = i;
        displayCustomer(page)
    })
}



function displayCustomer(currentPage) {
    // Pagination - Display page Number
    document.getElementById("page-number").innerText = currentPage + " of " + totalPage;

    let displayItems = 5;
    let initialIndex = (currentPage * 5) - displayItems;
    let lastIndex = displayItems * currentPage;
    let filterData = filterCustomers.slice(initialIndex, lastIndex)

    // Table - create row ,TD then append into tbody
    // not row , only ("tr") to create row
    // Clear tbody first
    document.getElementById("tbody").innerText = "";

    filterData.forEach((customer, i) => {

        let row = document.createElement("tr")

        let tdId = document.createElement("td");
        tdId.innerText = initialIndex + i + 1;

        let tdName = document.createElement("td");
        tdName.innerText = customer.name;
        let tdCity = document.createElement("td");
        tdCity.innerText = customer.city;
        let tdEmail = document.createElement("td");
        tdEmail.innerText = customer.email;

        let tdPhone = document.createElement("td");
        tdPhone.innerText = customer.phone;

        row.append(tdId, tdName, tdCity, tdEmail, tdPhone)

        let tbody = document.getElementById("tbody")
        tbody.appendChild(row)
    })
}

displayCustomer(page);

// Pagination Next button

document.getElementById("page-next-btn").addEventListener("click", () => {

    if (page < totalPage) {
        page++;
        displayCustomer(page)
    }
})

// Pagination Previous button
document.getElementById("page-prev-btn").addEventListener("click", () => {

    if (page > 1) {
        page--;
        displayCustomer(page)
    }
})

// Search 

let search = document.getElementById("search");
search.addEventListener("keyup", () => {

    let val = search.value.toLowerCase();

    filterCustomers = customers.filter((customer) => {

        return customer.name.toLowerCase().includes(val);
    })
    page = 1;
    displayCustomer(1)
})

let products = [
    { name: "True Wireless", discount: "Special offer", img: "/images/product1.webp" },
    { name: "Smart Watches", discount: "Min. 40% Off", img: "/images/product2.webp" },
    { name: "Headset", discount: "Min. 50% Off", img: "/images/product3.webp" },
    { name: "Smart Lighting", discount: "Grab Now", img: "/images/product4.webp" },
    { name: "Hair Dryers", discount: "Min. 50% Off", img: "/images/product5.webp" },
    { name: "Induction Cooktops", discount: "Min. 50% Off", img: "/images/product6.webp" },
    { name: "Power Bank", discount: "Min. 50% Off", img: "/images/product7.webp" },
    { name: "Neckband", discount: "Special offer", img: "/images/product8.webp" },

]

products.forEach((product, i) => {

    let productSlide = document.createElement("div")
    productSlide.classList.add("products-slide")

    let productsImage = document.createElement("div")
    productsImage.classList.add("products-image")


    let img = document.createElement("img")
    img.classList.add("products-img")
    img.src = product.img

    let p1 = document.createElement("p")
    p1.classList.add("products-p1")
    p1.innerText = product.name;

    let p2 = document.createElement("p")
    p2.classList.add("products-p2")
    p2.innerText = product.discount;

    productsImage.appendChild(img)

    productSlide.appendChild(productsImage);
    productSlide.appendChild(p1);
    productSlide.appendChild(p2);

    document.getElementById("products-banner").appendChild(productSlide)

})


// Header Link with widow scroll

let home = document.getElementById("home")
home.addEventListener("click", () => {
    navLink("banner-container")
})

let cinfo = document.getElementById("c-info")
cinfo.addEventListener("click", () => {

    navLink("table-container")
})

let pinfo = document.getElementById("p-info")
pinfo.addEventListener("click", () => {

    navLink("products-parent")
})

let notification = document.getElementById("notification")
notification.addEventListener("click", () => {
    document.getElementById("modal-parent").style.display = "flex"

    navLink("modal-parent")
})

let contact = document.getElementById("contact")
contact.addEventListener("click", () => {
    document.getElementById("form-container").style.display = "flex"

    navLink("form-container")
})

function navLink(id) {
    let navbar = document.getElementById(id);

    navbar.scrollIntoView({ top: 0, behavior: "smooth" })

}

// Window Scroll

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {
        let scrollTop = document.getElementById("scroll-top")
        scrollTop.style.display = "flex"
    }
    else {
        document.getElementById("scroll-top").style.display = "none"

    }

    if (window.scrollY > 110) {
        document.getElementById("header").style.transition = "2s";
        document.getElementById("header").style.backgroundColor = "#edb232"

    }
    else {
        document.getElementById("header").style.transition = "2s";
        document.getElementById("header").style.backgroundColor = "lightgray"

    }

})

// Scroll to top window
document.getElementById("scroll-top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
})


// Active nav bar

let navlinks = document.querySelectorAll(".nav-link")

navlinks.forEach((link) => {

    link.addEventListener("click", () => {
        navlinks.forEach((linkremove) => {
            linkremove.classList.remove("active")
        })
        link.classList.add("active")

    })
})

// Modal-Notification close Button

let closebtn = document.getElementById("close-btn")
closebtn.addEventListener("click", () => {
    document.getElementById("modal-parent").style.display = "none"

})

// Modal-Contact close Button

let closeformbtn = document.getElementById("closeForm-btn")
closeformbtn.addEventListener("click", () => {
    document.getElementById("form-container").style.display = "none"

})




// Handle Form- Contact us
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function (e) {
    const formData = new FormData(form);
    e.preventDefault();

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function () {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});

