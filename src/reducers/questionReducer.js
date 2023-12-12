// reducers/questionReducer.js
import {
  ADD_QUESTION,
  ANSWER_QUESTION,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  UPDATE_QUESTIONS,
} from "../actions/questionAction";

const initialState = {
  questions: {},
  answeredQuestions: {}, // New property to store answered questions
  error: null,
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        questions: [...state.questions, action.question],
      };

    case ANSWER_QUESTION:
      return {
        ...state,
        questions: state.questions,
        answeredQuestions: [
          ...state.answeredQuestions,
          { id: action.payload.questionId, answer: action.payload.answer },
        ],
      };

    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.questions,
        error: null,
      };

    case FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        questions: {},
        error: action.error,
      };

    case UPDATE_QUESTIONS:
      return {
        ...state,
        questions: {
          ...state.questions,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default questionReducer;
