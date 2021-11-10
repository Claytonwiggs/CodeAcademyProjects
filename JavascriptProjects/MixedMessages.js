// topic: Tarot Cards

let message = "Welcome to Tarot";
console.log(message);

let cardNum = Math.floor(Math.random() * 10);
switch (cardNum) {
  case 1:
    console.log("The Fool");
    break;
  case 2:
    console.log("The Magician");
    break;
  case 3:
    console.log("The High Priestess");
    break;
  case 4:
    console.log("The Empress");
    break;
  case 5:
    console.log("The Emperor");
    break;
  case 6:
    console.log("The Heirophant");
    break;
  case 7:
    console.log("The Lovers");
    break;
  case 8:
    console.log("The Chariot");
    break;
  case 9:
    console.log("Strength");
    break;
  case 10:
    console.log("The Hermit");
    break;
}
