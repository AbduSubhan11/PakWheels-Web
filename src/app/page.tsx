import AutoStoreuCarParts from "@/components/AutoStore Car Parts";
import BrowseUsedCars from "@/components/Browse Used Cars";
import CarComparisons from "@/components/Car Comparisons";
import FeaturedNewCars from "@/components/Featured New Cars";
import FeaturedUsedCardSale from "@/components/Featured Used Card Sale";
import GetPakWheelsApp from "@/components/Get PakWheels App";
import HeroSection from "@/components/HeroSection";
import ManagedbyPakWheel from "@/components/Managed by PakWheel";
import NewBikesbyMake from "@/components/New Bikes by Make";
import NewYearCelebration from "@/components/New Year Celebration";
import NewsandReviews from "@/components/News & Reviews";
import PakWheelsOffering from "@/components/PakWheels Offering";
import PopularNewBikes from "@/components/Popular New Bikes";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <NewYearCelebration />
      <BrowseUsedCars />
      <PakWheelsOffering />
      <ManagedbyPakWheel />
      <FeaturedUsedCardSale />
      <FeaturedNewCars />
      <CarComparisons />
      <AutoStoreuCarParts />
      <NewBikesbyMake />
      <PopularNewBikes />
      <NewsandReviews />
      <GetPakWheelsApp />
    </div>
  );
}
