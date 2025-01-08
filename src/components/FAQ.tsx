import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your subscription anytime. No hidden fees or obligations.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can customize your invoice with additional details.",
    },
    {
      question: "How does billing work?",
      answer:
        "Billing is done monthly or annually, depending on the plan you choose.",
    },
    {
      question: "How do I change my account email?",
      answer: "You can update your account email in the account settings page.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-center mb-4">
        Frequently asked questions
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Everything you need to know about the product and billing.
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              className="flex justify-between items-center w-full text-left text-lg font-medium"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-gray-500">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      <div className="bg-gray-100 p-6 mt-8 rounded-lg text-center">
        <div className="flex justify-center mb-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" // Replace with team member images
            alt="Team Member"
            className="w-10 h-10 rounded-full mx-1"
          />
         
        </div>
        <p className="font-medium">Still have questions?</p>
        <p className="text-gray-600 mb-4">
          Can’t find the answer you’re looking for? Please chat with our
          friendly team.
        </p>
        <button className="px-6 py-2 bg-red-500 text-white rounded">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default FAQ;
