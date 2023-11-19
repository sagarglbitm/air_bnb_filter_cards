import React, { useState } from "react";
import "./cards.scss";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

type CardData = {
  imgSrc: string[];
  title: string;
  rating: number;
  desc: string;
  checkInDate: string;
  checkOutDate: string;
  price: number;
  
}[];
type CardProps = {
  data: CardData,
 
 filterAnyState: CardData,
 
}


function formatDates(checkInDate: string, checkOutDate: string) {
  const checkInDateParts = checkInDate.split("-");
  const checkOutDateParts = checkOutDate.split("-");

  const checkInDay = checkInDateParts[2];
  const checkInMonth = new Date(checkInDate).toLocaleString("default", {
    month: "short",
  });

  const checkOutDay = checkOutDateParts[2];
  const checkOutMonth = new Date(checkOutDate).toLocaleString("default", {
    month: "short",
  });

  if (checkInMonth === checkOutMonth) {
    return `${checkInDay}-${checkOutDay} ${checkOutMonth}`;
  } else {
    return `${checkInDay} ${checkInMonth}-${checkOutDay} ${checkOutMonth}`;
  }
}

function Card({data,  filterAnyState}: CardProps){
  const [likedStates, setLikedStates] = useState(
    Array(data.length).fill(false)
  );
  const filteredCards =
    filterAnyState.length > 0
      ? filterAnyState
      : data;

  const handleLikeClick = (index: number) => {
    const newLikedStates = [...likedStates];
    newLikedStates[index] = !newLikedStates[index];
    setLikedStates(newLikedStates);
  };
  
  return (
    <div className="cards-flex">
      {filteredCards.map((card, index) => (
        <div className="card-box" key={index}>
          <div className="heart-icon" onClick={() => handleLikeClick(index)}>
            {likedStates[index] ? (
              <FavoriteIcon style={{ color: "red" }} />
            ) : (
              <FavoriteIcon style={{ color: "lightgrey" }} />
            )}
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            loop={true}
            mousewheel={true}
            cssMode={true}
            pagination
            modules={[Pagination, Navigation]}
            className="swiper-container"
          >
            {card.imgSrc.map((src, i) => (
              <SwiperSlide key={i}>
                <img src={src} className="card-img" alt={`Image ${i}`} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="card-info-flex">
            <h3 className="card-title">{card.title}</h3>
            <div className="card-rating">
              <StarRateRoundedIcon />
              <p>{card.rating}</p>
            </div>
          </div>
          <div className="about-card">
            <p
              className="line"
              style={{ margin: 0, color: "var(--font-grey)" }}
            >
              {card.desc}
            </p>
            <p
              className="line"
              style={{ margin: 0, color: "var(--font-grey)" }}
            >
              {formatDates(card.checkInDate, card.checkOutDate)}
            </p>
            <p
              style={{
                margin: "0.2rem",
                fontSize: "1rem",
                color: "var(--black)",
              }}
            >
              <span className="line" style={{ fontWeight: "700" }}>
                ₹{card.price}
              </span>{" "}
              night
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;

































// import React, { useState } from "react";
// import europe from '../Navbar/images/europe.jpeg';
// import productJson from '../../product.json';

// const Stays: React.FC = () => {
//   const [selectedCountry, setSelectedCountry] = useState("");

//   const handleCountryClick = (country: string) => {
//     setSelectedCountry(country);
//   };

//   const getCountryDetails = () => {
//     if (selectedCountry === "I'm flexible") {
//       return productJson.filter((item) => item.country === "I'm flexible");
//     } else if (selectedCountry === "Europe") {
//       return productJson.filter((item) => item.country === "Europe");
//     } else if (selectedCountry === "Middle East") {
//       return productJson.filter((item) => item.country === "Middle East");
//     } else if (selectedCountry === "Canada") {
//       return productJson.filter((item) => item.country === "Canada");
//     }

//     return null;
//   };

//   const countryDetails = getCountryDetails();

//   return (
//     <div className="map-car">
//       <div className="map-card">
//         <div className="map-card-first-img">
//           <button
//             className="map-card-first-button"
//             onClick={() => handleCountryClick("I'm flexible")}
//           >
//             <img src={europe} className="first-europe" alt="My Image" />
//             <span className="europe-tag">I'm flexible</span>
//           </button>
//         </div>
//         <div className="map-card-second-img">
//           <button
//             className="map-card-second-button"
//             onClick={() => handleCountryClick("Europe")}
//           >
//             <img src={europe} className="second-europe" alt="My Image" />
//             <span className="second-europe-tag">Europe</span>
//           </button>
//         </div>
//       </div>

//       <div className="map-car">
//         <div className="map-card-third-img">
//           <button
//             className="map-card-third-button"
//             onClick={() => handleCountryClick("Canada")}
//           >
//             <img src={europe} className="third-europe" alt="My Image" />
//             <span className="third-europe-tag">Canada</span>
//           </button>
//         </div>
//         <div className="map-card-fourth-img">
//           <button
//             className="map-card-fourth-button"
//             onClick={() => handleCountryClick("Middle East")}
//           >
//             <img src={europe} className="fourth-europe" alt="My Image" />
//             <span className="fourth-europe-tag">Middle East</span>
//           </button>
//         </div>
//       </div>

//       {countryDetails && countryDetails.length > 0 && (
//         <div className="country-details">
//           <h3>Country: {selectedCountry}</h3>
//           {countryDetails.map((item) => (
//             <div key={item.id}>
//               <p>Name: {item.name}</p>
//               <p>Price: {item.price}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Stays;