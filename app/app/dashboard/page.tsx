"use client";
import { FaCircleQuestion } from "react-icons/fa6";
import { FiBookmark, FiBox, FiCheck, FiCheckCircle, FiCoffee, FiColumns, FiCopy, FiEdit2, FiEdit3, FiFolder, FiHeart, FiInfo, FiLoader, FiPaperclip, FiPenTool, FiPlay, FiSmile, FiTarget, FiWatch } from "react-icons/fi";

export default function Dashboard() {
    return (
        <main className="max-h-screen p-3 bg-white rounded-md">
            <div className="flex flex-col">
                <div className="flex p-5">
                <span className="font-semibold text-lg text-zinc-500">
                    <FiBookmark className='inline mr-3 text-xl'/>Recent Projects
                </span>
                </div>

                <div className="grid grid-cols-12 gap-8 p-2 min-w-full">
                    <div className="col-span-3">
                        <div className="grid grid-cols-12 min-h-full bg-zinc-50 rounded-md border border-blue-80">
                            <div className="col-span-12 p-8 items-center rounded-md">
                                <FiFolder className="text-5xl text-blue-600 ml-auto mr-auto"/>
                            </div>
                            <div className="col-span-12 p-3 items-left">
                                <div className="max-h-5"></div>
                                <FiEdit2 className='text-sm inline mt-2 mb-2 mr-2 text-zinc-500'/> <span className="text-zinc-500 text-sm">13th December 2023</span><br/>
                                <span className="text-justify overflow-hidden">Can amusement parks have an educative purpose apart from an entertaining one?</span><br/>
                                
                            </div>
                            
                        </div>
                    </div>

                    <div className="col-span-3">
                        <div className="grid grid-cols-12 min-h-full bg-zinc-50 rounded-md border border-blue-80">
                            <div className="col-span-12 p-8 items-center rounded-md">
                                <FiFolder className="text-5xl text-blue-600 ml-auto mr-auto"/>
                            </div>
                            <div className="col-span-12 p-3 items-left">
                                <div className="max-h-5"></div>
                                <FiEdit2 className='text-sm inline mt-2 mb-2 mr-2 text-zinc-500'/> <span className="text-zinc-500 text-sm">13th December 2023</span><br/>

                                <span className="text-justify overflow-hidden">Functional properties of coffee and coffee by-products </span><br/>
                                
                            </div>
                            
                        </div>
                    </div>

                    <div className="col-span-3">
                        <div className="grid grid-cols-12 min-h-full  bg-zinc-50 rounded-md border border-blue-80">
                            <div className="col-span-12 p-8 items-center rounded-md">
                                <FiFolder className="text-5xl text-blue-600 ml-auto mr-auto"/>
                            </div>
                            <div className="col-span-12 p-3 items-left">
                                <div className="max-h-5"></div>
                                <FiEdit2 className='text-sm inline mt-2 mb-2 mr-2 text-zinc-500'/> <span className="text-zinc-500 text-sm">13th December 2023</span><br/>

                                <span className="text-justify overflow-hidden">National Institute of Health </span><br/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            {/* Running Datasets */}
            <div className="flex flex-col">
            <div className="flex p-5">
            <span className="font-semibold text-lg text-zinc-500">
                <FiPlay className='inline mr-3 text-xl'/>Recent datasets
            </span>
            </div>

            <div className="grid grid-cols-12 gap-8 p-2 min-w-full">
                <div className="col-span-3 border border-zinc-300 rounded-md">
                    <div className="grid grid-cols-12 rounded-md p-3">
                        <div className="col-span-3 p-4">
                            <FiLoader className='animate-spin text-2xl ml-auto mr-auto'/>
                        </div>
                        <div className="col-span-9">
                            Composing - Bivariate Regression
                        </div>
                        <div className="col-span-12 col-start-4">
                            <span className="text-zinc-400 text-sm" >
                                Antarctic Glacier data
                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-span-3 border border-zinc-300 rounded-md">
                    <div className="grid grid-cols-12 rounded-md p-3">
                        <div className="col-span-3 p-4">
                            <FiTarget className='animate-ping text-blue-300 text-2xl ml-auto mr-auto'/>
                        </div>
                        <div className="col-span-9">
                            Syncing data - Man Whitney U Test
                        </div>
                        <div className="col-span-12 col-start-4">
                            <span className="text-zinc-400 text-sm" >
                                Old World Monkeys - South America
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            {/* Promo code */}
            <div className="flex flex-col">
                <div className="flex p-2">
                <span className="text-lg p-5 font-semibold text-zinc-500">
                    <FiHeart className='inline mr-3 text-xl'/>Promotions
                </span>
                </div>

                <div className="grid grid-cols-12 p-2 min-w-full">
                    <div className="col-span-3 p-6 rounded-md bg-gradient-to-r from-sky-600 via-blue-500 to-indigo-500">
                        <span className="text-lg text-white inter-title">
                            Refer your friends/colleagues/fellow researchers and get free usage credits upto $100 *
                        </span>
                        
                        <span className="text-sm text-zinc-100 block mb-5 mt-5">
                            Use coupon code
                        </span>
                        
                        <span className="block w-fit border border-dashed border-size-3 rounded-md p-5 text-white text-xl">
                            DACOPSY 
                            <FiCopy className='inline ml-4 cursor-pointer'/>
                        </span>
                    </div>
                </div>
            </div>

        </main>
    )
}