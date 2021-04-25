import { cellCounter, sentimentAnalysis } from '@/utils/project';

export const indexMobileScroll = {
  easing: 'ease-in',
  lazy: false,
  offset: 0,
  force: true,
  cancelable: false,
  x: false,
  y: true,
};

export const indexDesktopScroll = {
  ...indexMobileScroll,
  ...{
    offset: -52,
  },
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
