const character = {
  name: "Rusty",
  class: "Gunslinger Sniper",
  race: "automaton",
  level: 1,
  health: 100,
  image: "images/crouching-rusty.png",

  attacked() {
    if (this.health <= 0) return;

    this.health = Math.max(0, this.health - 20);

    if (this.health === 0) {
      showMessage(`${this.name} has died.`);
      resetBtn.hidden = false;
      disableButtons();
    } else {
      showMessage(`${this.name} takes 20 damage!`);
    }

    render();
  },

  levelUp() {
    if (this.health <= 0) return;

    this.level += 1;
    showMessage(`${this.name} leveled up!`);
    render();
  },

  reset() {
    this.level = 1;
    this.health = 100;
    showMessage(`${this.name} is ready to fight again!`);
    resetBtn.hidden = true;
    attackedBtn.disabled = false;
    levelUpBtn.disabled = false;
    render();
  },
};

// DOM references
const imgEl = document.querySelector(".image");
const nameEl = document.querySelector(".name");
const classEl = document.querySelector(".stats .class");
const levelEl = document.querySelector(".stats .level");
const healthEl = document.querySelector(".stats .health");
const msgEl = document.querySelector(".message");

const attackedBtn = document.getElementById("attacked");
const levelUpBtn = document.getElementById("levelUp");
const resetBtn = document.getElementById("reset");

// Events (ONLY ONE set)
attackedBtn.addEventListener("click", () => character.attacked());
levelUpBtn.addEventListener("click", () => character.levelUp());
resetBtn.addEventListener("click", () => character.reset());

function render() {
  imgEl.src = character.image;
  imgEl.alt = `${character.name} character image`;

  nameEl.textContent = character.name;
  classEl.textContent = `Class: ${character.class}`;
  levelEl.textContent = `Level: ${character.level}`;
  healthEl.textContent = `Health: ${character.health}`;
}

function showMessage(text) {
  msgEl.textContent = text;
}

function disableButtons() {
  attackedBtn.disabled = true;
  levelUpBtn.disabled = true;
}

// Initial paint
render();