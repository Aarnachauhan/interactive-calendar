import "./DayCell.css";
import {
  format,
  isSameMonth,
  isSameDay,
  isWithinInterval,
  isToday,
} from "date-fns";

export default function DayCell({
  day,
  currentMonth,
  startDate,
  endDate,
  hoverDate,
  onClick,
  onHover,
}) {
  const isCurrent = isSameMonth(day, currentMonth);

  const isStart = startDate && isSameDay(day, startDate);
  const isEnd = endDate && isSameDay(day, endDate);

  const isInRange =
    startDate &&
    endDate &&
    isWithinInterval(day, { start: startDate, end: endDate });

  const isPreviewRange =
    startDate &&
    !endDate &&
    hoverDate &&
    isWithinInterval(day, {
      start: startDate < hoverDate ? startDate : hoverDate,
      end: startDate < hoverDate ? hoverDate : startDate,
    });

  const today = isToday(day);

  return (
    <div
      onClick={() => onClick(day)}
      onMouseEnter={() => onHover(day)}
      className={`cell 
        ${isCurrent ? "currentMonth" : "otherMonth"}
        ${isStart ? "start" : ""}
        ${isEnd ? "end" : ""}
        ${isInRange ? "range" : ""}
        ${isPreviewRange ? "preview" : ""}
        ${today ? "today" : ""}
      `}
    >
      {format(day, "d")}
    </div>
  );
}