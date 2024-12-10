export interface SmartClassRoom {
  id: string;
  name: string;
  reservations: {
    id: string;
    leaderId: string;
    leaderName: string;
    reservationFrom: Date;
    reservationTo: Date;
    participants: {
      userId: string;
      userName: string;
    }[];
  }[];
  location: {
    buildingId: string;
    buildingName: string;
    buildingAddress: string;
    classRoomNumber: string;
  };
}
