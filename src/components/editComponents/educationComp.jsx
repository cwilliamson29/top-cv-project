import React, { Component } from 'react';
import { Row, Label, Input, Button, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import uniqid from 'uniqid'
import RenderEducation from './renderEdu'



class Education extends React.Component {

      constructor(props) {
            super(props);
            this.state = {
                  educationArray: []
            }
            this.handleDelete = this.handleDelete.bind(this);
      }
      handleChange = (e) => {
            e.preventDefault();
            this.setState({
                  [e.target.id]: e.target.value,

            })
      }

      addEducation = () => {
            this.setState(prevState => ({
                  educationArray: [...prevState.educationArray, {
                        id: uniqid(),
                        school: '',
                        study: '',
                        dateFrom: '',
                        dateTo: '',
                        editing: true,
                  }]
            }))
      }

      logger = (e) => {
            e.preventDefault();
            console.log(this.state.educationArray)
      }

      handleDelete(itemId) {
            this.setState(({ educationArray: prevArray }) => {
                  return {
                        educationArray: prevArray.filter(({ id }) => id !== itemId)
                  };
            });
      };


      render() {

            return (
                  <Row>
                    <Col md={12} className="text-center">
                        <h1>Add Areas of Study</h1>
                    </Col>

                    {this.state.educationArray.map((item, i) => (<RenderEducation key={item.id} education={item} onDelete={this.handleDelete} />))}

                    <div className="text-center pt-3">
                        <Button className="bg-primary rounded-pill" onClick={() => { this.addEducation() }}><FontAwesomeIcon icon={faPlus} /></Button>
                    </div>
                  </Row>
            )
      }

}

export default Education;