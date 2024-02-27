import express from "express";
import { getStudent, postStudent, getAllStudents, deleteStudent, updateStudent } from "./controler.js";
export const studentsRouter = express.Router();

studentsRouter.route("/:id").get(getStudent).delete(deleteStudent).patch(updateStudent);
studentsRouter.route("/").post(postStudent).get(getAllStudents);
