//jslint esversion:6

//require: method provided by NodeJS to load needed modules such as express
const express = require("express");
const bodyParser = require("body-parser")

const app = express();

// urlencoded: used when receiving data from html file form to get access
// to the form data
app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmicalculator", function(req, res) {
    var num1 = parseFloat(req.body.num1);
    var num2 = parseFloat(req.body.num2);
    var ans = num1 / (num2 * num2);
    res.send("Your BMI is " + ans);
});


app.listen(3000, function() {
});