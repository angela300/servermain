// Imporrting ppackages
const express = require("express");
const serverless = require("serverless-http")

// Middlewares
const app = express();
app.use(express.json());

app.get("/hello", (req, res)=>{
    res.send("Hello world!")
})

// module.exports.handler = serverless(app);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
