import React from 'react';
import {Container, Row, Card, CardColumns, ListGroup,Badge}  from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';



const Recipes = props => (
    <Container>
        <Row>
            <CardColumns >
            {props.recipes.map((recipe) =>{
                let ranking = Math.round(`${recipe.social_rank}`);

                return(
                    <Card key={recipe.recipe_id} >
                        <Badge className="App-ranking" pill variant="warning"><FontAwesomeIcon icon={faStar} />{ranking}</Badge>
                        <Card.Img variant="top" src={recipe.image_url} alt={recipe.title} />
                        <Card.Title className="text-uppercase text-md-left">{recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...`}</Card.Title>
                        <Card.Link className=" btn btn-group-lg btn-outline-warning" href={"http://food2fork.com/view/ddb388"}>View Recipe</Card.Link>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="text-md-left">
                                <Card.Link href={recipe.publisher_url}>Publisher: <span><em>{recipe.publisher}</em></span></Card.Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>

                );
            })}
            </CardColumns>
        </Row>
    </Container>
);

export default Recipes;










