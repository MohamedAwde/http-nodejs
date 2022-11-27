import express from "express";
import cors from "cors";
const PORT = process.env.PORT | 8080;
const app = express();

app.use(express());
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (_req, res) => {
  res.send("the server is runing.");
});

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
