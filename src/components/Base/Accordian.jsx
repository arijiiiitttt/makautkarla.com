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
        <div className="flex justify-center items-center min-h-screen flex-col select-none appearance-none bg-gray-100 mb-8">
            <div className='md:text-lg text-md py-5 md:py-10 font-bold'>
                <h1 className='popblack text-black md:text-3xl'>Mostly Asked Questions</h1>
            </div>
                <Accordion type="single" collapsible className="md:w-full md:pt-5 md:max-w-2xl pb-3">
                    {faqs.map((faq, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <AccordionItem key={index} value={`item-${index + 1}`} className="shadow-sm w-[20rem] md:w-full rounded-lg mb-2 md:mb-4">
                                <AccordionTrigger
                                    className="text-[10px] p-1 md:text-sm font-semibold md-1 md:p-2 w-full text-left text-black focus:outline-none no-underline bg-white rounded-lg transition duration-150 ease-in-out"
                                    style={{ textDecoration: 'none' }}  
                                    onClick={() => handleToggle(index)}
                                >
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className='text-black text-[8px] md:text-[0.75rem] p-1 md:p-4'>
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
