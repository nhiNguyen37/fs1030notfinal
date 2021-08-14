import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Container } from 'reactstrap'

const AddResumeItem = () => {
  const [newItem, setNewItem] = useState({title:"", description:"", jobdate:"", school:"", schooldate:"", award:"", skills:"" });
  const history = useHistory();

  const handleChange = (event) => {
    setNewItem((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/resume", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newItem),
    }).then((response) => response.json());
    history.push("/resume", newItem);
  };

  return (
    <Container>
        <Jumbotron fluid>
    <div>
      <h1>This is the add resume item form</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <label>
            <input
              type="text"
              name="title"
              value={newItem.title}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="text"
              name="description"
              value={newItem.description}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="text"
              name="jobdate"
              value={newItem.jobdate}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="text"
              name="school"
              value={newItem.school}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="text"
              name="schooldate"
              value={newItem.schooldate}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="text"
              name="award"
              value={newItem.award}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="text"
              name="skills"
              value={newItem.skills}
              onChange={handleChange}
            />
          </label>
        </div>
        <input type="submit" color="primary" value="Submit"/>
      </form>
    </div>
    </Jumbotron>
    </Container>
  );
};

export default AddResumeItem;
