import searchIcon from "../../assets/icons/Search.svg";

export const Search = () => {
  return (
    <div className="flex items-center w-[340px] gap-2 text-white bg-[#282B30] p-2 rounded-xl">
      <img src={searchIcon} alt="search-icon" />
      <input
        type="text"
        placeholder="Search by Name, Region, Subregion"
        className="w-full placeholder:text-gray-300"
      />
    </div>
  );
};
