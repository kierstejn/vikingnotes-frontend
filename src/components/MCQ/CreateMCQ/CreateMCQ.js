import React, {Component} from 'react';

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { cloneDeep } from 'lodash';

import { validate } from '../../../util/validate/validate';
import QuestionList from './QuestionList/QuestionList';
import QuestionFormular from './QuestionFormular/QuestionFormular';
import Button from '../../shared/UI/Button/Button';
import QuizInfoFormular from './QuizInfoFormular/QuizInfoFormular';
import ButtonSpinner from '../../shared/UI/ButtonSpinner/ButtonSpinner.js';

import * as actions from "../../../store/actions";
import './CreateMCQ.css';

export class CreateMCQ extends Component {

    state = {

        selectedQuestion: 0,
        showInfoFormular: true,
        showValidity: false,
        error: false,

        chapters: [1,2,3,4,5,6,7,8,9,10],
        books: ["Forskning i sundhed - 2. udgave", "Medicin - 2. udgave", "Klinisk neuropsykiatri - 3. udgave"],

        mcq: {
            id: '',
            title: '',
            semester: '',
            subject: '',
            description: '',
            questions: []
        },

        rules: {
            title: {
                required: true,
                maxLenght: 255
            },
            semester: {
                required: true
            },
            subject: {
                required: true,
                maxLenght: 255
            },
            description: {
                required: true
            },
            caseText: {
                required: false
            },
            question: {
                required: true,
                maxLenght: 255
            },
            answer: {
                required: true,
                maxLenght: 255
            },
            questions: {
                minLenght: 1
            }

        }

    };

    onAddQuestionHandler = () => {
        this.setState(prevState => {
            let mcq = {...prevState.mcq};
            mcq.questions.push(
                {
                    id: '',
                    caseText: '',
                    question: '',
                    image: null,
                    answers: [
                        {
                            id: '',
                            value: '',
                            correct: true
                        },
                        {
                            id: '',
                            value: '',
                            correct: false
                        },
                        {
                            id: '',
                            value: '',
                            correct: false
                        },
                    ]
                }
            );

            return {
                mcq,
                selectedQuestion: mcq.questions.length-1,
                showInfoFormular: false,
                showValidity: false
            }
        });
    };

    componentWillUnmount(){
        this.props.onCreateMcqEnd();
    }

    onQuestionDeleteHandler = (event) => {
        event.stopPropagation();
        let mcq = {...this.state.mcq};
        let questions = [...mcq.questions];
        mcq.questions = questions.filter((item,index) => (index !== Number(event.target.id)));
        this.setState({mcq: mcq, showInfoFormular: true});
    };

    onShowInfoClickedHandler = () => {
        this.setState({showInfoFormular: true})
    };

    onQuestionClickedHandler = (event) => {
        this.setState({selectedQuestion: event.target.id, showInfoFormular: false})
    };

    onCaseTextChangeHandler = (event) => {
        let questions = cloneDeep(this.state.mcq.questions);
        let question = questions[this.state.selectedQuestion];
        question.caseText = event.target.value;
        this.setState({mcq: {...this.state.mcq, questions}})
    };

    onQuestionChangedHandler = (event) => {
        let questions = cloneDeep(this.state.mcq.questions);
        let question = questions[this.state.selectedQuestion];
        question.question = event.target.value;
        this.setState({mcq: {...this.state.mcq, questions}})
    };

    onAnswersChangedHandler = (event) => {
        let questions = cloneDeep(this.state.mcq.questions);
        let answer = questions[this.state.selectedQuestion].answers[event.target.id];
        answer.value = event.target.value;
        this.setState({mcq: {...this.state.mcq, questions}});
    };

    onTitleChangedHandler = (event) => {
        let title = event.target.value;
        this.setState({mcq: {...this.state.mcq, title}})
    };

    onDescriptionChangedHandler = (event) => {
        let description = event.target.value;
        this.setState({mcq: {...this.state.mcq, description}})
    };

    onSemesterChangedHandler = (event) => {
        let semester = event.target.value;
        this.setState({mcq: {...this.state.mcq, semester}})
    };

    onSubjectChangedHandler = (event) => {
        let subject = event.target.value;
        this.setState({mcq: {...this.state.mcq, subject}})
    };

    onImageSubmittedHandler = (image) => {
        let questions = cloneDeep(this.state.mcq.questions);
        let question = questions[this.state.selectedQuestion];
        question.image = image;
        this.setState({mcq: {...this.state.mcq, questions}});
    };

    onDeleteImageHandler = () => {
        let questions = cloneDeep(this.state.mcq.questions);
        let question = questions[this.state.selectedQuestion];
        question.image = null;
        this.setState({mcq: {...this.state.mcq, questions}});
    };

    checkValidityOnSubmit = (rules, mcq) => {
        let isValid = true;
        Object.entries(mcq).forEach(item => {
            if(rules.hasOwnProperty(item[0]) && item[0] !== "questions"){
                isValid = validate(rules[item[0]], item[1]) && isValid;
            } else if(item[0] === "questions") {
                isValid = validate(rules[item[0]],item[1]) && isValid;
                item[1].forEach(item => {
                    Object.entries(item).forEach(item => {
                        if(rules.hasOwnProperty(item[0]) && item[0] !== "answers" && item[0] !== "image"){
                            isValid = validate(rules[item[0]], item[1]) && isValid;
                        } else if(item[0] === "answers"){
                            item[1].forEach(item => {
                                isValid = validate(rules["answer"], item.value) && isValid;
                            })
                        }
                    })
                })
            }
        });
        return isValid;
    };

    onSubmitClicked = () => {
        if(this.checkValidityOnSubmit(this.state.rules, this.state.mcq)) {
            //this.props.onHideNotificationBar();
            this.props.onUploadMCQ(this.state.mcq);
        } else {
            this.setState({showValidity: true, error: true});
            //this.props.onShowNotificationBar("Fejl i formularen");
        }
    };

    render() {

        let gridStyle = {
            display: 'grid',
            gridTemplateColumns: '200px auto',
            gridTemplateRows: 'auto 50px',
            gridRowGap: '30px',
            gridColumnGap: '30px',
        };



        let formular = null;
        if(this.state.showInfoFormular){
            formular = (<QuizInfoFormular

                onTitleChangedHandler = {this.onTitleChangedHandler}
                onDescriptionChangedHandler = {this.onDescriptionChangedHandler}
                onSemesterChangedHandler = {this.onSemesterChangedHandler}
                onSubjectChangedHandler = {this.onSubjectChangedHandler}

                title={this.state.mcq.title}
                semester={this.state.mcq.semester}
                subject={this.state.mcq.subject}
                description={this.state.mcq.description}
                books={this.state.books}
                chapters={this.state.chapters}

                rules={this.state.rules}
                showValidity={this.state.showValidity}

            />)
        } else {
            formular = (<QuestionFormular
                onQuestionChangedHandler={this.onQuestionChangedHandler}
                onAnswersChangedHandler={this.onAnswersChangedHandler}
                onCaseTextChangeHandler = {this.onCaseTextChangeHandler}
                onImageSubmittedHandler = {this.onImageSubmittedHandler}
                onDeleteImageHandler = {this.onDeleteImageHandler}
                question={this.state.mcq.questions[this.state.selectedQuestion]}
                rules={this.state.rules}
                showValidity={this.state.showValidity}
            />)
        }

        let redirect = null;
        if(this.props.isUploaded){
            redirect = <Redirect to={"/mcq/list"}/>;
        }

        return (
            <div className={"CreateMCQ"} style={gridStyle}>
                {redirect}
                <div style={{gridColumn: 1, gridRowStart: 'span 2'}}>
                    <QuestionList
                        onShowInfoClickedHandler={this.onShowInfoClickedHandler}
                        onQuestionClickedHandler={this.onQuestionClickedHandler}
                        numberOfQuestions={this.state.mcq.questions.length}
                        onAddQuestionHandler={this.onAddQuestionHandler}
                        onQuestionDeleteHandler={this.onQuestionDeleteHandler}
                    />
                </div>
                <div style={{gridColumn: 2, maxWidth: '800px'}}>
                    {formular}
                </div>
                <div style={{gridRow: 2, gridColumn: 2, maxWidth: '800px'}}>
                    <Button style={{color: "white",
                        display: "flex",
                        backgroundColor: "green",
                        height:"50px",

                        float: 'right',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                    type={"submit"}
                    >Publicer Quiz{this.props.uploading ? <ButtonSpinner/> : null}</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        uploading: state.createMcq.uploading,
        error: state.createMcq.error,
        isUploaded: state.createMcq.isUploaded
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onUploadMCQ:(mcq) => dispatch(actions.uploadMcqInitiate(mcq)),
        onCreateMcqEnd:() => dispatch(actions.createMcqEnd())
        //onShowNotificationBar:(message, alert) => dispatch(actionTypes.onShowNotificationBar(message, alert)),
        //onHideNotificationBar:() => dispatch(actionTypes.onHideNotificationBar())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateMCQ);
