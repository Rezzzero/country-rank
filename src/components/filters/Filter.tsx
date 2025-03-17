import { Regions } from "../../constants";
import { CustomSelect } from "../colum-drop/ColumnSelect.tsx";
import { CustomCheckbox } from "../checkbox/CustomCheckbox.tsx";
import { FilterProps } from "../../types/types.ts";

export const Filter = ({
  selectedCol,
  handleSelectChange,
  selectedRegions,
  handleSelectRegion,
  unMember,
  setUnMember,
  independent,
  setIndependent,
}: FilterProps) => {
  return (
    <div className="flex flex-col w-[320px]">
      <p className="mb-1">Sort by</p>
      <CustomSelect
        selectedCol={selectedCol}
        handleSelectChange={handleSelectChange}
      />
      <p className="mb-2">Region</p>
      <div className="flex gap-3 max-w-[270px] flex-wrap mb-8">
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
      <p className="mb-2">Status</p>
      <CustomCheckbox
        checked={unMember}
        onChange={setUnMember}
        text={"Member of the United Nations"}
        id={"unMember"}
      />
      <CustomCheckbox
        checked={independent}
        onChange={setIndependent}
        text={"Independent"}
        id={"independent"}
      />
    </div>
  );
};
