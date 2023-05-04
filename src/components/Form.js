import { TextInput, RadioInput } from "./ui/Input";
import Button from "./ui/Button";
import { useReducer } from "react";
import { useQuery, useMutation } from "react-query";
import axios from "axios";
const Form = () => {
  const handler = async (data) => {
    return await axios.post("/api/users", data);
  };
  const mutation = useMutation(handler);
  const initialState = {
    firstName: "Olajide",
    lastName: "Ayomide",
    email: "devhalltech@gmail.com",
    salary: 4000,
    status: "active",
  };
  const reducer = (
    state,
    {
      event: {
        target: { value, name },
      },
      type,
    }
  ) => {
    switch (type) {
      case "add":
        return {
          ...state,
          [name]: value,
        };
      case "submit":
        return initialState;

      default:
        throw new Error("invalid action type");
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    console.log(state);
    console.log(mutation);
    // dispatch({ event: e, type: "submit" });
  };

  return (
    <form>
      <section className="my-3 max-w-4xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2">
        <TextInput
          name="firstName"
          changeHandler={(e) => dispatch({ event: e, type: "add" })}
          placeholder="First Name"
          state={state}
        />
        <TextInput
          changeHandler={(e) => dispatch({ event: e, type: "add" })}
          name="lastName"
          placeholder="Last Name"
          state={state}
        />
        <TextInput
          changeHandler={(e) => dispatch({ event: e, type: "add" })}
          name="email"
          email="email"
          placeholder="Email"
          state={state}
        />
        <TextInput
          changeHandler={(e) => dispatch({ event: e, type: "add" })}
          name="salary"
          type="number"
          placeholder="Salary"
          state={state}
        />
        <div className="flex items-center">
          <RadioInput
            changeHandler={(e) => dispatch({ event: e, type: "add" })}
            name="status"
            label="active"
          />
          <RadioInput
            _style="ml-5"
            changeHandler={(e) => dispatch({ event: e, type: "add" })}
            name="status"
            label="inactive"
          />
        </div>
        <TextInput state={state} type="date" placeholder="Salary" />
      </section>
      <div className="flex items-center justify-center my-5">
        <Button clickHandler={handleSubmit} _style="w-40" text="Add" />
      </div>
    </form>
  );
};
export default Form;
