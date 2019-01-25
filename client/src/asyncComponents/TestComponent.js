import React from 'react';
import Loadable from 'react-loadable';

import Loading from '../components/loading';

export default Loadable({
  loader: () =>
    import(/* webpackChunkName: "TestComponent" */ '../components/testComponent'),
  loading: () => <Loading />,
  modules: ['TestComponent']
});
