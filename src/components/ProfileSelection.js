import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup,
} from 'pure-react-carousel';

import { listOfProfessionals } from '../data';
// eslint-disable-next-line no-unused-vars
import { normaliseArrayToSentence, sanitisePhoneNumber } from '../functions';

import { ReactComponent as Arrow } from '../assets/icon/arrow.svg';

import 'pure-react-carousel/dist/react-carousel.es.css';
import '../styles/profile-selection.scss';

function ProfileSelection({ profileList }) {
  const INITIAL_SLIDE = 0;
  const [currentSlide, setCurrentSlide] = useState(INITIAL_SLIDE);
  const onButtonBack = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const onButtonNext = () => {
    setCurrentSlide(currentSlide + 1);
  };

  return (
    <>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={20}
        totalSlides={profileList.length}
        orientation="horizontal"
        dragEnabled={false}
        touchEnable={false}
        visibleSlides={1}
        step={1}
        lockOnWindowScroll
        currentSlide={currentSlide}
      >

        <div className="carousel-container">
          <Slider className="slider-container">
            {
            profileList.map(({
              name, title, img,
            }, index) => (
              <Slide
                className="slider-item"
                index={index}
              >

                <div className="profile">
                  <img className="profile-img" src={img} alt={`${name}-profile`} />
                  <div className="profile-info">

                    <h4 className="profile-name">
                      {name}
                    </h4>
                    <h5 className="profile-title">
                      {title}
                    </h5>
                  </div>
                </div>
              </Slide>
            ))
            }
          </Slider>

          <ButtonBack
            className="button-back left"
            onClick={() => { onButtonBack(); }}
          >
            <Arrow />
          </ButtonBack>
          <ButtonNext
            className="button-next right"
            onClick={() => { onButtonNext(); }}
          >
            <Arrow />
          </ButtonNext>
        </div>
        <DotGroup className="dot-group" />
      </CarouselProvider>

      {/* {currentSlide} */}

      <div className="big-profile">
        <div className="bp-section">
          <div className="bps-header">
            <h3>Background</h3>
          </div>
          <div className="bps-body">
            <p className="background">
              {profileList[currentSlide].background}
            </p>
          </div>
        </div>
        <div className="bp-section">
          <div className="bps-header">
            <h3>Spoken language</h3>
          </div>
          <div className="bps-body">
            <p>
              {normaliseArrayToSentence(profileList[currentSlide].language)}
            </p>
          </div>

        </div>
        <div className="bp-section">
          <div className="bps-header">
            <h3>Education</h3>
          </div>
          <div className="bps-body">
            {
              profileList[currentSlide].education.map(({ school, degree, year }) => (
                <div className="education-item">
                  <div className="ei-info">
                    <h4>{school}</h4>
                    <p>{degree}</p>
                  </div>
                  <div className="ei-date" style={{ fontWeight: '600' }}>
                    <p>{year}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div className="bp-section">
          <div className="bps-header">
            <h3>Contact</h3>
          </div>
          <div className="bps-body">
            <a href={`tel:${sanitisePhoneNumber(profileList[currentSlide].contactNumber)}`}>{profileList[currentSlide].contactNumber}</a>
          </div>
        </div>

        <div className="bp-section">
          <div className="bps-header">
            <h3>Available Hours</h3>
          </div>
          <div className="bps-body">
            <table>
              {
                profileList[currentSlide].schedule.map(({ day, time }) => (
                  <tr>
                    <td>
                      <p>{day}</p>
                    </td>
                    <td>
                      <p style={{ fontWeight: '600' }}>{time}</p>
                    </td>
                  </tr>
                ))
              }
            </table>
          </div>
        </div>

        <div className="bp-section">
          <div className="bps-header">
            <h3>Prices</h3>
          </div>
          <div className="bps-body">
            <table>
              <tr>
                <td>
                  <p>Consultation (30min)</p>
                </td>
                <td>
                  <p
                    className="price"
                    style={{ fontWeight: '600' }}
                  >
                    {`$${profileList[currentSlide].priceFor30min}`}
                  </p>
                </td>
              </tr>
            </table>
          </div>
        </div>

      </div>

    </>
  );
}

export default ProfileSelection;

ProfileSelection.defaultProps = {
  profileList: listOfProfessionals,
};

ProfileSelection.propTypes = {
  profileList: PropTypes.arrayOf(PropTypes.object),
};
