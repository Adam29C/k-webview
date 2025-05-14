import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default CSS for the calendar

// ReusableCalendar component
function ReusableCalendar({ selectedDate, onDateChange, }) {
  return (
    <div>
      <Calendar
        onChange={onDateChange}
        value={selectedDate}
      />
    </div>
  );
}

export default ReusableCalendar;
