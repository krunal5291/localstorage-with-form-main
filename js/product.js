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

    let cart = document.createElement("button");
    cart.innerHTML = "buy now";

    cart.addEventListener("click", () => {

      localStorage.setItem("cart",JSON.stringify(ele));

    })

    dele.addEventListener("click", () => {
      products.splice(i, 1);

      ui(products);
    });
    


    let div = document.createElement("div");
    div.append(img, h1, price, dele, Category,cart);
    document.getElementById("ui").append(div);
  });

};

ui(products);



const Sorting = (val) =>
{
    if(val=="htl")
    {
        products.sort((a,b) => b.price - a.price)
    }
    else
    {
        products.sort((a,b) => a.price - b.price)
    }
    ui(products)
} 

const Filter = (val) =>
{
   let temp =products.filter((ele) => ele.Category==val)
   ui(temp)
}

const Serach_Filter = (val) =>
{
    let add_temp =products.filter((ele) => ele.titel.includes(val))
    ui(add_temp)
}
const serach = (e) =>
{
    e.preventDefault();
    let Serach_Title = document.querySelector("#Search").value;
    Serach_Filter(Serach_Title);
}

document.querySelector("#lth").addEventListener("click",() =>Sorting("low")); 
document.querySelector("#htl").addEventListener("click",() =>Sorting("high")); 
document.querySelector("#kid").addEventListener("click",() =>Filter("Kids"));
document.querySelector("#male").addEventListener("click",() =>Filter("Male"));
document.querySelector("#female").addEventListener("click",() =>Filter("Female"));
document.querySelector("#serach").addEventListener("submit",serach)
                                                                                                    