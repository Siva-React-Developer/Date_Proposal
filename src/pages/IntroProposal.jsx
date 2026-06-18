import style from "./introProposal.module.css"

const IntroProposal=()=>{
  return(
    <div>
        <main id={style.introPage}>
            <div id={style.container}>
                <video src="https://res.cloudinary.com/duq54mhxj/video/upload/q_auto/f_auto/v1781634703/istockphoto-466713353-640_adpp_is_df4kqe.mp4" id={style.backgroundVideo} loop muted autoPlay></video>
            </div>
        </main>
    </div>
  )
}
export default IntroProposal