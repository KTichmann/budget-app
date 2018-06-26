import React from "react"
import EntryHandler from "./EntryHandler";
import FormHandler from "./FormHandler";
import FilterHandler from "./FilterHandler";
import SortHandler from "./SortHandler";
import Total from "./Total";
import BarChartHandler from "./BarChartHandler";
import Toggler from "./Toggler";

export default class BudgetApp extends React.Component {
  constructor(props){
    super(props);
    this.addInputToState = this.addInputToState.bind(this);
    this.removeInputFromState = this.removeInputFromState.bind(this);
    this.updateViewState = this.updateViewState.bind(this);
    this.state = {
      input: [],
      view: [],
      count: 0
    }
  }
  componentDidMount(){
    console.log("Mounted")
    try{
      const count = Number(localStorage.getItem('count'));
      const json = localStorage.getItem('input');
      const input = JSON.parse(json);
      if (!!input){
        this.setState(() => ({
          input: input,
          view: input,
          count
          })
        )
      }
    }
    catch(e){
      //Do Nothing
    }
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.input.length !== this.state.input.length){
      const json = JSON.stringify(this.state.input)
      localStorage.setItem('input', json);
      localStorage.setItem('count', this.state.count)
    }
  }

  addInputToState(inputObj){
    this.setState((prevState) => {
      return{
        input: prevState.input.concat(inputObj),
        view: [inputObj].concat(prevState.view),
        count: prevState.count + 1
      }
    })
  }

  removeInputFromState(chosenInput){
    this.setState((prevState) => ({
      input: prevState.input.filter((obj) => obj.id !== chosenInput),
      view: prevState.view.filter((obj) => obj.id !== chosenInput)
      })
    )
  }

  updateViewState(result){
    this.setState((prevState) => ({
      view: result
      })
    )
  }

  render(){
    return(
      <div className="contain-info">
        <div>
          <FormHandler id={this.state.count} addInput={this.addInputToState} onClick={this.onClick}/>
        </div>
        <div className="filterAndSort">
          <h1>Budget App</h1>
          <div id="filter">
            <Toggler content="Filter" id="filter-button" id2="filter" />
            <FilterHandler input={this.state.input} filterState={this.updateViewState}/>
          </div>
          <div id="sort">
            <Toggler content="Sort" id="sort-button" id2="sort" />
            <SortHandler updateViewState={this.updateViewState} view={this.state.view}/>
          </div>
          <BarChartHandler data={this.state.view}/>
        </div>
          <EntryHandler view={this.state.view} removeInput={this.removeInputFromState}/>
          <Total inputArr={this.state.view}/>
      </div>
    )
  }
}
