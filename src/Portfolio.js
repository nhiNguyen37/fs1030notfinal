import './App.css';
import React from 'react'
import Carousel from './components/Carousel'
import 'react-slideshow-image/dist/styles.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Container, Row, Col, Button, CardBody, CardTitle, CardFooter, Card } from 'reactstrap'

function Portfolio() {

    return (
        <Container>
        <div>
            <Carousel />
        </div>

        <Jumbotron fluid>
    <Row>
        <Col md="4" className="mb-5">
            <Card>
                <CardBody>
                    <CardTitle><h2 className="project">Project 1</h2></CardTitle>
                    <img className="card-img-top" width="50px" src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1066&q=80" alt="Card image cap"></img>
                    <CardBody>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptate iure quasi inventore doloremque exercitationem maiores libero corrupti magnam praesentium voluptatem facere optio recusandae sit debitis tenetur beatae, voluptatibus itaque magni, est. Fugiat nostrum nemo fuga nulla modi doloremque maxime</CardBody>
                </CardBody>
                <CardFooter>
                    <Button className="button" color="danger" size="sm" Text style={{color: 'black'}} href="https://gitlab.com/york-u-s21-fs1030-group-d-course-project"  >See More</Button>
                </CardFooter>
            </Card>
        </Col>
        <Col md="4" className="mb-5">
            <Card>
                <CardBody>
                    <CardTitle><h2 className="project">Project 2</h2></CardTitle>
                    <img className="card-img-top" width="50px" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Card image cap"></img>
                    <CardBody>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptate iure quasi inventore doloremque exercitationem maiores libero corrupti magnam praesentium voluptatem facere optio recusandae sit debitis tenetur beatae, voluptatibus itaque magni, est. Fugiat nostrum nemo fuga nulla modi doloremque maxime</CardBody>
                </CardBody>
                <CardFooter>
                    <Button className="button" color="danger" size="sm" Text style={{color: 'black'}} href="https://gitlab.com/york-u-s21-fs1030-group-d-course-project">See More</Button>
                </CardFooter>
            </Card>
        </Col>
        <Col md="4" className="mb-5">
            <Card>
                <CardBody>
                    <CardTitle><h2 className="project">Project 3</h2></CardTitle>
                    <img className="card-img-top" width="50px" src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Card image cap"></img>
                    <CardBody>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptate iure quasi inventore doloremque exercitationem maiores libero corrupti magnam praesentium voluptatem facere optio recusandae sit debitis tenetur beatae, voluptatibus itaque magni, est. Fugiat nostrum nemo fuga nulla modi doloremque maxime</CardBody>
                </CardBody>
                <CardFooter>
                <Button className="button" color="danger" size="sm" Text style={{color: 'black'}} href="https://gitlab.com/york-u-s21-fs1030-group-d-course-project">See More</Button>
                </CardFooter>
            </Card>
        </Col>
    </Row>
    </Jumbotron>
    </Container>
    )
}

export default Portfolio;