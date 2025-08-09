document.getElementById("showSignup").onclick = function() {

   
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "flex";
    this.style.display = "none"; 
    document.getElementById("showLogin").style.display = "inline";
};

document.getElementById("showLogin").onclick = function() {


    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "flex";
    this.style.display = "none";
    document.getElementById("showSignup").style.display = "inline";
};