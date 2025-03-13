import dropDown from "../../assets/icons/Expand_down.svg";
import { Regions } from "../../constants";

export const Filter = () => {
  return (
    <div className="flex flex-col w-[200px]">
      <p>Sort by</p>
      <p>drop-down</p>
      <p>Region</p>
      <div className="flex gap-2">
        {Regions.map((region) => (
          <p key={region}>{region}</p>
        ))}
      </div>
      <p>Status</p>
      <input type="checkbox" className="w-7 h-7" name="" id="" />
      <input type="checkbox" className="w-7 h-7" name="" id="" />
    </div>
  );
};
