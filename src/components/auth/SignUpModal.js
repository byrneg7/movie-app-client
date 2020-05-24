import React, { useState } from 'react'
import { useDispatch } from "react-redux";

import GenericModal from "../services/GenericModal";
import { TOGGLE_MODAL_ON } from "../../reducers/types";
import { Button, Col, Form, InputGroup } from "react-bootstrap";

const SignUpModal = () => {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      alert('invalid')
    }
    setValidated(true);
    alert('valid')
  };

  const renderFields = () => {
    return (
      <Form.Group as={Col} controlId="validationCustomUsername">
        <Form.Label>Username</Form.Label>
        <InputGroup>
          <Form.Control
            type="email"
            placeholder="Email address..."
            aria-describedby="inputGroupPrepend"
            minLength={5}
            required
          />
          <InputGroup.Append>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
          </InputGroup.Append>
          <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please use a valid email address.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    )
  };

  const bodyContent = () => {
    return (
      <>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          {renderFields()}
          <Button type="submit">Submit form</Button>
        </Form>

        <div>
          Already have an account?
          <a href='#' onClick={() => dispatch({type: TOGGLE_MODAL_ON, payload: 'signin'})}>
            Sign in
          </a>
        </div>
      </>
    )
  };

  return <GenericModal title='Sign up' body={bodyContent()} footer='footer content' name='signup'/>
};

export default SignUpModal;