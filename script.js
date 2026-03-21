/* ========================= */
/* GET ELEMENTS */
/* ========================= */
const launchBtn = document.getElementById("launchBtn");
const toFloatBtn = document.getElementById("toFloatBtn");
const toCloseBtn = document.getElementById("toCloseBtn");

const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");
const scene4 = document.getElementById("scene4");

const flowers = document.getElementById("flowers");
const noteCard = document.getElementById("noteCard");

/* ========================= */
/* SCENE HELPERS */
/* ========================= */
function showScene(sceneToShow) {
  const scenes = document.querySelectorAll(".scene");
  scenes.forEach((scene) => {
    scene.classList.remove("active");
  });
  sceneToShow.classList.add("active");
}

function revealMoonItems() {
  setTimeout(() => {
    flowers.classList.remove("hidden-item");
    flowers.classList.add("show-item");
  }, 700);

  setTimeout(() => {
    noteCard.classList.remove("hidden-item");
    noteCard.classList.add("show-item");
  }, 1500);

  setTimeout(() => {
    toFloatBtn.classList.remove("hidden-btn");
    toFloatBtn.classList.add("show-btn");
  }, 2400);
}

/* ========================= */
/* SCENE 1 -> SCENE 2 */
/* ========================= */
launchBtn.addEventListener("click", () => {
  document.body.classList.add("launching");
  launchBtn.disabled = true;

  setTimeout(() => {
    showScene(scene2);
    document.body.classList.remove("launching");
    revealMoonItems();
  }, 2200);
});

/* ========================= */
/* SCENE 2 -> SCENE 3 */
/* ========================= */
toFloatBtn.addEventListener("click", () => {
  showScene(scene3);

  setTimeout(() => {
    toCloseBtn.classList.remove("hidden-btn");
    toCloseBtn.classList.add("show-btn");
  }, 1800);
});

/* ========================= */
/* SCENE 3 -> SCENE 4 */
/* ========================= */
toCloseBtn.addEventListener("click", () => {
  showScene(scene4);
});