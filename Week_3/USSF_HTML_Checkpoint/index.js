var login = document.getElementsByClassName("btn")[0];

let onClick = () => {
  confirm("Successful Login!");
  window.location.href = "page2.html"
}

login.addEventListener("click", onClick)