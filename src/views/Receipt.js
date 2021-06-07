import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';

import Header from '../components/Header';
import { listOfProfessionals } from '../data';
import { normaliseDateToReadableString, getAMPMFrm24Hrs } from '../functions';

import '../styles/receipt.scss';

function Receipt() {
  const location = useLocation();
  const appointmentMade = location.state.app;

  const getProfile = (id) => {
    for (let i = 0; i < listOfProfessionals.length; i += 1) {
      if (id === listOfProfessionals[i].id) {
        return listOfProfessionals[i];
      }
    }

    return null;
  };

  const appointmentDate = new Date(appointmentMade.dateTime);
  const aDTime = getAMPMFrm24Hrs(`${appointmentDate.getHours() < 10 ? `0${appointmentDate.getHours()}` : appointmentDate.getHours()}:${appointmentDate.getMinutes() === 0 ? '00' : appointmentDate.getMinutes()}`);

  return (
    <div className="receipt-view">
      <Header />
      <div className="receipt-body">
        <div className="receipt-appointment">

          <div className="ra-header">
            <h3>
              {`Your appointment with ${getProfile(appointmentMade.hostId).name} has been successfuly created!`}
            </h3>

          </div>
          <div className="ra-body">
            <h3>Appointment Time</h3>
            <p>
              {`
                ${normaliseDateToReadableString(appointmentDate)}
                at ${aDTime}.
              ` }
            </p>
            <h3>Total amount</h3>
            <p>
              {`$${getProfile(appointmentMade.hostId).priceFor30min}`}
            </p>
          </div>
          <div className="ra-footer">

            <NavLink
              to="/"
              className="return-button"
            >
              Return to main page
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Receipt;
