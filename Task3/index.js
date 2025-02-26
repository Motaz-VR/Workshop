const express = require("express");
const app = express();

const fortunes = [
    "You will have a great day! 😊",
    "A surprise gift is on its way! 🎁",
    "Adventure is waiting for you! 🏕️",
    "Success is closer than you think! 🚀",
    "Happiness comes from within! 💛"
];

const jokes = [
    "Why don’t skeletons fight each other? They don’t have the guts! 😂",
    "Why did the math book look sad? Because it had too many problems. 📖",
    "Parallel lines have so much in common. It’s a shame they’ll never meet. 😆"
];

const facts = [
    "Did you know? Honey never spoils! 🍯",
    "Bananas are berries, but strawberries aren't! 🍌🍓",
    "Octopuses have three hearts! 🐙"
];

const randomize = (array) => array[Math.floor(Math.random() * array.length)];

app.get("/fortunes", (req, res) => {
    res.send(randomize(fortunes))
})
app.get("/jokes", (req, res) => {
    res.send(randomize(jokes))
})
app.get("/facts", (req, res) => {
    res.send (randomize(facts))
})

app.listen(3000, () => { })