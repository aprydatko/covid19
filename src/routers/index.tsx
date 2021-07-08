import React from 'react';

import About from '../scenes/About';
import CountryStatistics from '../scenes/CountryStatistics';
import GlobalStatistic from '../scenes/GlobalStatistic';

export interface RouterProps {
    id: number;
    path: string;
    exact: boolean;
    component: JSX.Element;
}

export const routers = [
  // {
  //   id: 0,
  //   path: '/',
  //   exact: true,
  //   component: <GlobalStatistic />,
  // },
  {
    id: 1,
    path: '/countries',
    exact: false,
    component: <CountryStatistics />,
  },
  {
    id: 2,
    path: '/about-us',
    exact: false,
    component: <About />,
  },
];
