import {findByTestAttr} from "../../../../utils";
import {shallow} from 'enzyme';
import HeadLine from "../index";
import React from "react";


const compInit = (props = {}) => {
    return shallow(<HeadLine {...props}/>);
};

describe('Headline Component', () => {


    describe('Have props', () => {

        let component;
        beforeEach(() => {
            const props = {
                header: 'Test header',
                desc: 'Test desc'
            };
            component = compInit(props);
        });

        it('should render with props', () => {
            const wrapper = findByTestAttr(component, 'headlineComponent');
            expect(wrapper.length).toBe(1);
        });

        it('should render h1', function () {
            const h1 = findByTestAttr(component, 'header');
            expect(h1.length).toBe(1);
        });

        it('should render desc', function () {
            const desc = findByTestAttr(component, 'description');
            expect(desc.length).toBe(1);
        });
    });

    describe('Have no props', () => {
        let component;
        beforeEach(() => {
            component = compInit();
        });

        it('should render without props', function () {
            expect(component.length).toBe(1);
        });

    });

});
