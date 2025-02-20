import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aavartan from "./pages/Aavartan";
import Vigyaan from "./pages/Vigyaan";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Navigation from "./layout/Navigation";
import ScrollTop from "./layout/ScrollTop";
import Login from "./layout/Login";
import HailTechno from "./layout/HailTechno";
import styled from "styled-components";
import ProblemStatements from "./pages/ProblemStatements";
import TeamPage from "./pages/TeamPage";
import EventsGalleryPage from "./pages/EventsGalleryPage";
import VigyaanGalleryPage from "./pages/VigyaanGalleryPage";
import SponsorsPage from "./pages/SponsorsPage";

import StarFieldAnimation from "./layout/StarFieldAnimation";

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden; /* Ensure the starfield doesn't overflow the container */
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
`;

function CustomCursorContainer({ children }) {
  return <div className="custom-cursor">{children}</div>;
}

function App() {
  
  return (
    <div>
      <CustomCursorContainer>
        <ContentContainer>
          <BrowserRouter>
              <Navigation />
              <Login />
              <ScrollTop />
              <HailTechno />
              <Navbar />
              <Routes>
                <Route exact="true" path="/" element={<Homepage />} />
                <Route exact="true" path="/aavartan" element={<Aavartan />} />
                <Route
                  exact="true"
                  path="/aavartan/gallery"
                  element={<EventsGalleryPage />}
                />
                <Route
                  exact="true"
                  path="/vigyaan/gallery"
                  element={<VigyaanGalleryPage />}
                />
                <Route exact="true" path="/vigyaan" element={<Vigyaan />} />
                <Route exact="true" path="/team" element={<TeamPage />} />
                <Route
                  exact="true"
                  path="/vigyaan/statements/:branch"
                  element={<ProblemStatements />}
                />
                <Route exact="true" path="/sponsors" element={<SponsorsPage />} />
                {/* <Route exact path="/ourjourney" element={<OurJourney />} /> */}
              </Routes>
              <Footer />
          </BrowserRouter>
        </ContentContainer>
        <BackgroundContainer>
          {/* <ParticlesBackground /> */}
          <StarFieldAnimation/>
        </BackgroundContainer>
      </CustomCursorContainer>  


    </div>
  );
}

export default App;
