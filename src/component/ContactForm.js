import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  const [ name, setName ] = useState('');
  const [ phoneNumber, setPhoneNumber ] = useState(0);
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault();
    dispatch({ type:"ADD_CONTACT", payload: { name, phoneNumber }});
    setName('');
    setPhoneNumber(0);
  }

  return (
    <Form onSubmit={(event) => addContact(event)}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" autoComplete='off' onChange={(event) => setName(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPhoneNum">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Phone Number" autoComplete='off' onChange={(event) => setPhoneNumber(event.target.value)}/>
      </Form.Group>

      <Button variant="dark" type="submit">
        Add
      </Button>
    </Form>
  )
}

export default ContactForm