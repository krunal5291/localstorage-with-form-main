let user = JSON.parse(localStorage.getItem("user")) || [];
let log=localStorage.getItem("islogin");

const Login = (e) => {

    e.preventDefault();

   let Email = document.querySelector("#email").value;
   let Password = document.querySelector("#password").value;


    let user_1 = user.filter((ele)=>ele.email==Email && ele.password==Password )

    if(user_1.length==1)
    {
        window.location.href="/html/add%20product.html"
    }
    else
    {

        return
    }

    if(log==true){
        document.querySelector("#logout").innerHTML = "logout";
    }
    
}


document.querySelector("#login").addEventListener("submit",Login);