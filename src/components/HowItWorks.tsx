import { Lightbulb } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="solution" className=" w-full py-16 max-sm:py-12">
      <div className="w-full  flex items-center justify-center flex-col">
        <button className="flex items-center justify-center gap-2 rounded-full border-2 border-[#eeeeee] shadown-md h-9 px-3 ">
          <Lightbulb className="text-body" />
          <span className="text-body">Our Solution</span>
        </button>
        <h2 className="h2-bold text-center mt-8">
          Ready to Reclaim <br className="md:hidden" /> Your Inbox?
        </h2>
        <p className="text-large text-center max-w-2xl text-body mt-6">
          Check out this diagram to discover how Cirql can transform your email
          experience.
        </p>
      </div>

      {/* Solution */}
      <div className="mt-14 w-full flex items-center justify-center bg-[#BA61EB]/5 rounded-2xl overflow-hidden ">
        <img
          src="/images/solution-img.png"
          alt="our-solution"
          className="w-full h-full overflow-hidden"
        />
      </div>
    </section>
  );
};

export default HowItWorks;
