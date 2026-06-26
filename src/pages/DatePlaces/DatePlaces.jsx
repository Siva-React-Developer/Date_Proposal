import { useContext, useState } from "react";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";
import { ProposalContext } from "../../components/ProposalProvider";
import style from "../DatePlaces/datePlaces.module.css";

const DatePlaces = () => {
  const [selectedPlace, setSelectedPlace] = useState("");
  const places = [
    {
      id: 1,
      name: "Beach Walk",
      image: "https://your-image-url.com/beach.jpg",
      desc: "Watch the sunset together.",
    },
    {
      id: 2,
      name: "Cozy Café",
      image: "https://your-image-url.com/cafe.jpg",
      desc: "Coffee and endless conversations.",
    },
    {
      id: 3,
      name: "Movie Night",
      image: "https://your-image-url.com/movie.jpg",
      desc: "Popcorn, laughter and fun.",
    },
    {
      id: 4,
      name: "Candle Light Dinner",
      image: "https://your-image-url.com/dinner.jpg",
      desc: "A romantic evening.",
    },
    {
    id: 5,
    name: "Flower Garden",
    image: "https://your-image-url.com/flowergarden.jpg",
    desc: "Walk through colorful flowers and capture beautiful memories."
  },
  {
    id: 6,
    name: "Sky Dining",
    image: "https://your-image-url.com/skydining.jpg",
    desc: "A unique dining experience high above the city."
  },
  {
    id: 7,
    name: "Ferris Wheel Ride",
    image: "https://your-image-url.com/ferriswheel.jpg",
    desc: "Enjoy breathtaking views while sharing unforgettable moments."
  },
  {
    id: 8,
    name: "Art Gallery",
    image: "https://your-image-url.com/artgallery.jpg",
    desc: "Admire beautiful art while discovering each other's tastes."
  },
  {
    id: 9,
    name: "Music Concert",
    image: "https://your-image-url.com/concert.jpg",
    desc: "Sing along to your favorite songs together."
  },
  {
    id: 10,
    name: "Camping Under the Stars",
    image: "https://your-image-url.com/camping.jpg",
    desc: "A cozy night surrounded by nature and countless stars."
  },
  {
    id: 11,
    name: "Sunrise View Point",
    image: "https://your-image-url.com/sunrise.jpg",
    desc: "Start the day together with a breathtaking sunrise."
  },
  {
    id: 12,
    name: "River Cruise",
    image: "https://your-image-url.com/cruise.jpg",
    desc: "Enjoy a peaceful evening sailing together."
  },
  ];
  const content = useContext(ProposalContext);
  return (
    <div>
      <BackgroundVideo />
      <div id={style.Container}>
        <div id={style.userNameContainer}>
          <p id={style.userNameContainer_Name}>Hey {content.name}🌹,</p>
          <p id={style.userNameContainer_Sentence}>
            Every love story starts somewhere... <br />
            Where would you like ours to begin?
          </p>
        </div>
        <div id={style.datePlacecsContainer}>
          {places.map((place) => {
            return (
              <div
                key={place.id}
                className={`${style.card} ${
                  selectedPlace === place.name ? style.active : ""
                }`}
                onClick={() => setSelectedPlace(place.name)}
              >
                <img src={place.image} alt={place.name} />

                <h3>{place.name}</h3>

                <p>{place.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default DatePlaces;
