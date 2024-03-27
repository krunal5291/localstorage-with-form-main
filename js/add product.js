let products = JSON.parse(localStorage.getItem("product")) || []

const header = (e) => {

    e.preventDefault()

    let product = {
        titel: titel = document.getElementById("titel").value,
        img: img = document.getElementById("img").value,
        price: price = document.getElementById("price").value,
    }
    products.push(product);
    localStorage.setItem("product", JSON.stringify(products))
}

let islogin=localStorage.getItem("islogin");
if(islogin==true)
{
    document.getElementById("login_1").innerHTML = "Logout";
}

document.getElementById("form").addEventListener("submit", header)