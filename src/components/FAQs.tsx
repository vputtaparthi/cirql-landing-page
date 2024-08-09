import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { faqs } from "../constants";

const FAQs = () => {
  return (
    <section id="faqs" className=" w-full py-16 max-sm:py-14">
      <h2 className="h2-bold text-center mt-8">Frequently Asked Questions</h2>

      <Accordion
        type="single"
        collapsible
        className="w-full space-y-8 max-sm:space-y-5 max-w-[830px] mx-auto mt-14 "
      >
        {faqs.map((faq, index) => (
          <AccordionItem key={`value-${index}`} value={`value-${index}`}>
            <AccordionTrigger className="h4-bold max-sm:text-large text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className=" text-body text-medium">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQs;
