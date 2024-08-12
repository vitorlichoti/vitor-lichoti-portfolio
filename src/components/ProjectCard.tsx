import Image from "next/image";
import { projectType } from "./mocks/projects";

import samurai from '../../public/herodarkbg.png';
import bestRecords from '../../public/best-records.png';

interface ProjectCardProps {
  project: projectType
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const validFrameworks = ['React', 'Next', 'React Native', 'Node', 'Golang', 'Kotlin', 'Kotlin Multiplatform']    
  
  return (
    <div className="bg-white shadow-md p-5 " style={{position: 'relative', backgroundColor: '#646348', width: '339px', height: '230px'}}>
      <aside style={{display: 'flex', flexDirection: 'column', gap: '3px'}}>
        {project.frameworks.map((framework, index) => (
          <Image
            key={index}
            src={validFrameworks.includes(framework) ? `/assets/light/${framework.toLowerCase().replace(' ', '-')}.png` : ''}
            alt={framework} width={28} height={28}
          />
        ))}
      </aside>
      <Image style={{position: 'absolute', top: 0, left: 0, zIndex: 0, width: '100%', maxHeight: '228px'}} src={bestRecords} alt=""/>
    </div>
  );
}