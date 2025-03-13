import React from "react";
import { Button } from "@mui/material";

type SeatProps = {
  seatNumber: string;
  isOccupied: boolean;
  hasWindow: boolean;
  closeToExit: boolean;
  hasLegroom: boolean;
  isHighlighted?: boolean;
  onSelect: () => void;
};

function Seat({ seatNumber, isOccupied, isHighlighted, onSelect }: SeatProps) {
  return (
    <Button
      onClick={onSelect}
      disabled={isOccupied}
      sx={{
        width: 50,
        height: 50,
        margin: "5px",
        backgroundColor: isOccupied ? "#ddd" : isHighlighted ? "#FFD700" : "#4caf50",
        border: isOccupied ? "1px solid grey" : "3px solid green",
        color: "#fff",
        fontSize: "12px",
      }}
    >
      {seatNumber}
    </Button>
  );
};

export default Seat;