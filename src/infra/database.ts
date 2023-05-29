import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://hugovarellaa:mega9851@cluster0.zghrdge.mongodb.net/"
    );
  } catch (error) {
    console.log(`Error connecting to database: ${error}`);
  }
}
