import express from "express";
import cors from "cors";
import routes from "./app/routes/router.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);
app.get("/", (req, res) => {
  res.send("Database connection successful!");
});
export default app;
