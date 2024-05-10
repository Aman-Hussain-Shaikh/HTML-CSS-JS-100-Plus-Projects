const testinomials = [
  {
    name: "Sarif Shaikh",
    photoUrl:
      "https://r2.erweima.ai/imgcompressed/compressed_8bc9a9f445ab07718d8b686fac86f6e7.webp",
    text: "The Asus ROG Zephyrus G14 is a gaming powerhouse in a compact package. Its impressive performance, stunning display, and sleek design make it a top contender in the gaming laptop market. The customizable RGB keyboard adds a fun touch to the overall experience. Highly recommended for gamers looking for a blend of power and portability.",
  },
  {
    name: "Brother PEACE",
    photoUrl:
      "https://image.cdn2.seaart.ai/2023-05-08/21400436662341/4aadb7caf460fcee1693726eadb8c564aee05469_high.webp",
    text: "The Asus ROG Zephyrus G14 is a game-changer in the gaming laptop arena. Its powerful specs, innovative design, and exceptional portability redefine gaming on-the-go. The blend of performance and style makes it a standout choice for gamers seeking a premium experience.",
  },
  {
    name: "Vijay",
    photoUrl:
      "https://image.cdn2.seaart.ai/2023-10-24/20804248723825669/dae3298a05512cd571065cb0932566d0a332fd93_high.webp",
    text: "The Asus ROG Zephyrus G14 is a marvel of engineering. Its compact size belies the raw power under the hood, delivering a gaming experience that rivals many desktops. The sleek, customizable chassis and impressive battery life make it a versatile companion for work and play. A must-have for any serious gamer.",
  },
];

const imageE1 = document.querySelector("img");
const textE1 = document.querySelector(".text");
const usernameE1 = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testinomials[idx];
  imageE1.src = photoUrl;
  textE1.innerHTML = text;
  usernameE1.innerHTML = name;

  idx++;
  if (idx === testinomials.length) {
    idx = 0;
  }

  setTimeout(() => {
    updateTestimonial();
  }, 5000);
}
