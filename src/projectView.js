import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, CardBody, CardTitle, CardFooter, Card } from 'reactstrap'
import Carousel from './components/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { useHistory } from "react-router-dom";

const ProjectView =(props) => {
    let id = props.match.params.id;
    const [project, setProject] = useState({ name: "", image: "", description:"" });
    const [form, setForm] = useState({ display: "none" });
    const [items, setItems] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function fetchData() {
          const res = await fetch(`http://localhost:4000/portfolio/${id}`);
          res.json().then((res) => setItems(res));
        }
        fetchData();
      }, [id]);// eslint-disable-line react-hooks/exhaustive-deps 


    const handleDelete = (event) => {
        event.preventDefault();
        console.log(id);
    
        fetch(`/portfolio/${id}`, {
          method: "delete",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }).then((response) => response.json());
        history.push("/portfolio");
      };


      const handleEdit = (event, project) => {
        event.preventDefault();
        console.log(project);
        setForm({ display: "block" });
        setProject(project);
      };

      const handleChange = (event) => {
        setProject((prevState) => ({
          ...prevState,
          [event.target.name]: event.target.value,
        }));
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(id);
        fetch(`/portfolio/${id}`, {
          method: "put",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          body: JSON.stringify(project),
        }).then((response) => response.json());
        history.push("/portfolio");
      };

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
                    {items.map((item) => (        
                    <div key={item.id}>     
                    <CardTitle><h2 className="project">{item.projectname}</h2></CardTitle>
                    <img src={item.image} alt={item.projectname} className="card-img-top" width="50px" />
                    <CardBody>{item.description}</CardBody>
                    </div> 
      ))}
                    <Button color="danger" size="sm" Text style={{color: 'black'}} href="https://gitlab.com/users/etnguyen37/projects" target="_blank" rel="noopener noreferrer">Click Here</Button>
                    </CardBody>
                    <CardFooter>
                    <Button color="warning" onClick={(e) => handleDelete(e)} size="sm" Text style={{color: 'white'}}>Delete</Button>
                    <br>
                    </br>
                    <Button color="secondary" onClick={(e) => handleEdit(e,project)} size="sm" Text style={{color: 'white'}}>Edit</Button>
                    </CardFooter>
            </Card>
            </Col>  
        </Row>

        {/* This is the form that pops up when pressing Edit button */}
        <div>
      <form onSubmit={(e) => handleSubmit(e)} style={form}>
        <div>
          <label>
            Project Name:
            <input
              type="text"
              name="projectname"
              value={project.projectname}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Photo:
            <input
              type="text"
              name="image"
              value={project.image}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={project.description}
              onChange={handleChange}
            />
          </label>
        </div>
        <input type="submit" color="primary" value="Submit" />
      </form>
    </div>
    </Jumbotron>
    </Container>
)
}

export default ProjectView;