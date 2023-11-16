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

  sticky1.style.backgroundColor = el.dataset.color;
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

// Sticky Bilder Abschnitt 1 ändern

var bgImages = [
  "/images/IMG_9518.jpg",
  "/images/IMG_9523.jpg",
  "/images/IMG_9524.jpg",
  "/images/IMG_9521.jpg",
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

  var index = Math.floor(scrollTop / (window.innerHeight * 0.50));
  index = Math.min(index, bgImages.length - 1);

  scrollyDiv.style.backgroundImage = "url(" + bgImages[index] + ")";
  scrollyDiv.style.backgroundSize = "cover";
}

// Sticky 2 Scroll Element

var scrolly2 = main.querySelector("#scrolly-2");
var sticky2 = scrolly2.querySelector(".sticky-thing-2");
var article2 = scrolly2.querySelector("article");
var steps2 = article2.querySelectorAll(".step2");

var scroller2 = scrollama();

function handleStepEnter2(response) {
  var el = response.element;

  steps2.forEach(step => step.classList.remove('is-active'));
  el.classList.add('is-active');
  sticky2.style.backgroundColor = el.dataset.color;

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

// sticky3 scroll Element 
var main = document.querySelector("main");
var scrollyRight = main.querySelector("#scrolly-right");
var sticky3 = scrollyRight.querySelector(".sticky-thing-3");
var article3 = scrollyRight.querySelector(".article3");
var steps3 = article3.querySelectorAll(".step3");

var scroller3 = scrollama();

function handleStepEnter3(response) {
  var el = response.element;

  steps3.forEach(step => step.classList.remove('is-active'));
  el.classList.add('is-active');

  sticky3.style.backgroundColor = el.dataset.color;
}

function init3() {
  scroller3
    .setup({
      step: "#scrolly-right .step3",
      offset: 0.33,
      debug: false
    })
    .onStepEnter(handleStepEnter3);

  window.addEventListener("resize", scroller3.resize);
}

init3();

