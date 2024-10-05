const express = require("express")

const route = express.Router()

route.get("/home", (req, res) => {
    res.send("Welcome User!!!")
})

route.get("/about", (req, res) => {
    res.send("About Me!!")
})

route.get("/Contact", (req, res) => {
    res.send("Contact Us!!!")
})

module.exports = route