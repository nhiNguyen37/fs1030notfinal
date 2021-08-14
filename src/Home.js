import React from 'react'
import { Container, Row, Col, Button} from 'reactstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'

function Home() {
    return (
        <Container>
      <Jumbotron >
        <Row className="my-5">
                <Col lg="7">
                    <img className="homeImage" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1986&q=80" alt="" height="600px" width="100%"/>
                </Col>
        <Col lg="5">
            <h2 className="hero-text">Welcome To Nhi's Website</h2>
            <br></br>
            <p className="hero-subtext"><b>Projects make the difference...</b></p>
            <Button color="info" className="hero-button" href="/about" Text style={{color: 'black'}}>See More</Button>
        </Col>
    </Row>
    </Jumbotron>
    
      <Jumbotron>
        <main className="about_text">

        <header>
        <h2 className='about'><b>Introduction</b> </h2>
        <br>
        </br>
        </header>

        <p>Hello, my name is Tran Uyen Nhi Nguyen. I'm currently senior student in Finance at York University.</p> 
        <p>I started building eCommerce websites with  Wordpress throughout my third year at school. I came to realize that I'm quite into creating plugins and building creative websites.</p> 
        <p>I always want to challenge myself, discover what I can actually do and see how far I can go in this path.</p>
        <p>Therefore, this year, I decide to take Fullstack Web Development program in order to gain insight more into how a website is actually built and maintained.</p>
        <p>I might lack the background in Computer Science, Technology or Design but I'm constantly learning new things and currently gaining more experience as well as challenging myself with new things including MongoDB, React, Express JS, and Node JS. </p>
        <p>My latest project is EMRSytem. Check it out <a href="https://gitlab.com/york-u-s21-fs1030-group-d-course-project" target="_blank" rel="noopener noreferrer">here</a>, or on the portfolio page.</p>
        <p> For more information?</p>
        <Button color="warning" Text style={{color: 'black'}} href="/resume">Click Here</Button>

      </main>

      </Jumbotron>

</Container>
)
  }

export default Home;