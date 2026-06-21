import style from "./backgroundVideo.module.css"

const BackgroundVideo = () => {
  return (
    <main id={style.backgroundMain}>
      <div id={style.backgroundContainer}>
        <video
          src="https://res.cloudinary.com/duq54mhxj/video/upload/q_auto/f_auto/v1781634703/istockphoto-466713353-640_adpp_is_df4kqe.mp4"
          id={style.backgroundVideo}
          loop
          muted
          autoPlay
        ></video>
      </div>
    </main>
  );
};
export default BackgroundVideo;
