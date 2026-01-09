import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    const { MONGO_URI, MONGO_DB_NAME } = process.env;

    if (!MONGO_URI) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }

    const connection = await mongoose.connect(MONGO_URI, {
      dbName: MONGO_DB_NAME,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    console.log(
      `MongoDB connected successfully | Host: ${connection.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
