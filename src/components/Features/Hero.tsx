const Hero = () => {
  return (
    <section className="min-h-[470px] w-full grid content-center justify-center bg-features-page-hero-bg bg-no-repeat bg-center bg-cover ">
      <div className="wrapper space-y-6 text-center flex flex-col items-center justify-center">
        <div className="rounded-full bg-white shadow-sm border border-[#eeeeee] px-3 py-1.5 flex items-center justify-center gap-2 ">
          <img src="/icons/start.svg" alt="star" width={18} height={18} />
          <p className="text-sm font-medium">Cirql Features</p>
        </div>
        <h1 className="h3-bold text-primary  ">
          Redefining How You Manage, Monetize, <br /> and Protect Your Inbox
        </h1>
        <p className="text-medium text-body max-w-3xl ">
          Cirql offers an innovative approach to email management by not only
          blocking unwanted emails but also giving you the power to monetize and
          organize them. Below, we break down each feature and provide relatable
          use cases so you can see how Cirql could transform your workflow.
        </p>
      </div>
    </section>
  );
};

export default Hero;
