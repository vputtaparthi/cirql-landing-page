import { CircleX } from "lucide-react";
import { theProblems } from "../constants";

const Problem = () => {
  return (
    <section id="problem" className=" w-full py-24 max-sm:pt-24 max-sm:pb-20">
      <div className="w-full  flex items-center justify-center flex-col gap-8">
        <button className="flex items-center justify-center gap-2 rounded-full bg-stroke-red/5 shadow-sm border border-accent-red shadown-md h-9 px-3 ">
          <CircleX className="text-accent-red" />
          <span className="text-accent-red">The Problem</span>
        </button>
        <h2 className="h2-bold text-center">
          Tired of cold emails? <br className="md:hidden" /> We were, too!
        </h2>
      </div>

      {/* Problems */}
      <div className=" mt-12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center justify-center gap-5">
        {theProblems.map((problem, index) => (
          <div
            key={index}
            className=" py-10 max-md:py-8 px-6 border border-stroke-red rounded-[20px] hover:border-accent-red/30 hover:shadow-md cursor-pointer hover:bg-stroke-red/5 transition "
          >
            {/* Icon */}
            <div className="bg-stroke-red/40 p-3 border border-stroke-red shadow-sm flex items-center justify-center w-fit rounded-full">
              <img src={problem.icon} alt="icon" className="w-5 h-5" />
            </div>

            <div className="mt-8">
              <h4 className="h4-bold">{problem.title}</h4>
              <p className="text-medium text-body mt-4">
                {problem.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Problem;
