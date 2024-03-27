let user = []


const singupuser = (e) => {

    e.preventDefault();
    let data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
      };

    if ((data.name.length == 0 || data.name == null) || (data.email.length == 0 || data.email == null) || (data.password.length == 0 || data.password == null)) {

        alert("you have input youe data");

        return
    }

    user.push(data)
    localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem("islogin",true)


}



document.getElementById("singup").addEventListener("submit", singupuser)