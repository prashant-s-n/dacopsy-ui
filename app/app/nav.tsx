import Image from 'next/image'

export default function AppNavBar() {
    return (
        <div className="navbar bg-blue-100 max-h-10 p-10 shadow-md" style={{
            fontFamily: "var(--font-inter)"
        }}>
            <div className='flex-1 gap-x-3'>
            <Image
                src={'/brand-logo-official.png'}
                alt='Brand logo'
                width='30'
                height='30'
            />
            <span className='text-xl font-bold text-dacopsy-blue' style={{lineHeight:'1.3'}}>
                DACOPSY
                <span className="text-blue-900 block" style={{fontSize:'9pt'}}>Data Cooker for Psychologists</span>
            </span>
            </div>

            <div className="flex-none">
                <ul className="menu menu-horizontal menu-end p-1 text-dacopsy-blue text-sm">
                    <li
                    className='text-blue-900 rounded-md'
                    ><a className='font-semibold'>LOGOUT</a></li>
                </ul>
            </div>
        </div>
    );
}