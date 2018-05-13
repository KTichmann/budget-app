import React from 'react';
import ReactDOM from 'react-dom';
import BarChartUI from './BarChartUI';
import flattenByAdding from './flattenByAdding'

const BarChartHandler = (props) => {
  return <BarChartUI data={flattenByAdding(props.data, "tag", "price")} x="tag" y="price" />
}

export default BarChartHandler;
