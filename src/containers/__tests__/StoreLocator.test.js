import React from 'react';
import { shallow } from 'enzyme';
import StoreLocator from '../StoreLocator';

describe("StoreLocator", function () {
    let mountedStoreLocator;
    beforeEach( () => {
        mountedStoreLocator = shallow(<StoreLocator />);
    });

    it('renders without crashing', () => {
        let mountedStoreLocator = shallow(<StoreLocator />);
    });

    it('renders a Header', () => {
        const headers = mountedStoreLocator.find('Header');
        expect(headers.length).toBe(1);
    });

    // it('renders two buttons', () => {
    //     const buttons = mountedStoreLocator.find('Button');
    //     expect(buttons.length).toBe(2);
    // });

    it('renders a map', () => {
        const maps = mountedStoreLocator.find('Map');
        expect(maps.length).toBe(1);
    });
});

describe("chooseMap", function () {
    it('updates this.state.currentMap when location is passed to it', () => {
        let mountedStoreLocator = shallow(<StoreLocator />);
        let mockEvent = { target: { value: 'testland'} };
        //target.value
        mountedStoreLocator.instance().chooseMap(mockEvent);
        expect(mountedStoreLocator.instance().state.currentMap).toBe('testland.png');
    });
});

