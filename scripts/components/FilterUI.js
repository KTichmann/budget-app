import React from 'react';
import DateSelector from "./DateSelector"

export default class FilterUI extends React.Component{
  constructor(props){
    super(props);
    this.handleTagSelector = this.handleTagSelector.bind(this);
    this.handleSearchOptions = this.handleSearchOptions.bind(this);
  }
  handleTagSelector(){
    const tagArray = this.props.input.map((obj) => obj.tag);
    const tagSet = new Set(tagArray);
    let result = [<option key={"filter"} value={"filter"}>Filter by Tag</option>];
    tagSet.forEach((tag) => result.push(<option key={tag} value={tag}>{tag}</option>));
    return result;
  }
  handleSearchOptions(){
    const descriptionArray = this.props.input.map((obj) => obj.description);
    const descriptionSet = new Set(descriptionArray);
    const result = [];
    descriptionSet.forEach((description) => result.push(<option key={description}>{description}</option>))
    return result
  }
  render(){return(
    <div className="filterUI">
      <form className="filterTag">
        <select onChange={this.props.handleFilter}>
          {this.handleTagSelector()}
        </select>
      </form>
      <form>
        <input className="searchBoxDescription" type="text" list="searchOptions"></input>
          <datalist id="searchOptions">
            {this.handleSearchOptions()}
          </datalist>
          <button className="searchBoxButton button" onClick ={this.props.handleSearch}>Search By Description</button>
          <DateSelector input={this.props.input} filterViewState={this.props.filterViewState}/>
      </form>
      <button className="showAll button" onClick={this.props.handleShowAll}>Show All</button>
    </div>
  )}
}
