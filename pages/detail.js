import Head from 'next/head';
import Header from '../components/Header';
import { PlusCircleIcon, UserGroupIcon } from '@heroicons/react/solid'
function Detail() {
    return (
        <div>
             <Head>
                 <title>Disney + | Details</title>
            </Head>
            <Header/>
            <div className="homeContainer bg-home-img bg-center bg-cover bg-no-repeat bg-fixed inset-0 -z-1 ">
                {/* bg component */}
                <div className="relative h-full ">
                    {/* change this pic later */}
                    <img src="https://cdn.wallpapersafari.com/63/91/EGjUcK.jpg" className="h-screen object-cover md:object-fill fixed top-16  left-0 bottom-0 right-0 opacity-[0.4] " alt="" />
                    <div className='pt-28'>
                        {/* <img src="" alt="" /> */}
                        <p className="text-8xl text-white font-mono">Mean Machine</p>
                    </div>
                    {/* controls */}
                    <div className="flex items-center pt-10 space-x-5">
                        {/* play button */}
                        <div className="flex items-center bg-white pt-5 pb-5 pl-10 pr-10 rounded-md cursor-pointer">
                          <img src="/images/play-icon-black.png" alt="" />
                          <p className="text-black tracking-widest">PLAY</p>
                        </div>
                        {/* trailer button */}
                        <div className="flex items-center  bg-red-900 pt-5 pb-5 pl-10 pr-10 rounded-md">
                          <img src="/images/play-icon-white.png" alt="" />
                          <p className="tracking-widest">TRAILER</p>
                        </div>
                        {/* add button */}
                        <div>
                            <PlusCircleIcon className="h-10 w-10 text-white" />
                        </div>
                        {/* group button */}
                        <div>
                            <UserGroupIcon className="h-10 w-10 text-white" />
                        </div>

                       
                    </div>
                    <div className="font-mono pt-5">
                        <p>Danny "The Mean Machine" Meehan (Vinnie Jones) is a retired footballer and former captain of England, who was banned from football for life for fixing an unspecified match they played against Germany. In the present day, after a long drinking session, he drives recklessly to a local bar, where he is pursued by police. Inside the bar, when asked to take a breathalyser test, he attacks two police officers and is arrested; he is later convicted and sentenced to three years in Longmarsh prison.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Detail
