import style from "./introProposal.module.css";
import Lottie from "lottie-react";
import heartAnimation from "../assets/images/HeartsFeedback.json";

const IntroProposal = () => {
  // console.log(heartAnimation);
const Proposal_Accept=()=>{
  console.log("accept");
}
const Proposal_Reject=()=>{
  console.log("Reject");
}
  
  return (
    <div>
      <main id={style.introPage}>
        <div id={style.container}>
          <video
            src="https://res.cloudinary.com/duq54mhxj/video/upload/q_auto/f_auto/v1781634703/istockphoto-466713353-640_adpp_is_df4kqe.mp4"
            id={style.backgroundVideo}
            loop
            muted
            autoPlay
          ></video>
        </div>
        <section id={style.dateProposal}>
          <div id={style.dateProposal_Content}>
            <p id={style.dateProposal_Content_Quote}>
              Every moment with you feels a little more special than the last.
              I'd love to create even more beautiful memories together.
            </p>
            <p id={style.dateProposal_Content_Question}>Will you go on a date with me?</p>
          </div>
          <div id={style.dateProposal_Yes_or_No}>
            <button onClick={Proposal_Accept} className={style.dateProposal_Buttons} id={style.dateProposal_Yes}>Yes, I'd Love To!❤️</button>
            <button onClick={Proposal_Reject} className={style.dateProposal_Buttons} id={style.dateProposal_No}>No😒</button>
          </div>
        </section>
      </main>
      {/* <Lottie animationData={heartAnimation} loop={true}/> */}
      <div></div>
    </div>
  );
};
export default IntroProposal;
