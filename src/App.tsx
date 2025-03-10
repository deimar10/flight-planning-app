import React, { useEffect, useState } from 'react';
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
   
  useEffect(() => {
    axios.get('http://localhost:8080/api/flights')
      .then(response => {
        console.log("Fetched flights:", response.data);
        setFlights(response.data || []);
      })
      .catch(error => console.error("Error fetching campaigns:", error));
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
                  <Route path="/flight-details/:id" element={<FlightDetails/>}
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
