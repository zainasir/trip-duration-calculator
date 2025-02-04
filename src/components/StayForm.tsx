import { useState } from 'react';
import { Button } from "@/components/ui/button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

interface StayFormProps {
  onAddStay: (stay: { startDate: Date; endDate: Date }) => void;
}

export const StayForm = ({ onAddStay }: StayFormProps) => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (startDate && endDate) {
      onAddStay({ startDate, endDate });
      setStartDate(undefined);
      setEndDate(undefined);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-lg shadow-sm">
      <div className="flex gap-4">
        <div className="relative w-full">
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Start date"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            className={cn(
              "w-full px-3 py-2 border rounded-md",
              "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "pl-10" // Space for the calendar icon
            )}
            dateFormat="PPP"
          />
          <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        </div>

        <div className="relative w-full">
          <DatePicker
            selected={endDate}
            onChange={(date: Date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="End date"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            className={cn(
              "w-full px-3 py-2 border rounded-md",
              "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "pl-10" // Space for the calendar icon
            )}
            dateFormat="PPP"
          />
          <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        </div>
      </div>

      <Button type="submit" className="w-full">Add Stay</Button>
    </form>
  );
};