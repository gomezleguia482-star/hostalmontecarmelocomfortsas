import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./component/Footer";
import { Gallery } from "./component/Gallery";
import { Header } from "./component/Header";
import { Map } from "./component/Map";
import { Rooms } from "./component/Rooms";
import { Services } from "./component/Services";
import { ScrollHandler } from "./component/ScrollHandler";
import { WhatsAppButton } from "./component/WhatsAppButtom";

import { PrivacyPolicies } from "./component/PrivacyPolicies";
import { TermsConditions } from "./component/TermsConditions";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <Header />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Rooms />
                <Services />
                <Gallery />
                <Map />
              </>
            }
          />

          <Route path="/privacypolicies" element={<PrivacyPolicies />} />
          <Route path="/termsconditions" element={<TermsConditions />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}
