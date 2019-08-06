import React from 'react';
import { shallow, mount } from 'enzyme';

import Input from './Input'
import * as helpers from '../../../../util/validate/validate';

describe('<Input/>', () => {
    it('should call onChange method when value is changed', function(){
        const mockFunction = jest.fn();
        const component = shallow(<Input onChange={mockFunction} value={"hej"} />);
        component.find('input').simulate('change', ["hej"]);
        expect(mockFunction).toHaveBeenCalledTimes(1);
        expect(component.props().value).toEqual('hej');
    });

    it('should have Invalid class name when input is invalid', function () {
        helpers.validate = jest.fn().mockReturnValue(false);
        const component = mount(<Input showValidity={true}/>);
        expect(component.find('input').at(1).hasClass('Invalid')).toBe(true)
    });
});
