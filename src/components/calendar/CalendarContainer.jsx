import "./CalendarContainer.css";
import { useState, useEffect } from "react";
import conimage from "../../assets/image.jpeg";
import CalendarGrid from "./CalendarGrid";
import NotesPanel from "../notes/NotesPanel";

export default function CalendarContainer() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [notes, setNotes] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("calendarNotes");
    if (saved) {
      setNotes(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        
        <div className="imageSection">
          <img src={conimage} alt="calendar" />
        </div>

       
        <div className="rightSection">
          <CalendarGrid
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />

          <NotesPanel
            startDate={startDate}
            endDate={endDate}
            notes={notes}
            setNotes={setNotes}
          />
        </div>
      </div>
    </div>
  );
}