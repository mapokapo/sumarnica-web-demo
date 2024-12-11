import DatePickerButton from "@/components/date-picker-button";
import SmartClassRoomReservationItem from "@/components/smart-class-room-reservation-item";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SmartClassRoom } from "@/lib/types/SmartClassRoom";
import { cn } from "@/lib/utils";
import { CircleCheck, CircleHelp, CircleX } from "lucide-react";
import React, { useMemo } from "react";

interface Props {
  smartClassRoom: SmartClassRoom;
}

const SmartClassRoomCard: React.FC<Props> = ({ smartClassRoom }) => {
  const occupationStatus = useMemo(() => {
    return smartClassRoom.reservations.length === 0
      ? "available"
      : smartClassRoom.reservations.some(
            r =>
              r.reservationFrom.getTime() < Date.now() &&
              r.reservationTo.getTime() > Date.now()
          )
        ? "occupied"
        : "reserved";
  }, [smartClassRoom.reservations]);

  return (
    <div className="flex w-full flex-col justify-between gap-4 rounded-xl bg-sum-blue p-5">
      <div className="flex items-start justify-between">
        <div className="flex h-full flex-col justify-evenly">
          <h2 className="-mt-1 text-2xl font-bold text-sum-red">
            {smartClassRoom.name}
          </h2>
          <span className="text-sum-blue-muted-foreground">
            {smartClassRoom.location.buildingName}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={cn("text-lg font-semibold", {
              "text-sum-red": occupationStatus === "occupied",
              "text-green-500": occupationStatus === "available",
              "text-yellow-500": occupationStatus === "reserved",
            })}>
            {occupationStatus === "occupied"
              ? "Zauzeto"
              : occupationStatus === "available"
                ? "Slobodno"
                : "Rezervirano"}
          </span>
          {occupationStatus === "occupied" ? (
            <CircleX
              className="text-red-500"
              size={24}
            />
          ) : occupationStatus === "reserved" ? (
            <CircleHelp
              className="text-yellow-500"
              size={24}
            />
          ) : (
            <CircleCheck
              className="text-green-500"
              size={24}
            />
          )}
        </div>
      </div>
      <Dialog>
        {smartClassRoom.reservations.length === 0 ? (
          <div className="flex flex-col gap-2">
            <p className="text-center text-sum-blue-muted-foreground">
              Ova pametna učionica nema nijednu rezervaciju.
            </p>
            <DialogTrigger asChild>
              <Button variant="sum">Rezerviraj</Button>
            </DialogTrigger>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {smartClassRoom.reservations.some(
              r =>
                r.reservationFrom.getTime() < Date.now() &&
                r.reservationTo.getTime() > Date.now()
            ) ? (
              <div className="flex flex-col rounded-lg border-2 border-sum-red">
                <span className="bg-sum-red p-2 text-sm text-sum-red-foreground">
                  Trenutni događaj
                </span>
                <div className="p-2">
                  <SmartClassRoomReservationItem
                    className="animate-pulse"
                    reservation={
                      smartClassRoom.reservations.find(
                        r =>
                          r.reservationFrom.getTime() < Date.now() &&
                          r.reservationTo.getTime() > Date.now()
                      ) as unknown as SmartClassRoom["reservations"][0]
                    }
                  />
                </div>
              </div>
            ) : occupationStatus === "reserved" ? (
              <span className="mb-4 text-center font-semibold text-yellow-400">
                Ova pametna učionica je rezervirana za budući datum.
              </span>
            ) : null}
            <DialogTrigger asChild>
              <Button variant="sum">Rezerviraj</Button>
            </DialogTrigger>
            <Collapsible className="flex flex-col gap-2">
              <CollapsibleTrigger asChild>
                <Button
                  variant="sum-secondary"
                  size="sm"
                  className="w-full">
                  Prikaži sve rezervacije
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <ol className="flex flex-col gap-2">
                  {smartClassRoom.reservations.map(reservation => (
                    <li key={reservation.id}>
                      <SmartClassRoomReservationItem
                        key={reservation.id}
                        reservation={reservation}
                      />
                    </li>
                  ))}
                </ol>
              </CollapsibleContent>
            </Collapsible>
          </div>
        )}
        <DialogContent className="border-none bg-sum-blue text-sum-blue-foreground">
          <DialogHeader>
            <DialogTitle>Rezervacija pametne učionice</DialogTitle>
            <DialogDescription className="text-sum-blue-muted-foreground">
              Rezervirajte ovu pametnu učionicu za svoje predavanje ili
              radionicu.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col">
            <DatePickerButton
              className="w-full"
              label="Izaberi datum"
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="sum-secondary">Zatvori</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SmartClassRoomCard;
