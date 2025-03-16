import { CircleHelpIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs: { question: string; answer: string }[] = [
  {
    question: "Хаана үзүүлэх вэ?",
    answer: "Бидэнтэй хамтын ажиллагаатай Хутай билиг төв.",
  },
  {
    question: "Зөвлөгөө яаж авах вэ?",
    answer: "78000088 дугаарт залган зөвлөгөө авах боломжтой.",
  },
  {
    question: "Хаана зарагдаж байгаа вэ?",
    answer: 'Манай вэбийн "Хаяг, байршил" хуудсаас хараарай.',
  },
  {
    question: "Хэдэн наснаас эхлэн хэрэглэх боломжтой вэ?",
    answer: "2 настай хүүхдээс эхлэн бүх насныхан хэрэглэх боломжтой.",
  },
];

export function FAQ() {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <h2 className="inline-flex items-center justify-center gap-2 text-xl md:text-2xl font-bold">
        <span className="text-blue-500">
          <CircleHelpIcon />
        </span>
        Түгээмэл асуулт, хариулт
      </h2>
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={faq.answer}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
