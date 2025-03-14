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

export interface SeatFiltersInterface {
    hasWindow: boolean,
    hasLegSpace: boolean,
    closeToExit: boolean
}

export interface SeatDataInterface {
    id: number,
    flightId: number,
    seatNumber: string
    isOccupied: boolean,
    hasWindow: boolean,
    closeToExit: boolean,
    hasLegroom: boolean
}