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
    "Welcome to my personal website! I am from Argentina. I'm excited to make my first steps into professional software engineering. I'm looking forward to solving real world problems and giving value with the help of technology. Here you can find my best projects, and more... Thank you very much.:)",
  resume:
    'https://drive.google.com/file/d/1XVcNMVloU8XRQb2-N5PkvYrcUUpP9OTn/view?usp=sharing',
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
      'An app for internal use in a fast food restaurant, making it easier to manage sales, and connecting the teamwork between the kitchen and the front cashier.',
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
    livePreview: 'https://pf-henry-point-of-sale.vercel.app/',
  },
  {
    name: 'Pokemon',
    description:
      'An app that consume an API of pokemons showing them in cards, with functions like search by name, filter by type of pokemon and even create a new one',
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
