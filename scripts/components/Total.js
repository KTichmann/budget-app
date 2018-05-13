import React from "react";

const Total = (props) => {
  const priceArr = props.inputArr.map((obj) => Number(obj.price))
  return(
    <h1 id="total">Total: { props.inputArr.length === 0 || priceArr.reduce((accumulator, price) => accumulator + price) }</h1>
  )
}

export default Total;
