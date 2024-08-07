
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
    stacks: ['Fullstack'],
    frameworks: ['Express', 'React', 'MongoDB'],
    title: 'Sistema de Gerenciamento de Tarefas',
    description: 'Uma aplicação para gerenciar tarefas com funcionalidades de CRUD, autenticação e autorização.',
    backgroundImage: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjYzNjF8MHwxfGFsbHwxfHx8fHx8fHwxNjYzMzg2Mjg4&ixlib=rb-1.2.1&q=80&w=1080',
    links: [
      { source: 'GitHub', url: 'https://github.com/usuario/tasks-management' },
      { source: 'Demo', url: 'https://tasks-management.demo.com' }
    ]
  },
  {
    stacks: ['Frontend'],
    frameworks: ['React', 'Chakra UI'],
    title: 'Portfólio Pessoal',
    description: 'Um site de portfólio para exibir projetos e experiências profissionais.',
    backgroundImage: 'https://images.unsplash.com/photo-1517430816045-df4b7de01c9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjYzNjF8MHwxfGFsbHwyfHx8fHx8fHwxNjYzMzg2MzU0&ixlib=rb-1.2.1&q=80&w=1080',
    links: [
      { source: 'GitHub', url: 'https://github.com/usuario/portfolio' },
      { source: 'Live Site', url: 'https://portfolio.usuario.com' }
    ]
  },
  {
    stacks: ['Backend'],
    frameworks: ['Node.js', 'Express', 'PostgreSQL'],
    title: 'API de E-commerce',
    description: 'Uma API RESTful para um sistema de e-commerce com funcionalidades de gerenciamento de produtos, pedidos e usuários.',
    backgroundImage: 'https://images.unsplash.com/photo-1549921296-3a6b3efbe6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjYzNjF8MHwxfGFsbHwzfHx8fHx8fHwxNjYzMzg2NDI0&ixlib=rb-1.2.1&q=80&w=1080',
    links: [
      { source: 'GitHub', url: 'https://github.com/usuario/ecommerce-api' }
    ]
  },
  {
    stacks: ['Frontend'],
    frameworks: ['Angular', 'Bootstrap'],
    title: 'Dashboard de Administração',
    description: 'Um painel de administração para monitoramento e gestão de dados empresariais.',
    backgroundImage: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjYzNjF8MHwxfGFsbHw0fHx8fHx8fHwxNjYzMzg2NDgw&ixlib=rb-1.2.1&q=80&w=1080',
    links: [
      { source: 'GitHub', url: 'https://github.com/usuario/admin-dashboard' },
      { source: 'Demo', url: 'https://admin-dashboard.demo.com' }
    ]
  },
  {
    stacks: ['Fullstack'],
    frameworks: ['AdonisJS', 'Vue.js', 'SQLite'],
    title: 'Sistema de Reservas',
    description: 'Uma aplicação para gerenciar reservas de serviços com funcionalidades de calendário e notificações.',
    backgroundImage: 'https://images.unsplash.com/photo-1519340333755-d5aa808ed6a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjYzNjF8MHwxfGFsbHw1fHx8fHx8fHwxNjYzMzg2NTI0&ixlib=rb-1.2.1&q=80&w=1080',
    links: [
      { source: 'GitHub', url: 'https://github.com/usuario/booking-system' },
      { source: 'Demo', url: 'https://booking-system.demo.com' }
    ]
  },
  {
    stacks: ['Mobile'],
    frameworks: ['React Native', 'Expo'],
    title: 'Sistema de Reservas',
    description: 'Uma aplicação para gerenciar reservas de serviços com funcionalidades de calendário e notificações.',
    backgroundImage: 'https://images.unsplash.com/photo-1519340333755-d5aa808ed6a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjYzNjF8MHwxfGFsbHw1fHx8fHx8fHwxNjYzMzg2NTI0&ixlib=rb-1.2.1&q=80&w=1080',
    links: [
      { source: 'GitHub', url: 'https://github.com/usuario/booking-system' },
      { source: 'Demo', url: 'https://booking-system.demo.com' }
    ]
  }
]