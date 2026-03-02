const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const desc = document.querySelector(".desc");

let imagesList = [
  "url('./image/image.png')",
  "url('./image/image copy.png')",
  "url('./image/photo-1496861083958-175bb1bd5702.avif')",
  "url('./image/photo-1500537288928-5a596074a086.avif')",
  "url('./image/photo-1515865404355-ddb5b0910878.avif')",
  "url('./image/photo-1526362706459-9547a97978e8.avif')",
  "url('./image/photo-1530209925954-8aecf4eb1e43.avif')",
  "url('./image/photo-1533907650686-70576141c030.avif')",
  "url('./image/photo-1769006352025-1a429e69398f.avif')",
  "url('./image/photo-1769095383868-fee63d91bbd3.avif')",
  "url('./image/photo-1771076402741-c4220c3c4748.avif')",
  "url('./image/photo-1771241222039-facdf3435d73.avif')",
  "url('./image/premium_photo-1731141736035-12f39d0b22ea.avif')",
];

function getRandomImage() {
  // Massiv ichidan bitta tasodifiy indeksni olamiz
  const randomIndex = Math.floor(Math.random() * imagesList.length);
  // O'sha indeksdagi rasm URL manzilini qaytaramiz
  return imagesList[randomIndex];
}

btn.addEventListener("click", () => {
  const imageUrl = getRandomImage();

  // URL ni to'g'ri formatda berish
  body.style.background = imageUrl;

  // Rasm butun ekranni chiroyli qoplashi uchun:
  body.style.backgroundSize = "cover";
  body.style.backgroundPosition = "center";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundAttachment = "fixed";

  desc.textContent = "Rasm yangilandi!";
});
