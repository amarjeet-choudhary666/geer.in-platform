'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
    "What types of lab grown diamond Jewellery do you offer?",
    "How do I care for my lab grown diamond Jewellery?",
    "Do you offer customization options for lab grown diamond Jewellery?",
    "What is your return policy for lab grown diamond Jewellery?",
    "Is lab grown diamond Jewellery of the same quality as natural diamond Jewellery?",
    "Are there any downsides to buying lab grown diamond Jewellery?",
    "What is fine Jewellery?",
    "Can Lab Grown diamond Jewellery be resized or repaired?",
];

const answers = [
    "We offer a wide range of lab grown diamond Jewellery, including engagement rings, wedding bands, earrings, necklaces, bracelets, and more. We also offer customization options to create a unique piece that's perfect for you.",
    "Lab grown diamond Jewellery should be cared for in the same way as natural diamond Jewellery. It should be cleaned regularly using mild soap and water or a Jewellery cleaner, and should be stored in a secure place when not in use.",
    "Yes, we offer a range of customization options for our lab grown diamond Jewellery. Please contact us for more information.",
    "Please refer to our Returns page for more information.",
    "Yes, lab-grown diamond Jewellery is of the same quality as natural diamond Jewellery in terms of its physical and chemical properties. However, because lab grown diamonds are created in a laboratory rather than being mined from the earth, they may be priced differently than natural diamonds.",
    "Some people may view lab grown diamond Jewellery as less desirable than natural diamond Jewellery because they lack the same 'romantic' or symbolic value associated with diamonds that have been mined from the earth. Additionally, some people may prefer the unique imperfections and inclusions found in natural diamonds over the more 'perfect' appearance of lab-grown diamonds. However, these are largely personal preferences, and there are many benefits to choosing lab-grown diamond Jewellery, including its affordability and environmental friendliness.",
    "Fine Jewellery, also known as high-end or luxury Jewellery, refers to Jewellery that is made from high-quality materials such as precious metals, gemstones, and diamonds. Fine Jewellery is typically designed and crafted by skilled artisans, and is often sold in high-end Jewellery stores or boutiques.",
    "Yes, Lab Created-diamond Jewellery can be resized or repaired by a professional jeweller. However, it's important to find a jeweller who is experienced in working with diamonds to ensure that they are handled properly."
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="max-w-4xl mx-auto px-4 py-12 text-black">
            <h2 className="text-3xl font-serif font-semibold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center py-4 text-left text-lg transition-colors hover:text-blue-600"
                            aria-expanded={openIndex === index}
                            aria-controls={`faq-${index}`}
                        >
                            {faq}
                            <Plus
                                className={`w-5 h-5 transition-transform duration-300 ${
                                    openIndex === index ? 'rotate-45 text-blue-600' : ''
                                }`}
                            />
                        </button>

                        <div
                            id={`faq-${index}`}
                            className={`overflow-hidden transition-all duration-500 text-gray-600 ${
                                openIndex === index ? 'max-h-96' : 'max-h-0'
                            }`}
                        >
                            <p className="pb-4 px-1 text-sm font-light">
                                {answers[index]}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
