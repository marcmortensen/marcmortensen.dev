import { cellCounter, sentimentAnalysis } from '@/utils/project';

export const scrollToOptions = {
  easing: 'ease-in',
  lazy: false,
  offset: -51,
  force: true,
  cancelable: false,
  x: false,
  y: true,
};

export const scrollInProjectOptionsToTop = {
  container: '#project',
  easing: 'ease-in',
  lazy: false,
  offset: -60,
  force: true,
  cancelable: false,
  x: false,
  y: true,
};

export const sliderOptions = {};

export const projects = [cellCounter, sentimentAnalysis];
