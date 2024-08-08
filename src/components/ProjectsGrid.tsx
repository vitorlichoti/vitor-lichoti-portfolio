import { projectType } from './mocks/projects';
import ProjectCard from './ProjectCard'
import { FilterParams } from './Projects';
import {projects} from './mocks/projects'
import { textLang } from '../../public/locales/global';

interface ProjectsGridProps {
  paramsKey: FilterParams
}

export default function ProjectsGrid({ paramsKey }: ProjectsGridProps) {

  const filteredProjects = projects.filter((project: projectType) => {
    const { stack, framework } = paramsKey
    const projectStacks = project.stacks
    const projectFrameworks = project.frameworks

    console.log(paramsKey);
    

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
        filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        ) : (
          <h1 style={{fontSize: '30px', fontWeight: 'bold', textAlign: 'center', width: '100%', padding: '200px'}}>{textLang['ptBr'].no_projects_found}</h1>
        )
      }
    </div>
  );
}