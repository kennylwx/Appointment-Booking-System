import React from 'react';
import PropTypes from 'prop-types';
import '../styles/item.scss';

function Item({ number, title, body }) {
  return (
    <div className="item">
      <div className="item-header">
        <div className="item-id">
          {number}
        </div>
        <h3 className="item-title">
          {title}
        </h3>
      </div>

      <div className="item-body">

        {body}
      </div>
    </div>
  );
}

export default Item;

Item.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.element.isRequired,
};
