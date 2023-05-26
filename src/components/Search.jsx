import { useState } from "react";
import fetchFromApi from "../utils/fetchFromAPI";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  function submitHandeler(e) {
    e.preventDefault();
    console.log(searchInput);


    navigate(`/search/${searchInput}`);
  }
  return (
    <div className="center flex w-1/2">
      <div className="search-box w-full hidden sm:flex">
        <form className="w-full flex " onSubmit={submitHandeler}>
          <div className="search w-full flex items-center rounded-tl-full rounded-bl-full">
            <input
              className="bg-transparent w-full p-4 focus:outline-none"
              placeholder="Search"
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              value={searchInput}
            />
          </div>
          <button type="submit">
            <div className="search-icon flex items-center justify-center rounded-tr-full rounded-br-full w-full h-full">
              <i className="fa-solid fa-magnifying-glass text-[#f1f1f1]"></i>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
