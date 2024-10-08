"use client";

import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// Example FAQ data directly added to simulate the same behavior (replace it with faq.json import if needed)
const faqs = [
    {
        question: "Is Frontend Development really coding?",
        answer: `Do frontend developers really code? The answer is yes, absolutely.
        The fact that frontend developers are full-time developers who produce an output that is visually appealing (the actual design seen and used by users) requires expertise in various aspects of development, including the logic that functions behind the scenes.`,
    }
];

const Try = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="flex justify-center items-center min-h-screen flex-col select-none appearance-none bg-gray-100">
            <div className='text-start text-lg px-10 font-bold'>
                <h1 className='popblack'>Mostly Asked Questions</h1>
            </div>

            <Accordion type="single" collapsible className="w-full pt-14 max-w-2xl">
                {faqs.map((faq, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <AccordionItem key={index} value={`item-${index + 1}`} className="border rounded-lg mb-4">
                            <AccordionTrigger
                                className="text-sm font-semibold p-2 w-full text-left focus:outline-none no-underline bg-white rounded-t-lg transition duration-150 ease-in-out"
                                onClick={() => handleToggle(index)}
                            >
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className={`p-4 font-serif ${isActive ? 'bg-gray-100 text-black' : 'bg-white text-gray-700'} text-justify rounded-b-lg border-t border-gray-300 transition duration-150 ease-in-out`}>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </div>
    );
}

export default Try;
