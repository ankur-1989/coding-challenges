import { useEffect } from "react";
import "./deals.css";
import { HTTP_STATUS } from "../../app/constants";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchHotels } from "./reducer";
import { getFirstFiveHotels, getFetchStatus } from "./selectors";
import Loader from "../../components/Loader/Loader.component";
import ImageContainer from "../../components/ImageContainer/ImageContainer.component";
import starIcon from "../../images/staricon.svg";
import Slider from "../../components/Slider/Slider.component";
import DealDetails from "./DealDetails";

export default function Deals() {
  const dispatch = useAppDispatch();
  const fetchStatus = useAppSelector(getFetchStatus);
  const hotels = useAppSelector(getFirstFiveHotels);
  useEffect(() => {
    dispatch(fetchHotels());
  }, []);

  const slides = hotels.map((hotel) => {
    return {
      key: hotel.id,
      content: (
        <ImageContainer source={hotel.images[0].url}>
          <img className="star-icon" src={starIcon} alt="star" />
          <h3 className="hotel-name">{hotel.name["en-US"]}</h3>
        </ImageContainer>
      ),
    };
  });
  return fetchStatus === HTTP_STATUS.FULFILLED ? (
    <>
      <Slider slides={slides} />
      <DealDetails />
    </>
  ) : (
    <Loader />
  );
}
