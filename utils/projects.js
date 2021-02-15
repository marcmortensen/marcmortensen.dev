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
  },
  {
    id: sentimentAnalysisId,
    title: 'Sentiment Analysis',
    background: SentimentAnalysis,
  },
];
