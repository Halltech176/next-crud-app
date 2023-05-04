import Employee from "@/backend/models/userModel";
import ErrorHandler from "../../pages/_error";

export const GetEmployees = async (req, res) => {
  const { body } = req;

  try {
    const employees = await Employee.find();
    return res.status(200).json({
      status: "success",
      message: "All Employee data fetched successfully",
      data: employees,
    });
  } catch (err) {
    return ErrorHandler(err, res);
  }
};

export const AddEmployee = async (req, res) => {
  const { firstName, lastName, salary, status } = req.body;
  console.log(salary);
  try {
    const employee = await Employee.create({
      firstName,
      lastName,
      salary,
      status,
    });
    return res.status(200).json({
      status: "created",
      message: "Employee details added successfully",
      data: employee,
    });
  } catch (err) {
    return ErrorHandler(err, res);
  }
};

export const UpdateEmployee = async (req, res) => {
  const { firstName, lastName, salary, status } = req.body;
  const { id } = req.query;
  console.log(id);

  try {
    if (id) {
      const employee = await Employee.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      return res.status(200).json({
        status: "updated",
        message: "Employee details updated successfully",
        data: employee,
      });
    } else {
      return res.status(403).json({
        status: "fail",
        message: "user id is expected",
      });
    }
  } catch (err) {
    return ErrorHandler(err, res);
  }
};

export const DeleteEmployee = async (req, res) => {
  const { firstName, lastName, salary, status } = req.body;
  const { id } = req.query;

  try {
    const employee = await Employee.findByIdAndDelete(id);
    return res.status(200).json({
      status: "deleted",
      message: "Employee data deleted succesfully",
    });
  } catch (err) {
    return ErrorHandler(err, res);
  }
};
