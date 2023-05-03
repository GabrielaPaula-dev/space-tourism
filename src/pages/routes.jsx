import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Destination } from "./destinations";
import { Crew } from "./crew";
import { Technology } from "./technology";
import { Header } from "../components/header";

const AppRouts = () => {
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Home indice= "0" />} />

        <Route path="/Destination/Moon" element={<Destination indice="0" />} />
        <Route path="/Destination/Mars" element={<Destination indice="1" />} />
        <Route path="/Destination/Europa" element={<Destination indice="2"/>}/>
        <Route path="/Destination/Titan" element={<Destination indice="3" />} />

        <Route path="/Crew/Commander" element={<Crew indice="0" />} />
        <Route path="/Crew/Mission-Specialist" element={<Crew indice="1" />} />
        <Route path="/Crew/Pilot" element={<Crew indice="2" />} />
        <Route path="/Crew/Fight-Engineer" element={<Crew indice="3" />} />

        <Route path="/Technology/Launch-Vehicle" element={<Technology indice="0"/>} />
        <Route path="/Technology/Spaceport" element={<Technology indice="1"/>} />
        <Route path="/Technology/Space-Capsule" element={<Technology indice="2"/>} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouts };
