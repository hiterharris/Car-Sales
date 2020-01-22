import React from 'react';

const AdditionalFeature = props => {
  return (
    <li>
      <button className="button" onClick={() => props.addItem(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
