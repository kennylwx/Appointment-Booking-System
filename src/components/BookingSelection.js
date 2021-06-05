import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import '../styles/booking-selection.scss';
import {
  addMonthsToDate,
  // getListOfDates,
  normaliseDateToReadableString,
} from '../functions';
import { ReactComponent as CalendarIcon } from '../assets/icon/calendar.svg';
import { ReactComponent as ArrowIcon } from '../assets/icon/arrow.svg';

function BookingSelection() {
  const BOOKING_DURATION_MONTHS = 2;

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendarDisplay, setCalendarDisplay] = useState(true);

  // useEffect(() => {
  //   console.log(value);
  // }, value);

  // const dates = getListOfDates(new Date(), addMonthsToDate(new Date(), BOOKING_DURATION_MONTHS));

  // dates.forEach((date) => {
  //   console.log(date.get);
  // });

  const onCalendarDisplay = () => {
    console.log('Calendar Display Click');
    setCalendarDisplay(!calendarDisplay);
  };

  const onCalendarClick = (val, eve) => {
    setSelectedDate(val);
    console.log(`Calendar Click: ${val}`);
    console.log(`Calendar Click: ${eve}`);
  };
  const renderCalendarTileContent = (activeStartDate, date, view) => (view === 'month' && date.getDay() === 0 ? <span className="availability-label high-availability" /> : <span className="availability-label" />);

  return (
    <div className="booking-selection">

      <div className="bs-header">
        <h5>{normaliseDateToReadableString(selectedDate)}</h5>
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
                value={selectedDate}
                maxDate={addMonthsToDate(new Date(), BOOKING_DURATION_MONTHS)}
                minDate={new Date()}
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

      </div>
    </div>
  );
}

export default BookingSelection;
