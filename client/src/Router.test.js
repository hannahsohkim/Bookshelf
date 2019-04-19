import React from 'react';
import { shallow } from 'enzyme';
import AppRouter from './router.jsx';

describe('Test AppRouter component', () => {
  it('renders without crashing', () => {
    shallow(<AppRouter />);
  });
});
