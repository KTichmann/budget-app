import React from "react";
import Entry from "./Entry"

export default class EntryHandler extends React.Component{
  constructor(props){
    super(props);
    this.displayEntries = this.displayEntries.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove(e, id){
    this.props.removeInput(id)
  }
  displayEntries(){
    const view = this.props.view
    if (view.length > 0) {
      const display = view.map((obj) => <Entry key={obj.id} id={obj.id} onClick={this.handleRemove} description={obj.description} tag={obj.tag} price={obj.price} date={obj.date}/>)
      return(display)
    }
    return (
      <p>No Entries</p>
    )
  }
  render(){
    return(
      <div className="entryContainer">
        {this.displayEntries()}
      </div>
    )
  }
}
