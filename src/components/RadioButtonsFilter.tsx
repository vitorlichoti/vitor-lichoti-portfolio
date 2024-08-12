import RadioButton from "./RadioButton";
import { FilterParams } from "./Projects";
import { Dispatch, SetStateAction, useState } from "react";

interface RadioButtonProps {
  label: string[];
  changeFilterParams: Dispatch<SetStateAction<FilterParams>>;
}

export default function RadioButtonsFilter({ label, changeFilterParams }: RadioButtonProps) {
  const [selectedValue, setSelectedValue] = useState('Todos');
  
  return (
    <div style={{width: 'auto', display: 'flex', justifyContent: 'center', gap: '20px',flexWrap: 'wrap'}}>
      {label.map((item, index) => (
        <RadioButton key={index} label={item} changeFilterParams={changeFilterParams} selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
      ))}
    </div>
  );
}