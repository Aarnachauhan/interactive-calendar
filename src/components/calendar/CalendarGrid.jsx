import "./CalenderGrid.css";
import { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  addMonths,
  subMonths,
} from "date-fns";

import DayCell from "./DayCell";

export default function CalendarGrid({
  currentDate,
  setCurrentDate,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) {
  const [hoverDate, setHoverDate] = useState(null);

  const startMonth = startOfMonth(currentDate);
  const endMonth = endOfMonth(currentDate);

  const calendarStart = startOfWeek(startMonth);
  const calendarEnd = endOfWeek(endMonth);

  const days = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd,
  });

  const handleDateClick = (day) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
    } else if (day < startDate) {
      setStartDate(day);
    } else {
      setEndDate(day);
    }
  };

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
    setStartDate(null);
    setEndDate(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePrevMonth}>⬅</button>
        <h2 className="title">{format(currentDate, "MMMM yyyy")}</h2>
        <button onClick={handleNextMonth}>➡</button>
      </div>

      <div className="weekDays">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid">
        {days.map((day, index) => (
          <DayCell
            key={index}
            day={day}
            currentMonth={currentDate}
            startDate={startDate}
            endDate={endDate}
            hoverDate={hoverDate}
            onClick={handleDateClick}
            onHover={setHoverDate}
          />
        ))}
      </div>
    </div>
  );
}