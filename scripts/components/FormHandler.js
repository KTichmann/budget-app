import React from "react"
import InputFormUI from "./InputFormUI"

export default class FormHandler extends React.Component{
  constructor(props){
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(e){
    e.preventDefault()
    const formInput = e.target.form
    if (formInput[0].value && formInput[1].value && formInput[2].value && formInput[1].value >= 0){
      let userInput = {}
      userInput.description = formInput[0].value;
      userInput.price = formInput[1].value;
      userInput.tag = formInput[2].value;
      userInput.date = formInput[3].value;
      userInput.id = this.props.id;
      this.props.addInput(userInput)
     }
  }
  render(){
    return <InputFormUI onClick={this.clickHandler}/>
  }
}
