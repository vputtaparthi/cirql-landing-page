import {
  ControlYourData,
  FAQs,
  Features,
  Hero,
  Pricing,
  Privacy,
  Problem,
  HowItWorks,
  Waitlist,
} from "./components";

export default function Home() {
  return (
    <div className="text-body">
      <Hero />

      <div className="wrapper">
        <Problem />
        <HowItWorks />
        <Features />
        <ControlYourData />
        <Privacy />
        <Pricing />
        <FAQs />
        <Waitlist />
      </div>
    </div>
  );
}
