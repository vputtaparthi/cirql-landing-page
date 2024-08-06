import { privacyData } from "../constants";

const Privacy = () => {
  return (
    <section id="privacy" className=" w-full py-16 max-sm:py-10">
      <h2 className="h2-bold text-center">Your Privacy, Our Priority</h2>

      {/* Control Your Data */}
      <div className=" mt-12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center justify-center gap-5">
        {privacyData.map((data, index) => (
          <div
            key={index}
            className=" py-10 max-md:py-8 px-6 flex items-center justify-center flex-col border border-accent/10 rounded-[20px] hover:border-accent/30 hover:shadow-md cursor-pointer bg-stroke-purple/5 transition "
          >
            {/* Icon */}
            <div className="bg-stroke-purple/10 p-3 border border-stroke-purple/35 shadow-sm flex items-center justify-center w-fit rounded-full">
              <img src={data.icon} alt="icon" className="w-7 h-7" />
            </div>

            <div className="mt-8">
              <h4
                className="h4-bold text-center"
                dangerouslySetInnerHTML={{ __html: data.title }}
              />
              <p className="text-medium text-body text-center mt-4">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Privacy;
