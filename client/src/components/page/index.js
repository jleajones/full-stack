import React from 'react';
import Helmet from 'react-helmet';
import PropType from 'prop-types';

const Page = ({ pageTitle, children }) => (
  <main className="container">
    <Helmet title={pageTitle} />
    <div className="row">{children}</div>
  </main>
);

Page.defaultProps = {
  pageTitle: 'Full-Stack App'
};

Page.propTypes = {
  pageTitle: PropType.string,
  children: PropType.node.isRequired
};

export default Page;
