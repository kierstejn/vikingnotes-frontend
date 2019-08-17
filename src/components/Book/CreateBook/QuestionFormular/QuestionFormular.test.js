import React from 'react';

import { shallow } from 'enzyme';

import QuestionFormular from './QuestionFormular';

const questionProp = {
    image: null,
    caseText: '',
    answers: [
        {
            value: ''
        },
        {
            value: ''
        },
        {
            value: ''
        },
    ]
};

const rulesProp = {
    title: {
        required: true
    },
    semester: {
        required: true
    },
    subject: {
        required: true
    },
    description: {
        required: true
    },
    caseText: {
        required: false
    },
    question: {
        required: true
    },
    answer: {
        required: true
    },
    questions: {
        minLenght: 1
    }
};



describe("QuestionFormular - Test", () => {

    it("Renders without crashing", () => {
        let wrapper = shallow(<QuestionFormular question={questionProp} rules={rulesProp}/>);
        expect(wrapper).toMatchSnapshot();
    })

    it("Expect no image when image is null", () => {
        let wrapper = shallow(<QuestionFormular question={questionProp} rules={rulesProp}/>);
        expect(wrapper.find('[id="image"]').exists()).toBe(false);
    })

    it("Expect image when image is not null", () => {
        global.URL.createObjectURL = jest.fn();
        const question = {...questionProp, image: new File(["mock"], "image", { type: 'image/jpeg' })};
        let wrapper = shallow(<QuestionFormular question={question} rules={rulesProp}/>);
        expect(wrapper.find('[id="image"]').exists()).toBe(true);
    })

});
