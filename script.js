// script.js

// using d3 for convenience
var main = document.querySelector("main");
var scrolly = main.querySelector("#scrolly");
var sticky1 = scrolly.querySelector(".sticky-thing");
var article1 = scrolly.querySelector("article");
var steps1 = article1.querySelectorAll(".step");

var scroller1 = scrollama();

function handleStepEnter1(response) {
  var el = response.element;

  steps1.forEach(step => step.classList.remove('is-active'));
  el.classList.add('is-active');

  sticky1.querySelector("p").innerText = `Tag ${el.dataset.step}`;
  sticky1.style.backgroundColor = el.dataset.color;
  sticky1.querySelector("p").style.fontSize = `${el.dataset.step}rem`;
}

function init1() {
  scroller1
    .setup({
      step: "#scrolly article .step",
      offset: 0.33,
      debug: false
    })
    .onStepEnter(handleStepEnter1);

  window.addEventListener("resize", scroller1.resize);
}

init1();

var scrolly2 = main.querySelector("#scrolly-2");
var sticky2 = scrolly2.querySelector(".sticky-thing-2");
var article2 = scrolly2.querySelector("article");
var steps2 = article2.querySelectorAll(".step2");

var scroller2 = scrollama();

function handleStepEnter2(response) {
  var el = response.element;

  steps2.forEach(step => step.classList.remove('is-active'));
  el.classList.add('is-active');
  sticky2.querySelector("p").innerText = `Tag ${el.dataset.step}`;
  sticky2.style.backgroundColor = el.dataset.color;
  sticky2.querySelector("p").style.fontSize = `${el.dataset.step}rem`;
}

function init2() {
  scroller2
    .setup({
      step: "#scrolly-2 article .step2",
      offset: 0.33,
      debug: false
    })
    .onStepEnter(handleStepEnter2);

  window.addEventListener("resize", scroller2.resize);
}

init2();

var bgImages = [
  "/images/AdobeStock_611133874.jpeg",
  "/images/AdobeStock_243486627.jpeg",
  "/images/AdobeStock_118697922.jpeg",
  "/images/AdobeStock_107853935.jpeg",
];

function preloadImages() {
  bgImages.forEach(function (imgSrc) {
    var img = new Image();
    img.src = imgSrc;
  });
}

preloadImages();

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  var scrollyDiv = document.querySelector(".sticky-thing");

  var index = Math.floor(scrollTop / (window.innerHeight * 0.33));
  index = Math.min(index, bgImages.length - 1);

  scrollyDiv.style.backgroundImage = "url(" + bgImages[index] + ")";
  scrollyDiv.style.backgroundSize = "cover";
}

var main = document.querySelector("main");
var scrolly = main.querySelector("#scrolly");
var sticky1 = scrolly.querySelector(".sticky-thing");
var article1 = scrolly.querySelector("article");
var steps1 = article1.querySelectorAll(".step");

var scroller1 = scrollama();

function handleStepEnter1(response) {
  var el = response.element;

  steps1.forEach(step => step.classList.remove('is-active'));
  el.classList.add('is-active');

  sticky1.querySelector("p").innerText = `Tag ${el.dataset.step}`;
  sticky1.style.backgroundColor = el.dataset.color;
  sticky1.querySelector("p").style.fontSize = `${el.dataset.step}rem`;

  myFunction();
}

function init1() {
  scroller1
    .setup({
      step: "#scrolly article .step",
      offset: 0.33,
      debug: false
    })
    .onStepEnter(handleStepEnter1);

  window.addEventListener("resize", scroller1.resize);
}

init1();
