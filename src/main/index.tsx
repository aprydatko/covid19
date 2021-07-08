import React from 'react';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { routers, RouterProps } from '../routers';

import About from '../scenes/About';
import CountryStatistics from '../scenes/CountryStatistics';
import GlobalStatistic from '../scenes/GlobalStatistic';

const Main = (): JSX.Element => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">GlobalStatistic</Link>
        </li>
        <li>
          <Link to="/countries">CountryStatistics</Link>
        </li>
        <li>
          <Link to="/about-us">About</Link>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route exact path="/"><GlobalStatistic /></Route>
      <Route path="/countries"><CountryStatistics /></Route>
      <Route path="/about-us"><About /></Route>
    </Switch>
  </div>
);

export default Main;
