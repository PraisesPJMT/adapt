
import { useTranslations } from "next-intl";


import Hero from "@/components/website/home/Hero";
import About from "@/components/website/home/HeroAbout";
import HeroRooms from "@/components/website/home/HeroRooms";
import HeroMoonshot from "@/components/website/home/HeroMoonshot";

export default function Home() {

  return (
    <div className="overflow-hidden">
      <Hero />

      <HeroRooms />

      <About />

      <HeroMoonshot />
    </div>
  );
}
