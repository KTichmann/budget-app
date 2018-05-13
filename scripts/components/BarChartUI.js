import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis} from 'victory';

const BarChartUI = (props) => {
  return (
    <VictoryChart domainPadding={20}>
        <VictoryBar data={props.data} x={props.x} y={props.y}/>
    </VictoryChart>
  )
}

export default BarChartUI
