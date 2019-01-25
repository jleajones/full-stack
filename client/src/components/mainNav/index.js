import React from 'react';
import { NavLink } from 'react-router-dom';

import PATHS from '../../paths';

export default () => (
  <nav>
    <NavLink exact to={PATHS.HOME_PAGE}>
      Home
    </NavLink>
    <NavLink exact to={PATHS.ABOUT_PAGE}>
      About
    </NavLink>
    <NavLink exact to={PATHS.DASHBOARD}>
      Dashboard
    </NavLink>
  </nav>
);
