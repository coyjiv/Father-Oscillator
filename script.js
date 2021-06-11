"use strict";
const context = new AudioContext();
console.log(context);
const osc = context.createOscillator();
const osc2 = context.createOscillator();
const osc3 = context.createOscillator();
osc.connect(context.destination);
osc2.connect(context.destination);
osc3.connect(context.destination);

//   playSound(value) {
//     if (value === 0) {
//       osc.stop();
//     }
//     osc.frequency.value = 30;
//     osc.connect(context.destination);
//     osc.start(0);
//   }
//   stopSound() {
//     this.playSound(0);
//   }

const btn1Start = document.getElementById("firstplay"),
  btn1Stop = document.getElementById("firststop"),
  btn2Stop = document.getElementById("secondstop"),
  btn2Start = document.getElementById("secondplay"),
  btn3Start = document.getElementById("thirdplay"),
  btn3Stop = document.getElementById("thirdstop"),
  range = document.getElementById("myRange"),
  range2 = document.getElementById("myRange2"),
  range3 = document.getElementById("myRange3");

btn1Start.addEventListener("click", (evt) => {
  evt.preventDefault();
  osc.start(0);
});
btn1Stop.addEventListener("click", (evt) => {
  osc.frequency.value = 0;
});
btn2Start.addEventListener("click", (evt) => {
  evt.preventDefault();
  osc2.start(0);
});
btn2Stop.addEventListener("click", (evt) => {
  osc2.frequency.value = 0;
});
btn3Start.addEventListener("click", (evt) => {
  evt.preventDefault();
  osc3.start(0);
});
btn3Stop.addEventListener("click", (evt) => {
  osc3.frequency.value = 0;
});
range.oninput = function () {
  osc.frequency.value = this.value;
  const heading1 = document.getElementById("heading1");
  heading1.textContent = "1 wave : " + this.value + " Hz";
  const change1 = document.getElementById("change1");
  change1.value = this.value;
};
range2.oninput = function () {
  osc2.frequency.value = this.value;
  const heading2 = document.getElementById("heading2");
  const change2 = document.getElementById("change2");
  heading2.textContent = "2 wave : " + this.value + " Hz";
  change2.value = this.value;
};
range3.oninput = function () {
  osc3.frequency.value = this.value;
  const heading3 = document.getElementById("heading3");
  const change3 = document.getElementById("change3");
  heading3.textContent = "3 wave : " + this.value + " Hz";
  change3.value = this.value;
};
change3.onblur = function () {
  osc3.frequency.value = this.value;
  heading3.textContent = "3 wave : " + this.value + " Hz";
};
change2.onblur = function () {
  osc2.frequency.value = this.value;
  heading2.textContent = "2 wave : " + this.value + " Hz";
};
change1.onblur = function () {
  osc.frequency.value = this.value;
  heading1.textContent = "1 wave : " + this.value + " Hz";
};
