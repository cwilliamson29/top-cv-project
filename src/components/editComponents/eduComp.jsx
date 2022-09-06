import React, { Component } from 'react';
import { Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export class Education extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  editing: true,
                  school: "",
                  study: "",
                  dateFrom: "",
                  dateTo: "",
            };


      }
      handleChange = (e) => {
            e.preventDefault();
            this.setState({
                  [e.target.id]: e.target.value,

            })
      }

      render() {
            return (
                  <Form className="row">
      				<FormGroup className="col-md-5">
      					<Row>
                            <div className="col-md-2">
                                <Label for="school">School:</Label>
                            </div>
                            <div className="col-md-10">
                                {this.state.editing ? (<Input type="text" onChange={this.handleChange} value={this.state.school} id="school" placeholder="School"/>
                                    ) : (
                                <Label>{this.state.school}</Label>   
                                    )} 
                            </div>
                        </Row>
      				</FormGroup>
      				<FormGroup className="col-md-5">
      					<Row>
                            <div className="col-md-2">
                                <Label for="study">Study:</Label>
                            </div>
                            <div className="col-md-10">
                                {this.state.editing ? (<Input type="text" onChange={this.handleChange} value={this.state.study} id="study" placeholder="Study"/>
                                    ) : (
                                <Label>{this.state.study}</Label>   
                                    )} 
                            </div>
                        </Row>
      				</FormGroup>

      				<FormGroup className="col-md-5">
      					<Row>
                            <div className="col-md-2">
                                <Label for="dateFrom">Date From:</Label>
                            </div>
                            <div className="col-md-10">
                                {this.state.editing ? (<Input type="date" onChange={this.handleChange} value={this.state.dateFrom} id="dateFrom" placeholder="06/29/2012"/>
                                    ) : (
                                <Label>{this.state.school}</Label>   
                                    )} 
                            </div>
                        </Row>
      				</FormGroup>
      				<FormGroup className="col-md-5">
      					<Row>
                            <div className="col-md-2">
                                <Label for="dateTo">Date To:</Label>
                            </div>
                            <div className="col-md-10">
                                {this.state.editing ? (<Input type="date" onChange={this.handleChange} value={this.state.dateTo} id="dateTo" placeholder="06/29/2016"/>
                                    ) : (
                                <Label>{this.state.dateTo}</Label>   
                                    )} 
                            </div>
                        </Row>
      				</FormGroup>
      			  </Form>
            )

      }
}