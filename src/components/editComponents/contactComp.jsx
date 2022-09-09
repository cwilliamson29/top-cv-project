import React, { Component } from 'react';
import { Row, Label, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faFilePen } from '@fortawesome/free-solid-svg-icons';

export class Contact extends Component {

      constructor(props) {
            super(props);
            this.state = this.props.contact
      }

      handleChange = (e) => {
            e.preventDefault();
            this.setState({
                  [e.target.id]: e.target.value,

            })
      }


      aboutEdit = () => {
            return (
                  <div className="pb-5">
                        <Row>
                              <div className="col-md-2 text-end pb-3">
                                    <Label for="fName">First Name:</Label>
                              </div>
                              <div className="col-md-4 pb-3">
                                    <Input type="text" onChange={this.handleChange} value={this.state.fname} id="fname" placeholder="First Name"/> 
                              </div>
                        
                              <div className="col-md-2 text-end pb-3">
                                    <Label for="lname">Last Name:</Label>
                              </div>
                              <div className="col-md-4 pb-3">
                                    <Input type="text" onChange={this.handleChange} value={this.state.lname} id="lname" placeholder="Last Name"/> 
                              </div>
                        
                              <div className="col-md-2 text-end pb-3">
                                    <Label for="email">Email:</Label>
                              </div>
                              <div className="col-md-4 pb-3">
                                    <Input type="email" onChange={this.handleChange} value={this.state.email} id="email" placeholder="You@you.com"/> 
                              </div>
                        
                              <div className="col-md-2 text-end pb-3">
                                    <Label for="phone">Phone:</Label>
                              </div>
                              <div className="col-md-4 pb-3">
                                    <Input type="phone" onChange={this.handleChange} value={this.state.phone} id="phone" placeholder="phone"/> 
                              </div>
                        </Row>
                        <div className="text-center pt-3">
                              <Button className="bg-primary w-25" onClick={() => {this.setState({ editing: false });}}><FontAwesomeIcon icon={faFloppyDisk} size="xl" /> Save</Button>
                        </div>
                        
                  </div>
            )
      }
      renderEdit = () => {
            return (
                  <div className="pb-5">
                        <Row>
                              <div className="col-md-2 text-end pb-3">
                                    <Label for="firstName">First Name:</Label>
                              </div>
                              <div className="col-md-4 pb-3 fw-bold">
                                    <Label for="firstName">{this.state.fname}</Label> 
                              </div>
                        
                              <div className="col-md-2 text-end pb-3">
                                    <Label for="lastName">Last Name:</Label>
                              </div>
                              <div className="col-md-4 pb-3 fw-bold">
                                    <Label for="lastName">{this.state.lname}</Label> 
                              </div>
                        
                              <div className="col-md-2 text-end pb-3">
                                    <Label for="email">Email:</Label>
                              </div>
                              <div className="col-md-4 pb-3 fw-bold">
                                    <Label for="email">{this.state.email}</Label> 
                              </div>
                        
                              <div className="col-md-2 text-end pb-3">
                                    <Label for="phone">Phone:</Label>
                              </div>
                              <div className="col-md-4 pb-3 fw-bold">
                                    <Label for="phone">{this.state.phone}</Label> 
                              </div>
                        </Row>
                        <div className="text-center pt-4">
                              <Button className="bg-primary w-25" onClick={() => {this.setState({ editing: true });}}><FontAwesomeIcon icon={faFilePen} size="xl" /> Edit</Button>
                        </div>
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