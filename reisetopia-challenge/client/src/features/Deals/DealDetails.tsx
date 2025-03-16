import hotelDetailBg from "../../images/hotelDetailBg.png";
import Star from "../../images/Star.svg";
import "./details.css";
import Benefits from "./Benefits";
import Diamond from "../../images/diamond.svg";
import { useAppSelector } from "../../app/hooks";
import { getDealsByHotelId, getFirstHotelId } from "./selectors";
import Button from "../../components/Button/Button.component";
import { useCurrentHotel } from "../../hooks/useCurrentHotel";
import { useBetween } from "use-between";

const generateLink = (hotelId: number) =>
  `https://reisetopia.de/hotels/anfrage-details/?numPersons=2&numRooms=1&hotelId=${hotelId}`;

export default function DealDetails() {
  const { hotelId } = useBetween(useCurrentHotel);
  const firstHotelId = useAppSelector(getFirstHotelId);
  const deals = useAppSelector((state) =>
    getDealsByHotelId(state, hotelId ? hotelId : firstHotelId)
  );
  const openDetailsPage = () => {
    const link = generateLink(hotelId ? hotelId : firstHotelId);
    window.open(link, "_blank");
  };
  return (
    <div
      style={{ backgroundImage: `url(${hotelDetailBg})` }}
      className="image-detail-bg"
    >
      {deals && deals.length > 0 && (
        <div className="deal-title-container">
          <img className="deal-star-icon" src={Star} alt="star" />
          <h4 className="deal-title">{deals[0]?.headline["de-DE"]}</h4>
        </div>
      )}
      <Benefits icon={Diamond} />
      <Button title="direkt anfragen" onClick={openDetailsPage} />
    </div>
  );
}
