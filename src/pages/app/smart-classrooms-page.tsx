import SmartClassRoomCard from "@/components/smart-class-room-card";
import { SmartClassRoom } from "@/lib/types/SmartClassRoom";
import React, { useState } from "react";

const smartClassRoomsMockData: SmartClassRoom[] = [
  {
    id: "1",
    name: "Smart Room 1",
    reservations: [
      {
        id: "r1",
        leaderId: "leader1",
        leaderName: "Ana Kovač",
        reservationFrom: new Date("2024-12-10T10:00:00"),
        reservationTo: new Date("2024-12-10T13:00:00"),
        participants: [],
      },
      {
        id: "r2",
        leaderId: "leader2",
        leaderName: "Marko Perić",
        reservationFrom: new Date("2024-12-11T13:00:00"),
        reservationTo: new Date("2024-12-11T16:00:00"),
        participants: [
          { userId: "user1", userName: "Ivan Horvat" },
          { userId: "user2", userName: "Marta Jurić" },
        ],
      },
    ],
    location: {
      buildingId: "b1",
      buildingName: "Main Building",
      buildingAddress: "123 University St.",
      classRoomNumber: "101",
    },
  },
  {
    id: "2",
    name: "Smart Room 2",
    reservations: [],
    location: {
      buildingId: "b1",
      buildingName: "Main Building",
      buildingAddress: "123 University St.",
      classRoomNumber: "102",
    },
  },
  {
    id: "3",
    name: "Smart Room 3",
    reservations: [
      {
        id: "r3",
        leaderId: "leader3",
        leaderName: "Luka Radić",
        reservationFrom: new Date("2024-12-10T14:00:00"),
        reservationTo: new Date("2024-12-10T17:00:00"),
        participants: [{ userId: "user3", userName: "Petar Novak" }],
      },
    ],
    location: {
      buildingId: "b2",
      buildingName: "Engineering Annex",
      buildingAddress: "456 Technology Ave.",
      classRoomNumber: "201",
    },
  },
  {
    id: "4",
    name: "Smart Room 4",
    reservations: [
      {
        id: "r4",
        leaderId: "leader4",
        leaderName: "Vanja Šarić",
        reservationFrom: new Date("2024-12-12T08:00:00"),
        reservationTo: new Date("2024-12-12T09:00:00"),
        participants: [],
      },
      {
        id: "r5",
        leaderId: "leader5",
        leaderName: "David A. Patterson",
        reservationFrom: new Date("2024-12-13T10:00:00"),
        reservationTo: new Date("2024-12-13T12:00:00"),
        participants: [
          { userId: "user4", userName: "Thomas H. Cormen" },
          { userId: "user5", userName: "Paul Horowitz" },
        ],
      },
    ],
    location: {
      buildingId: "b3",
      buildingName: "Economics Building",
      buildingAddress: "789 Market Blvd.",
      classRoomNumber: "303",
    },
  },
  {
    id: "5",
    name: "Smart Room 5",
    reservations: [],
    location: {
      buildingId: "b2",
      buildingName: "Engineering Annex",
      buildingAddress: "456 Technology Ave.",
      classRoomNumber: "202",
    },
  },
  {
    id: "6",
    name: "Smart Room 6",
    reservations: [
      {
        id: "r6",
        leaderId: "leader6",
        leaderName: "Ana Novak",
        reservationFrom: new Date("2024-12-14T15:00:00"),
        reservationTo: new Date("2024-12-14T18:00:00"),
        participants: [
          { userId: "user6", userName: "Marta Jurić" },
          { userId: "user7", userName: "Marko Perić" },
        ],
      },
    ],
    location: {
      buildingId: "b1",
      buildingName: "Main Building",
      buildingAddress: "123 University St.",
      classRoomNumber: "103",
    },
  },
  {
    id: "7",
    name: "Smart Room 7",
    reservations: [],
    location: {
      buildingId: "b3",
      buildingName: "Economics Building",
      buildingAddress: "789 Market Blvd.",
      classRoomNumber: "304",
    },
  },
  {
    id: "8",
    name: "Smart Room 8",
    reservations: [
      {
        id: "r7",
        leaderId: "leader7",
        leaderName: "Petar Horvat",
        reservationFrom: new Date("2024-12-15T09:00:00"),
        reservationTo: new Date("2024-12-15T12:00:00"),
        participants: [{ userId: "user8", userName: "Ivan Horvat" }],
      },
      {
        id: "r8",
        leaderId: "leader8",
        leaderName: "Luka Radić",
        reservationFrom: new Date("2024-12-16T14:00:00"),
        reservationTo: new Date("2024-12-16T15:00:00"),
        participants: [],
      },
    ],
    location: {
      buildingId: "b4",
      buildingName: "Library Building",
      buildingAddress: "101 Knowledge Ln.",
      classRoomNumber: "401",
    },
  },
  {
    id: "9",
    name: "Smart Room 9",
    reservations: [
      {
        id: "r9",
        leaderId: "leader9",
        leaderName: "Ana Kovač",
        reservationFrom: new Date("2024-12-17T10:00:00"),
        reservationTo: new Date("2024-12-17T14:00:00"),
        participants: [
          { userId: "user9", userName: "Paul Horowitz" },
          { userId: "user10", userName: "Petar Novak" },
        ],
      },
    ],
    location: {
      buildingId: "b4",
      buildingName: "Library Building",
      buildingAddress: "101 Knowledge Ln.",
      classRoomNumber: "402",
    },
  },
  {
    id: "10",
    name: "Smart Room 10",
    reservations: [],
    location: {
      buildingId: "b2",
      buildingName: "Engineering Annex",
      buildingAddress: "456 Technology Ave.",
      classRoomNumber: "203",
    },
  },
].map(e => ({
  ...e,
  reservations: e.reservations.toSorted(
    (a, b) => a.reservationFrom.getTime() - b.reservationFrom.getTime()
  ),
}));

const SmartClassroomsPage: React.FC = () => {
  const [smartClassRooms, setSmartClassRooms] = useState<SmartClassRoom[]>(
    smartClassRoomsMockData
  );

  const handleAddReservation = (
    smartClassRoom: SmartClassRoom,
    reservation: Omit<SmartClassRoom["reservations"][number], "id">
  ): [string | null] => {
    if (
      reservation.reservationFrom.getTime() >=
      reservation.reservationTo.getTime()
    ) {
      return ["Reservation start time must be before end time"];
    }

    for (const r of smartClassRoom.reservations) {
      if (
        r.reservationFrom.getTime() < reservation.reservationTo.getTime() &&
        r.reservationTo.getTime() > reservation.reservationFrom.getTime()
      ) {
        return ["Reservation overlaps with another reservation"];
      }
    }

    setSmartClassRooms(prev => {
      const updatedSmartClassRooms = prev.map(scr => {
        if (scr.id === smartClassRoom.id) {
          return {
            ...scr,
            reservations: scr.reservations
              .concat({
                ...reservation,
                id: `r${(scr.reservations.length + 1).toString()}`,
              })
              .toSorted(
                (a, b) =>
                  a.reservationFrom.getTime() - b.reservationFrom.getTime()
              ),
          };
        }
        return scr;
      });

      return updatedSmartClassRooms;
    });

    return [null];
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-16 bg-white bg-gradient-to-br from-white to-sum-blue/25">
      <section className="flex w-full flex-1 flex-col gap-4 p-4 py-16 pt-16 lg:w-5/6 2xl:w-4/6">
        <h1 className="text-center text-5xl font-bold text-sum-blue">
          Pametne učionice
        </h1>
        <p className="text-center text-lg font-semibold text-sum-blue">
          Rezervirajte pametnu učionicu za svoje predavanje ili radionicu, ili
          pregledajte dostupne pametne učionice na sveučilištu.
        </p>
        <ul className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {smartClassRooms.map(smartClassRoom => (
            <li
              key={smartClassRoom.id}
              className="flex w-full">
              <SmartClassRoomCard
                smartClassRoom={smartClassRoom}
                onAddReservation={r => handleAddReservation(smartClassRoom, r)}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SmartClassroomsPage;
