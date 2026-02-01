import express from "express";

const app = express();
const PORT = process.env.PORT || 8007;

app.get("/", (req, res) => {
  res.send("Hello, World! From the Server");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`v1 Server is running on ${PORT}`);
});
