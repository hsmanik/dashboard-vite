import { GoHomeFill } from "react-icons/go";
import { FaChartSimple } from "react-icons/fa6";
import { LuFileSearch } from "react-icons/lu";
import { MdMail } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa6";
import { GoBellFill } from "react-icons/go";
import { FaArrowUpLong } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
export const SideBar = () => {
  return (
    <div
      className=" bg-slate-800 flex-none w-14 sm:w-20 
    h-screen"
    >
      <div className=" h-20 items-center flex">
        <GoHomeFill
          size={40}
          className=" text-gray-300
         left-3 sm:left-6 fixed"
        />
      </div>
      <div className=" fixed left-3 sm:left-6 top-[100px]">
        <FaChartSimple
          size={40}
          className=" bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
        <LuFileSearch
          size={40}
          className=" bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
        <MdMail
          size={40}
          className=" bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
        <FaRegCreditCard
          size={40}
          className=" bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
        <GoBellFill
          size={40}
          className=" bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
      </div>
      <div className=" fixed bottom-4 left-3 sm:left-6">
        <a href="#top">
          <FaArrowUpLong
            size={40}
            className=" bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
          />
        </a>

        <TbLogout
          size={40}
          className=" bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
      </div>
    </div>
  );
};
