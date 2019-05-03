import {findByTestAttr, checkProps} from "../../../../utils";
import {shallow} from 'enzyme';
import HeadLine from "../index";
import React from "react";



const compInit = (props = {}) => {
    return shallow(<HeadLine {...props}/>);
};

describe('Headline Component', () => {

    // Check PropTypes
    describe('Checking PropTypes', () => {

        it('Should not throw a warning', () => {

            const expectedProps = {
                header: 'Test header',
                desc: 'Test desc',
                user: {
                    firstName: 'test firstName',
                    lastName: 'test lastName',
                    isDeveloper: true,
                    age: 44,
                    skills: ['test', 'test', 'test']
                }
            };
            const propsErr = checkProps(HeadLine, expectedProps);
            expect(propsErr).toBeUndefined();

        });

    });

    describe('Have props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test header',
                desc: 'Test desc',
                user: {
                    firstName: 'test firstName',
                    lastName: 'test lastName',
                    isDeveloper: true,
                    age: 44,
                    skills: ['test', 'test', 'test']
                }

            };
            wrapper = compInit(props);
        });

        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'headlineComponent');
            expect(component.length).toBe(1);
        });

        it('should render h1', function () {
            const h1 = findByTestAttr(wrapper, 'header');
            expect(h1.length).toBe(1);
        });

        it('should render desc', function () {
            const desc = findByTestAttr(wrapper, 'description');
            expect(desc.length).toBe(1);
        });

        it('should render user', function () {
            const user = findByTestAttr(wrapper, 'user');
            expect(user.length).toBe(1);
        });
    });

});
