const express = require("express");

const app = express();

const PORT = process.env.PORT || 3002

app.use(express.static("frontend"));

app.listen(PORT, () => {
    console.log("Server running at http://localhost:3002");
});