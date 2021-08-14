import  './App.css'
import {ProgressBar } from 'react-bootstrap';
import React from 'react'
import { Jumbotron,Container } from 'react-bootstrap';
import {  Row, Col} from 'reactstrap'

function About() {
    return (
    
    <Container className="AbContainer">
      <Jumbotron className ="aboutMe">
      < h2 className='about'><b> About Me</b> </h2>
      <div className="section-title">Education</div>
                <div className="education">
                    <div>
                      <div className="school">York University</div>
                      <div className="description">Bachelor of Commerce (Specializing in Finance) (Honours)</div>
                    </div>
                    <div>
                        Sep 2018 - Expected Apr 2022
                    </div>
                    <div> 
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptate iure quasi inventore doloremque exercitationem maiores libero corrupti magnam praesentium voluptatem facere optio recusandae sit debitis tenetur beatae, voluptatibus itaque magni, est. Fugiat nostrum nemo fuga nulla modi doloremque maxime</p>
                    </div>
                    <div>
                        <div className="school">International College of Manitoba</div>
                        <div className="description">University Transfer Program Stage II: Business</div>
                    </div>
                        <div>
                              Jan 2017 - Apr 2018
                        </div>
                        <div>
                            <p> Equivalent to first year of University of Manitoba's Bachelor of Commerce (Honours) degree. International College of Manitoba is located on University of Manitoba campus </p></div> 
            </div>
            <br>
            </br>
            <div>
            <div className="section-title">Job</div>
                <div className="job">   
                    <div className="workplace">Hong Duc Stationery Company</div>
                    <div className="description">Retail Sales Associate</div>
                  <div>
                    Oct 2015 to Nov 2016
                  </div>
                  <div> 
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptate iure quasi inventore doloremque exercitationem maiores libero corrupti magnam praesentium voluptatem facere optio recusandae sit debitis tenetur beatae, voluptatibus itaque magni, est. Fugiat nostrum nemo fuga nulla modi doloremque maxime.</p>
                  </div> 
                </div>      
            </div>  
            <br>
            </br>
            <div className="section-title">Achievement</div>
                <div className="itemlist">   
                    <div className="item">York University International Award of Merit</div>
                </div>
                  <div>
                    Fall/Winter 2020
                  </div>
                  <div> 
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptate iure quasi inventore doloremque exercitationem maiores libero corrupti magnam praesentium voluptatem facere optio recusandae sit debitis tenetur beatae, voluptatibus itaque magni, est. Fugiat nostrum nemo fuga nulla modi doloremque maxime.</p>
                  </div> 
 
        <div className="itemlist">   
            <div className="item">York University Provost's Award</div>
        </div>
          <div>
            Fall/Winter 2018
          </div>
          <div> 
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptate iure quasi inventore doloremque exercitationem maiores libero corrupti magnam praesentium voluptatem facere optio recusandae sit debitis tenetur beatae, voluptatibus itaque magni, est. Fugiat nostrum nemo fuga nulla modi doloremque maxime.</p>
          </div> 
          <br>   
          </br>

              <div className="section-title">Skills</div>
              <div>
                  <ul className="skillList">
                    <li className="skillitem">Skill One</li>
                    <li className="skillitem">Skill Two</li>
                    <li className="skillitem">Skill Three</li>
                  </ul>
        
                  <ul className="skillList">
                    <li className="skillitem">Skill One</li>
                    <li className="skillitem">Skill Two</li>
                    <li className="skillitem">Skill Three</li>
                  </ul>
               </div> 

      <br>
      </br>
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

      </Container>
    )}

export default About;