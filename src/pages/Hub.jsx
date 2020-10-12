import React, { Fragment } from 'react';

import { Masthead, Hero, Content } from '../components';
import { Portfolio } from '../components/portfolio/Grid';

export const Hub = () =>
  <Fragment>
    <Masthead />
    <Hero />
    <Portfolio />
  </Fragment>