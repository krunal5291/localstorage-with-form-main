let products = JSON.parse(localStorage.getItem("product")) || []

const header = (e) => {

    e.preventDefault()

    let product = {
        titel: titel = document.getElementById("titel").value,
        img: img = document.getElementById("img").value,
        price: price = document.getElementById("price").value,
        Category: category = document.getElementById("category").value
    }
    products.push(product);
    localStorage.setItem("product", JSON.stringify(products))


}




document.getElementById("form").addEventListener("submit", header)
// let islogin=localStorage.getItem("islogin");
// if(islogin==true)
// {
//     document.getElementById("login_1").innerHTML = "Logout";
// }
// else
// {
//    window.location.href="/html/login.html";
// }