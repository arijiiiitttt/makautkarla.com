import React from 'react';
import { BackgroundLines } from "@/components/ui/background-lines";
import { LiaStarSolid } from "react-icons/lia";
import Link from 'next/link';

const Baground = () => {
    return (
        <div>
            <BackgroundLines className="flex items-center justify-center w-full flex-col md:px-4 bg-white">
                <h1 className="text-2xl md:text-5xl font-bold bowl text-orange-300 select-none">MAKAUTKARLA.COM</h1>
                <h1 className="md:text-2xl md:mt-2 oswal select-none text-black">Question Papers For Makaut Students</h1>
                <p></p>
            </BackgroundLines>
        </div>
    );
}

export default Baground;
