import React from 'react';
import {Container, Row, Card, CardColumns, ListGroup,Badge, Button}  from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

import {Link} from "react-router-dom";



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
                        <Card.Title className="text-uppercase ">{recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...`}</Card.Title>

                        <Button variant="outline-warning">
                            <Link to={{
                                pathname: `/recipe/${recipe.recipe_id}`,
                                state: {recipe: recipe.title}
                            }} >View Recipe</Link>
                        </Button>

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










