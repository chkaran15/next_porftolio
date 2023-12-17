import { FiSearch } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="search-container relative flex items-center px-[14px] py-[8px] bg-slate-30 rounded shadow border-1 border-[#D0D5DD]">
      <FiSearch className="w-5 h-5 text-[#98A2B3] " />

      <input type="text" placeholder="Want to learn" className="pl-2 w-[220px] sm:w-[311px] outline-none " />

      <button className="flex absolute top-1 right-1 f py-1 px-2 bg-[#F9F5FF] text-[#7F56D9] rounded-md" >
        Explore{" "}
        <span className="w-5 h-5 mt-1 ml-2 text-[#7F56D9]">
          <FaAngleDown />
        </span>
      </button>
    </div>
  );
}

export default SearchBar;
