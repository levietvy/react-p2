import {
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../utils/_DATA";

export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS";
export const FETCH_QUESTIONS_FAILURE = "FETCH_QUESTIONS_FAILURE";
export const UPDATE_QUESTIONS = "UPDATE_QUESTIONS";

export const updateQuestions = (questions) => ({
  type: UPDATE_QUESTIONS,
  payload: questions,
});

export const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question,
  };
};

export const answerQuestion = (questionId, answer) => ({
  type: ANSWER_QUESTION,
  questionId,
  answer,
});

export const fetchQuestionsSuccess = (questions) => {
  return {
    type: FETCH_QUESTIONS_SUCCESS,
    questions,
  };
};

export const fetchQuestionsFailure = (error) => {
  return {
    type: FETCH_QUESTIONS_FAILURE,
    error,
  };
};

export const fetchQuestions = () => {
  return async (dispatch) => {
    try {
      const questions = await _getQuestions();
      dispatch(fetchQuestionsSuccess(questions));
    } catch (error) {
      dispatch(fetchQuestionsFailure(error.message));
    }
  };
};

export const saveQuestion = (question) => {
  return async (dispatch) => {
    try {
      const savedQuestion = await _saveQuestion(question);
      dispatch(addQuestion(savedQuestion));
    } catch (error) {
      // Handle error
    }
  };
};

export const saveQuestionAnswer = (authedUser, qid, answer) => {
  return async (dispatch, getState) => {
    try {
      await _saveQuestionAnswer({ authedUser, qid, answer });

      // Update the questions in Redux store after saving the answer
      const updatedQuestions = getState().question.questions;
      dispatch(updateQuestions(updatedQuestions));
    } catch (error) {
      // Handle error
    }
  };
};
