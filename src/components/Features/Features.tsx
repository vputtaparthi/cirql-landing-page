import { ChevronDown } from "lucide-react";

const Features = () => {
  return (
    <section className=" w-full py-16">
      {/* Feature 1 */}
      <div className="mt-10 max-sm:mt-0 w-full flex max-md:flex-col items-start justify-between max-md:items-start max-md:justify-start gap-10 lg:gap-12">
        <div
          className="bg-gradient-cover bg-center max-md:max-w-[580px] max-md:w-full max-md:max-h-[528px] max-lg:w-[320px] max-lg:h-[270px] max-xl:w-[520px] max-xl:h-[470px] rounded-2xl max-lg:py-3 max-lg:px-2 py-6 px-4 w-[580px] h-[528px]
       bg-no-repeat flex items-center justify-center "
        >
          <img
            src="/images/feature1.png"
            alt="feature-image"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex-1 max-w-2xl w-[55%] max-md:w-full ">
          <h3 className="font-bold text-[26px] leading-[34px] text-primary ">
            Cold Email Blocking and Redirecting: Keep Unwanted Emails Out,
            Monetize the Ones You Want
          </h3>
          <div className="mt-6 justify-start flex items-center gap-3 ">
            <div className="bg-stroke-purple/10 p-2 border border-stroke-purple/35 shadow-sm flex items-center justify-center w-fit rounded-full">
              <img src="/icons/bulb.svg" alt="bulb" />
            </div>
            <h4 className="text-medium-bold text-black">What It Does:</h4>
          </div>

          <ul className="space-y-3 custom-list mt-5 text-body ">
            <li className="text-base">
              Cirql automatically detects cold emails and blocks them from
              cluttering your primary inbox.
            </li>
            <li className="text-base">
              Rather than just dumping them into a spam folder, Cirql redirects
              cold emails to a customized landing page where the sender can
              either submit a detailed sales pitch or book a paid meeting.
            </li>
          </ul>

          <div className=" mt-6 rounded-2xl border border-stroke-purple/20 p-4 bg-stroke-purple/10 flex items-start gap-3 justify-start ">
            <div className="cursor-pointer">
              <ChevronDown color="#862FE7" />
            </div>
            <div>
              <p className="text-base">
                <span className="text-primary font-semibold">
                  This approach
                </span>{" "}
                not only turns unsolicited outreach into a potential revenue
                stream, but it also gives salespeople a healthier, more
                respectful route to connect with you. Instead of wasting time
                with irrelevant or untimely pitches, sales reps follow clear
                instructions to engage with you in a meaningful, mutually
                beneficial way.
              </p>
              <p className="mt-4 text-primary text-balance font-semibold">
                Additionally, you're likely not the only person in your company
                being pitched—Cirql helps ensure that your colleagues' time
                isn't drained by the same cold outreach, creating a protective
                shield for the whole team.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-stroke-purple/20 p-4 bg-stroke-purple/10 flex items-start gap-3 ">
            <img src="/icons/MagicWand.svg" alt="magic" />
            <p className="text-base font-semibold text-primary">
              Imagine you’re a marketing director
            </p>
          </div>
        </div>
      </div>
      {/* Feature 2 */}
      <div className="mt-28 max-sm:mt-16 w-full flex max-md:flex-col-reverse items-start justify-between max-md:items-start max-md:justify-start gap-10 lg:gap-12">
        <div className="flex-1 max-w-2xl w-[55%] max-md:w-full ">
          <h3 className="font-bold text-[26px] leading-[34px] text-primary ">
            Inbox Categorization: Focus on What Matters and Boost Team
            Productivity
          </h3>
          <div className="mt-6 justify-start flex items-center gap-3 ">
            <div className="bg-stroke-purple/10 p-2 border border-stroke-purple/35 shadow-sm flex items-center justify-center w-fit rounded-full">
              <img src="/icons/bulb.svg" alt="bulb" />
            </div>
            <h4 className="text-medium-bold text-black">What It Does:</h4>
          </div>

          <ul className="space-y-3 custom-list mt-5 text-body ">
            <li className="text-base">
              Cirql uses AI-powered categorization to intelligently organize
              your emails based on their content, sender, and importance.
              Whether it’s client communications, internal updates, or sales
              pitches, Cirql helps you focus on high-priority emails by sorting
              everything else into appropriate folders.
            </li>
            <li className="text-base">
              Additionally, you can customize your filters to further fine-tune
              the categorization.
            </li>
          </ul>

          <div className=" mt-6 rounded-2xl border border-stroke-purple/20 p-4 bg-stroke-purple/10 flex items-start gap-3 justify-start ">
            <div className="cursor-pointer">
              <ChevronDown color="#862FE7" />
            </div>
            <div>
              <p className="text-base">
                <span className="text-primary font-semibold">
                  But it’s not just about a clean inbox —
                </span>{" "}
                Cirql has a compounding effect on productivity.
              </p>
              <p className="mt-4 text-primary text-balance font-semibold">
                By making each employee more efficient and better able to
                prioritize their tasks, Cirql helps improve overall business
                outcomes. Prioritizing communication allows your team to spend
                more time on the projects that matter, reducing distractions and
                improving focus.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-stroke-purple/20 p-4 bg-stroke-purple/10 flex items-start gap-3 ">
            <img src="/icons/MagicWand.svg" alt="magic" />
            <p className="text-base font-semibold text-primary">
              As the COO of a growing company, you need to ensure your team’s
              time is spent wisely.
            </p>
          </div>
        </div>

        <div
          className="bg-gradient-cover bg-center max-md:max-w-[580px] max-md:w-full max-md:max-h-[528px] max-lg:w-[320px] max-lg:h-[270px] max-xl:w-[520px] max-xl:h-[470px] rounded-2xl max-lg:py-3 max-lg:px-2 py-6 px-4 w-[580px] h-[528px]
       bg-no-repeat flex items-center justify-center "
        >
          <img
            src="/images/feature2.png"
            alt="feature-image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      {/* Feature 3 */}
      <div className="mt-28 max-sm:mt-16 w-full flex max-md:flex-col items-start justify-between max-md:items-start max-md:justify-start gap-10 lg:gap-12">
        <div
          className="bg-gradient-cover bg-center max-md:max-w-[580px] max-md:w-full max-md:max-h-[528px] max-lg:w-[320px] max-lg:h-[270px] max-xl:w-[520px] max-xl:h-[470px] rounded-2xl max-lg:py-3 max-lg:px-2 py-6 px-4 w-[580px] h-[528px]
       bg-no-repeat flex items-center justify-center "
        >
          <img
            src="/images/feature-3.png"
            alt="feature-image"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex-1 max-w-2xl w-[55%] max-md:w-full ">
          <h3 className="font-bold text-[26px] leading-[34px] text-primary ">
            Detailed Email Analytics: Gain Visibility Across Your Entire
            Organization
          </h3>
          <div className="mt-6 justify-start flex items-center gap-3 ">
            <div className="bg-stroke-purple/10 p-2 border border-stroke-purple/35 shadow-sm flex items-center justify-center w-fit rounded-full">
              <img src="/icons/bulb.svg" alt="bulb" />
            </div>
            <h4 className="text-medium-bold text-black">What It Does:</h4>
          </div>

          <ul className="space-y-3 custom-list mt-5 text-body ">
            <li className="text-base">
              Cirql provides detailed analytics on email activity, giving you
              insights into both your personal mailbox and your team's inboxes.
              As an admin, you have oversight over individual mailbox activity
              as well as the organization as a whole.
            </li>
          </ul>

          <div className=" mt-6 rounded-2xl border border-stroke-purple/20 p-4 bg-stroke-purple/10 flex items-start gap-3 justify-start ">
            <div className="cursor-pointer">
              <ChevronDown color="#862FE7" />
            </div>
            <div>
              <p className="text-base">
                <span className="text-primary font-semibold">
                  Whether it's tracking a surge in customer inquiries, invoices,
                  or support requests,
                </span>{" "}
                Cirql helps you stay on top of the flow of communication within
                your company. This macro and micro-level visibility enables you
                to identify trends, optimize workflows, and ensure that your
                team is operating efficiently.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-stroke-purple/20 p-4 bg-stroke-purple/10 flex items-start gap-3 ">
            <img src="/icons/MagicWand.svg" alt="magic" />
            <p className="text-base font-semibold text-primary">
              As the head of operations, you oversee the email flow of multiple
              departments.
            </p>
          </div>
        </div>
      </div>
      {/* Feature 4 */}
      <div className="mt-28 max-sm:mt-16 w-full flex max-md:flex-col-reverse items-start justify-between max-md:items-start max-md:justify-start gap-10 lg:gap-12">
        <div className="flex-1 max-w-2xl w-[55%] max-md:w-full ">
          <h3 className="font-bold text-[26px] leading-[34px] text-primary ">
            Payment Automation for Paid Meetings and Sales Presentations
          </h3>
          <div className="mt-6 justify-start flex items-center gap-3 ">
            <div className="bg-stroke-purple/10 p-2 border border-stroke-purple/35 shadow-sm flex items-center justify-center w-fit rounded-full">
              <img src="/icons/bulb.svg" alt="bulb" />
            </div>
            <h4 className="text-medium-bold text-black">What It Does:</h4>
          </div>

          <ul className="space-y-3 custom-list mt-5 text-body ">
            <li className="text-base">
              Cirql streamlines the process of monetizing cold outreach by
              automatically sending response emails with a clear message: you do
              not engage in unsolicited pitches, but the sender has the option
              to pay for a presentation or a meeting.
            </li>
          </ul>

          <div className=" mt-6 rounded-2xl border border-stroke-purple/20 p-4 bg-stroke-purple/10 flex items-start gap-3 justify-start ">
            <div className="cursor-pointer">
              <ChevronDown color="#862FE7" />
            </div>
            <div>
              <p className="text-base">
                <span className="text-primary font-semibold">
                  Once a sender agrees to the terms,
                </span>{" "}
                Cirql generates a payment link and issues an invoice. Funds from
                these transactions are placed into a shared wallet for all
                inboxes, and you can withdraw the balance whenever you like.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-stroke-purple/20 p-4 bg-stroke-purple/10 flex items-start gap-3 ">
            <img src="/icons/MagicWand.svg" alt="magic" />
            <p className="text-base font-semibold text-primary">
              As a financial consultant, you get frequent cold emails asking for
              services.
            </p>
          </div>
        </div>

        <div
          className="bg-gradient-cover bg-center max-md:max-w-[580px] max-md:w-full max-md:max-h-[528px] max-lg:w-[320px] max-lg:h-[270px] max-xl:w-[520px] max-xl:h-[470px] rounded-2xl max-lg:py-3 max-lg:px-2 py-6 px-4 w-[580px] h-[528px]
       bg-no-repeat flex items-center justify-center "
        >
          <img
            src="/images/Payment Automation.png"
            alt="Payment-automation"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      {/* Feature 5 */}
      <div className="mt-28 max-sm:mt-16 w-full flex max-md:flex-col items-start justify-between max-md:items-start max-md:justify-start gap-10 lg:gap-12">
        <div
          className="bg-gradient-cover bg-center max-md:max-w-[580px] max-md:w-full max-md:max-h-[528px] max-lg:w-[320px] max-lg:h-[270px] max-xl:w-[520px] max-xl:h-[470px] rounded-2xl max-lg:py-3 max-lg:px-2 py-6 px-4 w-[580px] h-[528px]
       bg-no-repeat flex items-center justify-center "
        >
          <img
            src="/images/Data Privacy & B2B Broker Removal Requests.png"
            alt="Data Privacy & B2B Broker Removal Requests"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex-1 max-w-2xl w-[55%] max-md:w-full ">
          <h3 className="font-bold text-[26px] leading-[34px] text-primary ">
            Data Privacy & B2B Broker Removal Requests: Coming Soon
          </h3>
          <div className="mt-6 justify-start flex items-center gap-3 ">
            <div className="bg-stroke-purple/10 p-2 border border-stroke-purple/35 shadow-sm flex items-center justify-center w-fit rounded-full">
              <img src="/icons/bulb.svg" alt="bulb" />
            </div>
            <h4 className="text-medium-bold text-black">What It Does:</h4>
          </div>

          <ul className="space-y-3 custom-list mt-5 text-body ">
            <li className="text-base">
              Cirql’s upcoming feature will help protect your personal and
              business information by submitting automatic opt-out requests to
              B2B data brokers.
            </li>
          </ul>

          <div className=" mt-6 rounded-2xl border border-stroke-purple/20 p-4 bg-stroke-purple/10 flex items-start gap-3 justify-start ">
            <div className="cursor-pointer">
              <ChevronDown color="#862FE7" />
            </div>
            <div>
              <p className="text-base">
                <span className="text-primary font-semibold">
                  This will ensure that
                </span>{" "}
                your email address and sensitive information are removed from
                brokers’ databases, reducing the chances of spam, phishing
                attacks, and unwanted cold outreach.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-stroke-purple/20 p-4 bg-stroke-purple/10 flex items-start gap-3 ">
            <img src="/icons/MagicWand.svg" alt="magic" />
            <p className="text-base font-semibold text-primary">
              As a small business owner, you’ve noticed an uptick in spam and
              cold calls from B2B vendors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
