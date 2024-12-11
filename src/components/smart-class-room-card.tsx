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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppUser } from "@/lib/context/user-context";
import { SmartClassRoom } from "@/lib/types/SmartClassRoom";
import { cn } from "@/lib/utils";
import { addMinutes } from "date-fns";
import { CircleCheck, CircleHelp, CircleX } from "lucide-react";
import React, { useMemo, useState } from "react";
import { toast } from "sonner";

interface Props {
  smartClassRoom: SmartClassRoom;
  onAddReservation?: (
    reservation: Omit<SmartClassRoom["reservations"][number], "id">
  ) => [string | null];
}

const SmartClassRoomCard: React.FC<Props> = ({
  smartClassRoom,
  onAddReservation,
}) => {
  const { user } = useAppUser();

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

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [durationMinutes, setDurationMinutes] = useState(60);
  const [addedParticipants, setAddedParticipants] = useState<
    SmartClassRoom["reservations"][number]["participants"]
  >([]);
  const [newParticipantId, setNewParticipantId] = useState("");

  const handleAddReservation = () => {
    if (onAddReservation) {
      const [error] = onAddReservation({
        reservationFrom: startDate,
        reservationTo: addMinutes(startDate, durationMinutes),
        leaderId: user.id,
        leaderName: user.name,
        participants: addedParticipants,
      });

      if (error) {
        toast.error(error);
        return;
      }
    }

    setAddedParticipants([]);
    setModalIsOpen(false);
  };

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
      <Dialog
        open={modalIsOpen}
        onOpenChange={isOpen => setModalIsOpen(isOpen)}>
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
            {smartClassRoom.reservations.filter(
              r =>
                r.reservationFrom.getTime() < Date.now() &&
                r.reservationTo.getTime() > Date.now()
            ).length !== 0 ? (
              <div className="flex flex-col rounded-lg border-2 border-sum-red">
                <span className="bg-sum-red p-2 text-sm text-sum-red-foreground">
                  Trenutni događaji
                </span>
                <div className="flex flex-col gap-2 p-2">
                  {smartClassRoom.reservations
                    .filter(
                      r =>
                        r.reservationFrom.getTime() < Date.now() &&
                        r.reservationTo.getTime() > Date.now()
                    )
                    .map(reservation => (
                      <SmartClassRoomReservationItem
                        key={reservation.id}
                        reservation={reservation}
                      />
                    ))}
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
              Rezervirate učionicu na ime {user.name}.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2 text-sum-blue-foreground">
            <div className="flex items-center gap-2">
              <Label
                htmlFor="startDate"
                className="whitespace-nowrap">
                Početak
              </Label>
              <DatePickerButton
                className="w-full text-foreground"
                id="startDate"
                label="Izaberi datum"
                dateValue={startDate}
                onPickDate={setStartDate}
              />
            </div>
            <div className="flex items-center gap-2">
              <Label
                htmlFor="duration"
                className="whitespace-nowrap">
                Trajanje (u minutama)
              </Label>
              <Input
                className="w-full text-foreground"
                type="number"
                id="duration"
                placeholder="Trajanje (u minutama)"
                value={durationMinutes}
                onChange={e => setDurationMinutes(Number(e.target.value))}
              />
            </div>
            <div className="flex gap-2">
              <Input
                className="w-full text-foreground"
                placeholder="Unesite ID sudionika"
                value={newParticipantId}
                onChange={e => setNewParticipantId(e.target.value)}
              />
              <Button
                variant="sum-secondary"
                onClick={() => {
                  setAddedParticipants([
                    ...addedParticipants,
                    {
                      userId: newParticipantId,
                      userName: `Sudionik ID ${newParticipantId}`,
                    },
                  ]);
                  setNewParticipantId("");
                }}>
                Dodaj
              </Button>
            </div>
            {addedParticipants.length === 0 ? (
              <p className="text-center text-sum-blue-muted-foreground">
                Nema dodanih sudionika.
              </p>
            ) : (
              <ul className="m-4 flex flex-col gap-2">
                {addedParticipants.map((participant, i) => (
                  <li
                    className="flex rounded-md bg-sum-blue-muted px-1"
                    key={participant.userId}>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-bold">{i + 1}</span>
                      <span>{participant.userName}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <DialogFooter>
            <Button
              onClick={handleAddReservation}
              variant="sum">
              Rezerviraj
            </Button>
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
