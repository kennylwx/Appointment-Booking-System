import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/booking-submission.scss';
import {
  listOfAppointments,
} from '../data';

function BookingSubmission({
  selectedProfile,
  selectedTime,
  updateAppointment,
}) {
  const [value, setValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const [response, setResponse] = useState('');

  function handleChange(event) {
    if (event.target.id === 'first-name') {
      setValue({
        firstName: event.target.value,
        lastName: value.lastName,
        email: value.email,
        phoneNumber: value.phoneNumber,
      });
    } else if (event.target.id === 'last-name') {
      setValue({
        firstName: value.firstName,
        lastName: event.target.value,
        email: value.email,
        phoneNumber: value.phoneNumber,
      });
    } else if (event.target.id === 'email') {
      setValue({
        firstName: value.firstName,
        lastName: value.lastName,
        email: event.target.value,
        phoneNumber: value.phoneNumber,
      });
    } else if (event.target.id === 'phone-number') {
      setValue({
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.email,
        phoneNumber: event.target.value,
      });
    }
  }

  function handleSubmit(event) {
    if (!value.firstName
      || !value.lastName
      || !value.email
      || !value.phoneNumber) {
      setResponse(
        <div className="selection-response response-warning">
          <h4>Please fill in your details.</h4>
        </div>,
      );
    } else {
      setResponse(''); // empty out response
      // create appointmnet object
      const makeAppointment = {
        appointmentId: listOfAppointments.length + 1,
        hostId: selectedProfile.id,
        inviteeInfo: {
          firstName: value.firstName,
          lastName: value.lastName,
          email: value.email,
          phoneNumber: value.phoneNumber,
        },
        purpose: 'General consult',
        dateTime: selectedTime.toISOString(),
      };

      updateAppointment(makeAppointment);
    }

    event.preventDefault();
  }

  return (
    <div className="booking-submission">
      <form onSubmit={handleSubmit} className="bs-body">
        <div className="top-label">

          <label htmlFor="first-name">
            <h3>First name</h3>
            <input
              id="first-name"
              type="text"
              value={value.firstName}
              onChange={handleChange}
              placeholder={selectedTime ? 'e.g. John' : ''}
              disabled={!selectedTime}
            />
          </label>

          <label htmlFor="last-name">
            <h3>Last name</h3>
            <input
              id="last-name"
              type="text"
              value={value.lastName}
              onChange={handleChange}
              placeholder={selectedTime ? 'e.g. Smith' : ''}
              disabled={!selectedTime}
            />
          </label>

        </div>

        <label htmlFor="email">
          <h3>Email</h3>
          <input
            id="email"
            type="email"
            value={value.email}
            onChange={handleChange}
            placeholder={selectedTime ? 'e.g. johnsmith@email.com' : ''}
            disabled={!selectedTime}
          />
        </label>
        <label htmlFor="phone-number">
          <h3>Phone Number</h3>
          <input
            id="phone-number"
            type="tel"
            pattern="[0-9]{10}"
            value={value.phoneNumber}
            onChange={handleChange}
            placeholder={selectedTime ? 'e.g. 0432234897' : ''}
            disabled={!selectedTime}
          />
        </label>

        { selectedTime ? response : '' }

        <input
          type="submit"
          value="Pay Now"
          disabled={!selectedTime}
        />
      </form>
    </div>
  );
}

export default BookingSubmission;

BookingSubmission.propTypes = {
  selectedProfile: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    title: PropTypes.string,
    contactNumber: PropTypes.string,
    img: PropTypes.string,
    priceFor30min: PropTypes.number,
    background: PropTypes.string,
    language: PropTypes.arrayOf(PropTypes.string),
    education: PropTypes.arrayOf(PropTypes.shape({
      school: PropTypes.string,
      degree: PropTypes.string,
      year: PropTypes.string,
    })),
    schedule: PropTypes.arrayOf(PropTypes.shape({
      day: PropTypes.string,
      startTime: PropTypes.string,
      endTime: PropTypes.string,
    })),
  }).isRequired,
  selectedTime: PropTypes.instanceOf(Date).isRequired,
  updateAppointment: PropTypes.shape({
    appointmentId: PropTypes.number,
    hostId: PropTypes.number,
    inviteeInfo: {
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
      phoneNumber: PropTypes.string,
    },
    purpose: PropTypes.string,
    dateTime: PropTypes.string,
  }).isRequired,
};
