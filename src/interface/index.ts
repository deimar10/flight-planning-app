export interface FlightFiltersInterface {
    search: string;
    selectedStartDate: string | null;
    selectedEndDate: string | null;
    price: number[];
}

export interface FlightDataInterface {
    id: number,
    origin: string,
    destination: string,
    startDate: string,
    endDate: string,
    price: number
}