import React from "react"
import FilterUI from "./filterUI.js"

export default class FilterHandler extends React.Component{
  constructor(props){
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleShowAll = this.handleShowAll.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.filterViewState = this.filterViewState.bind(this);
  }

  handleFilter(e){
    e.preventDefault()
    const chosenValue = e.target.value
    //Get the current input object from the BudgetApp props, and filter it to only include objects with the right tag
    if (chosenValue !== "filter"){
      const result = this.props.input.filter((obj) => obj.tag === chosenValue);
      this.filterViewState(result);
    }
  }
  filterViewState(result){
    this.props.filterState(result);
  }
  handleShowAll(){
    this.props.filterState(this.props.input);
  }

  handleSearch(e){
    e.preventDefault();
    const result = this.props.input.filter((obj) => obj.description.toLowerCase() === e.target.form[0].value.toLowerCase())
    this.props.filterState(result)
  }

  render(){
    return (
      <div className="bcontainer">
        <FilterUI input={this.props.input} handleFilter={this.handleFilter} handleShowAll={this.handleShowAll} handleSearch={this.handleSearch} filterViewState={this.filterViewState}/>
      </div>
    )
  }
}
