import Image from "next/image";
import Navbar from "./global/Navbar";
import Hero from "./section/Hero";
import Building from "./section/Building";
import Headset from "./section/Headset";
import Experience from "./section/Experience";
import TechSpecs from "./section/TechSpecs";
import Virtual from "./section/Virtual";
import InteractiveBlocks from "./section/InteractiveBlock";
import Testimonial from "./section/test";
import ImageSequencePage from "./section/ImageSequence";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Building />
      <InteractiveBlocks />
      <Headset />
      <Virtual />
      <Experience />
      <TechSpecs />
    </div>
  );
}
