"use client";

const getCurrentDate = () => {
  const date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getWeek = (date: Date): number => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const daysSinceFirstDayOfYear = Math.floor(
      (date.getTime() - firstDayOfYear.getTime()) / (1000 * 60 * 60 * 24)
    );
    const weekNumber = Math.ceil((daysSinceFirstDayOfYear + 1) / 7);
    return weekNumber;
  };

  const day = days[date.getDay()];
  const currentDate = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const weekNumber = getWeek(new Date());

  return { day, currentDate, month, year, weekNumber };
};

const TimeCon = () => {
  const { day, currentDate, month, year, weekNumber } = getCurrentDate();

  return (
    <div className="bg-blue-500 text-white p-4 mb-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-2">Current Date</h1>
      <p><span className="font-semibold">Day:</span> {day}</p>
      <p><span className="font-semibold">Date:</span> {currentDate}</p>
      <p><span className="font-semibold">Month:</span> {month}</p>
      <p><span className="font-semibold">Year:</span> {year}</p>
      <p><span className="font-semibold">Week Number:</span> {weekNumber}</p>
    </div>
  );
};
export default TimeCon;
