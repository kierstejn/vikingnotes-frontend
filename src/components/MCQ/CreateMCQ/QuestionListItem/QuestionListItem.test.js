import React from 'react';

import { shallow } from 'enzyme';

import QuestionListItem from './QuestionListItem';
import DeleteIcon from "../../Icons/DeleteIcon/DeleteIcon";


describe("QuestionListItem - Test", () => {

    it("Renders without crashing", () => {
        let wrapper = shallow(<QuestionListItem />);
        expect(wrapper).toMatchSnapshot();
    })

    it("Shows delete icon when deletable prop is passed to it", () => {
        let wrapper = shallow(<QuestionListItem deletable/>);
        expect(wrapper.find(DeleteIcon).exists()).toBeTruthy();
    })
})