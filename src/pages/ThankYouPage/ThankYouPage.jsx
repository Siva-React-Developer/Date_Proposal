import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";
import style from "../ThankYouPage/thankYouPage.module.css"
import { ProposalContext } from "../../components/ProposalProvider";
import { useContext } from "react";
import downloadPdf from "../../assets/images/file_download_pdf_icon_153420.svg"
import whatsApp from "../../assets/images/iconfinder-social-media-applications-23whatsapp-4102606_113811.svg"
import gmail from "../../assets/images/gmail_mail_google_logo_icon_134929.svg"
import { Link } from "react-router-dom";

const ThankYouPage = () => {
    const content = useContext(ProposalContext);
  return (
    <div>
      <BackgroundVideo />
      <div id={style.container}>
        <div id={style.titleContainer}>
          <p id={style.title}>Hey {content.name}</p>
        </div>
        <div id={style.messageContainer}>
          <p className={style.message}>Your choices have been received, and I'm already looking forward to creating a beautiful memory with you.</p>
          <p className={style.message}>I've prepared something special just for you.</p>
          <p className={style.message}>Click the link below to view your personalized invitation. ✨</p>
          <Link to="/invite">ebg</Link>
        </div>
        <div id={style.socialMedia}>
          <img className={style.icons} src={downloadPdf} alt="Download Pdf" />
          <img className={style.icons} id={style.whatsapp} src={whatsApp} alt="" />
          <img className={style.icons} src={gmail} alt="" />
        </div>
      </div>
    </div>
  );
};
export default ThankYouPage;
