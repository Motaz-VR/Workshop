const express = require("express");
const app = express();

const mysql = require("mysql2");
const pool = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    database: "nova"
}).promise()

app.get("/students", async (req, res) => {
    const data = await pool.execute("select * from students");
    console.log(data[0]);
    res.send(data[0])
})

const port = 3000
app.listen(port, () => {
    console.log("running on port number : " + port);
})
