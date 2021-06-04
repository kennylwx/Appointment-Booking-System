import React from 'react';
import '../styles/container.scss';
import Item from './Item';
import { listOfProfessionals } from '../data';
import ProfileSelection from './ProfileSelection';

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
        <Item
          number={1}
          title="Select one of our professionals"
          profileList={listOfProfessionals}
          body={(
            <ProfileSelection
              profileList={listOfProfessionals}
            />
          )}
        />
        <Item
          number={2}
          title="Pick an appointment time"
          profileList={listOfProfessionals}
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
