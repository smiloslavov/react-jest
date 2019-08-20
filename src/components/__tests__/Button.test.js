import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe("Button", function () {
    let mountedButton;
    beforeEach( () => {
        mountedButton = shallow(<Button />);
    });

    it('renders without crashing', () => {
        let mountedButtonLocator = shallow(<Button />);
    });

    //look for HTML button
    it('renders HTML button', () => {
        const button = mountedButton.find('button');
        expect(button.length).toBe(1);
    });

    it('call a function pass to it when clicked', () => {
        const mockCallBack = jest.fn();
        const mountedButtonWithCallback = shallow(<Button handleClick={mockCallBack} />);
        mountedButtonWithCallback.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
});

describe("when a location is passed to it", () => {
    let mountedButton;
    let props;

    beforeEach( () => {
        props = {
            location: "Location1"
        };

        mountedButton = shallow(<Button {...props} />);
    });

    it('displays the location', () => {
        const locationName = mountedButton.find('.location-button');
        expect(locationName.text()).toEqual('Location1');
    });
});

describe("when no location is passed to it", () => {
    let mountedButton;
    let props;

    beforeEach( () => {
        props = {
            location: undefined
        };

        mountedButton = shallow(<Button {...props} />);
    });

    it('displays the location', () => {
        const locationName = mountedButton.find('.location-button');
        expect(locationName.text()).toEqual('All Locations');
    });
});