import React from 'react';
import '../styles/item.scss';
import ProfileSelection from './ProfileSelection';

function Item() {
  return (
    <div className="item">
      <div className="item-header">
        <div className="item-id">
          1
        </div>
        <h3 className="item-title">
          Select one of our professionals
        </h3>
      </div>

      <div className="item-body">
        <ProfileSelection />
      </div>

      Hey Look

    </div>
  );
}

export default Item;
