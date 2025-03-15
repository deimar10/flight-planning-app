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
        width: '60px', 
        height: '60px', 
        margin: '5px',
        transition: '0.2s',
        '&:hover': { backgroundColor: isHighlighted ? "#1a237e" : "#388e3c" },
        backgroundColor: isOccupied ? "#ddd" : isHighlighted ? "#3f51b5" : "#4caf50",
        border: isOccupied ? "1px solid grey" : isHighlighted ? "3px solid #1a237e" : "3px solid green",
        color: "#fff",
        fontSize: "12px",
        borderRadius: '8px', 
      }}
    >
      {seatNumber}
    </Button>
  );
};

export default Seat;