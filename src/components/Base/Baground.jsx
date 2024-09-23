import React from 'react'
import { BackgroundLines } from "@/components/ui/background-lines";


const Baground = () => {
    return (
        <>
            <div>
                <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                    <h1 className="text-5xl font-bold bowl text-orange-300">MAKAUTKARLA.COM</h1>
                    <h1 className="text-2xl mt-2 oswal">Question Papers For Makaut Students</h1>
                    
                    <div className="mt-4"> {/*content*/}</div>
                </BackgroundLines>
            </div>
        </>
    )
}

export default Baground