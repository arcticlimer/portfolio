import { Project } from '@common/types';

// Images
import stackFetchLanding from '@assets/img/stackfetch_landing.png';
import portfolioLanding from '@assets/img/portfolio_landing.png';
import minimalPaste from '@assets/img/minimalpaste_landing.png';

// Icons
import * as i from '@data/icons';

const projects: Project[] = [
  {
    name: 'This Portfolio',
    description:
      'My personal portfolio built with React and hosted at GitHub pages.',
    about: 'lorem '.repeat(15),
    landingImage: portfolioLanding,
    challenges: ['List item', 'List item', 'List item'],
    icons: [i.tsIcon, i.reactIcon, i.muiIcon],
    sourceCodeUrl: 'https://github.com/arcticlimer/portfolio',
  },
  {
    name: 'StackFetch',
    description:
      'A platform for users share their technology stack and GitHub profiles with the world.',
    about: 'lorem '.repeat(15),
    landingImage: stackFetchLanding,
    challenges: ['List item', 'List item', 'List item', 'List item'],
    icons: [i.tsIcon, i.pgIcon, i.reactIcon, i.sassIcon, i.muiIcon],
    sourceCodeUrl: 'https://github.com/arcticlimer/stackfetch',
  },
  {
    name: 'FlaskQuotes',
    description: 'A Flask web application for sharing personal quotes.',
    about: 'lorem '.repeat(15),
    landingImage:
      'https://github.com/arcticlimer/flaskquotes/raw/master/img/main.png',
    challenges: ['List item', 'List item', 'List item', 'List item'],
    icons: [i.pythonIcon, i.flaskIcon, i.htmlIcon, i.cssIcon, i.bootstrapIcon],
    sourceCodeUrl: 'https://github.com/arcticlimer/flaskquotes',
  },
  {
    name: 'Minimalpaste',
    description:
      'A minimalist pastebin service using only Python built-in modules.',
    about: 'lorem '.repeat(15),
    landingImage: minimalPaste,
    challenges: ['List item', 'List item', 'List item', 'List item'],
    icons: [i.pythonIcon, i.htmlIcon],
    sourceCodeUrl: 'https://github.com/arcticlimer/minimalpaste',
  },
];

export default projects;
