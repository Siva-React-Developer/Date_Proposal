import { useContext } from "react";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";
import { ProposalContext } from "../../components/ProposalProvider";
import style from "../DatePlaces/datePlaces.module.css"

const DatePlaces = () => {
  const content = useContext(ProposalContext);
  return (
    <div>
      <BackgroundVideo />
      <div id={style.Container}>
        <div id={style.userNameContainer}>
            <p>Hey {content.name}!!</p>
        </div>
        <div id={style.datePlacecsContainer}>
            <div className={style.datePlaces}>Temples</div>
            <div className={style.datePlacecs}>Moviess</div>
            <div className={style.datePlacecs}>Long Drive</div>
            <div className={style.datePlacecs}>Food</div>
            <div className={style.datePlacecs}>Adventure</div>
            <div className={style.datePlacecs}>Others</div>
        </div>
      </div>
    </div>
  );
};
export default DatePlaces;
