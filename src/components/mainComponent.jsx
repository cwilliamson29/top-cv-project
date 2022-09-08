import React, { Component } from 'react';
import { Container, Button, Row, Form, FormGroup } from 'reactstrap';
import { Contact } from './editComponents/contactComp'
import Education from './editComponents/eduComp'
import uniqid from 'uniqid'

class Main extends React.Component {
      constructor() {
            super();
            this.state = {
                  education: {
                        school: '',
                        study: '',
                        dateFrom: '',
                        dateTo: '',
                        editing: false,
                        editId: '',
                        educationArray: [],
                  },
                  about: {
                        editing: true,
                        fname: "",
                        lname: "",
                        email: "",
                        phone: "",
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

      addEducationButton = () => {

            this.setState({
                  addEducation: this.state.addEducation.concat([0])
            })
      }

      render() {
            let count = 0;

            return (
                  <Container className="bg-light">
                        <Row>
                              <Contact contact={this.state.about}/>
                        </Row>

                        <Row>
                              {<Education />}
                        </Row>
                  </Container>
            );
      }
}
export default Main;