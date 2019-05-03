import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (component, attr) => {
    return component.find(`[data-test='${attr}']`);
};

export const checkProps = (component, expectedProps) => {
    return checkPropTypes(component.PropTypes, expectedProps, 'props', component.name, () => {
    });
};
