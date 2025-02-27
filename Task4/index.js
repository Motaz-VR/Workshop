const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let missions = []


app.post("/missions", (req, res)=>{
    const mission = {
        id: missions.length + 1,
        name: req.body.name,
        status: 'Undefined' 
    };
    missions.push(mission);
    res.json("Mission Created")
})

app.get('/missions', (req, res) => {
    res.json(missions);
});

app.get('/missions/:id', (req, res) => {
    const mission = missions.find(m => m.id == req.params.id);
    res.json(mission)
});

app.put('/missions/:id', (req, res) => {
    const mission = missions.find(m => m.id == req.params.id);
    if (mission) {
        mission.status = req.body.status;
        res.json(mission);
    } else {
        res.json({ message: 'Mission not found' });
    }
});

app.delete('/missions/:id', (req, res) => {
    missions = missions.filter(m => m.id != req.params.id);
    res.json({ message: 'Mission Deleted' });
});

app.listen(3000,()=>{
     console.log("server online")
})