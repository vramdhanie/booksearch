
  import React from 'react';
  import ReactDOM from 'react-dom';
  import Library from './library.js';

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Library />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

