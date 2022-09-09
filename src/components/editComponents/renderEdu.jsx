import React, { Component } from 'react';
import { Row, Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';
import uniqid from 'uniqid'


class RenderEducation extends Component {
      constructor(props) {
            super(props);
            this.state = this.props.education

      }
      handleChange = (e) => {
            e.preventDefault();
            this.setState({
                  [e.target.id]: e.target.value,

            })
      }

      editChange = () => {
            return (
                  <div>
                  	<button onClick={() => this.props.onDelete(this.state.id)}> X - {this.state.id}</button>
                        <Row>
                              <div className="col-md-1">
                                    <Label for="school">School:</Label>
                              </div>
                              <div className="col-md-5">
                                    <Input type="text" onChange={this.handleChange} value={this.state.school} id="school" placeholder="School" /> 
                              </div>
                        </Row>
                        <Row>
                              <div className="col-md-1">
                                    <Label for="study">Area of study:</Label>
                              </div>
                              <div className="col-md-5">
                                    <Input type="text" onChange={this.handleChange} value={this.state.study} id="study" placeholder="Area of study" /> 
                              </div>
                        </Row>
                        <Row>
                              <div className="col-md-1">
                                    <Label for="dateFrom">Date From:</Label>
                              </div>
                              <div className="col-md-5">
                                    <Input type="date" onChange={this.handleChange} value={this.state.dateFrom} id="dateFrom" /> 
                              </div>
                        </Row>
                        <Row>
                              <div className="col-md-1">
                                    <Label for="dateTo">Date To:</Label>
                              </div>
                              <div className="col-md-5">
                                    <Input type="date" onChange={this.handleChange} value={this.state.dateTo} id="dateTo" /> 
                              </div>
                        </Row>
                        <Button onClick={() => {this.setState({ editing: false });}}>Submit</Button>
                  </div>
            )
      }

      renderChange = () => {
            return (
                  <div>
                  <button onClick={() => this.props.onDelete(this.state.id)}> X - {this.state.id}</button>
                        <Row>
                              <div className="col-md-1">
                                    <Label for="school">School:</Label>
                              </div>
                              <div className="col-md-5">
                                    <Label for="school">{this.state.school}</Label> 
                              </div>
                        </Row>

                        <Row>
                              <div className="col-md-1">
                                    <Label for="study">Area of Study:</Label>
                              </div>
                              <div className="col-md-5">
                                    <Label for="study">{this.state.study}</Label> 
                              </div>
                        </Row>

                        <Row>
                              <div className="col-md-1">
                                    <Label for="dateFrom">Date From:</Label>
                              </div>
                              <div className="col-md-5">
                                    <Label for="dateFrom">{this.state.dateFrom}</Label> 
                              </div>
                        </Row>

                        <Row>
                              <div className="col-md-1">
                                    <Label for="dateTo">Date To:</Label>
                              </div>
                              <div className="col-md-5">
                                    <Label for="dateTo">{this.state.dateTo}</Label> 
                              </div>
                        </Row>
                        <Button onClick={() => {this.setState({ editing: true });}}>Edit</Button>
                  </div>
            )
      }

      studyLoad = () => {
            if (this.state.editing) {

                  return (
                        <div>
                              {this.editChange()}
                        </div>
                  )
            } else {
                  return (
                        <div>
                              {this.renderChange()}
                        </div>
                  )
            }
      }

      render() {
            return (
                  <div key={this.props.id} >
                    	{this.studyLoad()}
                  </div>
            )
      }

}

export default RenderEducation;