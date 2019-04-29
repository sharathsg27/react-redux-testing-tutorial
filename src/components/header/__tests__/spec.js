import React from 'react';
import {shallow} from 'enzyme/build';
import Header from "../index";
import {findByTestAttr} from "../../../../utils";

const compInit = (props = {}) => {
    return shallow(<Header {...props} />)
};

describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = compInit();
    });

    it('should render without error', function () {
        const headerContainer = findByTestAttr(component, 'headerComponent');
        expect(headerContainer.length).toBe(1);
    });

    it('should render logo', () => {
        const logo = findByTestAttr(component, 'logoHeader');
        expect(logo.length).toBe(1);
    })
});
