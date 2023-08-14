import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose
      .connect(
        "mongodb+srv://hugovarella:mega9851@cluster0.zghrdge.mongodb.net/"
      )
      .then(() => console.log("Database connection established"));
  } catch (error) {
    console.log(`Error connecting to database: ${error}`);
  }
}
