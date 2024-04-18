// Math 10C Formula Sheet

// rectangular prism

// event listener
document
  .getElementById("calculate-rectangle")
  .addEventListener("click", calculateRectangle);

//   function
function calculateRectangle() {
  // input
  let length = +document.getElementById("cube-length").value;
  let width = +document.getElementById("cube-width").value;
  let height = +document.getElementById("cube-height").value;
  // process
  let area = 2 * length * width + 2 * width * height + 2 * length * height;
  let volume = length * width * height;
  area = area.toFixed(2);
  volume = volume.toFixed(2);
  // output
  document.getElementById("output-rectangle-area").innerHTML = area;
  document.getElementById("output-rectangle-volume").innerHTML = volume;
}

// pyramid

// event listener
document
  .getElementById("calculate-pyramid")
  .addEventListener("click", calculatePyramid);

//   function
function calculatePyramid() {
  // input
  let length = +document.getElementById("pyramid-length").value;
  let width = +document.getElementById("pyramid-width").value;
  let height = +document.getElementById("pyramid-height").value;
  let slant1 = +document.getElementById("pyramid-slant1").value;
  let slant2 = +document.getElementById("pyramid-slant2").value;
  // process
  let area = length * width + length * slant1 + width * slant2;
  let volume = (1 / 3) * length * width * height;
  area = area.toFixed(2);
  volume = volume.toFixed(2);
  // output
  document.getElementById("output-pyramid-area").innerHTML = area;
  document.getElementById("output-pyramid-volume").innerHTML = volume;
}

// cylinder

// event listener
document
  .getElementById("calculate-cylinder")
  .addEventListener("click", calculateCylinder);

//   function
function calculateCylinder() {
  // input
  let radius = +document.getElementById("cylinder-radius").value;
  let height = +document.getElementById("cylinder-height").value;
  // process
  let area = 2 * Math.PI * radius ** 2 + 2 * Math.PI * radius * height;
  let volume = Math.PI * radius ** 2 * height;
  area = area.toFixed(2);
  volume = volume.toFixed(2);
  // output
  document.getElementById("output-cylinder-area").innerHTML = area;
  document.getElementById("output-cylinder-volume").innerHTML = volume;
}

// cone

// event listener
document
  .getElementById("calculate-cone")
  .addEventListener("click", calculateCone);

//   function
function calculateCone() {
  // input
  let radius = +document.getElementById("cone-radius").value;
  let height = +document.getElementById("cone-height").value;
  let slant = +document.getElementById("cone-slant").value;
  // process
  let area = Math.PI * radius ** 2 + Math.PI * radius * slant;
  let volume = (1 / 3) * Math.PI * radius ** 2 * height;
  area = area.toFixed(2);
  volume = volume.toFixed(2);
  // output
  document.getElementById("output-cone-area").innerHTML = area;
  document.getElementById("output-cone-volume").innerHTML = volume;
}

// sphere

// event listener
document
  .getElementById("calculate-sphere")
  .addEventListener("click", calculateSphere);

//   function
function calculateSphere() {
  // input
  let radius = +document.getElementById("sphere-radius").value;
  // process
  let area = 4 * Math.PI * radius ** 2;
  let volume = (4 / 3) * Math.PI * radius ** 3;
  area = area.toFixed(2);
  volume = volume.toFixed(2);
  // output
  document.getElementById("output-sphere-area").innerHTML = area;
  document.getElementById("output-sphere-volume").innerHTML = volume;
}
