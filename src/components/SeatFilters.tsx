import React, { useState, useEffect } from "react";
import '../scss/components/SeatFilters.scss';
import { Button, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { SeatFiltersInterface } from "../interface";

interface Props {
    onFilter: (filters: SeatFiltersInterface) => void; 
}

const SeatFilters = ({ onFilter }: Props) => {

    const [quantity, setQuantity] = useState(1);
    const [calculatedPrice, setCalculatedPrice] = useState<number>(635);
    const [filters, setFilters] = useState<SeatFiltersInterface>({
        hasWindow: false,
        hasLegSpace: false,
        closeToExit: false
    });

    const calculate = () => {
        setCalculatedPrice(635  * quantity);
    }

    const handleFilterChange = (filterName: keyof SeatFiltersInterface) => {
        setFilters(prevFilters => {
            const updatedFilters = { ...prevFilters, [filterName]: !prevFilters[filterName] };
            return updatedFilters;
        });
    };

    useEffect(() => {
        onFilter(filters);
    }, [filters])

    return (
        <div className="seat-filter-main-container">
             <fieldset className="seat-filter-wrapper">
                <legend>Seat Preferences</legend>
                <div className="checkbox-wrapper">
                    <FormControlLabel
                        control={<Checkbox />}
                        checked={filters.hasWindow}
                        onChange={() => handleFilterChange("hasWindow")}
                        label="Window Seat"
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        checked={filters.hasLegSpace}
                        onChange={() => handleFilterChange("hasLegSpace")}
                        label="Extra Legroom"
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        checked={filters.closeToExit}
                        onChange={() => handleFilterChange("closeToExit")}
                        label="Close to Exit"
                    />
                </div>
                <div className="quantity-wrapper">
                    <h3 className="price">${calculatedPrice}</h3>
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