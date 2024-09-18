import animationData from "../../../public/cirql-animation.json";
import Lottie from "react-lottie";
import { Button } from "../ui/button";

const FeaturesCTA = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section className=" w-full mt-6 max-sm:mt-4">
      <div className="w-full flex max-md:flex-col-reverse items-center justify-between max-md:items-start max-md:justify-start gap-10">
        <div className="flex-1 max-w-lg w-[50%] max-md:w-full ">
          <h3 className="h3-bold">Why Cirql?</h3>
          <p className="mt-8 text-medium ">
            Cirql isn’t just an email management tool—it’s a{" "}
            <span className="font-semibold text-primary">solution</span> that
            transforms how you handle unsolicited outreach, streamlines your
            inbox, and provides valuable insights.
          </p>
          <p className="mt-4 text-medium ">
            With features like{" "}
            <span className="font-semibold text-primary">
              email monetization, inbox categorization, and advanced analytics
            </span>
            , Cirql gives you complete control over your communications, helping
            you boost productivity, protect your data, and even generate
            revenue.
          </p>
          <p className="mt-4 font-bold text-medium text-primary ">
            Try Cirql today and see how it can revolutionize your inbox.
          </p>

          <Button size="lg" className="mt-8 max-md:mt-6">
            {" "}
            <span>Try it now</span>
          </Button>
        </div>

        <div
          className="bg-gradient-cover bg-center max-md:max-w-[580px] max-md:w-full max-md:max-h-[470px] max-lg:w-[380px] max-lg:h-[330px] max-xl:w-[520px] max-xl:h-[380px] rounded-2xl max-md:py-3 max-md:px-2 py-6 px-4 w-[580px] h-[528px]
         bg-no-repeat flex items-center justify-center "
        >
          <Lottie options={defaultOptions} height={250} width={250} />
        </div>
      </div>
    </section>
  );
};

export default FeaturesCTA;
