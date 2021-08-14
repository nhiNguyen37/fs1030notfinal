import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {Button } from 'reactstrap'
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {ProgressBar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import {  Row, Col} from 'reactstrap'
import parseJwt from "./helpers/authHelper";

const AllresumeItems = () => {

    const token = sessionStorage.getItem('token')
    const user = parseJwt(token).username;
    const logout = event => {
        event.preventDefault()
        sessionStorage.removeItem('token')
        history.push("/")
    }
  
    const {items, setItems} = useState([]);

    const history = useHistory();



useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:4000/resume", {
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

  const resumeItemViewRoute = (event, item) => {
    event.preventDefault();
    let path = `/resume/${item.id}`;
    history.push(path, item);
  };

  
  const addItemRoute = (event) => {
    event.preventDefault();
    // console.log(id);
    let path = `/resume/add-item`;
    history.push(path);
  };

  return (
     <Container className="AbContainer">
      <Jumbotron className ="aboutMe">
      <h2>
          Total item:{items.length}
          {user}
        </h2>
        <main className="about_text">
        <header>
        <h2 className='about'><b>Resume</b> </h2>
        <br>
        </br>
        </header>

        {items.length === 0 && (
                        <tr><td><i>No items found</i></td></tr>
        )}
            {items.length > 0 &&
                        items.map((item) => ( 
                        <tr>
                            <td><div key={item.id}></div></td>
                            <td>{item.description}</td>
                            <td>{item.jobdate}</td>
                            <td>{item.school}</td>
                            <td>{item.schooldate}</td>
                            <td>{item.award}</td>
                            <td>{item.skills}</td>
                        </tr>
                        )
                        )}
      </main>
      <Button color="danger" onClick={(e,item) => resumeItemViewRoute(e,item)} size="sm" Text style={{color: 'black'}}>View Resume Item</Button>                    
      <br>
    </br>
    <Button color="info" onClick={(e) => addItemRoute(e)} size="sm" Text style={{color: 'white'}}>Add a New Item</Button>
      </Jumbotron>
      <footer className="footer">
          <br>
          </br>
        < h2 className='about'><b> Hobbies</b> </h2>

        <div className ="hobTable">
          <Row className="my-5">
                <Col lg="2">
                </Col>
                  <Col lg="8">
                  <ProgressBar now={90} animated striped variant="danger" label={`Music 90%`} />
               </Col>
          </Row>

            <Row className="my-5">
                <Col lg="2">
                </Col>

              <Col lg="8">
                  <ProgressBar now={70} animated striped variant="info"label={`Coding 70%`} />
                </Col>
              </Row>

              <Row className="my-5">
                <Col lg="2">
                </Col>

               <Col lg="8">
                <ProgressBar now={65} animated striped variant="warning" label={`Lego 65%`} />
             </Col>
            </Row>

            <Row className="my-5">
                <Col lg="2">
                </Col>
            <Col lg="8">
                <ProgressBar now={55} animated striped variant="success" label={`Travelling 55%`}/>
           </Col>
         </Row>

      </div>
      <br>
      </br>
      </footer>
    <div>
    <Button onClick={logout} color="primary">Logout</Button>
    </div>
    </Container>
  );
};

export default AllresumeItems;