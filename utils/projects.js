import ProjectOverviewBackgroundCellCounter from '@/components/Project/Overview/Background/CellCounter';
import ProjectOverviewBackgroundSentimentAnalysis from '@/components/Project/Overview/Background/SentimentAnalysis';
const cellCounterId = 'cell-counter';
export const sentimentAnalysisId = 'sentiment-analysis';

export const DEFAULT_PROJECT_ID = cellCounterId;

export const projects = [
  {
    id: cellCounterId,
    title: 'Cell Counter',
    background: ProjectOverviewBackgroundCellCounter,
  },
  {
    id: sentimentAnalysisId,
    title: 'Sentiment Analysis',
    background: ProjectOverviewBackgroundSentimentAnalysis,
  },
];
