function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
    destroyBoxes(); // Önceki kutuları temizle
    if (amount < 1 || amount > 100) return;

    const fragment = document.createDocumentFragment();
    let size = 30;

    for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        box.style.margin = "5px";
        box.style.display = "inline-block";
        fragment.appendChild(box);
        size += 10;
    }

    boxesContainer.appendChild(fragment);
    input.value = ""; // Input'u temizle
}

function destroyBoxes() {
    boxesContainer.innerHTML = "";
}

createBtn.addEventListener("click", () => {
    const amount = Number(input.value.trim());
    createBoxes(amount);
});

destroyBtn.addEventListener("click", destroyBoxes);
