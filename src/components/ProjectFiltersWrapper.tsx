'use client'

import { Dispatch, SetStateAction, useState } from "react";
import RadioButtonsFilter from "./RadioButtonsFilter";
import SelectByFrameWork from "./SelectByFrameWork";
import { languagesList, stacks } from "@/common/constants";
import { FilterParams } from "./Projects";



interface ProjectFiltersWrapperProps {
  setFilterParams: Dispatch<SetStateAction<FilterParams>>;
}

export default function ProjectFiltersWrapper({ setFilterParams }: ProjectFiltersWrapperProps) {

  
  return (
    <div className="mt-10" style={{display: 'flex', justifyContent: 'space-between', marginLeft: 'auto', marginRight: 'auto', width: '100%'}}>
      <RadioButtonsFilter label={stacks} changeFilterParams={setFilterParams} />
      <SelectByFrameWork changeFilterParams={setFilterParams} />
    </div>
  );
}