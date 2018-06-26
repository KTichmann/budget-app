import React from "react"

const Entry = (props) => {
  return(
    <div className="entry">
        <p id="description">{props.description}</p>
        <p id="tag">{props.tag}</p>
        <p id="price">R{props.price}</p>
        <div class="dateandremove">
         <button className="button" onClick={(e) => props.onClick(e, props.id)}>Remove</button>
         <p id="date">Date: {props.date}</p>
        </div>
    </div>
  )
}

export default Entry;
