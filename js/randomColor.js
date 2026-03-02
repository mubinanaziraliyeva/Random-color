const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const desc = document.querySelector(".desc");

let colorValue = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function generateColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colorValue[Math.floor(Math.random() * colorValue.length)];
  }
  return color;
}

btn.addEventListener("click", () => {
  const color1 = generateColor();
  const color2 = generateColor();
  const color3 = generateColor();
  // const color4 = generateColor();
  // const color5 = generateColor();
  // const color6 = generateColor();
  // const color7 = generateColor();
  // const color8 = generateColor();
  // const color9 = generateColor();
  // const color10 = generateColor();
  // const color11 = generateColor();
  // const color12 = generateColor();
  // const color13 = generateColor();
  // const color14 = generateColor();
  // const color15 = generateColor();
  // const color16 = generateColor();
  // const color17 = generateColor();
  // const color18 = generateColor();
  // const color19 = generateColor();
  // const color20 = generateColor();
  // const color21 = generateColor();
  // const color22 = generateColor();
  // const color23 = generateColor();
  // const color24 = generateColor();
  // const color25 = generateColor();
  // const color26 = generateColor();

  const randomDeg = Math.floor(Math.random() * 361);
  let gradient = `linear-gradient(${randomDeg}deg, ${color1}, ${color2}, ${color3})`;
  body.style.background = gradient;
  desc.textContent = gradient;
});
