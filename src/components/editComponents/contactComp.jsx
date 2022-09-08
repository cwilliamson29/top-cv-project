import React, { Component } from 'react';
import { Row, Label, Input, Button } from 'reactstrap';


export class Contact extends Component {

      constructor(props) {
            super(props);
            this.state = this.props.contact
      }

      FirstNameChange = (e) => {
            this.setState({ fname: e.target.value, })
      }
      LastNameChange = (e) => {
            this.setState({ lname: e.target.value, })
      }
      EmailChange = (e) => {
            this.setState({ email: e.target.value, })
      }
      PhoneChange = (e) => {
            this.setState({ phone: e.target.value, })
      }


      aboutEdit = () => {
            return (
                  <div>
                        <Row>
                              <div className="col-md-1">
                                    <Label for="fName">First Name:</Label>
                              </div>
                              <div className="col-md-5">
                                    <Input type="text" onChange={this.FirstNameChange} value={this.state.fname} id="fname" placeholder="First Name"/> 
                              </div>
                        </Row>
                        <Row>
                              <div className="col-md-1">
                                    <Label for="lname">Last Name:</Label>
                              </div>
                              <div className="col-md-5">
                                    <Input type="text" onChange={this.LastNameChange} value={this.state.lname} id="lname" placeholder="Last Name"/> 
                              </div>
                        </Row>
                        <Row>
                              <div className="col-md-1">
                                    <Label for="email">Email:</Label>
                              </div>
                              <div className="col-md-5">
                                    <Input type="email" onChange={this.EmailChange} value={this.state.email} id="email" placeholder="You@you.com"/> 
                              </div>
                        </Row>
                        <Row>
                              <div className="col-md-1">
                                    <Label for="phone">Phone:</Label>
                              </div>
                              <div className="col-md-5">
                                    <Input type="phone" onChange={this.PhoneChange} value={this.state.phone} id="phone" placeholder="phone"/> 
                              </div>
                        </Row>
                        <Button onClick={() => {this.setState({ editing: false });}}>Submit</Button>
                  </div>
            )
      }
      renderEdit = () => {
            return (
                  <div>
                        <Row>
                              <div className="col-md-1">
                                    <Label for="firstName">First Name:</Label>
                              </div>
                              <div className="col-md-5">
                                    <Label for="firstName">{this.state.fname}</Label> 
                              </div>
                        </Row>

                        <Row>
                              <div className="col-md-1">
                                    <Label for="lastName">Last Name:</Label>
                              </div>
                              <div className="col-md-5">
                                    <Label for="lastName">{this.state.lname}</Label> 
                              </div>
                        </Row>

                        <Row>
                              <div className="col-md-1">
                                    <Label for="email">Email:</Label>
                              </div>
                              <div className="col-md-5">
                                    <Label for="email">{this.state.email}</Label> 
                              </div>
                        </Row>

                        <Row>
                              <div className="col-md-1">
                                    <Label for="phone">Phone:</Label>
                              </div>
                              <div className="col-md-5">
                                    <Label for="phone">{this.state.phone}</Label> 
                              </div>
                        </Row>
                        <Button onClick={() => {this.setState({ editing: true });}}>Edit</Button>
                  </div>
            )
      }

      aboutLoad = () => {
            if (this.state.editing) {
                  return (
                        <div>
                              {this.aboutEdit()}
                        </div>
                  )
            } else {
                  return (
                        <div>
                              {this.renderEdit()}
                        </div>
                  )
            }
      }

      render() {
            return (
                  <div>
                        {this.aboutLoad()}
                  </div>

            );
      }
}