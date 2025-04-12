import express from "express";
import cors from "cors";
import clientRouter from "./router/client.router.js";

const PORT = 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", clientRouter);

app.listen(PORT, (req, res) => {
  console.log(`Listening to Port ${PORT}`);
});
