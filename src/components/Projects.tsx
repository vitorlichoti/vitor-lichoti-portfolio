'use client'
import { useEffect, useState } from "react";
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
    <div>
      <ProjectFiltersWrapper setFilterParams={setFilterParams} />

      <ProjectsGrid paramsKey={filterParams}/>
    </div>
  )
}