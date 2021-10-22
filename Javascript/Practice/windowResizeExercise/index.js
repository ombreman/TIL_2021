const body = document.body;

const big_screen = "bigScreen"
const medium_screen = "mediumScreen"
const small_screen = "smallScreen"

const width = window.innerWidth

function handleResize() {
  if (width > 1000) {
    body.classList.add(big_screen)
    body.classList.remove(medium_screen)
  } else if (width <= 1140 && width >= 700) {
    body.classList.add(medium_screen)
    body.classList.remove(big_screen)
  } else {
    body.classList.remove(medium_screen)
    body.classList.add(small_screen)
  }
}

window.addEventListener("resize", handleResize)
