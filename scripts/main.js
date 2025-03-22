function connect(){
    if(ses = localStorage.getItem("session")){
        e = document.getElementById("username").innerHTML = ses;

    }
    else{
        user = prompt("Enter your username")
        if (user == "admin"){
            admin = prompt("Please enter the admin password")
            if (admin == "admin"){
                e = document.getElementById("username").innerHTML = "admin";
                ee = document.getElementById("username")
                ee.style.color = "yellow";
                session = localStorage.setItem("session", user)
            }
        }
        else{
            e = document.getElementById("username").innerHTML = user;
            session = localStorage.setItem("session", ""+user)
        }
    }
}
function cookies(){
    if(localStorage.getItem("cookies") == "true"){
        window.location.href= "main.html"
    }
    else{
        cookies = localStorage.setItem("cookies", "true")
        window.location.href = "main.html"
    }
}