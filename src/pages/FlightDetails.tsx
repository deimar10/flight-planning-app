import React, { useState } from "react";
import '../scss/pages/FlightDetails.scss';
import SeatFilters from "../components/SeatFilters";
import { Button } from "@mui/material";
import { useNavigate} from 'react-router-dom';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Seat from "../components/Seat";

function FlightDetails () {

    const sampleSeats = [
        { id: 1, seatNumber: "1A", isOccupied: false, hasWindow: true, closeToExit: false, hasLegroom: false },
        { id: 2, seatNumber: "1B", isOccupied: true, hasWindow: false, closeToExit: false, hasLegroom: false },
        { id: 3, seatNumber: "1C", isOccupied: false, hasWindow: false, closeToExit: true, hasLegroom: false },
        { id: 4, seatNumber: "2A", isOccupied: false, hasWindow: true, closeToExit: false, hasLegroom: true },
        { id: 5, seatNumber: "2B", isOccupied: false, hasWindow: false, closeToExit: false, hasLegroom: false },
        { id: 6, seatNumber: "2C", isOccupied: false, hasWindow: true, closeToExit: false, hasLegroom: false },
        { id: 7, seatNumber: "3A", isOccupied: true, hasWindow: false, closeToExit: false, hasLegroom: false },
        { id: 8, seatNumber: "3B", isOccupied: true, hasWindow: false, closeToExit: true, hasLegroom: false },
        { id: 9, seatNumber: "3C", isOccupied: false, hasWindow: true, closeToExit: false, hasLegroom: true },
        { id: 10, seatNumber: "4A", isOccupied: false, hasWindow: false, closeToExit: false, hasLegroom: false },
        { id: 11, seatNumber: "4B", isOccupied: false, hasWindow: false, closeToExit: false, hasLegroom: true },
        { id: 12, seatNumber: "4C", isOccupied: true, hasWindow: false, closeToExit: false, hasLegroom: true },
    ];

    const seatsPerRow = 6;
    const aisleIndex = Math.floor(seatsPerRow / 2);

    const [selectedSeat, setSelectedSeat] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleNavigateBack = () => {
        navigate(-1);
    }

    return (
        <div className="flight-details-main-container">
            <div className="flight-details-top-bar-wrapper">
                <Button variant="contained" onClick={handleNavigateBack}>Go back</Button>
            </div>
            <div className="flight-details-column-wrapper">
                <div className="flight-details-column">
                    <SeatFilters />
                </div>
                <div className="flight-details-column">
                    <Typography variant="h5" gutterBottom>Seating Plan</Typography>
                    {/* <Grid className="flight-details-grid" container spacing={1} justifyContent="center">
                        {sampleSeats.map((seat) => (
                            <Grid className="flight-details-card" size={{ xs: 12, sm: 2 }}  key={seat.id}>
                                <Seat
                                    seatNumber={seat.seatNumber}
                                    isOccupied={seat.isOccupied}
                                    hasWindow={seat.hasWindow}
                                    closeToExit={seat.closeToExit}
                                    hasLegroom={seat.hasLegroom}
                                    onSelect={() => setSelectedSeat(seat.seatNumber)}
                                />
                            </Grid>
                        ))}
                    </Grid> */}
                    <Grid container spacing={2} direction="column">
                        {Array.from({ length: Math.ceil(sampleSeats.length / seatsPerRow) }, (_, rowIndex) => {
                        const rowSeats = sampleSeats.slice(rowIndex * seatsPerRow, (rowIndex + 1) * seatsPerRow);
                            return (
                                <Grid key={rowIndex} container spacing={1} justifyContent="center" alignItems="center">
                                    {rowSeats.map((seat, seatIndex) => (
                                        <React.Fragment key={seat.id}>
                                            {/* Aisle Space Before Right-Side Seats */}
                                            {seatIndex === aisleIndex && <Grid style={{ width: "50px" }} />}
                                            <Grid  key={seat.id}>
                                                <Seat
                                                    seatNumber={seat.seatNumber}
                                                    isOccupied={seat.isOccupied}
                                                    hasWindow={seat.hasWindow}
                                                    closeToExit={seat.closeToExit}
                                                    hasLegroom={seat.hasLegroom}
                                                    onSelect={() => setSelectedSeat(seat.seatNumber)}
                                                />
                                            </Grid>
                                        </React.Fragment>
                                    ))}
                                </Grid>
                            );
                        })}
                    </Grid>
                    {selectedSeat && <Typography>Selected Seat: {selectedSeat}</Typography>}
                </div>
            </div>
        </div>
    )
}

export default FlightDetails;
