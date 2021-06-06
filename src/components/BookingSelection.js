/* eslint-disable no-unused-vars */
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
  createTimeIntervals,
  getAMPMFrm24Hrs,
} from '../functions';
import {
  listOfAppointments,
  listOfDays,
} from '../data';
import { ReactComponent as CalendarIcon } from '../assets/icon/calendar.svg';
import { ReactComponent as ArrowIcon } from '../assets/icon/arrow.svg';

function BookingSelection({
  selectedProfile,
}) {
  const [selectedTime, setSelectedTime] = useState('');
  const [timeDisplay, setTimeDisplay] = useState([]);
  const [selectedCalendarDate, setSelectedCalendarDate] = useState(new Date());
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

    // Get unavailable times for selected profile on selected date
    const listOfUnavailableTimes = [];
    for (let i = 0; i < listOfAppointments.length; i += 1) {
      const tempDate = new Date(listOfAppointments[i].dateTime);

      if (listOfAppointments[i].hostId === selectedProfile.id) {
        if (val.getFullYear() === tempDate.getFullYear()
        && val.getMonth() === tempDate.getMonth()
        && val.getDate() === tempDate.getDate()) {
          const hour = tempDate.getHours();

          const minute = tempDate.getMinutes() === 0 ? '00' : tempDate.getMinutes();
          console.log(minute);

          listOfUnavailableTimes.push(`${hour}:${minute}`);
        }
      }
    }

    // Get all times available base on schedule
    let daySchedule = null;
    for (let k = 0; k < selectedProfile.schedule.length; k += 1) {
      if (selectedProfile.schedule[k].day === listOfDays[val.getDay()]) {
        daySchedule = selectedProfile.schedule[k];
      }
    }

    if (daySchedule) {
      const startingHour = parseInt(getHourFromString(get24HrsFrmAMPM(daySchedule.startTime)), 10);
      const endingHour = parseInt(getHourFromString(get24HrsFrmAMPM(daySchedule.endTime)), 10);
      const interval = 30;

      const listOfAllTimes = createTimeIntervals(startingHour, endingHour, interval);
      // eslint-disable-next-line max-len
      const listOfAvailableTimes = listOfAllTimes.filter((el) => listOfUnavailableTimes.indexOf(el) < 0);
      setTimeDisplay(listOfAvailableTimes);
    }
  };

  const renderCalendarTileContent = (_activeStartDate, date, view) => (view === 'month' && date.getDay() === 0 ? <span className="availability-label high-availability" /> : <span className="availability-label" />);

  const renderTimeResponseDisplay = () => {
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

        {renderTimeResponseDisplay()}

      </div>
    </div>
  );
}

export default BookingSelection;

BookingSelection.propTypes = {
  selectedProfile: PropTypes.number.isRequired,

};
