import React from 'react';
import '../styles/item.scss';
import ProfileImage1 from '../assets/image/profile_1.jpg';
import ProfileImage2 from '../assets/image/profile_2.jpg';
import ProfileImage3 from '../assets/image/profile_3.jpg';
import ProfileImage4 from '../assets/image/profile_4.jpg';

function Item() {
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

        <div className="profile-selection">

          {
          listOfProfessionals.map(({
            name, title, img,
          }) => (
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
          ))
        }
        </div>

      </div>
    </div>
  );
}

export default Item;
