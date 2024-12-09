import Image from "next/image";
import Navbar from "./global/Navbar";
import Hero from "./section/Hero";
import Building from "./section/Building";
import Headset from "./section/Headset";
import Experience from "./section/Experience";

export default function Home() {
  return (
    <div>
   
     <Hero/>
     <Building/>
     <Headset/>
     <Experience/>
    </div>
  );
}
