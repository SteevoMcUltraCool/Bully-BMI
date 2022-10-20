let rH = document.getElementById("rH");
let rW = document.getElementById("rW");
let resultsHTML = document.getElementById("rresults");
let BMIhtml = document.getElementById("BMIShow");
let Context = document.getElementById("Context");
let units = "cm/kg";
let Height = 0;
let Weight = 0;
function goIN() {
  rH.innerHTML = "Height (in):";
  rW.innerHTML = "Weight (lb):";
  units = "in/lb";
}
function goCM() {
  rH.innerHTML = "Height (cm):";
  rW.innerHTML = "Weight (kg):";
  units = "cm/kg";
}

function calcBMI(w, h) {
  if (units == "in/lb") {
    w = w * 703;
  } else {
    h = h / 100;
  }
  return Math.floor((w / h ** 2) * 10) / 10;
}

function RandSelect(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let Skinny = [
  "Spooky scary skeletons send shivers down my spine. <b>You are way too thin.</b>",
  "I would hug you, but I'm worried I'd get a papercut. <b>You are way too thin.</b>",
  "Can you see your own side profile? <b>You are way too thin.</b>",
];
let Slim = [
  "You aren't in bad shape, but eating wouldn't hurt. <b>You are underweight.</b>",
  "I can probably bench you. <b>You are underweight.</b>",
];
let Normal = [
  "Good job staying in shape! <b>You are healthy.</b>",
  "You must have a good diet! <b>You are healthy.</b>",
];
let Overweight = [
  "You aren't obese, but you could lay off the donuts for a bit. <b>You are overweight.</b>",
  "Someone would have to be pretty drunk to get with you. <b>You are overweight.</b>",
  "Whenever you get in an elevator, it always goes down. <b>You are overweight.</b>.",
];
let Obese = [
  "Are you the kind of person who is the center of attention at parties? No? Well you would be, if the party was whale-watching. <b>You are OBESE</b>.",
  "People tremble when you walk. Not because they are scared, but because you are causing a magnitute 7 earthquake. <b> You are OBESE</b>.",
  "A tailer doesn't ask for your waistline, he askes for your coastline. <b>You are OBESE.</b>",
];

function BMICheck(BMI) {
  if (BMI <= 15) {
    return ["rgb(255,127,127)", RandSelect(Skinny)];
  } else if (BMI <= 18.5) {
    return ["rgb(240,240,117)", RandSelect(Slim)];
  } else if (BMI <= 24.9) {
    return ["rgb(125,250,125)", RandSelect(Normal)];
  } else if (BMI <= 29.9) {
    return ["rgb(240,240,117)", RandSelect(Overweight)];
  } else {
    return ["rgb(255,127,127)", RandSelect(Obese)];
  }
}

function showResults() {
  BMIhtml.innerHTML = `Height: ${Height}`;
  Height = document.getElementById("height").value;
  Weight = document.getElementById("weight").value;
  BMIhtml.innerHTML = `Height: ${Height}`;
  let W = Number(Weight);
  let H = Number(Height);
  let BMI = calcBMI(W, H);
  BMIhtml.innerHTML = `BMI: ${BMI}`;
  let charted = BMICheck(BMI);
  BMIhtml.style.backgroundColor = charted[0];
  Context.innerHTML = charted[1];
  resultsHTML.style.display = "block";
}
