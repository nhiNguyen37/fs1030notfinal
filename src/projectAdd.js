import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Container } from 'reactstrap'

const AddProject = () => {
  const [newItem, setNewItem] = useState({ projectname: "", image: "", description: "" });
  const history = useHistory();

  const handleChange = (event) => {
    setNewItem((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/portfolio", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newItem),
    }).then((response) => response.json());
    history.push("/portfolio", newItem);
  };

  return (
    <Container>
        <Jumbotron fluid>
    <div>
      <h1>This is the add project form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Project Name:
            <input
              type="text"
              name="projectname"
              value={newItem.projectname}
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
              value={newItem.image}
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
              value={newItem.description}
              onChange={handleChange}
            />
          </label>
        </div>
        <input type="submit" color="primary" value="Submit" />
      </form>
    </div>
    </Jumbotron>
    </Container>
  );
};

export default AddProject;
