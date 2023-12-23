'use client';

import {
  FiColumns, FiFolderPlus, FiSearch,
} from 'react-icons/fi';
import Link from 'next/link';

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
    },

  ];

  return (
    <main className='max-h-screen overflow-scroll p-3 bg-white rounded-md'>
      <div className='flex flex-col'>

        <div className='grid grid-cols-12 gap-1 p-2'>

          <div className='col-span-3 p-2 bg-[url(/blue-background-project.jpg)] bg-cover rounded-md min-h-full text-left min-h-full'>

            <div className='flex min-h-full items-center'>

              <div className='flex mt-3 w-fit ml-auto mr-auto rounded-md bg-white flex-row shadow-xl'>
                <div className='flex flex-col min-w-full self-end'>
                  <div className='flex flex-row p-1  min-w-full items-center'>
                    <div className='flex flex-none p-2'>
                      <FiFolderPlus className='text-2xl text-zinc-400 mr-2' />
                    </div>
                    <div className='flex flex-1 p-1'>
                      <input type='text' placeholder='Your project name' className='input p-2 input-ghost w-full max-w-xs focus:bg-zinc-50 focus:outline-none focus:border-zinc-50' />
                    </div>
                    <div className='flex justify-items-end flex-none p-3'>
                      <button className='text-dacopsy-blue font-bold text-sm'>
                      ADD
                      </button>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

          <div className='col-span-9'>
            <div className='grid grid-cols-12 gap-1 divide-y divide-zinc-200 divide-solid hover:divide-solid'>
              <div className='col-span-12 flex p-2 flex-row'>
                <div className='grid grid-cols-12 p-2 mb-2 rounded-md bg-white border border-zinc-300'>
                  <div className='col-span-2 p-4'>
                    <FiSearch />
                  </div>
                  <div className='col-span-10'>
                    <input type='text' placeholder='Search Projects' className='input input-ghost w-full max-w-xs focus:bg-white focus:outline-none focus:border-white' />
                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-12 gap-3 rounded-md mt-3 p-3'>

              {
                projects && projects.map((project) => (

                  <div key={project.title} className='col-span-4 flex flex-col overflow-clip rounded-md bg-white cursor-pointer border border-zinc-100 shadow-md items-stretch'>

                    <div className='flex flex-1 flex-col p-2 '>
                      <div className='flex flex-col p-1'>
                        <span className='text-md break-words inter-title font-bold text-zinc-900 mt-3'>
                          {project.title}
                        </span>
                        <span className='text-sm break-words text-zinc-500 mt-2'>
                          {project.date}
                        </span>
                      </div>

                    </div>
                    <div className='flex flex-1 w-full flex-row p-1 items-center'>

                      <Link href={'/app/datasets'} className='text-white bg-dacopsy-blue text-sm p-2 max-h-25 rounded-md mr-3 w-fit m-2 hover:bg-blue-200 self-end'

                      >
                        <FiColumns className='inline mr-1' /> View Datasets
                      </Link>
                    </div>
                  </div>
                ))
              }

            </div>

          </div>

        </div>
      </div>

    </main>
  );
}
