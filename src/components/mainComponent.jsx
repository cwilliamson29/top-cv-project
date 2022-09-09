import React, { Component } from 'react';
import { Container, Card, CardHeader, Row, CardBody, Col } from 'reactstrap';
import { Contact } from './editComponents/contactComp'
import Education from './editComponents/educationComp'
import Work from './editComponents/workComp'
import uniqid from 'uniqid'

class Main extends React.Component {
      constructor() {
            super();
            this.state = {
                  educationArray: [],
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
                        dateFrom: "",
                        dateTo: "",
                  }
            };
      }


      render() {
            let count = 0;

            return (
                  <Container className="bg-dark text-dark container-fluid min-vh-100 d-flex flex-column">
                        <Row>
                              <div className="mt-5"></div>
                              <Col md={1}></Col>
                              <Col md={10}>
                                    <Card className="mb-5">
                                          <CardHeader className="text-center h1 fc">CV-Project</CardHeader>
                                          <CardBody className="mx-3">
                                                <div>
                                                      <Contact key={uniqid} contact={this.state.about}/>
                                                </div>
                                                <div className="pb-5">
                                                      {<Education education={this.state.education}/>}
                                                </div>
                                                <div>
                                                      {<Work work={this.state.work} />}
                                                </div>
                                          </CardBody>
                                          
                                    </Card>
                              </Col>
                              <Col md={1}></Col>

                        </Row>


                            
                  </Container>
            );
      }
}
export default Main;