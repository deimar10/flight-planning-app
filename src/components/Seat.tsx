import React from "react";
import { Button } from "@mui/material";

type SeatProps = {
  seatNumber: string;
  isOccupied: boolean;
  hasWindow: boolean;
  closeToExit: boolean;
  hasLegroom: boolean;
  onSelect: () => void;
};

function Seat({seatNumber, isOccupied, hasWindow, closeToExit, hasLegroom, onSelect }: SeatProps) {
    
  return (
    <Button
      onClick={onSelect}
      disabled={isOccupied}
      sx={{
        width: 50,
        height: 50,
        margin: "5px",
        backgroundColor: isOccupied ? "#ddd" : "#4caf50",
        border: hasWindow ? "3px solid blue" : closeToExit ? "3px solid orange" : hasLegroom ? "3px solid green" : "1px solid gray",
        color: "#fff",
        fontSize: "12px",
      }}
    >
      {seatNumber}
    </Button>
  );
};

export default Seat;