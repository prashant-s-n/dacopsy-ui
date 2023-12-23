import { FaUniversity } from 'react-icons/fa';

export default function Pricing() {
  return (
    <>
      <div className='flex flex-col min-h-screen bg-zinc-100 flex-row max-w-screen'>
        <div className='bg-blue-100 text-center p-10'>
          <span className='text-dacopsy-blue text-2xl'>
                        Pricing
          </span>
        </div>

        <div className='grid grid-cols-12  gap-1 items-center p-10'>
          <div className='col-span-10 col-start-2 p-1 '>
            <div className='grid grid-cols-12 auto-rows-fr gap-4 items-start'>
              <div className='col-span-4 text-center bg-white rounded-md shadow-md p-4'>
                <div className='text-7xl'>
                                    $5
                </div>
                <div className='text-sm text-zinc-600'>renews Monthly</div>

                <div className='p-6 border-4 border-b-zinc-100 border-white'>
                                    5 GB of workspace storage
                  <span className='text-sm text-zinc-400 block'>
                                        Get upto 5 GB of workspace storage for your projects.
                  </span>
                </div>
                <div className='p-6 border-4 border-b-zinc-100 border-white'>
                                    5 datasets
                  <span className='text-sm text-zinc-400 block'>
                                        You can create and manage upto 5 datasets in this plan
                  </span>
                </div>
                <div className='p-6 border-4 border-b-zinc-100 border-white'>
                                    Capped uploads
                  <span className='text-sm text-zinc-400 block'>
                                        Uploads are limited to 100 datasets.
                  </span>
                </div>
                <div className='p-6'>
                                    Limited Exports
                  <span className='text-sm text-zinc-400 block'>
                                        Exports and external sharing are limited to 100 datasets.
                  </span>
                </div>
                <div className='p-1'>
                  <button className='btn bg-dacopsy-blue text-white w-full'>
                                        Purchase
                  </button>
                </div>

              </div>

              <div className='col-span-4 text-center auto-rows-fr bg-white rounded-md shadow-md p-4'>
                <div className='text-7xl'>
                                    $50
                </div>
                <div className='text-sm text-zinc-600'>renews Annualy</div>

                <div className='p-6 border-4 border-b-zinc-100 border-white'>
                                    10 GB of workspace storage
                  <span className='text-sm text-zinc-400 block'>
                                        Get upto 10 GB of workspace storage for your projects.
                  </span>
                </div>
                <div className='p-6 border-4 border-b-zinc-100 border-white'>
                                    25 datasets
                  <span className='text-sm text-zinc-400 block'>
                                        You can create and manage upto 25 datasets in this plan
                  </span>
                </div>
                <div className='p-6 border-4 border-b-zinc-100 border-white'>
                                    Capped uploads
                  <span className='text-sm text-zinc-400 block'>
                                        Uploads are limited to 500 datasets.
                  </span>
                </div>
                <div className='p-6'>
                                    Limited Exports
                  <span className='text-sm text-zinc-400 block'>
                                        Exports and external sharing are limited to 500 datasets.
                  </span>
                </div>
                <div className='p-1'>
                  <button className='btn bg-dacopsy-blue text-white w-full'>
                                        Purchase
                  </button>
                </div>

              </div>

              <div className='col-span-4 text-center auto-rows-fr bg-white rounded-md shadow-md p-4'>
                <div className='text-5xl text-center'>
                  <FaUniversity className='ml-auto mr-auto'/>
                </div>
                <div className='text-sm text-zinc-600 mt-2'>Institutional plans</div>

                <div className='p-6 border-4 border-b-zinc-100 border-white'>
                                    Customized workspace storage
                  <span className='text-sm text-zinc-400 block'>
                                        Get upto 1 TB of workspace storage for your projects.
                  </span>
                </div>
                <div className='p-6 border-4 border-b-zinc-100 border-white'>
                                    10,000 datasets
                  <span className='text-sm text-zinc-400 block'>
                                        You can create and manage upto 10,000 datasets in this plan
                  </span>
                </div>
                <div className='p-6 border-4 border-b-zinc-100 border-white'>
                                    Capped at 50,000 datasets uploads
                  <span className='text-sm text-zinc-400 block'>
                                        Uploads are limited to 50,000 datasets.
                  </span>
                </div>
                <div className='p-6'>
                                    Unlimited Exports
                  <span className='text-sm text-zinc-400 block'>
                                        Exports and external sharing are unlimited
                  </span>
                </div>
                <div className='p-4'>
                  <button className='btn bg-emerald-500 text-white w-full'>
                                        Enquire
                  </button>
                  <span className='text-sm text-zinc-400 p-4'>
                                        Our team will curate your requirements and provide you the
                                        best plan according to your budget.
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
  );
}
