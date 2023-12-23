'use client';

import {
  FiColumns, FiDatabase, FiSearch, FiSettings,
} from 'react-icons/fi';
import { useState } from 'react';
import DatasetConfigurator from '@/common/components/datasets/dataset-configurator';

export default function Projects() {
  const [open, setOpen] = useState(false);

  const handleDataSetCogClick = () => {
    setOpen(true);
  };

  const datasets = [
    {
      id: '1',
      title: 'Normal Dist - 1',
      date: '13th December 2023',
      count: '14K',
    },
    {
      id: '2',
      title: 'Normal Dist - 2',
      date: '13th December 2023',
      count: '14K',
    },
    {
      id: '3',
      title: 'Normal Dist - 3',
      date: '13th December 2023',
      count: '14K',
    },
    {
      id: '3',
      title: 'Normal Dist - 3',
      date: '13th December 2023',
      count: '14K',
    },
    {
      id: '4',
      title: 'Normal Dist - 3',
      date: '13th December 2023',
      count: '14K',
    },
    {
      id: '5',
      title: 'Normal Dist - 3',
      date: '13th December 2023',
      count: '14K',
    },
    {
      id: '6',
      title: 'Normal Dist - 3',
      date: '13th December 2023',
      count: '14K',
    },

  ];

  return (
    <main className='max-h-screen overflow-scroll p-3 bg-white rounded-md'>
      <div className='flex flex-col'>

        <div className='grid grid-cols-12'>

          <div className='col-span-9'>
            <div className='grid grid-cols-12'>
              <div className='col-span-12 p-5'>
                <span className='text-xl'>Datasets</span><br />
                <span className='text-sm text-zinc-500'>
                                    See your data in action!

                </span>
              </div>
            </div>
          </div>
          <div className='col-span-3'>
            <div className='grid grid-cols-12 p-2 mb-2 rounded-md bg-white border border-zinc-300'>
              <div className='col-span-2 p-4'>
                <FiSearch />
              </div>
              <div className='col-span-10'>
                <input type='text' placeholder='Search Datasets' className='input input-ghost w-full max-w-xs focus:bg-white focus:outline-none focus:border-white' />
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-12 gap-1 p-2'>

          <div className='col-span-3'>
            <div className='grid grid-cols-12 gap-1 divide-y divide-zinc-200 divide-solid hover:divide-solid'>
              <div className='col-span-12 flex flex-col p-3'>

                <div className='flex flex-col'>
                  <span className='text-sm text-zinc-400'>
                                        Project
                  </span>
                  <span className='text-lg inter-title text-dacopsy-blue'>
                                        University of Cambridge - Fall 2023
                  </span>
                </div>

                <div className='flex mt-3 w-full rounded-md flex-row bg-zinc-50 border-2 border-zinc-200 items-center'>
                  <div className='flex flex-col'>
                    <div className='flex flex-row p-1 items-center'>
                      <div className='flex flex-none p-2'>
                        <FiColumns className='text-2xl text-zinc-400 mr-2' />
                      </div>
                      <div className='flex flex-1 p-1'>
                        <input type='text' placeholder='Your Dataset name' className='input p-2 input-ghost w-full max-w-xs focus:bg-zinc-50 focus:outline-none focus:border-zinc-50' />
                      </div>
                      <div className='flex flex-none mr-2'>
                        <button className='text-dacopsy-blue font-bold text-sm'>
                                                    ADD
                        </button>
                      </div>
                    </div>
                  </div>

                </div>

                <div className='flex flex-col mt-2 border border-zinc-200 rounded-lg divide-y divide-zinc-200 divide-solid'>
                  {datasets && datasets.map((dataset) => (
                    <section key={dataset.id}>
                      <div className='flex flex-row cursor-pointer items-center p-3 hover:bg-zinc-100' >
                        <div className='flex-none p-4'>
                          <FiDatabase className='text-3xl' />
                        </div>

                        <div className='flex-1 p-2' key={dataset.title}>
                          <span className='text-lg block inter-title'>{dataset.title}</span>
                          <span className='text-sm block text-zinc-500'>{dataset.count} records</span>
                          <span className='text-xs block text-zinc-500'>{dataset.date}</span>
                        </div>

                        <div className='flex-none p-2'>
                          <FiSettings className='text-lg text-zinc-400'
                            onClick={handleDataSetCogClick}
                          />
                        </div>
                      </div>
                    </section>
                  ))}
                </div>

              </div>
            </div>
          </div>

          <div className='col-span-9 rounded-md h-fit text-left border border-zinc-300 min-h-full'>

          </div>

        </div>
      </div>

      <DatasetConfigurator
        isOpen={open}
        exitHandler={() => setOpen(false)}
      />

    </main>
  );
}
