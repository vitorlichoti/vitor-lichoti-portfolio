import Image from "next/image";
import { projectType } from "./mocks/projects";

interface ProjectCardProps {
  project: projectType
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white shadow-md p-5 " style={{backgroundColor: '#646348', width: '339px', height: '230px'}}>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-white">{project.title}</h1>
          <div className="flex flex-wrap">
            {project.stacks.map((stack, index) => (
              <span key={index} className="text-sm text-white bg-gray-800 rounded-full px-2 py-1 m-1">{stack}</span>
            ))}
          </div>
        </div>
        <div>
          <Image src={''} alt="project" className="w-20 h-20 rounded-full" />
        </div>
      </div>
      <p className="text-white mt-2">{project.description}</p>
      <div className="flex justify-end">
        {project.links.map((link, index) => (
          <a key={index} href={link.url} className="text-white text-sm underline">{link.source}</a>
        ))}
      </div>
    </div>
  );
}