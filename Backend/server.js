import express from "express";
const app = express();
const port = 5001;

app.get("/api/notes", (req, res) => {
  res.status(200).send("20 notes");
});
app.post("/api/notes", (req, res) => {
  res.status(201).json({ message: "post created successfully" });
});
app.put("/api/notes/:id", (req, res) => {
  res.status(201).json({ message: "post updated successfully" });
});
app.delete("/api/notes", (req, res) => {
  res.status(201).json({ message: "Note deleted successfully" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
