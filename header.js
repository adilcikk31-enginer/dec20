let icons =document.getElementById("header-icons");

if(localStorage.getItem("user")){
  document.getElementById("login").style.display="none";
  document.getElementById("logout").style.display="inline-block";
  icons.style.display="flex"
let username = document.createElement("span")
username.innerHTML = JSON.parse(localStorage.getItem("user")).username;
icons.appendChild(username);
}else{
  document.getElementById("login").style.display="inline-block";
  document.getElementById("logout").style.display="none";
  icons.style.display="none"
}

document.getElementById("logout").addEventListener("click", function () {
  localStorage.removeItem("user");
  window.location.href = "../index.html";
});
