import { controlYourData } from "../constants";

const ControlYourData = () => {
  return (
    <section id="control-data" className=" w-full py-16">
      <h2 className="h2-bold text-center">
        Take Back Control of Your Data — <br /> Before It’s Too Late
      </h2>

      {/* Control Your Data */}
      <div className=" mt-12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center justify-center gap-5">
        {controlYourData.map((data, index) => (
          <div
            key={index}
            className=" py-10 max-md:py-8 px-6 border border-stroke-purple rounded-[20px] hover:shadow-md cursor-pointer hover:bg-stroke-purple/5 transition "
          >
            {/* Icon */}
            <div className="bg-stroke-purple/10 p-3 border border-stroke-purple/35 shadow-sm flex items-center justify-center w-fit rounded-full">
              <img src={data.icon} alt="icon" className="w-5 h-5" />
            </div>

            <div className="mt-8">
              <h4 className="h4-bold">{data.title}</h4>
              <p className="text-medium text-body mt-4">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ControlYourData;
