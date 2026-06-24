import { BrowserRouter, Route, Routes } from "react-router-dom";
import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
import IntroProposal from "./pages/IntroPoposal/IntroProposal";
import UserNamePage from "./pages/GetName/UserNamePage";
import { useEffect } from "react";
import DatePlaces from "./pages/DatePlaces/DatePlaces";

const App = () => {
  useEffect(() => {
    const navigationEntries = performance.getEntriesByType("navigation");

    if (navigationEntries[0]?.type === "reload") {
      window.location.href = "/";
    }
  }, []);
  return (
    <Routes>
      <Route element={<IntroProposal />} path="/" />
      <Route element={<UserNamePage />} path="/name" />
      <Route element={<DatePlaces />} path="/datePlaces" />
    </Routes>
  );
};
export default App;
