import React, { useState } from "react";
import '../scss/components/FlightFilters.scss';
import {FlightFiltersInterface} from "../interface";
import { TextField, Slider, Typography , Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";

interface Props {
  onFilter: (filters: FlightFiltersInterface) => void; 
}

const FlightFilters = ({ onFilter }: Props) => {
  const [search, setSearch] = useState("");
  const [date, setDate] = useState<Dayjs | null>(null);
  const [price, setPrice] = useState([0, 1500]);

  const handleFilter = () => {
    onFilter({ search,  date: date ? date.format("YYYY/MM/DD") : null, price });
  };

  return (
    <div className="flight-filter-main-container">
      <div className="flight-filter-wrapper">
        <TextField
          label="Search by Title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          variant="outlined"
          size="medium"
        />
        <DatePicker
          label="Select Date"
          value={date}
          onChange={(newDate) => setDate(newDate)}
        />
        <div className="flight-filter-range-wrapper">
          <Typography gutterBottom>Price Range (€)</Typography>
          <Slider
            value={price}
            onChange={(_, newValue) => setPrice(newValue as number[])}
            valueLabelDisplay="auto"
            min={0}
            max={1500}
          />
        </div>
        <Button variant="contained" onClick={handleFilter}>
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default FlightFilters;