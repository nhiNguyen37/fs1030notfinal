import React, { useState, useEffect } from "react";
import { Container, Row, Col} from 'reactstrap'
import Jumbotron from 'react-bootstrap/Jumbotron';
import {ProgressBar } from 'react-bootstrap';
import { Button } from 'reactstrap'
import { useHistory } from "react-router-dom";

const ResumeView =(props) => {
    const {items, setItems} = useState([]);
    const [newItem, setnewItem] = useState({ title:"", description:"", jobdate:"", school:"", schooldate:"", award:"", skills:"" });
    const [form, setForm] = useState({ display: "none" });
    let id = props.match.params.id;
    const history = useHistory();

    useEffect(() => {
        async function fetchData() {
          const res = await fetch(`http://localhost:4000/resume/${id}`);
          res.json().then((res) => setItems(res));
        }
        fetchData();
      }, [id]);// eslint-disable-line react-hooks/exhaustive-deps 


      const handleDelete = (event) => {
        event.preventDefault();
        console.log(id);
    
        fetch(`/resume/${id}`, {
          method: "delete",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }).then((response) => response.json());
        history.push("/resume");
      };

      const handleEdit = (event, newItem) => {
        event.preventDefault();
        console.log(newItem);
        setForm({ display: "block" });
        setnewItem(newItem);
      };

      const handleChange = (event) => {
        setnewItem((prevState) => ({
          ...prevState,
          [event.target.name]: event.target.value,
        }));
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(id);
        fetch(`/resume/${id}`, {
          method: "put",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          body: JSON.stringify(newItem),
        }).then((response) => response.json());
        history.push("/resume");
      };

return (

    <Container className="AbContainer">
      <Jumbotron className ="aboutMe">
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
      </Jumbotron>

      <Button color="warning" onClick={(e) => handleDelete(e)} size="sm" Text style={{color: 'white'}}>Delete</Button>
            <br>
            </br>
        <Button color="secondary" onClick={(e) => handleEdit(e)} size="sm" Text style={{color: 'white'}}>Edit</Button>
      

       {/* This is the form that pops up when pressing Edit button */}
          <div>
          <form onSubmit={(e) => handleSubmit(e)} style={form}>
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
        <input type="submit" color="primary" value="Submit" />
      </form>
    </div>

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
    </Container>

)
}

export default ResumeView;