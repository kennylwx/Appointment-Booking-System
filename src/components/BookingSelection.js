import React from 'react';
import '../styles/booking-selection.scss';
import { listOfDays } from '../data';

function BookingSelection() {
  return (
    <div className="booking-selection">

      <div className="bs-header">
        <h5>9 June 2021, Wednesday 2PM</h5>
      </div>
      <div className="bs-body">
        <table className="bsb-calendar-picker">
          <tr>
            { listOfDays.map((day) => <th>{day}</th>) }

          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default BookingSelection;
