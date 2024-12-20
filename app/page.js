import Image from "next/image";
import Navbar from "./global/Navbar";
import Hero from "./section/Hero";
import Building from "./section/Building";
import Headset from "./section/Headset";
import Experience from "./section/Experience";
import TechSpecs from "./section/TechSpecs";
import Virtual from "./section/Virtual";

export default function Home() {
  return (
    <div>
   
     <Hero/>
     <Building/>
     <Headset/>
     <Virtual/>
     <Experience/>

     <TechSpecs/>
    </div>
  );
}
