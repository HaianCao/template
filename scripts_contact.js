function checkName(){
    let input = document.getElementById("name").value;
    let regex = /^[\p{L} ,.'-]+$/u;
    if(regex.test(input) | input === ""){
        document.getElementById("checkName").innerHTML = "";
        document.getElementsByClassName("fill")[0].style.borderColor = "rgb(20, 255, 20)";
    }
    else{
        document.getElementById("checkName").innerHTML = "Invalid name";
        document.getElementsByClassName("fill")[0].style.borderColor = "red";
    }
}

function checkMail(){
    let input = document.getElementById("mail").value;
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(regex.test(input) | input === ""){
        document.getElementById("checkMail").innerHTML = "";
        document.getElementsByClassName("fill")[1].style.borderColor = "rgb(20, 255, 20)";
    }
    else{
        document.getElementById("checkMail").innerHTML = "Invalid mail";
        document.getElementsByClassName("fill")[1].style.borderColor = "red";
    }
}