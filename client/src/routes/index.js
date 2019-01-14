import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const TestPage = Loadable({
  loader: () => import(/* webpackChunkName: "testPage" */ './testPage'),
  loading: () => <div>Loading...</div>,
  modules: ['testPage']
});

const AboutPage = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ './about'),
  loading: () => <div>Loading...</div>,
  modules: ['about']
});

export default () => (
  <Switch>
    <Route exact path="/about" component={AboutPage} />
    <Route exact path="/" component={TestPage} />
  </Switch>
);