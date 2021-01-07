const express = require("express");

const router = express.Router()

router.get("/", async (req, res, next) => {
    res.json({
        message: "Adela's Reciepe Book Database :)"
    })
})

module.exports = router