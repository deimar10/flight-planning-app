import React, { useState, useEffect } from "react";
import '../scss/pages/FlightDetails.scss';
import SeatFilters from "../components/SeatFilters";
import { Button } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Seat from "../components/Seat";
import { FlightDataInterface, SeatFiltersInterface } from "../interface";
import { SeatDataInterface } from '../interface';
import axios from "axios";

interface Props {
    flights: FlightDataInterface[],
}

function FlightDetails ({flights}: Props) {

    const { id } = useParams();

    const [seats, setSeats] = useState<SeatDataInterface[]>([]);
    const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
    const [filters, setFilters] = useState<SeatFiltersInterface>({
        hasWindow: false,
        hasLegSpace: false,
        closeToExit: false,
    });
    const [flightInfo, setFlightInfo] = useState({
        id: 0,
        destination: '',
        price: 0,
    });
    
    const seatsPerRow = 6;
    const aisleIndex = Math.floor(seatsPerRow / 2);

    const navigate = useNavigate();
    
    const handleNavigateBack = () => {
        navigate(-1);
    }
    
    const handleFilter = (selectedFilters: SeatFiltersInterface) => {
        setFilters(selectedFilters);
    };

    const getFlightInfo = () => {
        flights.forEach((flight: FlightDataInterface) => {
            if (flight.id === Number(id)) {
                setFlightInfo(prevInfo => ({
                    ...prevInfo,
                    id: flight.id,
                    destination: flight.destination,
                    price: flight.price
                }));
            }
        });
    };

    useEffect(() => {
        if (id) {
            axios.get(`${import.meta.env.VITE_API_BASE_URL}/${id}/seats`)
            .then(response => setSeats(response.data))
            .catch(error => console.error("Error fetching seats:", error));
        }
     }, [id]);

     useEffect(() => {
        if (flights.length > 0) {
            getFlightInfo();
        }
    }, [flights]); 

    return (
        <div className="flight-details-main-container">
            <div className="flight-details-top-bar-wrapper">
                <Button variant="contained" onClick={handleNavigateBack}>Go back</Button>
            </div>
            <div className="flight-details-column-wrapper">
                <div className="flight-details-column">
                    <SeatFilters 
                        onFilter={handleFilter}
                        price={flightInfo.price}
                    />
                </div>
                <div className="flight-details-column">
                    <Typography variant="h4" gutterBottom>Select Your Seat – {flightInfo.destination} Flight</Typography>
                    <Grid className="flight-details-seat-grid" container spacing={2} direction="column">
                        {Array.from({ length: Math.ceil(seats.length / seatsPerRow) }, (_, rowIndex) => {
                        const rowSeats = seats.slice(rowIndex * seatsPerRow, (rowIndex + 1) * seatsPerRow);
                            return (
                                <Grid key={rowIndex} container spacing={1} justifyContent="center" alignItems="center">
                                    {rowSeats.map((seat, seatIndex) => (
                                        <React.Fragment key={seat.id}>
                                            {/* Aisle Space Before Right-Side Seats */}
                                            {seatIndex === aisleIndex && <Grid style={{ width: "50px" }} />}
                                            <Grid key={seat.id}>
                                                <Seat
                                                    seatNumber={seat.seatNumber}
                                                    isOccupied={seat.isOccupied}
                                                    hasWindow={seat.hasWindow}
                                                    closeToExit={seat.closeToExit}
                                                    hasLegroom={seat.hasLegroom}
                                                    onSelect={() => setSelectedSeat(seat.seatNumber)}
                                                    isHighlighted={
                                                        (filters.hasWindow && seat.hasWindow) ||
                                                        (filters.hasLegSpace && seat.hasLegroom) ||
                                                        (filters.closeToExit && seat.closeToExit)
                                                    }
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
