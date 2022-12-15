const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://github.com/Artur-0',
  // title: 'AR',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Arturo Romero',
  role: 'Software Developer',
  description:
    'Welcome to my personal website! I am a fullstack developer from Argentina looking forward to solve real world problems and give value with the help of technology. Here you can find my best projects; Currently I am working in new projects so there will be updates soon',
  resume:
    'https://drive.google.com/file/d/1KIWOpvyUjpZFLicN7mw9-pIfmQu6PhzD/view?usp=share_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/arturo-romero1997/',
    github: 'https://github.com/Artur-0',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Point of sale',
    description:
      'App developed with a team of six developers applying the agile scrum methodology. An app for internal use in a fast food restaurant that connects the teamwork between the kitchen and the front cashier with functions like cash management,stock of products, payments through credit cards, management and history of orders, and more.',
    stack: [
      'React',
      'Redux toolkit',
      'JavaScript',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Sequelize',
      'Styled-components',
    ],
    sourceCode: 'https://github.com/Artur-0/pf-henry-point-of-sale',
    livePreview: 'https://vimeo.com/755317810',
  },
  {
    name: 'Pokemon',
    description:
      'A Pokemon themed single page application that consumes an API, with functions like filters, sorts,searching by name, pagination, and the possibility to create a new pokemon. ',
    stack: [
      'React',
      'Redux',
      'JavaScript',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Sequelize',
      'Styled-components',
    ],
    sourceCode: 'https://github.com/Artur-0/Pokemons-PI-Henry',
    livePreview: 'https://pokemons-pi-henry.vercel.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up

  'JavaScript',
  'React',
  'Redux',
  'Node.js',
  'Express',
  'PostgreSQL',
  'Sequelize',
  'HTML',
  'CSS',
  'Styled-components',
  'Git',
  'Scrum',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'romeroarturo597@gmail.com',
}

export { header, about, projects, skills, contact }
