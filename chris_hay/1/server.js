// node server.js

import express from "express";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello WASM!");
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));
