function checkName(){
    var input = document.getElementById("name").value;
    var regex = /^[\p{L} ,.'-]+$/u;
    if(regex.test(input) | input === ""){
        var output = document.getElementById("checkName").innerHTML = "";
    }
    else{
        var output = document.getElementById("checkName").innerHTML = "Invalid name";
    }
}

function checkMail(){
    var input = document.getElementById("mail").value;
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(regex.test(input) | input === ""){
        var output = document.getElementById("checkMail").innerHTML = "";
    }
    else{
        var output = document.getElementById("checkMail").innerHTML = "Invalid mail";
    }
}