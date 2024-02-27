import { Students } from "./model.js";

const handleError = (error, res) => {
    console.error(error.msg);
    return res.status(500).json(error);
  };
  const handleTrue = (student, res) => {
    return student
      ? res.status(201).json({ buss })
      : res.status(404).json({ msg: "Student not found" });
  };

export const getStudent = async (req, res) => {
  try {
    const student = await Students.findById(req.params.id);
    student
      ? res.status(201).json({ student })
      : res.status(404).json({ msg: "Student not found" });
  } catch (error) {
    console.error(error.msg);
    res.status(500).json(error);
  }
};
export const getAllStudents = async (req, res) => {
    try {
      const students = await Students.find();
      res.status(201).json({ students });
    } catch (error) {
      console.error(error.msg);
      res.status(500).json({ msg: "Error occurred" });
    }
  };
export const postStudent = async (req, res) => {
  try {
    const student = await Students.create(req.body);
    res.status(201).json({ student });
  } catch (error) {
    console.log(error.msg);
    res.status(500).json({ msg: "Student not found" });
  }
};
export const updateStudent = async (req, res) => {
    try {
      const student = await Students.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      handleTrue(student, res);
    } catch (error) {
      handleError(error, res);
    }
  };
export const deleteStudent = async (req, res) => {
  try {
    const student = await Students.findByIdAndDelete(req.params.id);
    res.status(201).json({ student });
  } catch (error) {
    console.log(error.msg);
    res.status(500).json(error);
  }
};
