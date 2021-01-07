const express = require("express");

const server = express();
const port = process.env.PORT || 4000;

server.use(express.json());

server.get("/", async (req, res, next) => {
    res.json({
        message: "Adela's Reciepe Book Database :)"
    })
})



server.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
})