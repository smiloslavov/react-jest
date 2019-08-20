import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
//import ReactDOM from 'react-dom';

describe("App", function () {
  let mountedApp;
  beforeEach( () => {
    mountedApp = shallow(<App />);
  });

  it('renders without crashing', () => {
    let mountedApp = shallow(<App />);
  });

  it('renders a StoreLocator', () => {
    const locators = mountedApp.find('StoreLocator');
    expect(locators.length).toBe(1);
  });
});


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
