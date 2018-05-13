import React from "react";
import SortUI from "./SortUI";

export default class SortHandler extends React.Component{
  constructor(props){
    super(props);
    this.handleSort = this.handleSort.bind(this);
  }
  handleSort(e){
    e.preventDefault();
    const userChoice = e.target.form[0].value;
    const ascendingChoice = e.target.form[1];
    if(userChoice === "Amount"){
      const result = this.props.view.sort((a, b) => {
        if (Number(a.price) > Number(b.price)){
          return (ascendingChoice.checked ? 1 : -1)
        }
        else{return (ascendingChoice.checked ? -1 : 1)}
      })
      this.props.updateViewState(result)
    }
    else if(userChoice === "Description"){
      const result = this.props.view.sort((a, b) => {
        const descA = a.description.toUpperCase();
        const descB = b.description.toUpperCase();
        if(descA > descB){
          return(ascendingChoice.checked ? 1 : -1);
        }
        else{
          return(ascendingChoice.checked ? -1 : 1);
        }
      })
      this.props.updateViewState(result)
    }
    else if(userChoice === "Tag"){
      const result = this.props.view.sort((a, b) => {
        const descA = a.tag.toUpperCase();
        const descB = b.tag.toUpperCase();
        if(descA > descB){
          return(ascendingChoice.checked ? 1 : -1);
        }
        else{
          return(ascendingChoice.checked ? -1 : 1);
        }
      })
      this.props.updateViewState(result)
    }
    else if(userChoice === "Date"){
      const result = this.props.view.sort((a, b) => {
        const aAsNumber = Number(a.date.replace(/-/g, ""));
        const bAsNumber = Number(b.date.replace(/-/g, ""));
        if(aAsNumber > bAsNumber){
          return(ascendingChoice.checked ? 1 : -1);
        }
        else{
          return(ascendingChoice.checked ? -1: 1);
        }
      })
      this.props.updateViewState(result)
    }

  }
  render(){
    return(
      <SortUI handleSort={this.handleSort}/>
    )
  }
}
