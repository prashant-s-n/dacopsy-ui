import Link from 'next/link';
import {
  FaArrowDown, FaArrowRight,
} from 'react-icons/fa6';

export default function LandingIntro() {
  return (

    <div className='flex min-h-screen items-center bg-gradient-to-r from-sky-100 via-blue-100 to-sky-200'>
      <div className='absolute bottom-0 inset-x-0 text-center p-5'>
        <button className='shadow-lg bg-white p-3 text-xs rounded-3xl'>
          <FaArrowDown/>
        </button>
      </div>
      <div className='grid grid-cols-12 gap-1'>
        <div className='col-span-5 col-start-3 h-fit p-8 rounded-lg items-center justify-start'>
          <div className='text-6xl text-dacopsy-blue content-center landing-title'>
                        Cooking Data, <br />Crafting Discoveries
          </div>
          <div className='text-lg text-black p-1 content-center mt-10 mb-10'>
                        Dacopsy aims to cater as a tool which would be helpful for
                        pretesting hypothesis and teaching for researchers across the globe.
          </div>
          <div className='border border-blue-500 p-4 w-fit rounded-md cursor-pointer'>
            <Link href={'/'} className='text-blue-500 inline'>
                            Learn more <FaArrowRight className='inline' />
            </Link>
          </div>
        </div>
        <div className='col-span-3 justify-items'>
          <div className='card w-fit h-3/4 image-full  mt-4 shadow-lg ease-in duration-300' >
            {/* <figure><img src="/stats.jpg" alt="Shoes" /></figure> */}
            <div className='card-body bg-white rounded-md'>
              <h2 className='card-title p-2 text-zinc-900'>Schedule a demo</h2>

              <p className='text-sm text-zinc-500  mb-2'>Experience the power of our Data Cooker firsthand! Schedule a personalized demo to discover how our intuitive platform streamlines data manipulation.</p>
              <div className='card-actions p-1 flex-col'>
                <input type='email' placeholder='Your email' className='bg-zinc-100 input w-full max-w-xs' />
                <input type='text' placeholder='Your full name' className='bg-zinc-100 input w-full max-w-xs' />
                <button className='btn w-full bg-zinc-500 text-white border-none mt-5'>Schedule</button>

                <div className='form-control p-2 flex'>
                  <label className='label cursor-pointer'>

                    <input type='checkbox' className='checkbox [--chkbg:theme(colors.blue.600)] ' />
                    <span className='label-text ml-3 text-xs text-zinc-400'>
                      {`By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions`}
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
