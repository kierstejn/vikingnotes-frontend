import React from 'react'
import { shallow, mount } from 'enzyme'

import Login from './Login'
import LoginView from './LoginView'
import Input from '../../shared/UI/Input/Input'
import Button from '../../shared/UI/Button/Button'

describe('<Login/>', () => {

    it('should render the login module with form', () => {
        const component = mount(<Login/>);
        expect(component.find(Input)).toHaveLength(2);
        expect(component.find(Button)).toHaveLength(1);
    });

});
