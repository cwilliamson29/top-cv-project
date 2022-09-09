import React, { Component } from 'react';
import { Row, Card, CardHeader, CardBody, Label, Input, Button, Col } from 'reactstrap';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faTrash, faFilePen } from '@fortawesome/free-solid-svg-icons';


class RenderWork extends Component {
      constructor(props) {
            super(props);
            this.state = this.props.work

      }
      handleChange = (e) => {
            e.preventDefault();
            this.setState({
                  [e.target.id]: e.target.value,

            })
      }

      editChange = () => {
            return (
                  <Card className="bg-light text-dark mb-3 border border-info border-2">
                  	<CardHeader className="bg-dark text-light mb-3">
                  	<Row>
                  		<Col md={1}>
                  			<span onClick={() => {this.setState({ editing: false });}}><FontAwesomeIcon icon={faFloppyDisk} size="xl" /></span>
                  		</Col>
                  		<Col md={10}>
                  			{this.state.id}
                  		</Col>
                  		<Col md={1} className="text-end">
                  			<span onClick={() => this.props.onDelete(this.state.id)}><FontAwesomeIcon icon={faTrash} size="xl" /></span>
                  		</Col>
                  		</Row>
                  	</CardHeader>
                  	<CardBody>
                  		<Row className="pr-5 pl-2">
                              <div className="col-md-2 text-end pb-3">
                                    <Label for="school">Company:</Label>
                              </div>
                              <div className="col-md-4 pb-3">
                                    <Input type="text" onChange={this.handleChange} value={this.state.company} id="company" placeholder="Company Name" /> 
                              </div>
                        
                              <div className="col-md-2 text-end pb-3">
                                    <Label for="study">Title:</Label>
                              </div>
                              <div className="col-md-4 pb-3">
                                    <Input type="text" onChange={this.handleChange} value={this.state.title} id="title" placeholder="Your Title" /> 
                              </div>
                        
                              <div className="col-md-2 text-end pb-3">
                                    <Label for="dateFrom">Date From:</Label>
                              </div>
                              <div className="col-md-4 pb-3">
                                    <Input type="date" onChange={this.handleChange} value={this.state.dateFrom} id="dateFrom" /> 
                              </div>
                        
                              <div className="col-md-2 text-end pb-3">
                                    <Label for="dateTo">Date To:</Label>
                              </div>
                              <div className="col-md-4 pb-3">
                                    <Input type="date" onChange={this.handleChange} value={this.state.dateTo} id="dateTo" /> 
                              </div>

                              <div className="col-md-2 text-end pb-3">
                                    <Label for="dateTo">Job Description:</Label>
                              </div>
                              <div className="col-md-10 pb-3">
                                    <Input type="textarea" onChange={this.handleChange} value={this.state.dateTo} id="desc" /> 
                              </div>
                        </Row>
                  	</CardBody>
                        
                  </Card>
            )
      }

      renderChange = () => {
            return (
                  <Card className="bg-light text-dark mb-3 border-dark">
                  	<CardHeader className="bg-dark text-light mb-3">
                  	<Row>
                  		<Col md={1}>
                  			<span onClick={() => {this.setState({ editing: true });}}><FontAwesomeIcon icon={faFilePen} size="xl" /></span>
                  		</Col>
                  		<Col md={10}>
                  			{this.state.id}
                  		</Col>
                  		<Col md={1} className="text-end">
                  			<span onClick={() => this.props.onDelete(this.state.id)}><FontAwesomeIcon icon={faTrash} size="xl" /></span>
                  		</Col>
                  		</Row>
                  	</CardHeader>
                  	<CardBody>
                        <Row>
                              <div className="col-md-2 text-end pb-3">
                                    <Label for="company">Company:</Label>
                              </div>
                              <div className="col-md-4 pb-3 text-end fw-bold">
                                    <Label for="company">{this.state.company}</Label> 
                              </div>
                        
                              <div className="col-md-2 text-end pb-3">
                                    <Label for="title">Title:</Label>
                              </div>
                              <div className="col-md-4 pb-3 text-end fw-bold">
                                    <Label for="title">{this.state.title}</Label> 
                              </div>
                        
                              <div className="col-md-2 text-end pb-3">
                                    <Label for="dateFrom">Date From:</Label>
                              </div>
                              <div className="col-md-4 pb-3 text-end fw-bold">
                                    <Label for="dateFrom">{this.state.dateFrom}</Label> 
                              </div>
                        
                              <div className="col-md-2 text-end pb-3">
                                    <Label for="dateTo">Date To:</Label>
                              </div>
                              <div className="col-md-4 pb-3 text-end fw-bold">
                                    <Label for="dateTo">{this.state.dateTo}</Label> 
                              </div>
                        </Row>
                  	</CardBody>
                        
                  </Card>
            )
      }

      workLoad = () => {
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
                    	{this.workLoad()}
                  </div>
            )
      }

}

export default RenderWork;