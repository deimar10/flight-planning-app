import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./Theme";

function App() {

  return (
    <>
     <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Ensures consistent styles across browsers */}
        <div className="App">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <BrowserRouter>
              <Routes>
                  <Route index element={<Home/>}
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
