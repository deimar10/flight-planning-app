import { useEffect, useState } from 'react';
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import FlightDetails from './pages/FlightDetails';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./Theme";
import axios from 'axios';
import { FlightDataInterface } from './interface';

function App() {

  const [flights, setFlights] = useState<FlightDataInterface[]>([]);

  const getFlights = () => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}`)
      .then(response => {
        const changeDateFormat = response.data?.map((flight: FlightDataInterface) => {
          const startDate = new Date(flight.startDate);
          const endDate = new Date(flight.endDate);

          // Ensure MM/DD/YYYY format with leading zeros
          const formatDate = (date: Date) => {
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const year = date.getFullYear();
            return `${month}/${day}/${year}`;
          };

          return {
            ...flight,
            startDate: formatDate(startDate),
            endDate: formatDate(endDate),
          };
        });
        setFlights(changeDateFormat || []);
      })
      .catch(error => console.error("Error fetching campaigns:", error));
  };
   
  useEffect(() => {
      getFlights();
  },[]);

  return (
    <>
     <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Ensures consistent styles across browsers */}
        <div className="App">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <BrowserRouter>
              <Routes>
                  <Route index element={<Home
                    flights={flights}
                  />}
                  />
                  <Route path="/flight-details/:id" element={<FlightDetails 
                    flights={flights}
                  />}
                  />
              </Routes>
            </BrowserRouter>
          </LocalizationProvider>
      </div>
     </ThemeProvider>
    </>
  )
}

export default App
