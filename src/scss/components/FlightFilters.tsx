import React, { useState } from "react";
import {FlightFiltersInterface} from "../../interface";
import { TextField, Slider, Typography , Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";

interface Props {
  onFilter: (filters: FlightFiltersInterface) => void; 
}

const FlightFilters = ({ onFilter }: Props) => {
  const [search, setSearch] = useState("");
  const [date, setDate] = useState<Dayjs | null>(null);
  const [price, setPrice] = useState([100, 1500]);

  const handleFilter = () => {
    onFilter({ search,  date: date ? date.format("YYYY/MM/DD") : null, price });
  };

  return (
    <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
      <TextField
        label="Search by Title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        variant="outlined"
        size="small"
      />
      <DatePicker
        label="Select Date"
        value={date}
        onChange={(newDate) => setDate(newDate)}
      />
      <div>
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
  );
};

export default FlightFilters;