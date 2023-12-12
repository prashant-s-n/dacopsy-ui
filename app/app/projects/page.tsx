"use client";

import { FiBook, FiBookmark, FiColumns, FiFolder, FiPlay, FiPlus, FiSearch } from "react-icons/fi";
import Image from 'next/image'

export default function Projects() {

    const projects = [
        {
            title : 'Can amusement parks have an educative purpose apart from an entertaining one?',
            date : '13th December 2023',
        },
        {
            title : 'Coronavirus disease (COVID-19): a scoping review',
            date : '13th December 2023',
        },
        {
            title : 'Productivity and Outcome in Developing countries',
            date : '13th December 2023',
        },
        {
            title : 'Food Crisis Sudan - African Diaspora',
            date : '13th December 2023',
        },
        {
            title: 'The agricultural practices and religious beliefs.',
            date : '13th December 2023',
        }

    ]

    return (
        <main className="max-h-screen overflow-scroll p-3 bg-white rounded-md">
            <div className="flex flex-col">

                <div className="grid grid-cols-12">
                    
                    <div className="col-span-9">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 p-5">
                                <span className="text-xl">Projects</span><br/>
                                <span className="text-sm text-zinc-500">
                                    Organize your work in distinct projects
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="grid grid-cols-12 p-2 mb-3 rounded-md bg-zinc-100">
                            <div className="col-span-2 p-4">
                                <FiSearch/>
                            </div>
                            <div className="col-span-10">
                            <input type="text" placeholder="Search Projects" className="input input-ghost w-full max-w-xs focus:bg-zinc-100 focus:outline-none focus:border-none"/>
                            </div>  
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-5 p-4">
                    <div className="col-span-4 rounded-md h-fit text-left">
                        <div className="flex flex-row bg-yellow-100 items-center rounded-lg border-2 border-zinc-100 p-4">
                            <div className="flex-none">
                                <Image
                                    src='/Light bulb-cuate.png'
                                    width={'150'}
                                    height={'150'}
                                    alt={'Projects'}
                                    className=""
                                    style={{borderRadius:'50%'}}
                                />
                            </div>
                            <div className="flex-1 p-4 text-yellow-800">
                                Projects helps you organize your datasets in a distinct manner. Having descriptive project
                                names helps you collectively manage your ideas at one place.
                            </div>
                            
                        </div>
                        <div className="flex mt-3 rounded-md flex-row bg-zinc-50 border-2 border-zinc-200 items-center p-2">
                            <div className="flex flex-none p-2">
                                <FiFolder className="text-2xl text-zinc-400"/>
                            </div>
                            <div className="flex flex-1">
                                <input type="text" placeholder="Your project name" className="input input-ghost w-full max-w-xs focus:bg-zinc-50 focus:outline-none focus:border-none"/>
                            
                            </div>
                        </div>
                        <button className="btn bg-dacopsy-blue p-5 h-fit text-white w-1/2 mt-4">
                            Create Project
                        </button>
                    </div>
                    <div className="col-span-8">
                    <div className="grid grid-cols-12 gap-2">
                    
                    {
                        projects && projects.map((project) => {
                            return (
                            <div className="col-span-12 shadow-md flex flex-row overflow-clip mb-4 rounded-md cursor-pointer bg-blue-50">

                                    

                                <div className="flex flex-1 flex-col p-3">
                                    <div className="flex flex-col p-1 text-md">
                                        <span className="text-lg break-words text-dacopsy-blue mt-3">
                                            {project.title}
                                        </span>
                                        <span className="text-sm break-words text-zinc-500 mt-2">
                                            {project.date}
                                        </span>
                                    </div>
                                    
                                </div>
                                <div className="flex flex-1 w-full flex-row p-3  items-center">
                                        <button className="bg-blue-100 text-md p-3 max-h-25 rounded-md mr-3 w-full m-2">
                                            <FiColumns className='inline mr-2'/>
                                            Datasets
                                        </button>
                                        <button className="bg-white text-md text-blue-800 border-2 border-zinc-200 p-3 rounded-md w-full m-2">
                                            <FiPlay className='inline mr-2'/>
                                            Run Tests
                                        </button>
                                    </div>
                            </div>
                            );
                        })
                    }
                    

                    
                    </div>

                    </div>

                </div>
            </div>

            

        </main>
    )
}