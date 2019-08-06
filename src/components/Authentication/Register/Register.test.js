import React from 'react'
import { mount } from 'enzyme'

import Register from './Register'
import Input from '../../shared/UI/Input/Input'
import Button from '../../shared/UI/Button/Button'

describe('<Register/>', () => {
    it('should render the login module with form', () => {
        const component = mount(<Register/>);
        expect(component.find(Input)).toHaveLength(2);
        expect(component.find(Button)).toHaveLength(1);
    });
});
