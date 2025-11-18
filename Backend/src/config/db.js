import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://fahimtasnimkhan_db_user:cnMuzR7rpdXDU3nE@cluster0.16vdity.mongodb.net/notes_db?appName=Cluster0"
    );
    console.log("MONGODB Connected Successfully ");
  } catch (error) {
    console.error("Error connecting to MONGOBD", error);
    process.exit(1);
  }
};
