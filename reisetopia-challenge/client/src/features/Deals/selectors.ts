import { RootState } from "../../app/store";
import { createSelector } from "@reduxjs/toolkit";
import { hotelsSlice } from "./reducer";

export const getAllHotels = (state: RootState) => state.hotelsList.hotels;

export const getFirstFiveHotels = createSelector(getAllHotels, (hotels) =>
  hotels.slice(0, 5)
);

export const getFetchStatus = (state: RootState) => state.hotelsList.status;

const selectHotelId = (state: RootState, hotelId: number) => hotelId;

export const getFirstHotelId = createSelector(
  getAllHotels,
  (hotels) => hotels[0].id
);

export const getHotelByHotelId = createSelector(
  [getAllHotels, selectHotelId],
  (hotels, hotelId) => hotels.filter((hotel) => hotel.id === hotelId)[0]
);

export const getDealsByHotelId = createSelector(
  [getHotelByHotelId],
  (hotel) => hotel?.deals
);

export const getBenefitsByHotelId = createSelector(
  [getHotelByHotelId],
  (hotel) => hotel?.benefits
);

export const getImagesByHotelId = createSelector(
  [getAllHotels, selectHotelId],
  (hotels, hotelId) =>
    hotels.filter((hotel) => hotel.id === hotelId).map((hotel) => hotel.images)
);
