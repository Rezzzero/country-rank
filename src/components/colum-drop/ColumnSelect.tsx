import { Columns } from "../../constants";
import dropIcon from "../../assets/icons/Expand_down.svg";

export const CustomSelect = ({
  selectedCol,
  handleSelectChange,
}: {
  selectedCol: string;
  handleSelectChange: React.ChangeEventHandler<HTMLSelectElement>;
}) => {
  return (
    <div className="relative">
      <select
        className="bg-[#1b1d1f] w-full text-white py-2 px-3 rounded-xl border-2 border-[#282B30] mb-4 appearance-none"
        value={selectedCol}
        onChange={handleSelectChange}
      >
        {Columns.map((col) => (
          <option key={col} value={col}>
            {col}
          </option>
        ))}
      </select>
      <img
        src={dropIcon}
        className="absolute right-3 top-3 w-5 h-5 pointer-events-none"
        alt="drop-icon"
      />
    </div>
  );
};
