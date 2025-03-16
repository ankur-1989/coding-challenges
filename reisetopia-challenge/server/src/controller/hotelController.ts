import axios from "axios";
import { Result } from "../model";
const url: string =
  "https://62752eb46d3bc09e106be684.mockapi.io/reisetopia-hotels/coding-challenge-ankur/hotels";

export const getHotels = async () => {
  const { data } = await axios.get<Result>(url);
  return data;
};
