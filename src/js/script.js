// Add your code here

window.onload = function () {
const cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const cardSuits = ["♥", "♦", "♠", "♣"];

    // Get random value and suit
    const value = cardValues[Math.floor(Math.random() * cardValues.length)];
    const suit = cardSuits[Math.floor(Math.random() * cardSuits.length)];


    let topValueElement = document.getElementById("top-value");
    let bottomValueElement = document.getElementById("bottom-value");
    let suitElement = document.getElementById("center-suit");

    topValueElement.textContent = value;
    bottomValueElement.textContent = value;
    suitElement.textContent = suit;


    if (suit === "♥" || suit === "♦") {
        topValueElement.style.color = "red";
        bottomValueElement.style.color = "red";
        suitElement.style.color = "red";
    } else {
        topValueElement.style.color = "black";
        bottomValueElement.style.color = "black";
        suitElement.style.color = "black";
    }

};
