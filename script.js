let btn = document.querySelector(".btn-container button");
let colorDiv = document.querySelectorAll(".color-container .color");
let colorDivCode = document.querySelectorAll(".color .code-container p");

function changeColor(idx) {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let div = colorDiv[idx];
  let divCode = colorDivCode[idx];
  div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  divCode.innerHTML = `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener("click", function () {
  for (let i = 0; i <= 4; i++) {
    changeColor(i);
  }
});

document.addEventListener("keydown", function (e) {
  if (e.code == "Space") {
    for (let i = 0; i <= 4; i++) {
      changeColor(i);
    }
  }
});
