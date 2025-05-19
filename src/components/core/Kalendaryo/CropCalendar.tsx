import { useState } from "react";
import {
  eachDayOfInterval,
  format,
  startOfMonth,
  endOfMonth,
  isToday,
  addMonths,
  subMonths,
} from "date-fns";
import { WiDaySunny, WiRain } from "react-icons/wi";

const mockForecast = ["sunny", "rain", "sunny", "sunny", "rain"];
const cropSchedule = [
  {
    crop: "Palay",
    start: new Date(2025, 4, 10),
    duration: 120,
  },
  {
    crop: "Mais",
    start: new Date(2025, 4, 20),
    duration: 90,
  },
];

const getWeatherIcon = (type: string) => {
  switch (type) {
    case "rain":
      return <WiRain className="text-blue-500" />;
    case "sunny":
    default:
      return <WiDaySunny className="text-yellow-500" />;
  }
};

const CropCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const days = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const getCropInfo = (date: Date) => {
    return cropSchedule.find((crop) => {
      const start = crop.start;
      const end = new Date(start);
      end.setDate(start.getDate() + crop.duration);
      return date >= start && date <= end;
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <button onClick={prevMonth}>&larr;</button>
        <h2 className="text-xl font-semibold">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <button onClick={nextMonth}>&rarr;</button>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => {
          const crop = getCropInfo(day);
          const forecast = mockForecast[index % mockForecast.length];

          return (
            <div
              key={day.toString()}
              className={`rounded-lg p-2 text-center text-sm border transition-all
                ${
                  isToday(day)
                    ? "bg-yellow-100 border-yellow-500"
                    : "bg-gray-50"
                }`}
            >
              <div className="font-semibold">{format(day, "d")}</div>
              <div className="flex justify-center">
                {getWeatherIcon(forecast)}
              </div>
              {crop && (
                <div className="mt-1 text-[10px] text-green-700">
                  {crop.crop} phase
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CropCalendar;
