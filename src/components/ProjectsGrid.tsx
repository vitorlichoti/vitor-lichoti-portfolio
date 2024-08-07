import { projectType } from './mocks/projects';
import ProjectCard from './ProjectCard'
import { FilterParams } from './Projects';
import {projects} from './mocks/projects'

interface ProjectsGridProps {
  paramsKey: FilterParams
}

export default function ProjectsGrid({ paramsKey }: ProjectsGridProps) {

  const filteredProjects = projects.filter((project: projectType) => {
    const { stack, framework } = paramsKey
    const projectStacks = project.stacks
    const projectFrameworks = project.frameworks

    if (stack === '' && framework === '') {
      return project
    }

    if (projectStacks.includes(stack) || projectFrameworks.includes(framework)) {
      return project
    }
  })

  return (
    <div style={{ display: 'flex', width: 'auto', flexWrap: 'wrap', gap: 3, justifyContent: 'flex-start', marginTop: '30px' }}>
      {
        filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))
      }
    </div>
  );
}