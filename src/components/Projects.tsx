'use client'
import { useState } from "react";
import ProjectFiltersWrapper from "./ProjectFiltersWrapper";
import ProjectsGrid from "./ProjectsGrid";

export type FilterParams = {
  stack: string;
  framework: string;
}

export default function Projects() {
  const [filterParams, setFilterParams] = useState<FilterParams>(
    {
      stack: '',
      framework: ''
    }
  )
  return (
    <div style={{marginLeft: '20px', marginRight: '20px', width: 'auto', marginBottom: '20px'}}>
      <ProjectFiltersWrapper setFilterParams={setFilterParams} />

      <ProjectsGrid paramsKey={filterParams}/>
    </div>
  )
}