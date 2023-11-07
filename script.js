const carDisplayImg = document.getElementById('carImageDisplay');
const carDisplayText = document.getElementById('carImageDisplayText');
let arrayIndex = 0;

const carDisplayData = [
  // Description, Image SRC
  [
    "This is the 2023 Chevrolet Corvette",
    "https://www.usnews.com/object/image/00000187-05a8-d67e-a38f-2ff810260000/2023-chevrolet-corvette-z06-14.jpg?update-time=1679428714087&size=responsive970"
  ],
  [
    "This is the 2023 Cadillac Lyriq", 
    "https://www.usnews.com/object/image/00000187-94c2-d650-adbf-bcdb9e2d0000/2023-cadillac-lyriq-301.jpg?update-time=1681828027071&size=responsive970"
  ]
];

function load() {
  carDisplayImg.src = carDisplayData[0][1];
  carDisplayText.textContent = carDisplayData[0][0];
}

function changeCarImageLeft() {
  if (arrayIndex === 0) {
    arrayIndex = carDisplayData.length - 1;
  } else {
    arrayIndex--;
  }
  carDisplayImg.src = carDisplayData[arrayIndex][1];
  carDisplayText.textContent = carDisplayData[arrayIndex][0];
}

function changeCarImageRight() {
  arrayIndex = (arrayIndex + 1) % carDisplayData.length;
  carDisplayImg.src = carDisplayData[arrayIndex][1];
  carDisplayText.textContent = carDisplayData[arrayIndex][0];
}

load();