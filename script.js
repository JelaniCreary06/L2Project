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
  ],
  [
    "This is a Rolls-Royce Phantom",
    "https://www.topgear.com/sites/default/files/news-listicle/image/_jl58227_0.jpg?w=1654&h=930"
  ],
  [
    "This is a Bugatti W16 Mistral",
    "https://newsroomcdn.bugatti.com/w_1800,q_75/79d18f28-86a8-4774-95e5-7912b1043339.webp"
  ], 
  [
    "This is a Lamborghini Revuelto",
    "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_og_01.jpg"
  ],
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
