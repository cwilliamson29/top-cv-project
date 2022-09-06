import React, { Component } from 'react';
import { Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export class Contact extends Component {

      constructor(props) {
            super(props);
            this.state = {
                  editing: true,
                  fname: "",
                  lname: "",
                  email: "",
                  phone: "",
            };


      }
      handleChange = (e) => {
            this.setState({
                  [e.target.id]: e.target.value,

            })
      }


      render() {
            const { fname, lname, email, phone } = this.props
            return (
                  <div>
                        <Form>
                              <FormGroup>
                                    <Row>
                                          <div className="col-md-1">
                                                <Label for="firstName">First Name:</Label>
                                          </div>
                                          <div className="col-md-5">
                                               {this.state.editing ? (<Input type="text" onChange={this.handleChange} value={this.state.fname} id="fname" placeholder="First Name"/>
                                          
                                                ) : (
                                                <Label>{this.state.fname}</Label>   
                                                )} 
                                          </div>
                                    </Row>
                              </FormGroup>
                              <FormGroup>
                                    <Row> 
                                          <div className="col-md-1">
                                                <Label for="lastName">Last Name:</Label>
                                          </div>
                                          <div className="col-md-5">
                                               {this.state.editing ? (<Input type="text" onChange={this.handleChange} value={this.state.lname} id="lname" placeholder="Last Name"/>
                                          
                                                ) : (
                                                <Label>{this.state.lname}</Label>   
                                                )} 
                                          </div> 
                                    </Row>
                              </FormGroup>
                              <FormGroup>
                                    <Row> 
                                          <div className="col-md-1">
                                                <Label for="email">Email:</Label>
                                          </div>
                                          <div className="col-md-5">
                                               {this.state.editing ? (<Input type="email" onChange={this.handleChange} value={this.state.email} id="email" placeholder="you@domain.com"/>
                                          
                                                ) : (
                                                <Label>{this.state.email}</Label>   
                                                )} 
                                          </div> 
                                    </Row>
                              </FormGroup>
                              <FormGroup>
                                    <Row> 
                                          <div className="col-md-1">
                                                <Label for="phone">Phone #:</Label>
                                          </div>
                                          <div className="col-md-5">
                                               {this.state.editing ? (<Input type="phone" onChange={this.handleChange} value={this.state.phone} id="phone"  placeholder="Phone #"/>
                                          
                                                ) : (
                                                <Label>{this.state.phone}</Label>   
                                                )} 
                                          </div> 
                                    </Row>
                                    {this.state.editing ? (<Button onClick={() => {this.setState({ editing: false });}}>Submit</Button> ):( <Button onClick={() => {this.setState({ editing: true });}}>Edit</Button>)}

                              </FormGroup>
                        </Form>
                  </div>
            );
      }
}