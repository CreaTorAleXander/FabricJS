
var canvas = new fabric.Canvas('c');

let imgElement = document.getElementById("demo-pic");
var imgInstance = new fabric.Image(imgElement, {
  left: 100,
  top: 100,
  angle: 30,
  opacity: 0.85
})
canvas.add(imgInstance);

document.body.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    imgElement.setAttribute(
      "style",
      "-webkit-filter: drop-shadow(1px 1px 0 black)drop-shadow(-1px -1px 0 black);filter: drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black);"
    );
    document.body.style.backgroundColor = "lightcoral";
  } else if (e.target.tagName === "BODY") {
    imgElement.setAttribute("style", "-webkit-filter: none;");
    document.body.style.backgroundColor = "white";
  }
});
