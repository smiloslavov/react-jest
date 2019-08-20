import React from 'react';
import { shallow } from 'enzyme';
import Map from '../Map';

describe("Map", function () {
    let mountedMap;
    let props;

    beforeEach( () => {
        props = {
          imageName: 'testmap.png',
          location: undefined  
        };

        mountedMap = shallow(<Map {...props} />);
    });

    it('renders without crashing', () => {
        let mountedMap = shallow(<Map />);
    });

    it('renders an image', () => {
        const mapImg = mountedMap.find('img');
        expect(mapImg.length).toBe(1);
    });

    it('displays default image when no params are provided', () => {
        let defaultMap = shallow(<Map />);
        const defaultImage = defaultMap.find('img[src="images/none.png"]');
        expect(defaultImage.length).toBe(1);
    });

    it('displays the imageName passed to it', () => {
        const testMap = mountedMap.find('img[src="images/testmap.png"]');
        expect(testMap.length).toBe(1);
    });
});