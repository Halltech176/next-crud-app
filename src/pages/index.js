import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";
import Layout from "../layout/layout";
import Form from "../components/Form";
import Button from "../components/ui/Button";
import { useQuery } from "react-query";
import axios from "axios";
export default function Home() {
  const {
    data: employees,
    isError,
    isLoading,
    isSuccess,
  } = useQuery("users", async () => {
    return axios.get("/api/users");
  });
  console.log(employees?.data?.data);
  const Arr = new Array(10).fill(5);

  const [open, setOpen] = useState(true);
  return (
    <Layout title="employe page">
      <h1 className="font-bold font-chakra leading-loose text-3xl ">
        CRUD APPLICATION
      </h1>
      <div className="p-3 bg-grey-300 border">
        <Button
          clickHandler={(e) => {
            e.preventDefault();
            setOpen(!open);
          }}
          text="Add Employee"
        />
      </div>
      {/* Collapsible forms */}
      <AnimatePresence>
        {open && (
          <motion.section
            transition={{
              type: "tween",
              ease: "circIn",
              bounce: 0.25,
              mass: 0.5,
              stiffness: 50,
            }}
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0.5 }}
          >
            <Form />
          </motion.section>
        )}
      </AnimatePresence>
      <table className="table-auto border-spacing-80 border-seperate w-full border border-bg-slate-700 ">
        <thead className="p-3 text-slate-300 font-semibold text-poppins bg-slate-700 py-10">
          <tr className=" ">
            <th className="py-3">Name</th>
            <th className="">Email</th>
            <th>Salary</th>
            <th>Birthday</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center p-4">
          {employees?.data?.data?.map((data, index) => {
            return (
              <tr
                style={{ color: "#000" }}
                className=" py-3 even:bg-slate-50 font-rubik"
                key={index}
              >
                <td className=" py-3 ">Olajide Ayomide</td>
                <td>devhalltech@gmail.com</td>
                <td>3000</td>
                <td>23-45-23</td>
                <td>
                  <span
                    data-state="inactive"
                    className="data-[state=active]:bg-green-500 data-[state=inactive]:bg-red-500 rounded-md py-2 text-white px-5"
                  >
                    Active
                  </span>
                </td>
                <td>
                  <span>Del</span>
                  <span>Edit</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
}
