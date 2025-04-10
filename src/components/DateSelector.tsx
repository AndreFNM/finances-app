"use client";
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());


return (
    <div className="w-full flex justify-center mt-6">
        <div className="bg-gray-700 p-2 rounded shadow">
            <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            className="bg-gray-900 border border-gray-600 rounded px-3 py-2 text-sm text-white focus:outline-none focus:ring focus:border-teal-400"
            showMonthYearPicker />
        </div>

    </div>
    )
}

export default DateSelector;
