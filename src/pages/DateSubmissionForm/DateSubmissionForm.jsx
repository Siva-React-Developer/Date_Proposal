import { useNavigate } from "react-router-dom";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";
import style from "../DateSubmissionForm/dateSubmissionForm.module.css";

const DateSubmissionForm = () => {
  const navigate=useNavigate()
  const nextPage=(e)=>{
    e.preventDefault()
    navigate("/thankyou")
  }
  return (
    <div>
      <BackgroundVideo />
      <div id={style.parentContainer}>
        <div id={style.container}>
          <form action="" id={style.form} onSubmit={nextPage}>
            <div id={style.formTitle}>
              <p id={style.title}>Just a few little details, my love. ❤️</p>
            </div>
            <div id={style.fieldsetContainer}>
              <fieldset>
                <legend>Mobile no.</legend>

                <input type="number" placeholder="Enter your Mobile Number" />
              </fieldset>
              <fieldset>
                <legend>Date</legend>

                <input type="date" placeholder="Select the Date for Date.." />
              </fieldset>
              <fieldset>
                <legend>Email</legend>

                <input type="email" placeholder="Enter your Email" />
              </fieldset>
              <input id={style.submit} type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default DateSubmissionForm;
