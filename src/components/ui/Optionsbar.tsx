import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction } from "react";

type OptionsbarProps = {
  option: string;
  setOption: Dispatch<SetStateAction<string>>;
  options: OptionsArrayProps[];
};

type OptionsArrayProps = {
  icon: IconDefinition;
  optionName: string;
};

export default function Optionsbar({
  option,
  setOption,
  options,
}: OptionsbarProps) {
  return (
    <div className="bg-cyan-900 p-4">
      <ul className="flex flex-row justify-center gap-4">
        {options.map((option) => (
          <li
            key={option.optionName}
            className="flex gap-2 items-center justify-center hover:cursor-pointer"
            onClick={() => setOption(option.optionName)}
          >
            <FontAwesomeIcon icon={option.icon} size={"xl"} color="white" />
            <p className="hidden md:block text-white">{option.optionName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
