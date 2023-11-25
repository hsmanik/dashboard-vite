import { TextInput } from "@tremor/react";
import { IoSearch } from "react-icons/io5";
export const Navbar = () => {
  return (
    <div
      id="top"
      className=" relative w-full sm:flex justify-between items-center p-2"
    >
      <h1 className=" font-bold text-gray-300">Dashboard</h1>
      <div className=" py-2">
        <TextInput icon={IoSearch} placeholder="Search..." />
      </div>
    </div>
  );
};
