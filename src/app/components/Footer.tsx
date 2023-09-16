import React from "react";
import Image from "next/image";
const Footer: React.FC = () => {
    console.log('data', Array.from(Array(5)))
    return (
        <div className="grid grid-cols-12 gap-4 bg-slate-900 text-white h-20 px-4">
           <div className="col-span-2">
                <Image src='./next.svg' alt='' width={100} height={100}/>
           </div>
           <div className="col-span-6">
                <input type="text" placeholder="search" className="border border-red-300 w-100 h-10 ring-pink-500"/>
            </div>
            <div className="col-span-4">
                <ul className="flex gap-4 flex-row-reverse">
                    <li>orders</li>
                    <li>track orders</li>
                    <li>signin</li>
                </ul>

            </div>
        </div>
    )
}

export default Footer