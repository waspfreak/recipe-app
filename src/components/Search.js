import React from 'react';
import {Container, Row, Col, Form, Button}  from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';



    const Search = props => (

        <div className="App-search-container">
            <Container >
                <Row className="App-search">
                    <Col md={{ span: 8, offset: 2 }}>
                        <Form onSubmit={props.getRecipe}>
                            <Form.Row sm={12}>
                                    <Col  sm={10} >
                                        <Form.Control  size="lg" type="text" name="recipeName" placeholder="Type key word for recipe" />
                                    </Col>

                                    <Col sm={2} >
                                        <Button variant="outline-warning" size="lg" type="submit"><FontAwesomeIcon icon={faSearch} /></Button>
                                    </Col>
                            </Form.Row>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );

export default Search;





