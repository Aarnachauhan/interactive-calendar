# 📅 Interactive Calendar Component

An interactive, responsive calendar built using **React.js** that allows users to select date ranges, add notes, and navigate between months — all with a clean and modern UI.

---

## 🚀 Live Demo

👉https://interactive-calendar-umber.vercel.app/

---

## 🎥 Demo Video

👉 

---

## ✨ Features

### 📅 Calendar Functionality

* Dynamic month rendering using `date-fns`
* Previous / Next month navigation
* Proper calendar grid (aligned with weekdays)

### 🔵 Date Range Selection

* Select start and end date
* Highlight full range
* Hover preview before final selection (premium UX)

### 📝 Notes System

* Add notes for selected date range
* Notes persist using **localStorage**
* Automatically loads saved notes on refresh

### 📱 Fully Responsive Design

* Desktop: Side-by-side layout (image + calendar + notes)
* Mobile: Stacked layout (image → calendar → notes)
* Touch-friendly date selection

### 🎨 UI/UX Enhancements

* Clean modern design
* Today’s date highlighted
* Smooth hover effects
* Balanced layout with proper spacing

---

## 🛠 Tech Stack

* **React.js**
* **CSS (Modular styling)**
* **date-fns** (date handling)
* **localStorage** (data persistence)

---

## 📂 Project Structure

```
src/
  components/
    calendar/
      CalendarContainer.jsx
      CalendarGrid.jsx
      DayCell.jsx
    notes/
      NotesPanel.jsx
  assets/
```

---

## ⚙️ How to Run Locally

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/interactive-calendar.git

# Go into project folder
cd interactive-calendar

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 💡 Key Design Decisions

* **State Lifting**: Shared state (date selection & notes) managed in parent component for clean architecture
* **Reusable Components**: Modular structure for scalability
* **Grid-based Layout**: Ensures proper alignment of calendar days
* **Responsive Design**: Media queries used for seamless mobile experience

---

## 🧠 Future Improvements

* Drag-to-select date range
* Add event indicators (dots on dates)
* Theme switching (light/dark mode)
* Animations (Framer Motion)

---

## 🙌 Conclusion

This project demonstrates:

* Strong frontend fundamentals
* Clean component architecture
* Attention to UI/UX
* Real-world feature implementation

---

⭐ If you like this project, feel free to give it a star!
