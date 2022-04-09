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
      {
        title: 'Simple Carousel',
        path: 'simple-carousel',
        url: 'https://codesandbox.io/embed/simple-carousel-rkolfs?fontsize=14&hidenavigation=1&theme=dark',
      },
      {
        title: 'Extended Carousel',
        path: 'extended-carousel',
        url: 'https://codesandbox.io/embed/extended-carousel-nq3h9f?fontsize=14&hidenavigation=1&theme=dark',
      },
      {
        title: 'Advanced Carousel',
        path: 'advanced-carousel',
        url: 'https://codesandbox.io/embed/dreamy-sound-coe3pp?fontsize=14&hidenavigation=1&theme=dark',
      },
      {
        title: 'Final Carousel',
        path: 'final-carousel',
        url: 'https://codesandbox.io/embed/final-carousel-bpuoz1?fontsize=14&hidenavigation=1&theme=dark',
      },
      {
        title: 'IntersectionObserver',
        path: 'intersectionobserver',
        url: 'https://codesandbox.io/embed/intersectionobserver-5ly895?fontsize=14&hidenavigation=1&theme=dark',
      },
      {
        title: 'Admin Board',
        path: 'admin-baord',
        url: 'https://codesandbox.io/embed/serverless-breeze-p4y61e?fontsize=14&hidenavigation=1&theme=dark',
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
