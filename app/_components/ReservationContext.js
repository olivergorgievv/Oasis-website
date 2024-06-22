"use client";

import { createContext, useContext, useState } from "react";

const reservationContext = createContext();
const initialState = { from: undefined, to: undefined };

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);

  const resetRange = () => {
    setRange(initialState);
  };

  return (
    <reservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </reservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(reservationContext);
  if (context === undefined)
    throw new Error("Context was used outside provider!");
  return context;
}

export { ReservationProvider, useReservation };
