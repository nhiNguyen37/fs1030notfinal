
import React from "react";
import { parseJwt } from "./helpers/authHelper";
import { useHistory } from "react-router-dom";
import { Container, Jumbotron } from "reactstrap";
import {Button } from 'reactstrap'

const AdminPanel = () => {

  const token = sessionStorage.getItem('token')
  const history = useHistory();
  const user = parseJwt(token).username;
  const logout = event => {
      event.preventDefault()
      sessionStorage.removeItem('token')
      history.push("/")
  }

  return (
    <Container className="AbContainer">
    <div>
        <h2>Administration Panel</h2>
        {user}
    </div>
    <Jumbotron className ="aboutMe">
    <div>
    <p>View Portfolio Item</p>
    <div>
    <Button color="secondary" Text style={{color: 'black'}} href="/portfolio/:id">View</Button>
    </div>
    </div>
    <div>
      <p>View Resume Item</p>
          <div>        
        <Button color="secondary" Text style={{color: 'black'}} href="/resume/:id">View</Button>
        </div>
        </div>   
    </Jumbotron>
    <div>
    <Button onClick={logout} color="primary">Logout</Button>
    </div>
    </Container>
  );
};

export default AdminPanel;