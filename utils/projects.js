// eslint-disable-next-line no-unused-vars
import Logo from '@/components/Logo';
// eslint-disable-next-line no-unused-vars
import CellCounter from '@/components/Project/Overview/Background/CellCounter';
import SentimentAnalysis from '@/components/Project/Overview/Background/SentimentAnalysis';
const cellCounterId = 'cell-counter';
const sentimentAnalysisId = 'sentiment-analysis';

export const DEFAULT_PROJECT_ID = cellCounterId;

export const projects = [
  {
    id: cellCounterId,
    title: 'Cell Counter',
    background: CellCounter,
    bg: 'black',
  },
  {
    id: sentimentAnalysisId,
    title: 'Sentiment Analysis',
    background: SentimentAnalysis,
    bg: 'yellow',
  },
  {
    id: 'haha2',
    title: 'SS Counter',
    background: CellCounter,
    bg: 'black',
  },
  {
    id: 'hahah4',
    title: 'D Analysis',
    background: SentimentAnalysis,
    bg: 'yellow',
  },
];
