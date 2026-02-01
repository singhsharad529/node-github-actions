import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello, World! From the Server");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
