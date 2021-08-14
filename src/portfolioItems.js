import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Button, CardBody, CardTitle, CardFooter, Card } from 'reactstrap'
import './App.css';
import Carousel from './components/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import parseJwt from "./helpers/authHelper";

const AllportfolioItems = () => {

    const token = sessionStorage.getItem('token')
    const user = parseJwt(token).username;
    const logout = event => {
        event.preventDefault()
        sessionStorage.removeItem('token')
        history.push("/")
    }
  
    const {items, setItems} = useState([]);

    const history = useHistory();

    const projectViewRoute = (event, item) => {
      event.preventDefault();
      let path = `/portfolio/${item.id}`;
      history.push(path, item);
    };
    

  const addProjectRoute = (event) => {
    event.preventDefault();
    // console.log(id);
    let path = `/portfolio/add-project`;
    history.push(path);
  };

useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:4000/portfolio", {
        method: "GET",
        mode: 'cors',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setItems(data);
    };
    fetchData();
  }, [token]);// eslint-disable-line react-hooks/exhaustive-deps


  return (
    <Container>
        <div>
            <Carousel />
        </div>
        <Jumbotron fluid>
        <h2>
          Total item:{items.length}
          {user}
        </h2>
        <Row>
            <Col md="4" className="mb-5">
            <Card>
                    <CardBody>
                    {items.map((item) => (        
                    <div key={item.id}>     
                    <CardTitle><h2 className="project">{item.projectname}</h2></CardTitle>
                    <img src={item.image} alt={item.projectname} className="card-img-top" width="50px" />
                    <CardBody>{item.description}</CardBody>
                    </div> 
      ))}

                    </CardBody>
                    <CardFooter>
                    <Button color="danger" onClick={(e,item) => projectViewRoute(e,item)} size="sm" Text style={{color: 'black'}}>View Project</Button>
                    <br>
                    </br>
                    <Button color="info" onClick={(e) => addProjectRoute(e)} size="sm" Text style={{color: 'white'}}>Add a New Project</Button>
                    </CardFooter>
                </Card>
            </Col>  
        </Row>
    </Jumbotron>
    <div>
    <Button onClick={logout} color="primary">Logout</Button>
    </div>
    </Container>
  );
};

export default AllportfolioItems;
