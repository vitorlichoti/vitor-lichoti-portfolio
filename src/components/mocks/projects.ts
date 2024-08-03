
type linkType = {source: string, url: string}

export type projectType = {
  stacks: string[],
  frameworks: string[],
  title: string,
  description: string,
  backgroundImage: string,
  links: linkType[]
}

export const projects: projectType[] = [
  {
    stacks: ['Frontend', 'Backend'],
    frameworks: ['Express'],
    title: 'Exemplo',
    description: 'exemplo',
    backgroundImage: '',
    links: [ {source: 'aa', url: 'aa'}]
  },
  {
    stacks: ['Frontend', 'Backend'],
    frameworks: ['Express'],
    title: 'Exemplo',
    description: 'exemplo',
    backgroundImage: '',
    links: [ {source: 'aa', url: 'aa'}]
  },
  {
    stacks: ['Frontend', 'Backend'],
    frameworks: ['Express'],
    title: 'Exemplo',
    description: 'exemplo',
    backgroundImage: '',
    links: [ {source: 'aa', url: 'aa'}]
  },
  {
    stacks: ['Frontend', 'Backend'],
    frameworks: ['Express'],
    title: 'Exemplo',
    description: 'exemplo',
    backgroundImage: '',
    links: [ {source: 'aa', url: 'aa'}]
  },
  {
    stacks: ['Frontend', 'Backend'],
    frameworks: ['Express'],
    title: 'Exemplo',
    description: 'exemplo',
    backgroundImage: '',
    links: [ {source: 'aa', url: 'aa'}]
  },
]