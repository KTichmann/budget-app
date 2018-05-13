import React from "react"

const SortUI = (props) => {
  return(
    <div className="sort">
      <form>
        <select>
          <option>Amount</option>
          <option>Description</option>
          <option>Tag</option>
          <option>Date</option>
        </select>
        <input type="radio" value="ascending" name="choice" id="ascending" defaultChecked></input>
          <label htmlFor="ascending">Ascending</label>
        <input type="radio" value="descending" name="choice" id="descending"></input>
          <label htmlFor="descending">Descending</label>
        <button className="button" onClick={props.handleSort}>Sort</button>
      </form>
  </div>
  )
}

export default SortUI;
