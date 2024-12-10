import { SmartClassRoom } from "@/lib/types/SmartClassRoom";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  reservation: SmartClassRoom["reservations"][number];
}

const SmartClassRoomReservationItem: React.FC<Props> = ({
  reservation,
  className,
}) => {
  return (
    <div
      className={cn(
        "text-bg-sum-blue-foreground flex items-center gap-2 rounded-md bg-white bg-gradient-to-br from-white to-sum-blue/25 p-1",
        className
      )}>
      <span className="rounded-md bg-sum-blue-muted px-1 font-bold text-sum-blue-foreground">
        {format(reservation.reservationFrom, "HH:mm")} -{" "}
        {format(reservation.reservationTo, "HH:mm")}
      </span>
      <span>{reservation.leaderName}</span>
      {
        <span className="ml-auto mr-1 text-sum-blue-muted">
          {reservation.participants.length === 0
            ? 1
            : reservation.participants.length}{" "}
          sudionik
          {reservation.participants.length > 1 ? "a" : ""}
        </span>
      }
    </div>
  );
};

export default SmartClassRoomReservationItem;
