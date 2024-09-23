"use client";

import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import faqs from "../data/faq.json";

const Accordian = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="flex justify-center items-center min-h-screen flex-col select-none appearance-none bg-gray-100">
            <div className='text-lg py-10 font-bold'>
                <h1 className='popblack'>Mostly Asked Questions</h1>
            </div>

            <Accordion type="single" collapsible className="w-full pt-5 max-w-2xl">
                {faqs.map((faq, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <AccordionItem key={index} value={`item-${index + 1}`} className="border rounded-lg mb-4">
                            <AccordionTrigger
                                className="text-sm font-semibold p-2 w-full text-left focus:outline-none no-underline bg-white rounded-lg transition duration-150 ease-in-out"
                                onClick={() => handleToggle(index)}
                            >
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className={`p-4 font-normal ${isActive ? 'bg-gray-100 text-black' : 'bg-white text-gray-700'} text-justify rounded-b-lg border-t border-gray-400 transition duration-150 ease-in-out`}>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </div>
    );
}

export default Accordian;
