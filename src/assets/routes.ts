import { BsBookmarkFill, BsFillPersonFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiJavascript, SiReact } from 'react-icons/si';

const routes = [
  {
    name: 'HTML﹒CSS﹒JS',
    icon: SiJavascript,
    path: '/javascript',
    items: [
      {
        title: 'Creative List',
        path: 'creative-list',
        url: 'https://codesandbox.io/embed/determined-golick-bpc6jb?fontsize=14&hidenavigation=1&theme=dark',
      },
      {
        title: 'Animated Heart',
        path: 'animated-heart',
        url: 'https://codesandbox.io/embed/mystifying-nightingale-wtjwiv?fontsize=14&hidenavigation=1&theme=dark',
      },
    ],
  },
  {
    name: 'React',
    icon: SiReact,
    path: '/react',
    items: [
      {
        title: 'Custom Chart',
        path: 'custom-chart',
        url: 'https://codesandbox.io/embed/custom-chart-d6hczb?fontsize=14&hidenavigation=1&theme=dark',
      },
    ],
  },
];

export const bottomLinks = [
  {
    name: 'Contact',
    items: [
      {
        title: 'Blog',
        icon: BsBookmarkFill,
        url: 'https://maeng2418.github.io',
      },
      {
        title: 'Github',
        icon: BsGithub,
        url: 'https://github.com/maeng2418',
      },
      {
        title: 'LinkedIn',
        icon: BsLinkedin,
        url: 'https://www.linkedin.com/in/%EB%AA%85%EC%84%B1-%EA%B9%80-4988b61ba',
      },
      {
        title: 'Portfolio',
        icon: BsFillPersonFill,
        url: 'https://maeng2418.github.io/about',
      },
    ],
  },
];

export default routes;
