import { CgNotes } from 'react-icons/cg';
import { RiReactjsLine, RiVuejsLine } from 'react-icons/ri';
import {
  SiPreact,
  SiReact,
  SiReactos,
  SiSemanticuireact,
  SiVuedotjs,
  SiVuetify,
} from 'react-icons/si';
import { atom } from 'recoil';
export const projectsAtom = atom({
  key: 'PROJECTS_ATOM',
  default: [
    {
      category: 'React Ecosystem',
      child: [
        {
          title: 'MonorepoFE',
          description: 'MonorepoFE React template Admin',
          link: 'https://github.com/limuen/monorepoFE',
          icon: <RiReactjsLine />,
        },
        {
          title: 'Hooks-admin',
          description:
            'A backend management framework based on React18, React Router V6, Hooks, RTK, TypeScript open-source.',
          link: 'https://github.com/HalseySpicy/Hooks-Admin',
          icon: <SiReactos />,
        },
        {
          title: 'React-CanvasScreen',
          description: 'Using React graphs canvas data screen',
          link: 'https://limuen.github.io/liam-react-screen/',
          icon: <SiPreact />,
        },
        {
          title: 'React-dataScreen',
          description: 'Using React open-source data screen',
          link: 'https://hooks.spicyboy.cn/#/dataScreen/index',
          icon: <SiReact />,
        },
        {
          title: 'react-address',
          description:
            'React Implement provincial and municipal level selector',
          link: 'https://www.npmjs.com/package/react-address',
          icon: <SiSemanticuireact />,
        },
      ],
    },
    {
      category: 'Vue Ecosystem',
      child: [
        {
          title: 'vue-admin',
          description:
            'Built in dynamic routing, permission verification, and simple backend API services, ready to use out of the box',
          link: 'https://github.com/limuen/vue-admin',
          icon: <SiVuetify />,
        },
        {
          title: 'Geeker-Admin',
          description:
            'Open source backend management framework based on Vue3.2, TypeScript, Vite3, Pinia, and Element Plus',
          link: 'https://github.com/HalseySpicy/Geeker-Admin',
          icon: <SiVuedotjs />,
        },
        {
          title: 'vue-trackdisplay',
          description:
            'Drag the scroll bar and cruise trajectory to achieve animation playback and fast forward playback at multiple speeds',
          link: 'https://github.com/limuen/trackdisplay',
          icon: <RiVuejsLine />,
        },
      ],
    },
    {
      category: 'Notes',
      child: [
        {
          title: 'front-end-learning-to-organize-notes',
          description:
            'front-end knowledge system, more efficient absorption of experience and results',
          link: 'https://limuen.github.io/',
          icon: <CgNotes />,
        },
      ],
    },
  ],
});
