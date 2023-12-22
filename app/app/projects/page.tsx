"use client";

import { FiArrowRight, FiBook, FiBookmark, FiColumns, FiCopy, FiFolder, FiFolderPlus, FiPlay, FiPlus, FiSearch } from "react-icons/fi";
import Image from 'next/image'
import Link from "next/link";

export default function Projects() {

    const projects = [
        {
            title: 'University of Cambridge - Fall 2023',
            date: '13th December 2023',
        },
        {
            title: 'Can amusement parks have an educative purpose apart from an entertaining one?',
            date: '13th December 2023',
        },
        {
            title: 'Coronavirus disease (COVID-19): a scoping review',
            date: '13th December 2023',
        },
        {
            title: 'Productivity and Outcome in Developing countries',
            date: '13th December 2023',
        },
        {
            title: 'Food Crisis Sudan - African Diaspora',
            date: '13th December 2023',
        },
        {
            title: 'The agricultural practices and religious beliefs.',
            date: '13th December 2023',
        },
        {
            title: 'Facemasks can reduce severity of COVID-19',
            date: '13th December 2023',
        },
        {
            title: 'Kent was home to some of Britain’s earliest humans',
            date: '13th December 2023',
        }

    ]

    return (
        <main className="max-h-screen overflow-scroll p-3 bg-white rounded-md">
            <div className="flex flex-col">

                <div className="grid grid-cols-12">

                    <div className="col-span-9">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 p-5">
                                <span className="text-xl">Projects</span><br />
                                <span className="text-sm text-zinc-500">
                                    Organize your work in distinct projects
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="grid grid-cols-12 p-2 mb-2 rounded-md bg-white border border-zinc-300">
                            <div className="col-span-2 p-4">
                                <FiSearch />
                            </div>
                            <div className="col-span-10">
                                <input type="text" placeholder="Search Projects" className="input input-ghost w-full max-w-xs focus:bg-white focus:outline-none focus:border-white" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-1 p-2">
                    
                    <div className="col-span-9">
                        <div className="grid grid-cols-12 gap-1 divide-y divide-zinc-200 divide-solid hover:divide-solid">
                            <div className="col-span-12 flex flex-row">
                                <div className="flex mt-3 w-fit rounded-md flex-row bg-zinc-50 border-2 border-zinc-200 items-center">
                                    <div className="flex flex-col">
                                    <div className="flex flex-row p-1 items-center">
                                        <div className="flex flex-none p-2">
                                            <FiFolderPlus className="text-2xl text-zinc-400 mr-2" />
                                        </div>
                                        <div className="flex flex-1 p-1">
                                            <input type="text" placeholder="Your project name" className="input p-2 input-ghost w-full max-w-xs focus:bg-zinc-50 focus:outline-none focus:border-zinc-50" />
                                        </div>
                                        <div className="flex flex-none mr-2">
                                            <button className="text-dacopsy-blue font-bold text-sm">
                                                ADD
                                            </button>
                                        </div>
                                    </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-1 divide-y divide-zinc-200 divide-solid hover:divide-solid border border-zinc-300 rounded-md mt-3">

                            {
                                projects && projects.map((project, index) => {
                                    return (

                                        <div key={project.title} className="col-span-12 flex flex-row overflow-clip  cursor-pointer">

                                            <div className="flex flex-1 flex-col p-3 divide-y divide-solid">
                                                <div className="flex flex-col p-1">
                                                    <span className="text-md break-words inter-title font-bold text-dacopsy-blue mt-3">
                                                        {project.title}
                                                    </span>
                                                    <span className="text-sm break-words text-zinc-500 mt-2">
                                                        {project.date}
                                                    </span>
                                                </div>

                                            </div>
                                            <div className="flex flex-1 w-full flex-row p-1 items-center justify-end">
                                                
                                                <Link href={'/app/datasets'} className="bg-blue-100 text-md p-3 max-h-25 rounded-md mr-3 w-fit m-2 hover:bg-blue-200"

                                                >
                                                    <FiColumns className='inline mr-2' />
                                                    Browse Datasets
                                                </Link>
                                                {/* <button className="bg-white text-md text-blue-800 border-2 border-zinc-200 p-3 rounded-md w-full m-2">
                                                    <FiPlay className='inline mr-2' />
                                                    Run Tests
                                                </button> */}
                                            </div>
                                        </div>
                                    );


                                })
                            }



                        </div>

                    </div>

                    <div className="col-span-3 p-5 rounded-md h-fit text-left">
                        <div className="flex flex-col bg-yellow-100 items-center rounded-lg border-2 border-zinc-100 p-4">
                            <div className="flex-none">
                                <Image
                                    src='/Light bulb-cuate.png'
                                    width={'200'}
                                    height={'200'}
                                    alt={'Projects'}
                                    className=""
                                    style={{borderRadius:'50%'}}
                                />
                            </div>
                            <div className="flex-1 p-4 text-yellow-800 text-sm">
                                Projects helps you organize your datasets in a distinct manner. Having descriptive project
                                names helps you collectively manage your ideas at one place.
                            </div>
                            
                        </div>

                        <div className="flex flex-row bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 items-center rounded-lg mt-5  p-4">
                            <div className="flex-none">
                                <span className="text-lg text-white inter-title">
                                    Get upto 25% up on referrals
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

                </div>
            </div>



        </main>
    )
}