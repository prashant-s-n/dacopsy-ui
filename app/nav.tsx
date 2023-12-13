import Image from 'next/image'

export default function Nav() {
    return (
        <div className="navbar bg-white p-10 shadow-md">
            <div className='flex-1 gap-x-3'>
            <Image
                src={'/brand-logo-official.png'}
                alt='Brand logo'
                width='30'
                height='30'
            />
            <span className='text-xl font-bold text-dacopsy-blue'>
                DACOPSY
            </span>
            </div>

            <div className="flex-none">
                <ul className="menu menu-horizontal menu-end px-1 text-dacopsy-blue text-sm">
                    
                    
                    <li><a className='font-semibold'>PRICING</a></li>
                    <li><a className='font-semibold'>SUPPORT</a></li>
                    <li
                    className='text-zinc-100 rounded-md bg-dacopsy-blue'
                    ><a className='font-semibold'>LOGIN</a></li>
                </ul>
            </div>
        </div>
    );
}