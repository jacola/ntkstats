import React from 'react';

const stat = (props) => (
  <div>
    <label>{props.label}</label>
    <input
      type="text"
      value={props.value}
      dataKey={props.dataKey}
      onChange={props.change}
    />
  </div>
)

export default stat;
