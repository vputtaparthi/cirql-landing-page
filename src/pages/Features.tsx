import Features from "../components/Features/Features";
import FeaturesCTA from "../components/Features/FeaturesCTA";
import Hero from "../components/Features/Hero";

const FeaturesPage = () => {
  return (
    <div>
      <Hero />
      <div className="wrapper pb-20 ">
        <Features />
        <FeaturesCTA />
      </div>
    </div>
  );
};

export default FeaturesPage;
