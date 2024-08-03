import { projectType } from './mocks/projects';
import ProjectCard from './ProjectCard'
import { FilterParams } from './Projects';
import {projects} from './mocks/projects'

interface ProjectsGridProps {
  paramsKey: FilterParams
}

export default function ProjectsGrid({ paramsKey }: ProjectsGridProps) {
  return (
    <div style={{ display: 'flex', width: 'auto', flexWrap: 'wrap', gap: 3, justifyContent: 'flex-start', marginTop: '30px' }}>
      {
        projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))
      }
    </div>
  );
}