import React, { Component } from 'react';
import { Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import uniqid from 'uniqid'


class RenderStudy extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  editing: true,
                  educationItem: {
                        school: "",
                        study: "",
                        dateFrom: "",
                        dateTo: "",
                  },
                  educationArray: []
            };


      }
      handleChange = (e) => {
            e.preventDefault();
            this.setState({
                  [e.target.id]: e.target.value,

            })
      }

      onSubmitEducation = (e) => {
            e.preventDefault();
            this.setState({
                  editing: !this.state.editing,
                  educationArray: this.state.educationArray.concat(this.state.educationItem),
                  educationItem: { school: '', study: '', dateFrom: '', dateTo: '' }

            });
      }


      render() {
            //console.log(this.props.id, " this is id")
            return (
                  <div key={this.props.id} >
                    <div className="row text-center">
                        <h1>Add Areas of Study</h1>
                        <button onClick={() => this.props.onDelete(this.props.id)}>X</button>
                    </div>
                  <Form className="row" onSubmit={this.onSubmitEducation}>
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
};

class Education extends Component {
      constructor() {
            super();

            this.state = {
                  studyArray: []
            }
      }

      onSubmitStudy = (e) => {
            //console.log("onsubmit")
            e.preventDefault();
            this.setState({
                  studyArray: this.state.studyArray.concat([uniqid()])
            })
      }
      handleDelete = itemId => {
            const newStudy = this.state.studyArray.filter(item => { return item != itemId });
            this.setState({ studyArray: newStudy })
            console.log("ondelete: " + newStudy)
            console.log("to be delted: " + itemId)
      }

      render() {
            const { studyArray } = this.state
            return (
                  <div>
                    <div className="row text-center">
                        <h1>Add Areas of Study</h1>
                    </div>
                    {this.state.studyArray.map((item, i) => (<RenderStudy key={item} id={item} onDelete={this.handleDelete} />))}

                    <form onSubmit={this.onSubmitStudy}>
                        <Button type="submit">add</Button>
                    </form>
                
                  </div>
            )
      }

}

export default Education;