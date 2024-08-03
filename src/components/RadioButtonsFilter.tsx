import RadioButton from "./RadioButton";
import { FilterParams } from "./Projects";
import { Dispatch, SetStateAction } from "react";

interface RadioButtonProps {
  label: string[];
  changeFilterParams: Dispatch<SetStateAction<FilterParams>>;
}

export default function RadioButtonsFilter({ label }: RadioButtonProps) {
  return (
    <div style={{width: 'auto', display: 'flex', justifyContent: 'center', gap: '20px'}}>
      {label.map((item, index) => (
        <RadioButton key={index} label={item} />
      ))}
    </div>
  );
}