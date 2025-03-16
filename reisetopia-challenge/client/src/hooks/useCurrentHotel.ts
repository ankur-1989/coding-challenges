import { useState } from "react";


export const useCurrentHotel = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [hotelId, setHotelId] = useState<number | undefined>();

  return {
    goToSlide,
    setGoToSlide,
    hotelId,
    setHotelId,
  };
};
