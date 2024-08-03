import RadioButtonsFilter from "./RadioButtonsFilter";
import SelectByFrameWork from "./SelectByFrameWork";
import { languagesList, stacks } from "@/common/constants";

export default function ProjectFiltersWrapper() {
  
  return (
    <div className="mt-10" style={{display: 'flex', justifyContent: 'space-between', marginLeft: 'auto', marginRight: 'auto', width: '100%'}}>
      <RadioButtonsFilter label={stacks}/>
      <SelectByFrameWork />
    </div>
  );
}