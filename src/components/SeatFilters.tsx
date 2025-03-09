import React, { useState } from "react";
import '../scss/components/SeatFilters.scss';
import { Button, TextField, FormControlLabel, Checkbox } from "@mui/material";

const SeatFilters = () => {

    const [quantity, setQuantity] = useState(1);

    return (
        <div className="seat-filter-main-container">
             <fieldset className="seat-filter-wrapper">
                <legend>Seat Preferences</legend>
                <div className="checkbox-wrapper">
                    <FormControlLabel
                        control={<Checkbox id="window" value="window" />}
                        label="Window Seat"
                    />
                    <FormControlLabel
                        control={<Checkbox id="leg-space" value="leg-space" />}
                        label="Extra Legroom"
                    />
                    <FormControlLabel
                        control={<Checkbox id="exit" value="close-to-exit" />}
                        label="Close to Exit"
                    />
                </div>
                <div className="quantity-wrapper">
                    <h3 className="price">$635</h3>
                    <TextField
                        type="number"
                        label="Seats"
                        variant="outlined"
                        size="medium"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                        inputProps={{ min: 1, max: 10 }}
                    />
                <Button variant="contained">Apply filters</Button>
                </div>
            </fieldset>
        </div>
    )
}

export default SeatFilters;