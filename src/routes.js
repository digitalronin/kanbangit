import React from 'react';
import { Route } from 'react-router';

import Base from './containers/Base/Base';
import Board from './containers/Board/Board';

export const urls = {
  index: '/',
};

export const routes = (
  <Route path={urls.index} component={Base}>
    <Route component={Board} />
  </Route>
);
