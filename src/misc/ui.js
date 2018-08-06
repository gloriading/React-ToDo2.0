import React, {Component} from 'react';


const StatusBtn = props => (
  <span
    className="status-btn"
    onClick={props.onClick}
    id={props.status}
    >
    {props.children}
  </span>
)


export {StatusBtn};
