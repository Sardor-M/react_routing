import express from "express";
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Server has been connected");
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
