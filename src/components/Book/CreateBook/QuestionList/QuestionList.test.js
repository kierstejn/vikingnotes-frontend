import React from 'react';

import { shallow } from 'enzyme';

import QuestionList from './QuestionList';
import QuestionListItem from "../QuestionListItem/QuestionListItem";

describe("QuestionList - Test", () => {
    it("Renders without crashing", () => {
        let wrapper = shallow(<QuestionList />);
        expect(wrapper).toMatchSnapshot();
    });

    it("Renders the correct number of questionitems", () => {
        let wrapper = shallow(<QuestionList numberOfQuestions={9} />);
        expect(wrapper.find(QuestionListItem).length).toBe(10)
    })
});
