import mongoose from "mongoose";

const StudentsSchema = new mongoose.Schema(
  {
    studentName: String,
    email: String,
    phone: Number,
    stadt: String,
  },
  {
    versionKey: false,
    collection: "studentsAdd",
  }
);

export const Students = mongoose.model("Students", StudentsSchema);
