import React from "react";
import { Regions } from "../../constants";
import { CustomSelect } from "../colum-drop/ColumnSelect.tsx";

export const Filter = ({
  selectedCol,
  handleSelectChange,
  selectedRegions,
  handleSelectRegion,
}: {
  selectedCol: string;
  handleSelectChange: React.ChangeEventHandler<HTMLSelectElement>;
  selectedRegions: string[];
  handleSelectRegion: (region: string) => void;
}) => {
  return (
    <div className="flex flex-col max-w-[260px]">
      <p className="mb-1">Sort by</p>
      <CustomSelect
        selectedCol={selectedCol}
        handleSelectChange={handleSelectChange}
      />
      <p className="mb-2">Region</p>
      <div className="flex gap-3 max-w-[270px] flex-wrap">
        {Regions.map((region) => (
          <button
            onClick={() => handleSelectRegion(region)}
            type="button"
            key={region}
            className={`${
              selectedRegions.includes(region) ? "bg-[#282B30]" : ""
            } px-3 py-1 rounded-xl cursor-pointer=`}
          >
            {region}
          </button>
        ))}
      </div>
      <p>Status</p>
      <input type="checkbox" className="w-7 h-7" name="" id="" />
      <input type="checkbox" className="w-7 h-7" name="" id="" />
    </div>
  );
};
