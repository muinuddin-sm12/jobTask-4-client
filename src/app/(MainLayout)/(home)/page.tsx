import HeroSection from "@/components/module/homePage/HeroSection";
import LocationSection from "@/components/module/homePage/LocationSection";
import ServiceSection from "@/components/module/homePage/ServiceSection";
import { getHeroSec } from "@/services/heroSec";
import { getServices } from "@/services/serviceSec";

export default async function Home() {
  const heroData = await getHeroSec();
  const serviceData = await getServices();
  return (
    <div className="">
      <HeroSection data={heroData?.data} />
      <ServiceSection data={serviceData?.data} />
      <LocationSection />
    </div>
  );
}
