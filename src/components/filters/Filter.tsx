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
    <div className="flex flex-col w-full md:w-[350px] mt-2 mr-12">
      <p className="text-[12px] mb-2">Sort by</p>
      <CustomSelect
        selectedCol={selectedCol}
        handleSelectChange={handleSelectChange}
      />
      <p className="text-[12px] mb-3">Region</p>
      <div className="flex gap-3 w-full mb-6 md:max-w-[270px] md:flex-wrap md:mb-10">
        {Regions.map((region) => (
          <button
            onClick={() => handleSelectRegion(region)}
            type="button"
            key={region}
            className={`${
              selectedRegions.includes(region) ? "bg-[#282B30]" : ""
            } px-3 py-1 rounded-xl text-[16px] cursor-pointer`}
          >
            {region}
          </button>
        ))}
      </div>
      <p className="text-[12px] mb-2">Status</p>
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
