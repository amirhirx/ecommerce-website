import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { HugeiconsIcon } from "@hugeicons/react";
import { CreativeCommonsIcon } from "@hugeicons/core-free-icons";

const footerSections = [
  {
    id: "online-store",
    title: "فروشگاه آنلاین",
    items: [
      { id: "blog", label: "وبلاگ", href: "/blog" },
      { id: "sales", label: "فروش", href: "/sales" },
      { id: "careers", label: "فرصت های شغلی", href: "/careers" },
      { id: "report", label: "گزارش تخلف", href: "/report" },
      { id: "contact", label: "تماس با ما", href: "/contact" },
      { id: "about", label: "درباره", href: "/about" },
    ],
  },
  {
    id: "customer-service",
    title: "خدمات مشتریان",
    items: [
      { id: "faq", label: "پرسش های متداول", href: "/faq" },
      { id: "returns", label: "بازگرداندن کالا", href: "/returns" },
      { id: "bug", label: "گزارش باگ", href: "/bug-report" },
    ],
  },
  {
    id: "buying-guide",
    title: "رهنمای خرید",
    items: [
      { id: "order", label: "نحوه ثبت سفارش", href: "/order-guide" },
      { id: "shipping", label: "رویه ارسال سفارش", href: "/shipping" },
      { id: "payment", label: "شیوه های پرداخت", href: "/payment" },
    ],
  },
];

const faq = [
  {
    id: "faq-shipping",
    question: "سفارش من چند روزه ارسال می‌شود؟",
    answer:
      "سفارش‌ها معمولاً ظرف ۱ تا ۳ روز کاری پس از ثبت، آماده و ارسال می‌شوند.",
  },
  {
    id: "faq-return",
    question: "چطور کالا را بازگردانم؟",
    answer:
      "تا ۷ روز پس از دریافت کالا می‌توانید از بخش بازگرداندن کالا در حساب کاربری خود درخواست بازگشت ثبت کنید.",
  },
  {
    id: "faq-payment",
    question: "چه روش‌های پرداختی دارید؟",
    answer:
      "پرداخت آنلاین با کارت‌های عضو شتاب و در صورت فعال بودن، پرداخت در محل امکان‌پذیر است.",
  },
  {
    id: "faq-tracking",
    question: "از وضعیت سفارشم چطور مطلع شوم؟",
    answer:
      "وضعیت سفارش از طریق پیامک ارسال می‌شود و در بخش سفارش‌های من در حساب کاربری نیز قابل پیگیری است.",
  },
];

export default function Footer() {
  return (
    <footer className="bg-background mt-4">
      <div className="flex items-center justify-between p-4">
        <h4 className="text-xl font-black">بازارک</h4>
      </div>
      <div className="p-4 space-y-8">
        <div className="md:w-1/2 flex flex-col md:flex-row gap-4">
          {footerSections.map(({ id, title, items }) => {
            return (
              <div key={id} className="w-46">
                <h3 className="text-lg font-bold">{title}</h3>
                <ul className="space-y-4 py-2 text-sm font-medium">
                  {items.map(({ id, label, href }) => {
                    return (
                      <li key={id}>
                        <Link href={href}>{label}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <Accordion>
          {faq.map(({ id, question, answer }) => {
            return (
              <AccordionItem key={id}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
      <div className="text-center p-2">
        <p className="font-bold text-sm flex items-center justify-center gap-2 select-none">
          فروشگاه بازارک
          <HugeiconsIcon icon={CreativeCommonsIcon} className="w-4.5" />
        </p>
      </div>
    </footer>
  );
}
