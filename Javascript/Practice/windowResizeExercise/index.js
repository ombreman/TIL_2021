// small: blue, medium: purple, big: yellow
const h1 = document.querySelector("h1");
console.log(window.innerWidth);

function handleWindowResize() {
  const smallWindow = "small";
  const mediumWindow = "medium";
  const bigWindow = "big";

  if (400 > window.innnerWidth > 300) {
    h1.classList.add(smallWindow);
  } else if (500 > window.innerWidth > 400) {
    h1.classList.remove(smallWindow);
    h1.classList.add(mediumWindow);
  } else if (window.innerwidth > 500) {
    h1.classList.remove(mediumWindow);
    h1.classList.remove(smallWindow);
    h1.classList.add(bigWindow);
  }
}

window.addEventListener("resize", handleWindowResize);
