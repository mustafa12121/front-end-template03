let megaminu = document.querySelector(
  "header .container .main-nav>li:nth-of-type(4) a"
);
document.addEventListener("click", function (e) {
  if (e.target == megaminu) {
    console.log("clicked");
    document.querySelector(".main-nav>li>div").style =
      "visibility: visible;opacity: 1;top: calc(100% + 1px);";
  } else {
    document.querySelector(".main-nav>li>div").style =
      "visibility: hidden;opacity: 0;top: calc(100% + 20px);";
  }
});

//skiles
let empty = document.querySelectorAll(".our-skills ul li:empty");
document.querySelector(".our-skills").onclick = function () {
  for (let i = 0; i < empty.length; i++) {
    let stoped = parseInt(empty[i].getAttribute("radio"));
    sliding(empty[i], stoped);
  }

  function sliding(elem, valueToStop) {
    elem.setAttribute("radio", "0%");
    let conter = 0;
    let handler = setInterval(
      () => {
        if (conter == valueToStop) {
          clearInterval(handler);
        }
        elem.setAttribute("radio", `${conter++}%`);
        elem.style.backgroundImage = `linear-gradient(to right, var(--main-color) ${conter}%, #eeeeee ${conter}%)`;
      },
      50,
      valueToStop
    );
  }
};

let seco = document.querySelector(".unit:nth-of-type(4) span:first-child");
seco.innerHTML = "0";
let secointer = setInterval(() => {
  Number(seco.innerHTML++);
  if (seco.innerHTML < 10) {
    seco.innerHTML = `0${seco.innerHTML}`;
  }
  if (seco.innerHTML == 60) seco.innerHTML = "0";
}, 1000);

let up = document.createElement("span");
up.append("up");
up.style = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  background-color: var(--main-color);
  color: white;
  display:none;
  cursor: pointer;
  border-radius:  6px;
  z-index:100;
  `;
up.className = "up";
document.body.append(up);

window.onscroll = function () {
  if (window.scrollY > 1000) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
};

up.onclick = function () {
  window.scrollTo(0, 0);
};
