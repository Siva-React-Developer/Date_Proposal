import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserNamePage from "./pages/GetName/UserNamePage.jsx";
import IntroProposal from "./pages/IntroPoposal/IntroProposal.jsx";
import { ProposalContext } from "./components/ProposalContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/Date_Proposal">
    <ProposalContext>
      <App />
    </ProposalContext>
  </BrowserRouter>,
);
