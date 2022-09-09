import React, { Component } from 'react';
import { Container, Button, Row, Form, FormGroup } from 'reactstrap';
import { Contact } from './editComponents/contactComp'
import Education from './editComponents/eduComp'
import uniqid from 'uniqid'

class Main extends React.Component {
      constructor() {
            super();
            this.state = {
                  educationArray: [],
                  about: {
                        editing: true,
                        fname: "asdfasdf",
                        lname: "qwer",
                        email: "qwer",
                        phone: "qwer",
                  },
                  work: {
                        editing: true,
                        company: "",
                        title: "",
                        desc: "",
                        xp: "",
                  }
            };
      }


      render() {
            let count = 0;

            return (
                  <Container className="bg-light">
                        <Row>
                              <Contact key={uniqid} contact={this.state.about}/>
                        </Row>

                        <Row>
                              {<Education education={this.state.education}/>}
                        </Row>
                        
                  </Container>
            );
      }
}
export default Main;