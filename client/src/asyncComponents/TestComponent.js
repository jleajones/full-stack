import React from 'react';
import Loadable from 'react-loadable';

export default Loadable({
    loader: () => import(/* webpackChunkName: "MyTestComponent" */ '../components/testComponent/TestComponent'),
    loading: () => <div>loading...</div>,
    modules: ['MyTestComponent']
});