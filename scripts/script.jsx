class BudgetApp extends React.Component {
  constructor(props){
    super(props);
    this.addInputToState = this.addInputToState.bind(this);
    this.removeInputFromState = this.removeInputFromState.bind(this);
    this.state = {
      input: [],
      view: [],
      count: 0
    }
  }
  addInputToState(inputObj){
    this.setState((prevState) => {
      return{
      input: prevState.input.concat(inputObj),
      view: prevState.view.concat(inputObj),
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

  render(){
    return(
      <div>
        <Total inputArr={this.state.view}/>
        <FormHandler id={this.state.count} addInput={this.addInputToState} onClick={this.onClick}/>
        <EntryHandler view={this.state.view} removeInput={this.removeInputFromState}/>
        <FilterUI input={this.state.input}/>
      </div>
    )
  }
}

class EntryHandler extends React.Component{
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
    const display = view.map((obj) => <Entry key={obj.id} id={obj.id} onClick={this.handleRemove} description={obj.description} tag={obj.tag} price={obj.price}/>)
    return(display)
  }
  render(){
    return(
      <div>
        {this.displayEntries()}
      </div>
    )
  }
}
const Total = (props) => {
  const priceArr = props.inputArr.map((obj) => Number(obj.price))
  return(
    <h1>Total: { props.inputArr.length === 0 || priceArr.reduce((accumulator, price) => accumulator + price) }</h1>
  )
}
const Entry = (props) => {
  return(
    <div>
      <ul>
        <li>{props.description}</li>
        <li>{props.price}</li>
        <li>{props.tag}</li>
        <button onClick={(e) => props.onClick(e, props.id)}>Remove</button>
      </ul>
    </div>
  )
}

class FormHandler extends React.Component{
  constructor(props){
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(e){
    e.preventDefault()
    const formInput = e.target.form
    if (formInput[0].value && formInput[1].value && formInput[2].value){
      let userInput = {}
      userInput.description = formInput[0].value;
      userInput.price = formInput[1].value;
      userInput.tag = formInput[2].value;
      userInput.id = this.props.id;
      this.props.addInput(userInput)
    }
  }
  render(){
    return(
      <div>
        <InputForm onClick={this.clickHandler} />
      </div>
    )
  }
}

const InputForm = (props) => {
  return(
    <div>
      <form>
        <input type="text" placeholder="Item Description"></input>
        <input type="number" placeholder="0"></input>
        <input type="text" placeholder="test"></input>
        <button onClick={props.onClick}>Submit</button>
      </form>
    </div>
  )
}

class FilterUI extends React.Component{
  constructor(props){
    super(props);
    this.handleTagSelector = this.handleTagSelector.bind(this);
  }
  handleTagSelector(){
    const tagArray = this.props.input.map((obj) => obj.tag);
    const tagSet = new Set(tagArray);
    let result = [];
    tagSet.forEach((tag) => result.push(<option key={tag} value={tag}>{tag}</option>))
    return result;
  }
  render(){return(
    <div>
      <button onClick={this.props.handleShowAll}>Show All</button> //MAKE HANDLESHOWALL IN PARENT COMPONENT
      <form>
        Filter:
        <select onClick = {this.props.onClick}> //!! BUILD THIS.PROPS.ONCLICK FUNCITON IN FILTER HANDLER COMPONENT
          {this.handleTagSelector()}
        </select>
      </form>
      <form>
        <input type="text" ></input> //HANDLE INPUTS AND SEARCH --> onChange
          <button>Search</button> //Handle onClick
      </form>
    </div>
  )}
}
//FilterHandler
//FilterUI
//Pass Up to Budget App for all handling of State business...
ReactDOM.render(<BudgetApp />, document.getElementById("app"))
