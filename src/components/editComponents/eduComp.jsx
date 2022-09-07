import React, { Component } from 'react';
import { Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';



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
      handleDelete = itemId => {
            const tasks = this.state.tasks.filter(item => item.id !== itemId);
            this.setState({ tasks: tasks })
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
            return (
                  <div>
                    <div className="row text-center">
                        <h1>Add Areas of Study</h1>
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

function addStudy() {
      let studyArray = [1];

      let a = studyArray.length

      studyArray.push(++a)
      console.log(a)

      return (
            <div>
                {studyArray.map((item, i) => (<RenderStudy id={item}/>))}
            </div>
      );
}

class Education extends Component {
      constructor() {
            super();

            this.state = {
                  studyArray: []
            }
      }

      onSubmitStudy = (e) => {
            console.log("onsubmit")
            e.preventDefault();
            this.setState({
                  studyArray: this.state.studyArray.concat([0])
            })
      }

      render() {
            const {studyArray} = this.state
            return (
                  <div>
                {/*{this.state.studyArray.map((item, i) => (<RenderStudy id={item}/>))}*/}

                

                <form onSubmit={this.onSubmitStudy}>
                    <Button type="submit">add</Button>
                </form>
                <RenderStudy id={studyArray}/>
            </div>
            )
      }

}

export default Education;