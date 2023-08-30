import HeroSection from "./HeroSection";
import FeaturesOverview from "../Feactures";
import ValueProposition from "./ValueProposition";  
import Testimonials from "./Testimonials";
import PricingInformation from "./PricingInformation";

const Dashboard = () => {  
  return (
    <div>
      <HeroSection />
      <FeaturesOverview />
      <ValueProposition />
      <Testimonials />
      <PricingInformation />
    </div>
  );
}

export default Dashboard;