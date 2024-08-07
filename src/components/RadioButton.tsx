import { Dispatch, SetStateAction } from "react";
import { FilterParams } from "./Projects";

interface RadioButtonProps {
  label: string;
  changeFilterParams: Dispatch<SetStateAction<FilterParams>>;
}

export default function RadioButton({ label, changeFilterParams }: RadioButtonProps) {
  const handleSelectedRadio = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const target = e.target as HTMLInputElement;
    changeFilterParams((prev) => ({
      ...prev,
      stack: target.value
    }));
  }
  
  return (
    <label >
      <input onClick={(e) => handleSelectedRadio(e)} type="radio" name="language" value={label === 'Todos' ? '' : label} style={{marginRight: '5px'}} />
      {label}
    </label>
  );
}