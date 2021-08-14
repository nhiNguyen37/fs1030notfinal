import { Container, Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardText } from 'reactstrap'
import { useHistory, useLocation } from 'react-router-dom'
import React, { useState } from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'

function User() {

    let history = useHistory();

    let location = useLocation();

    const [username, setUsername] = useState("")

    const [password, setPassword] = useState("")

    const [auth, setAuth] = useState(true)

    const loginSubmit = async event => {
        
        event.preventDefault()

        const response = await fetch('http://localhost:3001/auth', {

            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },

            body: JSON.stringify({username, password})
        })

        const payload = await response.json()

        if (response.status >= 400) {
            setAuth(false)

        } else {
            sessionStorage.setItem('token', payload.token)

            let { from } = location.state || { from: { pathname: "/login" } };
            history.replace(from);
        }}
  
    return (
      <Jumbotron fluid className="aboutMe">
        <Container>
        <h1 className='login'><b>Log In</b></h1>
        <br></br>
        <img
              className="aniImage"
              src="https://image.flaticon.com/icons/png/512/3158/3158979.png"
                    alt=""
                        />


        {!auth && 

            <Card className="text-white bg-primary my-5 py-4 text-center">
            <CardBody>
                <CardText className="text-white m-0">Invalid credentials, please try again</CardText>
            </CardBody>
        </Card>

        }
        <Form className="my-5" onSubmit={loginSubmit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="usernameEntry">Username</Label>
                <Input type="text" name="username" id="usernameEntry" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label for="passwordEntry">Password</Label>
                <Input type="password" name="password" id="passwordEntry" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
              </FormGroup>
            </Col>
          </Row>

          <Button color="danger" onSubmit={loginSubmit} Text style={{color: 'black'}}>Log in</Button>
        </Form>
        </Container>
        </Jumbotron>
    )
}

export default User;