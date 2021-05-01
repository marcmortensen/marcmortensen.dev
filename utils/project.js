import ProjectOverviewBackgroundCellCounter from '@/components/Project/Overview/Background/CellCounter';
import ProjectOverviewBackgroundSentimentAnalysis from '@/components/Project/Overview/Background/SentimentAnalysis';
import {
  brainJs,
  nodeJs,
  typeScript,
  yarn,
  fiji,
  github,
  jest,
  npm,
} from './technology';
const cellCounterId = 'cell-counter';
export const DEFAULT_PROJECT_ID = cellCounterId;

export const cellCounter = {
  index: 0,
  id: cellCounterId,
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

export const sentimentAnalysis = {
  index: 1,
  id: 'sentiment-analysis',
  title: 'Sentiment Analysis',
  shortDescription: 'Teaching machines about feelings!',
  year: 2019,
  background: ProjectOverviewBackgroundSentimentAnalysis,
  technologies: [nodeJs, brainJs, typeScript, yarn],
};
