import doneIcon from "../../assets/icons/Done_round.svg";
import { CustomCheckboxProps } from "../../types/types";

export const CustomCheckbox = ({
  checked,
  onChange,
  text,
  id,
}: CustomCheckboxProps) => {
  return (
    <div className="flex items-center gap-2 mb-2">
      <input
        type="checkbox"
        id={id}
        className="peer hidden"
        checked={checked}
        onChange={() => onChange(!checked)}
      />
      <div
        onClick={() => onChange(!checked)}
        className={`w-5 h-5 rounded-sm flex items-center justify-center relative ${
          checked
            ? "bg-blue-500 border-none"
            : "bg-[#282B30] border-2 border-white"
        }`}
      >
        <img
          src={doneIcon}
          alt="done icon"
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
            checked ? "block" : "hidden"
          }`}
        />
      </div>
      <label htmlFor={id}>{text}</label>
    </div>
  );
};
