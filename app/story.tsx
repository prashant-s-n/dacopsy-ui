import Image from 'next/image'
import Link from 'next/link'

export default function Story() {
    return (
        <div className="flex min-h-screen bg-gradient-to-r from-sky-100 via-blue-400 to-indigo-300 max-w-screen items-center p-10">

            <div className="grid grid-cols-12 w-full items-center  p-6 rounded-md">
                <div className='col-span-8 col-start-3'>
                    <div className="grid grid-cols-12 mb-5 w-full items-center bg-white shadow-md p-3 rounded-xl">
                        <div className="col-span-4 text-center p-10 border-4 border-white border-r-sky-100">
                            <Image
                                src="/brand-logo-official.png"
                                height={50}
                                width={50}
                                alt="Brand Dacopsy"
                                style={{
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    marginBottom: "10px",
                                }}
                            />

                            <span className='text-xl'>Greek symbol (Ψ)</span><br />
                            <span className='text-xs'>The Greek symbol psi (Ψ) is used to represent psychology because it is the initial letter of the word "psyche." The word "psyche" comes from the Greek word "psuche," which means "soul" or "life."</span><br />
                            
                        </div>
                        <div className="col-span-8 p-8">
                            <div className='text-3xl p-3 inter-title text-dacopsy-blue'>Origins of Dacopsy</div>
                            <div className='block p-3'>
                                DaCoPsy stands for "Data Cooker for Psychologists"
                                <br/><br/>
                                DaCoPsy simplifies the data generating method by allowing you to automatically generate data within a given range. The data generated can be further manipulated to get the desired level of significance, normality, skewness and many more.
                                This reverse engineered tool can be useful in pretesting hypothesis and teaching.
                                <br/><br/>
                                The idea was born when the founder saw teachers and researchers struggling to create real looking research data and doing it cell by cell.
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 w-full items-center bg-white shadow-md p-3 rounded-xl">
                        <div className="col-span-3 text-center col-span-4 text-center p-2">
                            <Image
                                src="/founder.png"
                                height={120}
                                width={120}
                                alt="Sajjad Ladha"
                                style={{
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    marginBottom: "10px",
                                }}
                            />

                            <span className='text-xl'>Sajjad Ladha</span><br />
                            <span className='text-sm text-zinc-400'>Founder, Dacopsy</span><br />
                            
                            
                            
                            
                        </div>
                        <div className="col-span-8 p-7">
                            
                            <div className='block p-3'>
                                Dacopsy was founded in the year 2019 by Sajjad Ladha.<br/><br/>
                                Sajjad did his M.Sc. in Cognitive and Clinical Neuroscience - Psychology from Anglia Ruskin University.<br/><br/>
                                

                                <div className='flex p-4 w-fit'>
                                <div className='flex flex-1 p-1'>
                                    <Image
                                    src="/british_psychological_society_logo.jpeg"
                                    height={40}
                                    width={40}
                                    alt="Brand Dacopsy"
                                    style={{
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        marginBottom: "10px",
                                    }}
                                />  
                                </div>
                                <div className='flex flex-none flex-col items-start p-1'>
                                    MBPsS<br/>
                                    <span className='text-zinc-400 text-sm'>The British Psychological Society</span>
                                </div>
                            </div>

                            <div className='flex p-4 w-fit'>
                                <div className='flex flex-1 p-1'>
                                    <Image
                                    src="/linkedin.png"
                                    height={40}
                                    width={40}
                                    alt="Brand Dacopsy"
                                    style={{
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        marginBottom: "10px",
                                    }}
                                />  
                                </div>
                                <div className='flex flex-none flex-col items-start p-1'>
                                    Sajjad Ladha<br/>
                                    <Link href={'https://in.linkedin.com/in/sajjad-l-4b3344aa'}>
                                        <span className='text-zinc-400 text-sm'>LinkedIn</span>
                                    </Link>
                                </div>
                            </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}