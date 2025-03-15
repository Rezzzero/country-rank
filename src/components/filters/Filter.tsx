import React from "react";
import { Regions } from "../../constants";
import { CustomSelect } from "../colum-drop/ColumnSelect.tsx";

export const Filter = ({
  selectedCol,
  handleSelectChange,
}: {
  selectedCol: string;
  handleSelectChange: React.ChangeEventHandler<HTMLSelectElement>;
}) => {
  return (
    <div className="flex flex-col max-w-[260px]">
      <p className="mb-1">Sort by</p>
      <CustomSelect
        selectedCol={selectedCol}
        handleSelectChange={handleSelectChange}
      />
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
