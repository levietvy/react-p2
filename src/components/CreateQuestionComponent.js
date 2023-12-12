import { useState, useEffect } from "react";
import NavBarComponent from "./NavBarComponent";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { saveQuestion } from "../actions/questionAction";
import { useSelector } from "react-redux";

const CreateQuestionComponent = () => {
  const [tempOptionOne, setTempOptionOne] = useState("");
  const [tempOptionTwo, setTempOptionTwo] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that both options are provided
    if (!tempOptionOne || !tempOptionTwo) {
      alert("Please provide both options before submitting.");
      return;
    }

    // Perform the action to create a new question with the provided details
    const question = {
      author: user.name,
      optionOneText: tempOptionOne,
      optionTwoText: tempOptionTwo,
    };

    dispatch(saveQuestion(question));

    // Optionally, reset the form after submission
    setTempOptionOne("");
    setTempOptionTwo("");
  };

  return (
    <div>
      <NavBarComponent />
      <div className="container">
        <h1>WOULD YOU RATHER</h1>
        <h2>Create Your Own Poll</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="optionOne">
            <Form.Label>Option 1</Form.Label>
            <Form.Control
              type="text"
              value={tempOptionOne}
              onChange={(e) => setTempOptionOne(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="OptionTwo">
            <Form.Label>Option 2</Form.Label>
            <Form.Control
              type="text"
              value={tempOptionTwo}
              onChange={(e) => setTempOptionTwo(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create Question
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateQuestionComponent;
