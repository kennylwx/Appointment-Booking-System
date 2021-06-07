import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/container.scss';
import Item from './Item';
import { listOfProfessionals } from '../data';
import ProfileSelection from './ProfileSelection';
import BookingSelection from './BookingSelection';
import BookingSubmission from './BookingSubmission';

function Container({ updateAppointment }) {
  const [selectedProfile, setSelectedProfile] = useState(listOfProfessionals[0]);
  const [selectedTime, setSelectedTime] = useState('');

  const updateSelectedProfile = (profile) => {
    setSelectedProfile(profile);
  };

  const updateSelectedTime = (dateTime) => {
    setSelectedTime(dateTime);
  };

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
        <Item
          number={1}
          title="Select one of our professionals"
          profileList={listOfProfessionals}
          body={(
            <ProfileSelection
              profileList={listOfProfessionals}
              updateSelectedProfile={updateSelectedProfile}
              selectedProfile={selectedProfile}
            />
          )}
        />
        <Item
          number={2}
          title="Pick an appointment time"
          body={(
            <BookingSelection
              profileList={listOfProfessionals}
              updateSelectedProfile={updateSelectedProfile}
              selectedProfile={selectedProfile}
              updateSelectedTime={updateSelectedTime}
              selectedTime={selectedTime}
            />
          )}
        />
        <Item
          number={3}
          title="Confirm your booking"
          body={(
            <BookingSubmission
              selectedProfile={selectedProfile}
              selectedTime={selectedTime}
              updateAppointment={updateAppointment}
            />
          )}
        />

      </div>
      <div className="container-footer">
        {'Made with '}
        <span>&#128526;</span>
        {' by '}
        <a href="https://github.com/kennylwx/Appointment-Booking-System">kennylwx</a>
      </div>
    </div>

  );
}

export default Container;

Container.propTypes = {
  updateAppointment: PropTypes.func.isRequired,

};
