import React, { Component } from 'react';
import { Row, Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';
import uniqid from 'uniqid'


class RenderEducation extends Component {
      constructor(props) {
            super(props);
            this.state = this.props.education;
      }


      renderEdit = (props) => {
            if (this.state.editing) {
                  console.log("true")
                  return (
                        <div>
                              {this.addEducation(props)}
                        </div>
                  )
            } else {
                  console.log("false")
            }
      }
      handleChange = (e) => {
            e.preventDefault();
            this.setState({
                  [e.target.id]: e.target.value,

            })
      }

      render() {
            //console.log("inside RenderEducation")
            console.log("key: ", this.state.id)
            //console.log("object: ", this.state)
            return (
                  <div key={this.props.id} >
                    <div className="row text-center">
                        <h1>Add Areas of Study</h1>
                        <button onClick={() => this.props.onDelete(this.state.id)}> X - {this.state.id}</button>
                    </div>
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
                                <Label>{this.state.dateFrom}</Label>   
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
                    
                    {this.state.editing ? (<Button type="submit">Submit</Button> ):( <Button type="submit">Edit</Button>)}
                  </Form>
                </div>
            )
      }

}

export default RenderEducation;