import React, { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveQuestionAnswer } from "../actions/questionAction";

const QuestionComponent = () => {
  const { questionId } = useParams();
  const dispatch = useDispatch();
  const questionsFromState = useSelector((state) => state.question.questions);
  const user = JSON.parse(localStorage.getItem("user"));

  const question = questionsFromState[questionId];

  const handleSubmitAnswer = (answer) => {
    if (answer === "one") {
      dispatch(saveQuestionAnswer(user.id, questionId, "optionOne"));
    } else if (answer === "two") {
      dispatch(saveQuestionAnswer(user.id, questionId, "optionTwo"));
    }
  };

  if (!question) {
    // Handle the case where the question is not found
    return <div>Question not found</div>;
  }

  return (
    <div>
      <h1>{question.author}</h1>
      <p>{question.optionOne.text}</p>
      <Button onClick={() => handleSubmitAnswer("one")}>Click</Button>
      <p>{question.optionTwo.text}</p>
      <Button onClick={() => handleSubmitAnswer("two")}>Click</Button>
    </div>
  );
};

export default QuestionComponent;
