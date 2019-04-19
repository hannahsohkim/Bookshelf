import React from 'react';
import { shallow } from 'enzyme';
import App from './index.jsx';

describe('Test main App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
