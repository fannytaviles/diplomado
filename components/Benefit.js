import React from 'react';

function Benefit(props) {
  return (
    <article>
      <h3>{props.title}</h3>
      <div>{props.description}</div>
    </article>
  )
}

export default Benefit;