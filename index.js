const express = require("express");
const helmet = require("helmet");
const cors = require("cors")
const recipesRouter = require("./client/recipe-router");
const welcomeRouter = require("./client/welcomeRouter");
const ingridientsRouter = require("./client/ingredients-router")
const server = express();
const port = process.env.PORT || 4000;

server.use(express.json());
server.use(helmet())
server.use(cors())
server.use(recipesRouter)
server.use(welcomeRouter);
server.use(ingridientsRouter)
server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
})