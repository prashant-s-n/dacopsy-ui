import {
  FaDollarSign, FaFaceSmileWink, FaPlay, FaWandMagic,
} from 'react-icons/fa6';
import Image from 'next/image';

export default function Features() {
  return (
    <>
      <div className='flex flex-col min-h-screen bg-zinc-100 flex-row max-w-screen'>
        <div className='bg-blue-100 text-center p-10'>
          <span className='text-dacopsy-blue text-2xl'>
                        Explore our features
          </span>
        </div>

        <div className='grid grid-cols-12 gap-1 items-center p-10'>

          <div className='col-span-6 p-7'>
            <div className='grid grid-cols-12 bg-white rounded-md shadow-lg p-6 grid-flow-rows'>
              <div className='col-span-6'>
                <Image
                  src='/name-your-dataset-promo.png'
                  height={1000}
                  width={1000}

                  alt='Intuitive User Interface'
                  sizes='100vw'
                  style={{
                    transform: 'scale(1.2)',
                  }}
                />
              </div>
              <div className='col-span-6 p-6 spacing-3 border-l-4 border-zinc-100'>
                <FaFaceSmileWink className='text-4xl mb-3' />
                <span className='text-xl'>
                                    Intuitive User Interface
                </span>
                <span className='text-md text-zinc-400 block'>
                                    With an intuitive User Interface, we guarantee
                                    a clutterless and ambient experience that makes
                                    working with data much more fun.
                </span>
              </div>
            </div>

          </div>

          <div className='col-span-6 p-7'>
            <div className='grid grid-cols-12 bg-white rounded-md shadow-lg p-6 grid-flow-rows'>
              <div className='col-span-6'>
                <Image
                  src='/testing-promo.png'
                  height={1000}
                  width={1000}
                  alt='Intuitive User Interface'
                  style={{
                    transform: 'scale(1.2)',
                  }}
                />
              </div>
              <div className='col-span-6 p-6 spacing-3 border-l-4 border-zinc-100'>
                <FaPlay className='text-4xl mb-3' />
                <span className='text-xl'>
                                    Plenty of Statistical functions to play around
                </span>
                <span className='text-md text-zinc-400 block'>
                  {`Perform test such as One-way ANOVA, Mixed ANOVA, Krushal Wallis Test, T-tests and more.`}
                </span>
              </div>
            </div>

          </div>

          <div className='col-span-6 p-7'>
            <div className='grid grid-cols-12 bg-white rounded-md shadow-lg p-6 grid-flow-rows'>
              <div className='col-span-6'>
                <Image
                  src='/mobiuss-strip-skew.png'
                  height={1000}
                  width={1000}
                  alt='Intuitive User Interface'
                  style={{
                    transform: 'scale(1.2)',
                  }}
                />
              </div>
              <div className='col-span-6 p-6 spacing-3 border-l-4 border-zinc-100'>
                <FaWandMagic className='text-4xl mb-3' />
                <span className='text-xl'>
                                    Visually manipulate data
                </span>
                <span className='text-md text-zinc-400 block'>
                                Interactive controls help you to go out of the box to
                                        visualize your data besides your expected datasets.
                </span>
              </div>
            </div>

          </div>

          <div className='col-span-6 p-7'>
            <div className='grid grid-cols-12 bg-white rounded-md shadow-lg p-6 grid-flow-rows'>
              <div className='col-span-6'>
                <Image
                  src='/pay.png'
                  height={1000}
                  width={1000}
                  alt='Pay'
                  style={{
                    transform: 'scale(1.2)',
                  }}
                />
              </div>
              <div className='col-span-6 p-6 spacing-3 border-l-4 border-zinc-100'>
                <FaDollarSign className='text-4xl mb-3' />
                <span className='text-xl'>
                                    Affordable Pricing
                </span>
                <span className='text-md text-zinc-400 block'>
                                    Pay as per usage, easy and upgradable
                                    student / professional plans.
                </span>
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
