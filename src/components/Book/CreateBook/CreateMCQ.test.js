import React from 'react';

import { shallow } from 'enzyme';
import { CreateMCQ } from './CreateMCQ';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<CreateMCQ/>)
});

describe("CreateMCQContainerTest", () => {

    it("Renders correctly", () => {
        expect(wrapper.length).toBe(1)
    });

    it("Adds a new question when onAddQuestionHandler() is called", () => {
        wrapper.instance().onAddQuestionHandler();
        expect(wrapper.state().mcq.questions.length).toBe(1);
        expect(wrapper.state().selectedQuestion).toBe(0)
    });

    it("When onQuestionDeleteHandler() is called the question is deleted", () => {
        const mockedEvent = { target: {id: 1}, stopPropagation: jest.fn()};
        wrapper.instance().onAddQuestionHandler();
        wrapper.instance().onAddQuestionHandler();
        wrapper.instance().onQuestionDeleteHandler(mockedEvent);
        expect(wrapper.state().mcq.questions.length).toBe(1);
        expect(mockedEvent.stopPropagation).toBeCalled();
    });

    it("checkValidityOnSubmit() is returning false when form fields is missing", () => {
        expect(wrapper.instance().checkValidityOnSubmit(wrapper.state().rules, wrapper.state().mcq)).toBeFalsy();
        wrapper.instance().onAddQuestionHandler();
        expect(wrapper.instance().checkValidityOnSubmit(wrapper.state().rules, wrapper.state().mcq)).toBeFalsy();
    })


});
