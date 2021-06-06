import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import '../styles/booking-selection.scss';
import {
  addMonthsToDate,
  // getListOfDates,
  normaliseDateToReadableString,
  get24HrsFrmAMPM,
  getHourFromString,
  getMinuteFromString,
} from '../functions';
import { listOfProfessionals, listOfAppointments } from '../data';
import { ReactComponent as CalendarIcon } from '../assets/icon/calendar.svg';
import { ReactComponent as ArrowIcon } from '../assets/icon/arrow.svg';

// eslint-disable-next-line no-unused-vars
function BookingSelection({ profileList, updateSelectedProfile, selectedProfile }) {
  const [selectedTime, setSelectedTime] = useState('');
  const [timeDisplay, setTimeDisplay] = useState('');
  const [selectedCalendarDate, setSelectedCalendarDate] = useState('');
  const [calendarDisplay, setCalendarDisplay] = useState(false);

  const BOOKING_DURATION_MONTHS = 2;
  const START_DATE = new Date();
  const END_DATE = addMonthsToDate(new Date(), BOOKING_DURATION_MONTHS);

  // useEffect(() => {
  //   console.log(value);
  // }, value);

  // const dates = getListOfDates(new Date(), addMonthsToDate(new Date(), BOOKING_DURATION_MONTHS));

  // dates.forEach((date) => {
  //   console.log(date.get);
  // });

  const onTimeSelect = (ev) => {
    setSelectedTime(new Date(
      selectedCalendarDate.getFullYear(), //  year
      selectedCalendarDate.getMonth(), // month
      selectedCalendarDate.getDate(), // date
      getHourFromString(get24HrsFrmAMPM(ev.target.ariaLabel)), // hour
      getMinuteFromString(get24HrsFrmAMPM(ev.target.ariaLabel)), // minute
    ));

    console.log(listOfAppointments);
  };

  const onCalendarDisplay = () => {
    setCalendarDisplay(!calendarDisplay);
  };

  // eslint-disable-next-line no-unused-vars
  const onCalendarClick = (val, _eve) => {
    // Save the calendar chosen date
    setSelectedCalendarDate(val);

    // Close the calendar display
    onCalendarDisplay();

    // Display time available on that day
    setTimeDisplay();

    // for (let i = 0; i < listOfAppointments.length; i += 1) {
    //   const tempDate = new Date(listOfAppointments[i].dateTime);
    //   // if(tempDate.get ){
    //   profileList;
    //   // }
    //   console.log(tempDate);
    // }
  };

  const renderCalendarTileContent = (_activeStartDate, date, view) => (view === 'month' && date.getDay() === 0 ? <span className="availability-label high-availability" /> : <span className="availability-label" />);

  const renderTimeDisplay = () => {
    if (selectedTime) {
      return (
        <div className="selection-success">
          <h4>You have successfully selected </h4>
          <h5>{selectedTime.toString()}</h5>
        </div>
      );
    }

    if (selectedCalendarDate) {
      return (
        <div className="selection-default">
          <h4>Please select a time</h4>
          <h5>{selectedTime.toString()}</h5>
        </div>
      );
    }

    return '';
  };

  return (
    <div className="booking-selection">

      <div className="bs-header">
        <h5>
          {
            selectedCalendarDate
              ? `${normaliseDateToReadableString(selectedCalendarDate)}`
              : ''
          }
        </h5>

        <button
          type="button"
          className="calendar-button"
          onClick={onCalendarDisplay}
        >
          <CalendarIcon />
        </button>
      </div>
      <div className="bs-body">
        {
          calendarDisplay
            ? (
              <Calendar
                onChange={(val, eve) => onCalendarClick(val, eve)}
                value={selectedCalendarDate}
                maxDate={END_DATE}
                minDate={START_DATE}
                showNeighboringMonth={false}
                minDetail="year"
                className="calendar-selector"
                next2Label={null}
                prev2Label={null}
                nextLabel={<ArrowIcon />}
                prevLabel={<ArrowIcon />}
                tileContent={
                  ({
                    activeStartDate,
                    date,
                    view,
                  }) => renderCalendarTileContent(activeStartDate, date, view)
                }
                // tileDisabled={({ date }) => date.getDay() === 0}
              />
            )
            : ''
        }

        <div className="time-selector">
          {
            timeDisplay
              ? timeDisplay.map((time) => (
                <button
                  type="button"
                  className="time-button"
                  aria-label={time}
                  onClick={(event) => { onTimeSelect(event); }}
                >
                  {time}
                </button>
              ))
              : ''

          }
        </div>

        {renderTimeDisplay()}

      </div>
    </div>
  );
}

export default BookingSelection;

BookingSelection.defaultProps = {
  profileList: listOfProfessionals,
};

BookingSelection.propTypes = {
  profileList: PropTypes.arrayOf(PropTypes.object),
  updateSelectedProfile: PropTypes.func.isRequired,
  selectedProfile: PropTypes.number.isRequired,

};
