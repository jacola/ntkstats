import React from 'react'
import Stat from './Stat/Stat';

const statGroup = (props) => (
  <div>
    <h2>{props.label}</h2>
    <Stat
      label="HP:"
      value={props.hp}
      dataKey={props.dataKeyHP}
      change={props.change}
    />
    <Stat
      label="MP:"
      value={props.mp}
      dataKey={props.dataKeyMP}
      change={props.change}
    />
  </div>
)

export default statGroup;
