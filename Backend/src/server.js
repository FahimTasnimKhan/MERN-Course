import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
const app = express();
const port = 5001;

app.use("/api/notes", notesRoutes);

connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// For Mongo DB:
// 1. Create a new project
// 2. Create a cluster
// 3. Complete the setup and install moongoose
