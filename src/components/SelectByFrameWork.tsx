import { frameworks } from "@/common/constants";
import { Dispatch, SetStateAction } from "react";
import { FilterParams } from "./Projects";

interface SelectByFrameWorkProps {
  changeFilterParams: Dispatch<SetStateAction<FilterParams>>;
}

export default function SelectByFrameWork({ changeFilterParams }: SelectByFrameWorkProps) {

  const handleFilterSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeFilterParams((prev) => ({
      ...prev,
      framework: e.target.value
    }));
  }
  
  return (
    <select onChange={handleFilterSelected} style={{backgroundColor: '#646348', borderColor: '#646348', borderRadius: '5px', height: '40px', minWidth: '230px', padding: '5px'}}>
      <option value="">All</option>
      {frameworks.map((item, index) => (
        <option key={index} value={item}>{item}</option>
      ))}
    </select>
  );
}