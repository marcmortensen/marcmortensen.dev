import ProjectOverviewBackgroundCellCounter from '@/components/Project/Overview/Background/CellCounter';
import ProjectOverviewBackgroundSentimentAnalysis from '@/components/Project/Overview/Background/SentimentAnalysis';
import ProjectOverviewBackgroundSLAM from '@/components/Project/Overview/Background/SLAM';

import {
  brainJs,
  nodeJs,
  typeScript,
  yarn,
  fiji,
  github,
  jest,
  npm,
  openCV,
} from './technology';
const slamId = 'mono-slam';
export const DEFAULT_PROJECT_ID = slamId;

export const sentimentAnalysis = {
  index: 2,
  id: 'sentiment-analysis',
  title: 'Sentiment Analysis',
  shortDescription: 'Teaching machines about feelings!',
  year: 2019,
  background: ProjectOverviewBackgroundSentimentAnalysis,
  technologies: [nodeJs, brainJs, typeScript, yarn],
};

export const cellCounter = {
  index: 1,
  id: 'cell-counter',
  title: 'Cell Counter',
  shortDescription: 'Counting circles, how hard can it get?',
  year: 2020,
  background: ProjectOverviewBackgroundCellCounter,
  technologies: [
    nodeJs,
    npm,
    fiji,
    jest,
    {
      ...github,
      href: 'https://github.com/marcmortensen/cellCounter',
      target: '_blank',
      rel: 'noreferrer',
    },
  ],
};

export const slam = {
  index: 0,
  id: 'mono-slam',
  title: 'S.L.A.M',
  shortDescription: '3D is better than 2D',
  year: 2021,
  background: ProjectOverviewBackgroundSLAM,
  technologies: [
    nodeJs,
    openCV,
    typeScript,
    yarn,
    {
      ...github,
      href: 'https://github.com/marcmortensen/node-slam',
      target: '_blank',
      rel: 'noreferrer',
    },
  ],
};
