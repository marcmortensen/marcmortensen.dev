import { cellCounter, sentimentAnalysis } from '@/utils/project';
export const sliderOptions = {
  dots: true,
  arrows: true,
  infinite: false,
  speed: 200,
  lazyLoad: 'progressive',
  slidesToShow: 1,
  slidesToScroll: 1,
  accessibility: true,
  waitForAnimate: true,
};

export const projects = [cellCounter, sentimentAnalysis];
