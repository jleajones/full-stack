import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './App.scss';

import Routes from './routes';

import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';

const App = ({ location }) => {
  const hasSidebar =
    location.pathname !== '/' && location.pathname !== '/about';
  const hasHeader = location.pathname === '/' || location.pathname === '/about';
  return (
    <div className="app">
      {hasHeader && <Header />}
      <section>
        {hasSidebar && <Sidebar />}
        <Routes />
      </section>
      <Footer />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(App);
