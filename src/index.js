const inputBox = document.querySelector("#input-box");

inputBox.addEventListener("input", function (e) {
  console.log(e.data);
  const detectVariable = e.data;
  if (detectVariable === "0") {
    console.log("0 is detected");
  }
});

const heading = document.querySelector("#heading");
const strike = document.querySelector("#strike");
const unstrike = document.querySelector("#unstrike");

strike.addEventListener("click", function () {
  heading.style.textDecoration = "line-through";
});
unstrike.addEventListener("click", function () {
  heading.style.textDecoration = "none";
});
