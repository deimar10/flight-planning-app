import React, { useState } from "react";
import {FlightFiltersInterface} from "../interface";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import '../scss/pages/Home.scss';
import FlightFilters from '../components/FlightFilters';
import { useNavigate} from 'react-router-dom';
import pin from '/assets/pin.jpg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: "300px",
  height: "300px",
  display: "flex",
}));

function Home() {

    const navigate = useNavigate();

    const filters = [
        { id: 1, origin: "Tallinn", destination: "Madrid", startDate: "2025/03/07", endDate: "2025/03/14", price: 635},
        { id: 2, origin: "Tallinn", destination: "Roma", startDate: "2025/03/11", endDate: "2025/03/25", price: 1500},
        { id: 3, origin: "Tallinn", destination: "Berlin", startDate: "2025/03/11", endDate: "2025/03/25", price: 1500},
        { id: 4, origin: "Tallinn", destination: "Milano", startDate: "2025/03/11", endDate: "2025/03/25", price: 1500},
        { id: 5, origin: "Tallinn", destination: "Paris", startDate: "2025/03/11", endDate: "2025/03/14", price: 1500},
        { id: 6, origin: "Tallinn", destination: "Stockholm", startDate: "2025/03/07", endDate: "2025/03/14", price: 1500},
        { id: 7, origin: "Tallinn", destination: "Madrid", startDate: "2025/03/07", endDate: "2025/03/14", price: 1500},
        { id: 8, origin: "Tallinn", destination: "Madrid", startDate: "2025/03/07", endDate: "2025/03/14", price: 163},
        { id: 9, origin: "Tallinn", destination: "Madrid", startDate: "2025/03/07", endDate: "2025/03/14", price: 1500},
        { id: 10, origin: "Tallinn", destination: "Madrid", startDate: "2025/03/07", endDate: "2025/03/14", price: 163},
    ];

    const [filteredFlights, setfilteredFlights] = useState(filters);

    const handleFilter = ({ search, selectedStartDate, selectedEndDate, price }: FlightFiltersInterface) => {
        let filtered = filters;

        if (search) {
            filtered = filtered.filter((flight) =>flight.destination.toLowerCase().includes(search.toLowerCase()));
        }
        if (selectedStartDate && selectedEndDate) {
            filtered = filtered.filter((flight) => flight.startDate <= selectedStartDate && flight.endDate >= selectedEndDate);
           /*  filtered = filtered.filter((flight) => flight.startDate <= date && flight.endDate >= date); */
        }
        if (price.length === 2) {
            filtered = filtered.filter((flight) => flight.price >= price[0] && flight.price <= price[1]);
        }

        setfilteredFlights(filtered);
    };

    const handleFlight = (id: number) => {
        navigate(`/flight-details/${id}`);
    }

  return (
    <div className="home-main-container">
        <div className="home-column">
            <FlightFilters onFilter={handleFilter} />
        </div>
        <div className="home-column">
            <Box sx={{ flexGrow: 1, margin: "auto", padding: 2 }}>
                <Grid className="flight-grid" container spacing={2} justifyContent="center">
                    {filteredFlights.map((flight) => (
                        <Grid className="flight-card" size={{ xs: 12, sm: 3 }} sx={{ textAlign: "left" }} key={flight.id}>
                            <Item className="flight-card-item" sx={{ position: "relative" }} onClick={() => handleFlight(flight.id)}>
                                <img className="pin-img" src={pin} alt="pin" />
                                <div className="grid-price-tag">
                                    <h3>{flight.price}$</h3>
                                </div>
                            </Item>
                            <h2>{flight.origin} - {flight.destination}</h2>
                            <h3>{flight.startDate} - {flight.endDate}</h3>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    </div>
  );
}

export default Home;