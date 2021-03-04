import { cellCounter, sentimentAnalysis } from '@/utils/project';
export const sliderOptions = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  accessibility: true,
  waitForAnimate: true,
};

export const projects = [cellCounter, sentimentAnalysis];
