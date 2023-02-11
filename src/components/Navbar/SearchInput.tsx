import { SearchC } from "@/src/styles/Navbar.styled";
import React from "react";
import { FiSearch } from "react-icons/fi";
type SearchInputProps = {
  // user:
};

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <SearchC>
      <button>
        <FiSearch />
      </button>
      <input type="text" placeholder="Search Reddit"></input>
    </SearchC>
  );
};
export default SearchInput;
