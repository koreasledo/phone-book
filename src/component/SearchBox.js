import { Row, Col, Form, Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type:"SEARCH_NAME", payload: { keyword }})
  }

  return (
    <Form onSubmit={searchByName}>
      <Row className='searchBox'>
        <Col lg={7}>
          <Form.Control type="text" placeholder="Enter Name" onChange={(event) => setKeyword(event.target.value)}/>
        </Col>
        <Col className='searchBtnBox' lg={2}>
          <Button type="submit" className='searchBtn' variant="dark">Search</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBox;