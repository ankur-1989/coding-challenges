import "./benefits.css";
import { useAppSelector } from "../../app/hooks";
import { getHotelByHotelId, getFirstHotelId } from "./selectors";
import { useCurrentHotel } from "../../hooks/useCurrentHotel";
import { useBetween } from "use-between";

interface BenefitsProps {
  icon: string;
}

export default function Benefits({ icon }: BenefitsProps) {
  const { hotelId } = useBetween(useCurrentHotel);
  const firstHotelId = useAppSelector(getFirstHotelId);
  const hotel = useAppSelector((state) =>
    getHotelByHotelId(state, hotelId ? hotelId : firstHotelId)
  );
  const benefits = hotel ? hotel.benefits.slice(0, 3) : [];

  return (
    <div className="benefits-container">
      {benefits &&
        benefits.length > 0 &&
        benefits.map((benefit) => {
          return (
            <div key={benefit.text["en-US"]} className="benefit">
              <img src={icon} alt="offer" />
              <p className="benefit-text">{benefit?.text["en-US"]}</p>
            </div>
          );
        })}
    </div>
  );
}
