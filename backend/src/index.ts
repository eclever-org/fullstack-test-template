import "./env.js";
import cors from "cors";
import express from "express";
import { pool } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", async (_req, res) => {
  await pool.query("select 1");
  res.json({ ok: true });
});

// TODO (candidate): import data on startup + /capital endpoints (see README)

const port = Number(process.env.PORT ?? 3001);
app.listen(port, () => console.log(`API on http://localhost:${port}`));
