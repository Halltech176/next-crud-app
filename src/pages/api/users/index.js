import { connectDb } from "@/backend/connect";
import {
  GetEmployees,
  AddEmployee,
  DeleteEmployee,
  UpdateEmployee,
} from "@/controllers/userController";

const handler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return GetEmployees(req, res);
    case "POST":
      return AddEmployee(req, res);
    case "PUT":
      return UpdateEmployee(req, res);
    case "DELETE":
      return DeleteEmployee(req, res);
    default:
      return res.status(405).json({
        status: "error",
        message: `${method} request method is not accepted`,
      });
  }
};

export default connectDb(handler);
