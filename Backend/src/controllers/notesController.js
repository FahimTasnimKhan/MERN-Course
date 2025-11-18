export const getAllNotes = (req, res) => {
  res.status(200).send("Source created successfully");
};

export const createNotes = (req, res) => {
  res.status(201).json({ message: "post created successfully" });
};

export const updateNotes = (req, res) => {
  res.status(200).json({ message: "post updated successfully" });
};

export const deleteNotes = (req, res) => {
  res.status(200).json({ message: "Note deleted successfully" });
};
