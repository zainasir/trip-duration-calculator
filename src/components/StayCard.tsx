import { format, differenceInDays } from "date-fns";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Trash2 } from "lucide-react";

interface StayCardProps {
  location: string;
  startDate: Date;
  endDate: Date;
  onDelete: () => void;
}

export const StayCard = ({ location, startDate, endDate, onDelete }: StayCardProps) => {
  const duration = differenceInDays(endDate, startDate);

  return (
    <Card className="fade-in">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">{location}</CardTitle>
        <Button variant="ghost" size="icon" onClick={onDelete} className="text-destructive">
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4" />
            <span>{format(startDate, "PPP")} - {format(endDate, "PPP")}</span>
          </div>
          <div className="flex items-center text-sm font-medium">
            <MapPin className="mr-2 h-4 w-4" />
            <span>{duration} {duration === 1 ? 'day' : 'days'}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};