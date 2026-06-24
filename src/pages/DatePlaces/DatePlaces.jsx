import { useLocation } from "react-router-dom";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";

const DatePlaces=()=>{
    const location=useLocation()
    return(
        <div>
            <BackgroundVideo/>
            {/* <p>{location.state.name}</p> */}
            
        </div>
    )
}
export default DatePlaces;