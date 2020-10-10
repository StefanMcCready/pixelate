import React, { Fragment } from 'react';

import { Masthead, Hero } from '../components';
import { Portfolio } from '../components/portfolio/Grid';

export const Hub = () =>
  <Fragment>
    <Masthead />
    <Hero image="https://images.prismic.io/pixelate/a67074c1-1515-42f3-a7f0-2c5a0fc326d3_photo_n00012_s1+60+%5Bsmooth%3D1.0%5D+3440x1440.png" />
    <Portfolio />
  </Fragment>