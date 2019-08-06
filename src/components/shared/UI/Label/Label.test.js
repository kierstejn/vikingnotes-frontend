import React from 'react';
import { shallow } from 'enzyme';

import Label from './Label';

describe('<Label/>', () => {
    it('should render the text', function () {
        const component = shallow(<Label value={"Hello"}/>);
        expect(component.text()).toBe("Hello")
    });
})
