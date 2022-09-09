import React, { Component } from 'react';
import { Row, Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';
import uniqid from 'uniqid'
import RenderEducation from './renderEdu'


class Education extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  educationArray: [],
                  education: {
                        id: uniqid(),
                        school: '',
                        study: '',
                        dateFrom: '',
                        dateTo: '',
                        editing: true,
                  }
            }
            this.handleDelete = this.handleDelete.bind(this);
      }
      handleChange = (e) => {
            e.preventDefault();
            this.setState({
                  [e.target.id]: e.target.value,

            })
      }

      addEducation = (e) => {
            e.preventDefault();
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
                  <div>
                    <div className="row text-center">
                        <h1>Add Areas of Study</h1>
                    </div>

                    {this.state.educationArray.map((item, i) => (<RenderEducation key={item.id} education={item} onDelete={this.handleDelete} />))}

                    <form onSubmit={this.addEducation}>
                        <Button type="submit">add</Button>
                    </form>
                    <form onSubmit={this.logger}>
                        <Button type="submit">log</Button>
                    </form>
                    

                  </div>
            )
      }

}

export default Education;