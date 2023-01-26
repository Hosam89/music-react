import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const Searchbar = () => {
  const navigate = useNavigate();
  const [searchedTerm, setSearchedTerm] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchedTerm}`);
  };
  return (
    <form
      autoComplete="off"
      className="p-2 text-gray-400 focus-within:text-gray-600"
      onSubmit={handleSumbit}
    >
      <label htmlFor="search-field" className="sr-only">
        search All songs
      </label>
      <div className="flex flex-row justify-start items-center">
        <FaSearch className="w-5 h-5 ml-4" />
        <input
          type="search"
          name="search-field"
          autoComplete="off"
          id="search-field"
          placeholder="Search "
          value={searchedTerm}
          onChange={(e) => setSearchedTerm(e.target.value)}
          className="fkex-1 bg-transparent border-none outline-none placholder-gray-500 text-base text-white p-4"
        />
      </div>
    </form>
  );
};
export default Searchbar;
