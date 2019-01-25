import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import PATHS from '../paths';

import Loading from '../components/loading';

const TestPage = Loadable({
  loader: () => import(/* webpackChunkName: "testPage" */ './testPage'),
  loading: () => <Loading />,
  modules: ['testPage']
});

const HomePage = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ './home'),
  loading: () => <Loading />,
  modules: ['home']
});

const AboutPage = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ './about'),
  loading: () => <Loading />,
  modules: ['about']
});

const DashboardPage = Loadable({
  loader: () => import(/* webpackChunkName: "dashboard" */ './dashboard'),
  loading: () => <Loading />,
  modules: ['dashboard']
});

export default () => (
  <Switch>
    <Route exact path={PATHS.TEST_PAGE} component={TestPage} />
    <Route exact path={PATHS.DASHBOARD} component={DashboardPage} />
    <Route exact path={PATHS.ABOUT_PAGE} component={AboutPage} />
    <Route exact path={PATHS.HOME_PAGE} component={HomePage} />
  </Switch>
);
