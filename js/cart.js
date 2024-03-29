let cart = JSON.parse(JSON.stringify("cart") || []);


let products = JSON.parse(localStorage.getItem("product")) || [];
const ui = (products) => {
    document.getElementById("ui").innerHTML = "";
    products.map((ele, i) => {
        let h1 = document.createElement("h1");
        h1.innerHTML = ele.titel;
        let img = document.createElement("img");
        img.src = ele.img;
        let price = document.createElement("h3");
        price.innerHTML = ele.price;

        let dele = document.createElement("button");
        dele.innerHTML = "delete";
        let Category = document.createElement("h6");
        Category.innerHTML = ele.Category;
    }
    )
}


ui(cart)