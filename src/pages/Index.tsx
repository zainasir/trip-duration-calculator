import { useState } from "react";
import { StayForm } from "@/components/StayForm";
import { StayCard } from "@/components/StayCard";
import { differenceInDays } from "date-fns";

interface Stay {
  id: string;
  startDate: Date;
  endDate: Date;
}

const Index = () => {
  const [stays, setStays] = useState<Stay[]>([]);

  const handleAddStay = (stay: Omit<Stay, "id">) => {
    const newStay = {
      ...stay,
      id: crypto.randomUUID(),
    };
    setStays((prev) => [...prev, newStay]);
  };

  const handleDeleteStay = (id: string) => {
    setStays((prev) => prev.filter((stay) => stay.id !== id));
  };

  const totalDuration = stays.reduce((total, stay) => {
    return total + differenceInDays(stay.endDate, stay.startDate);
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">My US Stays</h1>
        
        <div className="mb-8">
          <StayForm onAddStay={handleAddStay} />
        </div>

        {stays.length > 0 && (
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground">
              Total duration: <span className="font-bold text-foreground">{totalDuration}</span> {totalDuration === 1 ? 'day' : 'days'}
            </p>
          </div>
        )}

        <div className="space-y-4">
          {stays.map((stay) => (
            <StayCard
              key={stay.id}
              startDate={stay.startDate}
              endDate={stay.endDate}
              onDelete={() => handleDeleteStay(stay.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;