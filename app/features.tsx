import { FaCircleCheck, FaDollarSign, FaFaceSmile, FaFaceSmileWink, FaGlobe, FaPlay, FaShare, FaVideo } from "react-icons/fa6";
import Image from 'next/image';
export default function Features() {
    return (
        <>
            <div className="flex flex-col min-h-screen bg-blue-100 flex-row max-w-screen">
                <div className="flex flex-1 bg-blue-100 p-3 items-center justify-center flex-col">
                    <span className="text-6xl block text-center">
                        What can you <span className="line-through">do</span> cook with <br/>
                        Dacopsy?
                    </span>
                </div>
                <div className="flex flex-1 gap-3 bg-blue-100 mb-2 p-8 justify-end">
                    <div className="flex flex-1 items-center">                            
                            <div className="grid grid-cols-12 rounded-lg">
                                <div className="col-span-12 bg-white">
                                <img
                                    src="/name-your-dataset-promo.png"  
                                    style={{
                                        width: "100%",
                                        objectFit: "cover"
                                    }}
                            />
                            <div className="col-span-12 p-10 ml-3 bg-white">
                                <FaFaceSmileWink className="text-4xl mb-3"/>
                                    <span className="text-xl"> 
                                        Intuitive User Interface
                                    </span>
                                    <span className="text-md block"> 
                                        With an intuitive User Interface, we guarantee
                                        a clutterless and ambient experience that makes
                                        working with data much more fun.
                                    </span>
                                </div>
                                </div>
                                
                                
                                
                                
                                
                            </div>
                        
                    </div>

                    <div className="flex flex-1">                            
                            <div className="grid grid-cols-12 rounded-lg">
                                <div className="col-span-12 bg-white">
                                <img
                                    src="/testing-promo.png"  
                                    style={{
                                        width: "100%",
                                        objectFit: "cover"
                                    }}
                            />
                            <div className="col-span-12 p-10 ml-3 bg-white">
                                <FaPlay className="text-4xl block mb-3"/>
                                    <span className="text-xl"> 
                                        Plenty of Statistical functions to play around
                                    </span>
                                    <span className="text-md block"> 
                                        Perform test such as One-way ANOVA, Mixed ANOVA, Krushal Wallis Test, T-tests and more.
                                    </span>
                                </div>
                                </div>
                                
                                
                                
                                
                                
                            </div>
                        
                    </div>

                    <div className="flex flex-1 items-center">                            
                            <div className="grid grid-cols-12 rounded-lg">
                                <div className="col-span-12 bg-white">
                                <img
                                    src="/skew-promo-3.png"  
                                    style={{
                                        width: "100%",
                                        objectFit: "cover"
                                    }}
                            />
                            <div className="col-span-12 p-10 ml-3 bg-white">
                                <FaVideo className="text-4xl block mb-3"/>
                                    <span className="text-xl"> 
                                        Visually manipulate data
                                    </span>
                                    <span className="text-md block"> 
                                        Interactive controls help you to go out of the box to 
                                        visualize your data besides your expected datasets.
                                    </span>
                                </div>
                                </div>
                                
                                
                                
                                
                                
                            </div>
                        
                    </div>

                    

                </div>
                
                {/* <div className="flex flex-col max-h-screen min-h-80 p-10 justify-center gap-2">

                    <div className="flex flex-col p-2 bg-zinc-100 w-fit rounded-md p-5 mb-3">

                        <div className="flex w-fit gap-2 mb-2">
                            <div className="flex flex-1 p-1 text-sky-900">
                                <FaCircleCheck className='text-3xl' />
                            </div>
                            <div className="flex flex-col p-1 flex-none text-zinc-900">
                                User-Friendly Interface
                                <span className="text-sm text-zinc-600 block">
                                    Intuitive design for effortless data manipulation.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="spacing-4 p-2 bg-zinc-100 w-fit rounded-md p-5">
                        <div className="flex w-fit gap-2 mb-2">
                            <div className="flex flex-1 p-1 text-sky-900">
                                <FaFaceSmile className='text-3xl' />
                            </div>
                            <div className="flex p-1 flex-col flex-none text-zinc-900">
                                Tailored Workflows
                                <span className="text-sm text-zinc-600 block">
                                    Customizable processes to fit unique research needs.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="spacing-4 p-2 bg-zinc-100 w-fit rounded-md p-5">
                        <div className="flex w-fit gap-2 mb-2">
                            <div className="flex flex-1 p-1 text-sky-900">
                                <FaDollarSign className='text-3xl' />
                            </div>
                            <div className="flex p-1 flex-col flex-none text-zinc-900">
                                Affordable Pricing
                                <span className="text-sm text-zinc-600 block">
                                    Reasonable and affordable usage plans
                                </span>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}