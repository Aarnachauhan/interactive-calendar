import "./NotesPanel.css";
import { useState, useEffect } from "react";

export default function NotesPanel({
  startDate,
  endDate,
  notes,
  setNotes,
}) {
  const [text, setText] = useState("");

  const key =
    startDate && endDate
      ? `${startDate.toDateString()}_${endDate.toDateString()}`
      : null;

  
  useEffect(() => {
    if (key && notes[key]) {
      setText(notes[key]);
    } else {
      setText("");
    }
  }, [key, notes]);

  const handleSave = () => {
    if (!key) return;

    const updated = {
      ...notes,
      [key]: text,
    };

    setNotes(updated);
    localStorage.setItem("calendarNotes", JSON.stringify(updated));
  };

  return (
    <div className="notes">
      <h3>Notes</h3>

      {key ? (
        <>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write note for selected range..."
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <p>Select a date range to add notes</p>
      )}
    </div>
  );
}
