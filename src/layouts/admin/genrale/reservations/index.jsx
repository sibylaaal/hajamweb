import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const appointments = [
  { id: 1, day: "Monday", time: "09:00", clientName: "John Doe" },
  { id: 2, day: "Monday", time: "11:00", clientName: "Jane Smith" },
  { id: 3, day: "Tuesday", time: "10:00", clientName: "Alice Johnson" },
  { id: 4, day: "Wednesday", time: "14:00", clientName: "Bob Brown" },
  { id: 5, day: "Friday", time: "16:00", clientName: "Eva White" },
  { id: 6, day: "Saturday", time: "11:00", clientName: "Frank Miller" },
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const timeSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

export default function BarberSchedule() {
  const [currentWeek, setCurrentWeek] = useState(0);

  const getAppointment = (day, time) => {
    return appointments.find((apt) => apt.day === day && apt.time === time);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <div className="bg-white  rounded-lg ">
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <h2 className="text-2xl font-semibold">Barber's Weekly Schedule</h2>
          <div className="flex items-center space-x-2">
            <button
              className="p-2 text-gray-600 hover:text-black"
              onClick={() => setCurrentWeek((prev) => prev - 1)}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-lg">Week {currentWeek}</span>
            <button
              className="p-2 text-gray-600 hover:text-black"
              onClick={() => setCurrentWeek((prev) => prev + 1)}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Schedule Grid */}
        <div className="p-4 overflow-x-auto">
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr>
                <th className="w-1/6 p-2 border border-gray-300 text-left">Time</th>
                {days.map((day) => (
                  <th key={day} className="w-1/6 p-2 border border-gray-300 text-left">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((time) => (
                <tr key={time}>
                  <td className="p-2 border border-gray-300">{time}</td>
                  {days.map((day) => {
                    const appointment = getAppointment(day, time);
                    return (
                      <td
                        key={`${day}-${time}`}
                        className="p-2 border border-gray-300 text-center"
                      >
                        {appointment ? (
                          <div className="bg-[#1FAE72] text-white p-2 rounded">
                            {appointment.clientName}
                          </div>
                        ) : (
                          ""
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
