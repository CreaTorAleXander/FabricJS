let pic = document.getElementById("demo-pic");

document.body.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    pic.setAttribute(
      "style",
      "-webkit-filter: drop-shadow(1px 1px 0 black)drop-shadow(-1px -1px 0 black);filter: drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black);"
    );
    document.body.style.backgroundColor = "lightcoral";
  } else if (e.target.tagName === "BODY") {
    pic.setAttribute("style", "-webkit-filter: none;");
    document.body.style.backgroundColor = "white";
  }
});
