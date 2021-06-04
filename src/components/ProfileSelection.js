import React from 'react';
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import '../styles/profile-selection.scss';
import ProfileImage1 from '../assets/image/profile_1.jpg';
import ProfileImage2 from '../assets/image/profile_2.jpg';
import ProfileImage3 from '../assets/image/profile_3.jpg';
import ProfileImage4 from '../assets/image/profile_4.jpg';
import { ReactComponent as Arrow } from '../assets/icon/arrow.svg';

function ProfileSelection() {
  // eslint-disable-next-line no-unused-vars
  const listOfProfessionals = [

    {
      name: 'Kent Zerna',
      title: 'Personal Injury Lawyer',
      id: 1,
      img: ProfileImage1,

    },
    {
      name: 'Nikky Gucci',
      title: 'Clinical Negligence Lawyer',
      id: 2,
      img: ProfileImage2,

    },
    {
      name: 'Rowdy Haks',
      title: 'Criminal Lawyer',
      id: 3,
      img: ProfileImage3,

    },
    {
      name: 'Tham Hans',
      title: 'Employment Lawyer',
      id: 4,
      img: ProfileImage4,

    },
  ];

  const onProfileSelect = () => {
    console.log('HELLO');
  };

  return (

    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={20}
      totalSlides={listOfProfessionals.length}
      orientation="horizontal"
      dragEnabled
      visibleSlides={1}
      step={1}
      lockOnWindowScroll
    >

      <div className="carousel-container">
        <Slider className="slider-container">

          {
          listOfProfessionals.map(({
            name, title, img,
          }, index) => (
            <Slide
              className="slider-item"
              index={index}
              onFocus={() => { onProfileSelect(); }}
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

        <ButtonBack className="button-back left"><Arrow /></ButtonBack>
        <ButtonNext className="button-next right"><Arrow /></ButtonNext>
      </div>
      <DotGroup className="dot-group" />

    </CarouselProvider>
  );
}

export default ProfileSelection;
