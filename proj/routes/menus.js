var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
    res.send("This is the dessert section")
})

router.get('/1', (req, res) => {
    res.send("Chocolate Cake!")
})


router.get('/2', (req, res) => {
    throw(new Error("Loading dessert failed!"))
    res.send("dessert 2")
})

module.exports = router;