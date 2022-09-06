import React, { Component } from 'react';
import { Container, Button, Row, Form, FormGroup } from 'reactstrap';
import { Contact } from './editComponents/contactComp'
import { Education } from './editComponents/eduComp'
import uniqid from 'uniqid'

class Main extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  addEducation: []
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
                              <Contact/>
                        </Row>

                        <Row>
                              <div>
                                    {this.state.addEducation.map(()=>{ 
                                          let formid = uniqid();
                                          return (
                                                <div key={formid}>
                                                      <Education />
                                                </div>
                                          )
                                    })}
                              </div>      
                              <div>
                                    <Button onClick={()=> this.addEducationButton()} >Add Education</Button>
                              </div>
                        </Row>
                  </Container>
            );
      }
}
export default Main;