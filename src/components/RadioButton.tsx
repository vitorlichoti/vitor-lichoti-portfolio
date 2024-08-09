import { Dispatch, SetStateAction } from "react";
import { FilterParams } from "./Projects";

interface RadioButtonProps {
  label: string;
  selectedValue: string;
  changeFilterParams: Dispatch<SetStateAction<FilterParams>>;
  setSelectedValue: Dispatch<SetStateAction<string>>;
}

export default function RadioButton({
  label,
  selectedValue,
  changeFilterParams,
  setSelectedValue
}: RadioButtonProps) {
  const isSelected = selectedValue === label || (selectedValue === '' && label === 'Todos');

  const handleChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value); 
    changeFilterParams((prev) => ({
      ...prev,
      stack: e.target.value,
    }));
  };

  return (
    <label
      style={{
        display: 'inline-block',
        marginRight: '5px',
        textDecoration: isSelected ? 'underline' : 'none',
        textDecorationColor: isSelected ? '#646348' : 'transparent',
        textDecorationThickness: isSelected ? '3px' : '0px',
        textDecorationSkip: 'spaces',
        cursor: 'pointer',
      }}
      className="text-yellow-50 opacity-70"
    >
      <input
        checked={isSelected}
        onChange={(e) => handleChangeRadio(e)}
        type="radio"
        name="language"
        value={label === 'Todos' ? '' : label}
        className="appearance-none"
      />
      {label}
    </label>
  );
}