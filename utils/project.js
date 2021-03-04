import ProjectOverviewBackgroundCellCounter from '@/components/Project/Overview/Background/CellCounter';
import ProjectOverviewBackgroundSentimentAnalysis from '@/components/Project/Overview/Background/SentimentAnalysis';
import { brainJs, nodeJs, typeScript, yarn } from './technology';
const cellCounterId = 'cell-counter';
export const DEFAULT_PROJECT_ID = cellCounterId;

export const cellCounter = {
  index: 0,
  id: cellCounterId,
  title: 'Cell Counter',
  background: ProjectOverviewBackgroundCellCounter,
};

export const sentimentAnalysis = {
  index: 1,
  id: 'sentiment-analysis',
  title: 'Sentiment Analysis',
  background: ProjectOverviewBackgroundSentimentAnalysis,
  technologies: [nodeJs, brainJs, typeScript, yarn],
};
