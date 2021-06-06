import React, { useState } from 'react';
import '../styles/container.scss';
import Item from './Item';
import { listOfProfessionals } from '../data';
import ProfileSelection from './ProfileSelection';
import BookingSelection from './BookingSelection';

function Container() {
  const [selectedProfile, setSelectedProfile] = useState(listOfProfessionals[0]);

  const updateSelectedProfile = (profile) => {
    setSelectedProfile(profile);
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
            />
          )}
        />
        <Item
          number={3}
          title="Enter your information"
          profileList={listOfProfessionals}
        />
      </div>
      <div className="container-footer">
        You have chosen Kenny
      </div>
    </div>

  );
}

export default Container;
