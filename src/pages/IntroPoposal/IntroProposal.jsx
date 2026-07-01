import { useRef, useState } from "react";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";
import style from "./introProposal.module.css";
import { Navigate, useNavigate } from "react-router-dom";

const IntroProposal = () => {
  
  const navigate = useNavigate();
  const [isEvent, setIsEvent] = useState(false);
  const rej=useRef(null)
  let reject = document.getElementById("dateProposal_No");
  // if (isEvent) {
  //   // reject.style.transform = "translateY(-20px)";
  //   alert("hii")
    
  // }

  return (
    <main id={style.introPage}>
      <BackgroundVideo />
      <section id={style.dateProposal}>
        <div id={style.dateProposal_Content}>
          <p id={style.dateProposal_Content_Quote}>
            Every moment with you feels a little more special than the last. I'd
            love to create even more beautiful memories together.
          </p>
          <p id={style.dateProposal_Content_Question}>
            Will you go on a date with me?
          </p>
        </div>
        <div id={style.dateProposal_Yes_or_No}>
          <button
            onClick={() => {
              navigate("/name");
            }}
            className={style.dateProposal_Buttons}
            id={style.dateProposal_Yes}
          >
            Yes, I'd Love To!❤️
          </button>
          <button
            className={style.dateProposal_Buttons}
            id={style.dateProposal_No}
            ref={rej}
            onMouseEnter={() => {
              rej.current.style.transform="translateY(-20px)"
            }}
            onMouseLeave={() => {
              rej.current.style.transform="translateY(0px)"
            }}
          >
            No😒
          </button>
        </div>
      </section>
    </main>
  );
};
export default IntroProposal;
