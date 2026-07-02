import { useContext, useState } from "react";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";
import Style from "./userNamePage.module.css";
import { useNavigate } from "react-router-dom";
import { ProposalContext } from "../../components/ProposalProvider";

const UserNamePage = () => {
  // const [name, setName] = useState("");
  const {name,setName}=useContext(ProposalContext)
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const getName = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      setIsError(true);
      return;
    }
    setIsError(false);
    navigate("/datePlaces")
  };
  return (
    <div>
      <BackgroundVideo />
      <div id={Style.container}>
        <div id={Style.SentencesContainer}>
          <p className={Style.SentencesContainer_info}>
            Every special story begins with a name.
          </p>
          <p className={Style.SentencesContainer_info}>
            Tell me yours, so I can make this moment even more special. ✨
          </p>
        </div>
        <form id={Style.form} action="" onSubmit={getName}>
          <input
            type="text"
            id={Style.input}
            placeholder={
              isError
                ? "Please enter your beautiful name ❤️"
                : "Enter your beautiful name..."
            }
            className={isError ? Style.errorInput : Style.redinput}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (e.target.value.trim() !== "") {
                setIsError(false);
              }
            }}
          />
          <button type="submit" id={Style.continue}>
            🢂
          </button>
        </form>
      </div>
    </div>
  );
};
export default UserNamePage;
