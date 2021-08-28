// const loginForm = document.getElementById("login-form")
// const loginInput = loginForm.querySelector("input")
// const loginButton = loginForm.querySelector("button")

// Below is the same as above 
const loginInput = document.querySelector("#login-form input")
const loginButton = document.querySelector("#login-form input")

const link = document.querySelector("a")

function onLoginBtnClick(event) {
  event.preventDefault()
  console.log(loginInput.value)
}

function handleLinkClick(event) {
  event.preventDefault()
  console.dir(event)
  alert("Let's move!")
}


loginButton.addEventListener("submit", onLoginBtnClick)
link.addEventListener("click", handleLinkClick)