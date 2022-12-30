import { PageProps } from '@/utils/template';

import Castform from './Castform/Castform';
import Resume1 from './custom/Resume1/Resume1';
import Resume2 from './custom/Resume2/Resume2';
import Resume3 from './custom/Resume3/Resume3';
import Resume4 from './custom/Resume4/Resume4';
import Resume5 from './custom/Resume5/Resume5';
import Resume7 from './custom/Resume7/Resume7';
import Resume8 from './custom/Resume8/Resume8';
import Resume9 from './custom/Resume9/Resume9';
import Resume10 from './custom/Resume10/Resume10';
import Resume10a from './custom/Resume10a/Resume10a';
import Resume11 from './custom/Resume11/Resume11';
import Resume12 from './custom/Resume12/Resume12';
import Resume13 from './custom/Resume13/Resume13';
import Resume15 from './custom/Resume15/Resume15';
import Resume16 from './custom/Resume16/Resume16';
import Resume17 from './custom/Resume17/Resume17';
import Resume18 from './custom/Resume18/Resume18';
import Resume19 from './custom/Resume19/Resume19';
import Resume20 from './custom/Resume20/Resume20';
import Gengar from './Gengar/Gengar';
import Glalie from './Glalie/Glalie';
import Kakuna from './Kakuna/Kakuna';
import Leafish from './Leafish/Leafish';
import Onyx from './Onyx/Onyx';
import Pikachu from './Pikachu/Pikachu';

export type TemplateMeta = {
  id: string;
  name: string;
  preview: string;
  component: React.FC<PageProps>;
};

const templateMap: Record<string, TemplateMeta> = {
  kakuna: {
    id: 'kakuna',
    name: 'Kakuna',
    preview: '/images/templates/kakuna.jpg',
    component: Kakuna,
  },
  onyx: {
    id: 'onyx',
    name: 'Onyx',
    preview: '/images/templates/onyx.jpg',
    component: Onyx,
  },
  pikachu: {
    id: 'pikachu',
    name: 'Pikachu',
    preview: '/images/templates/pikachu.jpg',
    component: Pikachu,
  },
  gengar: {
    id: 'gengar',
    name: 'Gengar',
    preview: '/images/templates/gengar.jpg',
    component: Gengar,
  },
  castform: {
    id: 'castform',
    name: 'Castform',
    preview: '/images/templates/castform.jpg',
    component: Castform,
  },
  glalie: {
    id: 'glalie',
    name: 'Glalie',
    preview: '/images/templates/glalie.jpg',
    component: Glalie,
  },
  leafish: {
    id: 'leafish',
    name: 'Leafish',
    preview: '/images/templates/leafish.jpg',
    component: Leafish,
  },
  resume1: {
    id: 'resume1',
    name: 'Resume 1',
    preview: '/images/templates/cv1.jpg',
    component: Resume1,
  },
  resume2: {
    id: 'resume2',
    name: 'Resume 2',
    preview: '/images/templates/cv2.jpg',
    component: Resume2,
  },
  resume3: {
    id: 'resume3',
    name: 'Resume 3',
    preview: '/images/templates/cv3.jpg',
    component: Resume3,
  },
  resume4: {
    id: 'resume4',
    name: 'Resume 4',
    preview: '/images/templates/cv4.jpg',
    component: Resume4,
  },
  resume5: {
    id: 'resume5',
    name: 'Resume 5',
    preview: '/images/templates/cv5.jpg',
    component: Resume5,
  },

  resume7: {
    id: 'resume7',
    name: 'Resume 7',
    preview: '/images/templates/cv7.jpg',
    component: Resume7,
  },
  resume8: {
    id: 'resume8',
    name: 'Resume 8',
    preview: '/images/templates/cv8.jpg',
    component: Resume8,
  },
  resume9: {
    id: 'resume9',
    name: 'Resume 9',
    preview: '/images/templates/cv9.jpg',
    component: Resume9,
  },
  resume10: {
    id: 'resume10',
    name: 'Resume10',
    preview: '/images/templates/cv10.jpg',
    component: Resume10,
  },
  resume10a: {
    id: 'resume10a',
    name: 'Resume10 A',
    preview: '/images/templates/cv10a.jpg',
    component: Resume10a,
  },
  resume11: {
    id: 'resume11',
    name: 'Resume 11',
    preview: '/images/templates/cv11.jpg',
    component: Resume11,
  },
  resume12: {
    id: 'resume12',
    name: 'Resume 12',
    preview: '/images/templates/cv12.jpg',
    component: Resume12,
  },
  resume13: {
    id: 'resume13',
    name: 'Resume 13',
    preview: '/images/templates/cv13.jpg',
    component: Resume13,
  },

  resume15: {
    id: 'resume15',
    name: 'Resume 15',
    preview: '/images/templates/cv15.jpg',
    component: Resume15,
  },
  resume16: {
    id: 'resume16',
    name: 'Resume 16',
    preview: '/images/templates/cv16.jpg',
    component: Resume16,
  },
  resume17: {
    id: 'resume17',
    name: 'Resume 17',
    preview: '/images/templates/cv17.jpg',
    component: Resume17,
  },
  resume18: {
    id: 'resume18',
    name: 'Resume 18',
    preview: '/images/templates/cv18.jpg',
    component: Resume18,
  },
  resume19: {
    id: 'resume19',
    name: 'Resume 19',
    preview: '/images/templates/cv19.jpg',
    component: Resume19,
  },
  resume20: {
    id: 'resume20',
    name: 'Resume 20',
    preview: '/images/templates/cv20.jpg',
    component: Resume20,
  },
};

export default templateMap;
