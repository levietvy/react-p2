import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../actions/questionAction";
import NavBarComponent from "./NavBarComponent";
import { Link } from "react-router-dom";
import { updateQuestions } from "../actions/questionAction";

const DashboardComponent = () => {
  const dispatch = useDispatch();
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const userAnswers = user ? user.answers : {};
  const questionsFromLocalStorage = JSON.parse(
    localStorage.getItem("questions")
  );
  // Fetch questions from Redux store
  const questions = useSelector((state) => state.question.questions);

  useEffect(() => {
    // Fetch questions on every render
    dispatch(fetchQuestions());
    if (
      questionsFromLocalStorage &&
      Object.keys(questionsFromLocalStorage).length >
        Object.keys(questions).length
    ) {
      dispatch(updateQuestions(questionsFromLocalStorage));
    }
  }, [dispatch, questionsFromLocalStorage, questions]);

  // Use questions from localStorage if available, otherwise use questions from Redux store
  const questionsArray =
    questionsFromLocalStorage &&
    Object.keys(questionsFromLocalStorage).length >=
      Object.keys(questions).length
      ? Object.values(questionsFromLocalStorage)
      : Object.values(questions);

  // Filter out the questions that the user has already answered
  const unansweredQuestions = questionsArray.filter(
    (question) => !userAnswers.hasOwnProperty(question.id)
  );

  const answeredQuestions = questionsArray.filter((question) =>
    userAnswers.hasOwnProperty(question.id)
  );

  return (
    <div>
      <NavBarComponent />
      <h2>Unanswered Questions</h2>
      <ul>
        {unansweredQuestions.map((question) => (
          <li key={question.id}>
            <Link to={`/answer/${question.id}`}>
              {question.optionOne.text} or {question.optionTwo.text}?
            </Link>
          </li>
        ))}
      </ul>
      <h2>Answered Questions</h2>
      <ul>
        {answeredQuestions.map((question) => (
          <li key={question.id}>
            Question ID: {question.id}, Your Answer:{" "}
            {userAnswers[question.id] === "optionOne"
              ? question.optionOne.text
              : question.optionTwo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardComponent;
