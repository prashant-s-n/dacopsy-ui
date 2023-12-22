'use client';
import { FaHome } from "react-icons/fa";
import { FiChevronRight, FiColumns, FiFileText, FiFolder, FiHeadphones, FiHome, FiSmile, FiUser } from "react-icons/fi";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import classNames from 'classnames';

export default function SideBar() {

    const pathName = usePathname();

    return (
        <div className="flex flex-col p-4 spacing-1 items-start bg-white min-h-full">
            <Link href={'/app/'} 
                className={classNames("flex p-3 items-center gap-5 min-w-full rounded-md cursor-pointer hover:bg-zinc-100", {
                    'bg-zinc-200': pathName === '/app'
                })}
            >
                <div className="flex flex-none">
                    <FiHome className='text-2xl'/>
                </div>
                <div className="flex flex-none flex-col">
                    <span className="text-md">Dashboard</span>
                    <span className="text-sm text-zinc-400">Your activity snapshot</span>
                </div>
                <div className="flex flex-none">
                    <FiChevronRight/>
                </div>
                
            </Link>
            
            <Link href={'/app/projects/'} 
                className={classNames("flex p-3 items-center gap-5 min-w-full rounded-md cursor-pointer hover:bg-zinc-100", {
                    'bg-zinc-200': pathName === '/app/projects'
                })}
            >
                <div className="flex flex-none">
                    <FiFolder className='text-2xl'/>
                </div>
                <div className="flex flex-1 flex-col">
                    <span className="text-md">Projects</span>
                    <span className="text-sm text-zinc-400">Your projects</span>
                </div>
            </Link>

            <Link href={'/app/datasets/'} 
                className={classNames("flex p-3 items-center gap-5 min-w-full rounded-md cursor-pointer hover:bg-zinc-100", {
                    'bg-zinc-200': pathName === '/app/datasets'
                })}
            >
                <div className="flex flex-none">
                    <FiColumns className='text-2xl'/>
                </div>
                <div className="flex flex-1 flex-col">
                    <span className="text-md">Datasets</span>
                    <span className="text-sm text-zinc-400">Manage your datasets</span>
                </div>
            </Link>

            <Link href={'/app/datasets'} className="flex p-3 items-center gap-5 min-w-full">
                <div className="flex flex-none">
                    <FiUser className='text-2xl'/>
                </div>
                <div className="flex flex-1 place-items-start flex-col">
                    <span className="text-md">Profile</span>
                    <span className="text-sm text-zinc-400">Manage your Profile</span>
                </div>
            </Link>

            <div className="flex p-3 items-center gap-5 min-w-full">
                <div className="flex flex-none">
                    <FiFileText className='text-2xl'/>
                </div>
                <div className="flex flex-1 items-start flex-col">
                    <span className="text-md">Plans &amp; Usage</span>
                    <span className="text-sm text-zinc-400">Track your usage plans</span>
                </div>
            </div>

            <div className="flex p-3 items-center gap-5 min-w-full">
                <div className="flex flex-none">
                    <FiSmile className='text-2xl'/>
                </div>
                <div className="flex flex-1 items-start flex-col">
                    <span className="text-md">Feedback</span>
                    <span className="text-sm text-zinc-400">Write us a feedback</span>
                </div>
            </div>

            <div className="flex p-3 items-center gap-5 min-w-full">
                <div className="flex flex-none">
                    <FiHeadphones className='text-2xl'/>
                </div>
                <div className="flex flex-1 items-start flex-col">
                    <span className="text-md">Support</span>
                    <span className="text-sm text-zinc-400">Write us your grieviences</span>
                </div>
            </div>


        </div>
    )
}