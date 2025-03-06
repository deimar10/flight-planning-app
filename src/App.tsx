import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {

  return (
    <>
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
    </>
  )
}

export default App
