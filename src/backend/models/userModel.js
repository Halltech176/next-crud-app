import { mongoose } from "mongoose";

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
  },
});

mongoose.models = {};
const Employee = mongoose.model("employees", employeeSchema);

export default Employee;
