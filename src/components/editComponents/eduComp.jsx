import React, { Component } from 'react';
import { Row, Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';
import uniqid from 'uniqid'
import RenderEducation from './renderEdu'


class Education extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  educationArray: [],
                  count: 0

            }
      }
      handleChange = (e) => {
            e.preventDefault();
            this.setState({
                  [e.target.id]: e.target.value,

            })
      }

      addEducation = (e) => {
            //console.log('addEducation');
            e.preventDefault();
            let newCount = this.state.count++
            this.setState(prevState => ({
                  educationArray: [...prevState.educationArray, {
                        id: newCount,
                        school: '',
                        study: '',
                        dateFrom: '',
                        dateTo: '',
                        editing: true,
                  }]
            }))
            //console.log(this.state.educationArray)
      }

      h2andleDelete = (itemId) => {
            // Work with up-to-date state via the callback
            this.setState(({ educationArray: prevArray }) => {
                  // Filter out the element you're removing
                  return {
                        educationArray: prevArray.filter(({ id }) => id !== itemId)
                  };
            });
      };

      handleDelete = itemId => {
            //const newStudy = this.state.educationArray.filter(item => { return item.id !== itemId });
            //this.setState({ educationArray: newStudy })
            //let tempArray = [];
            //let num = this.state.educationArray.length;
            //console.log(num, " is length")
            const originalEducationArray = [...this.state.educationArray];
            const newStudy = originalEducationArray.filter(item => { return item.id !== itemId })

            this.setState({ educationArray: newStudy })

            /*for (let i = 0; i < num;) {
                  //console.log("itemId is: ", itemId)
                  let tempId = this.state.educationArray[i].id
                  let tempid2 = tempId.toString()
                  if (itemId === tempid2) {
                        console.log("if is true")
                  } else if (tempId !== itemId) {
                        //console.log(this.state.educationArray[i].id, " is ID found")
                        let obj = this.state.educationArray[i]
                        tempArray.push(obj)
                        //console.log(obj, "is obj ID found")
                        console.log("if is false")
                  } else {
                        console.log("if has failed")
                  }

                  //console.log(tempArray, "is tempArray ID found****2")
                  console.log(typeof this.state.educationArray[i].id, " - array.id")
                  i++
            }

            this.setState(prevState => ({ educationArray: tempArray }));
            //console.log("ondelete: " + newStudy)
            console.log("to be deleted: " + itemId)
            console.log(typeof itemId)*/
      }

      render() {

            return (
                  <div>
                    <div className="row text-center">
                        <h1>Add Areas of Study</h1>
                    </div>

                    {this.state.educationArray.map((item, i) => (<RenderEducation education={item} onDelete={this.handleDelete} />))}

                    <form onSubmit={this.addEducation}>
                        <Button type="submit">add</Button>
                    </form>
                    

                  </div>
            )
      }

}

export default Education;