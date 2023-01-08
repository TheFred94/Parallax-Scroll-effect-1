const h1 = document.getElementById("h1"),
  banner = document.getElementById("banner"),
  button = document.getElementById("button");

// SCROLLING EFFEKT PÅ TOP BANNER
const onScroll = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;

  if (scrollPosition > 150) {
    banner.style.backgroundSize = "150%";
    h1.style.opacity = 0;
    h1.style.translate = "0 -50px";
    h1.style.scale = "0.9";
    button.style.opacity = 0;
    button.style.translate = "0 -40px";
    button.style.scale = "0.8";
  } else {
    banner.style.backgroundSize = "180%";
    h1.style.opacity = 1;
    h1.style.translate = 0;
    h1.style.scale = 1;
    button.style.opacity = 1;
    button.style.translate = 0;
    button.style.scale = 1;
  }
};

// SCROLLER TIL NYHEDSBREV VED KLIK PÅ KNAP
function scrollFunction1() {
  let e = document.getElementById("nyhedsbrev");
  e.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "start",
  });
}

document.addEventListener("scroll", onScroll);
