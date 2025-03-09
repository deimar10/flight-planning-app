import React from "react";
import '../scss/pages/FlightDetails.scss';
import { Button } from "@mui/material";
import { useNavigate} from 'react-router-dom';

function FlightDetails () {

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
                   
                </div>
                <div className="flight-details-column">
                
                </div>
            </div>
        </div>
    )
}

export default FlightDetails;
