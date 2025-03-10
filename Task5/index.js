//couldnt add images because the database didnt have one

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/movie/:title", async (req, res) => {
    const title = req.params.title;
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(title)}&api_key=98c5e45baa3d415605dff00fa9f4093e`)
    const data = await response.json();
    const movie = data.results[0];
    const ourData = {
        title: movie.title,
        id: movie.id,
        rating: movie.vote_average,
    }

    res.json(ourData)
})
app.listen(3000, () => {
    console.log("server online")
})