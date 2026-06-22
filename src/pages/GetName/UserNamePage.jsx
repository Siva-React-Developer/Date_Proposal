import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";
import Style from "./userNamePage.module.css"

const UserNamePage = () => {
  return (
    <div>
      <BackgroundVideo />
      <div id={Style.container}>
        <div id={Style.SentencesContainer}>
          <p className={Style.SentencesContainer_info}>Every special story begins with a name.</p>
          <p className={Style.SentencesContainer_info}>Tell me yours, so I can make this moment even more special. ✨</p>
        </div>
        <form id={Style.form} action="">
          <input type="text" placeholder="Enter your beautiful name..." />
          <button id={Style.continue}>➡️</button>
        </form>
      </div>
    </div>
  );
};
export default UserNamePage;
