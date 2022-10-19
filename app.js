require("./config/mongo")
const path = require('path');
const { log } = require("console")
const express = require("express");
const app = express()

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.get("/", (req, res) => {
    res.render("home");
});

app.use("/users",)//llamar al roueter

app.listen(8080, err => {
    !err? log(`server running on http://localhost:8080`) : log (`server running on http://localhost:8080`)
})

