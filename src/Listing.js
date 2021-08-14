import React from 'react';
import { Row,Col} from 'reactstrap';
import { Jumbotron,Container } from 'react-bootstrap';
import AdminPanel from './AdminPanel';

export default function Listing() {

    return (
      <Container className="AbContainer">
      <Jumbotron className ="aboutMe">
          <center>
            <Row >
                <Col>
                  <AdminPanel/>
                </Col>
            </Row>
        </center>
        </Jumbotron>
        </Container>
    );
    }