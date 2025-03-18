import searchIcon from "../../assets/icons/Search.svg";

export const Search = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="flex items-center w-full md:w-[340px] gap-2 text-white bg-[#282B30] p-2 rounded-xl">
      <img src={searchIcon} alt="search-icon" />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by Name, Region, Subregion"
        className="w-full outline-none placeholder:text-gray-300"
      />
    </div>
  );
};
