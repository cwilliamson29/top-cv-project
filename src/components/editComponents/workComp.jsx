import React, { Component } from 'react';
import { Row, Label, Input, Button, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import uniqid from 'uniqid'
import RenderWork from './renderWork'



class Work extends React.Component {

      constructor(props) {
            super(props);
            this.state = {
                  workArray: []
            }
            this.handleDelete = this.handleDelete.bind(this);
      }
      handleChange = (e) => {
            e.preventDefault();
            this.setState({
                  [e.target.id]: e.target.value,

            })
      }

      addWork = () => {
            this.setState(prevState => ({
                  workArray: [...prevState.workArray, {
                        id: uniqid(),
                        company: '',
                        title: '',
                        dateFrom: '',
                        dateTo: '',
                        editing: true,
                  }]
            }))
      }

      handleDelete(itemId) {
            this.setState(({ workArray: prevArray }) => {
                  return {
                        workArray: prevArray.filter(({ id }) => id !== itemId)
                  };
            });
      };


      render() {

            return (
                  <Row>
                    <Col md={12} className="text-center">
                        <h1>Work History</h1>
                    </Col>

                    {this.state.workArray.map((item, i) => (<RenderWork key={item.id} work={item} onDelete={this.handleDelete} />))}

                    <div className="text-center pt-3">
                        <Button className="bg-primary rounded-pill" onClick={() => { this.addWork() }}><FontAwesomeIcon icon={faPlus} /></Button>
                    </div>
                  </Row>
            )
      }

}

export default Work;