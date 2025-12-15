import Image from "next/image";
import Home from "./Component/Home";
import OurServices from "./Component/OurServices";
import OurPortfolio from "./Component/OurPortfolio"
import Records from "./Component/Records";
import OurClients from "./Component/OurClients";
import TeamsSection from "./Component/Team";
import Community from "./Component/Community";
import StartProjectSection from "./Component/StartProject";
export default function Page() {
  return (
   <main>
      <Home />
      <OurServices />
      <OurPortfolio />
      <Records />
      <OurClients />
      <TeamsSection />
      <Community />
      <StartProjectSection />
    </main>
  );
}

 