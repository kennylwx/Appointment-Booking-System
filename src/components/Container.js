import React from 'react';
import '../styles/container.scss';
import Item from './Item';

function Container() {
  return (
    <div className="container">
      <div className="container-header">
        <h3 className="ch-title">
          Book your appointment online
        </h3>
        <h4 className="ch-subtitle">
          Fill in the following information
        </h4>

      </div>
      <div className="container-body">
        <Item />
      </div>
      <div className="container-footer">
        You have chosen Kenny
      </div>
    </div>

  );
}

export default Container;
