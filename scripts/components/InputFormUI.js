import React from "react";

const InputFormUI = (props) => {
  const setDate = () => {
    const date = new Date();
    return date.toJSON().slice(0,10)
  }
  return(

      <form className="inputField inputField__main">
        <div>
          <input type="text" placeholder="Item Description"></input>
          <input id="amountInput" type="number" placeholder="Amount"></input>
          <input type="text" placeholder="Tag"></input>
          <input id="dateInput" type="date" defaultValue={setDate()}></input>
        </div>
        <button className="button button--large" onClick={props.onClick}>Submit</button>
      </form>
  )
}

export default InputFormUI;
