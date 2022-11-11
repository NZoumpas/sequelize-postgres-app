const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello bro");
});

app.listen(port, () => {
  console.log(`app is listening at http://localhost:${port}`);
});
