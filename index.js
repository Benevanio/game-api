"use strict";
const express = require('express');
const app = express();

const bodyParser = require('body-parser');


app.use(bodyParser.json());

var db ={
    games : [
        {
            id: 23,
            title: "Call of Duty",
            year: 2019,
            price: 60
        },
        {
            id: 65,
            title: "GTA V",
            year: 2013,
            price: 80
        },
        {
            id: 2,
            title: "Minecraft",
            year: 2010,
            price: 20
        },
        {
            id: 45,
            title: "FIFA 12",
            year: 2012,
            price: 15
        },
        {
            id: 40,
            title: "Good Of War",
            year: 2018,
            price: 50
        }

    ]
}

app.get("/games", (req, res) => {
    res.statusCode = 200;
    res.json(db);
})

app.get("/game/:id", (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        var game = db.games.find(g => g.id == id);
        if(game != undefined){
            res.statusCode = 200;
            res.json(game);
        } else {
            res.sendStatus(404);
        }
    }
})


app.post("/game", (req, res) => {
   if(req.body.title != undefined && req.body.price != undefined && req.body.year != undefined){
        var {title, price, year} = req.body;
        db.games.push({
            id: Math.floor(Math.random() * 100),
            title,
            price,
            year
        });
        res.sendStatus(200);
   }else {
       res.sendStatus(400);
   }
    
})

app.put('/game/:id', (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        var game = db.games.find(g => g.id == id);
        if(game != undefined){
            var {title, price, year} = req.body;
            if(title != undefined){
                game.title = title;
            }
            if(price != undefined){
                game.price = price;
            }
            if(year != undefined){
                game.year = year;
            }
            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
    }
})

app.delete("/game/:id", (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        var index = db.games.findIndex(g => g.id == id);
        if(index == -1){
            res.sendStatus(404);
        } else {
            db.games.splice(index, 1);
            res.sendStatus(200);
        }
    }
})
app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});