import Image from 'next/image';
import Logo from '../public/images/logo.svg';

function Header() {
    return (
        // container
        <div className="h-16 bg-[#090b13] flex items-center justify-between  pl-4 pr-4">
            {/* logo */}
            <div className="w-20 ">
                <Image src={Logo} layout="responsive" />
            </div>
            {/* menu */}
            <div className="flex items-center ml-5 ">
                <a className="flex items-center pl-3 pr-3 cursor-pointer ">
                    <img src="/images/home-icon.svg" className="h-8 md:h-5" alt="" />
                    <div className=" hover:border-b-2 hover:border-white">
                        <p className="text-white text-[13px] tracking-[1.42px] hidden md:inline-flex ">HOME</p>
                    </div>
                </a>
                <a className="flex items-center pl-3 pr-3 cursor-pointer">
                    <img src="/images/search-icon.svg" className="h-8 md:h-5 " alt="" />
                    <div className=" hover:border-b-2 hover:border-white">
                        <p className="text-white text-[13px] tracking-[1.42px] hidden md:inline-flex">SEARCH</p> 
                    </div>
                </a>
                <a className="flex items-center pl-3 pr-3 cursor-pointer">
                    <img src="/images/watchlist-icon.svg" className="h-8 md:h-5" alt="" />
                    
                    <div className=" hover:border-b-2 hover:border-white">
                        <p className="text-white text-[13px] tracking-[1.42px] hidden md:inline-flex">WATCH LIST</p> 
                    </div>
                </a>
                <a className="flex items-center pl-3 pr-3 cursor-pointer">
                    <img src="/images/original-icon.svg" className="h-8 md:h-5" alt="" />
                    <div className=" hover:border-b-2 hover:border-white">
                        <p className="text-white text-[13px] tracking-[1.42px] hidden md:inline-flex">ORIGINALS</p> 
                    </div>
                </a>
                <a className="flex items-center pl-3 pr-3 cursor-pointer">
                    <img src="/images/movie-icon.svg" className="h-8 md:h-5" alt="" />
                    <div className=" hover:border-b-2 hover:border-white">
                        <p className="text-white text-[13px] tracking-[1.42px] hidden md:inline-flex">MOVIES</p>
                    </div>
                </a>
                <a className="flex items-center pl-3 pr-3 cursor-pointer">
                    <img src="/images/series-icon.svg" className="h-8 md:h-5" alt="" />
                    <div className=" hover:border-b-2 hover:border-white">
                        <p className="text-white text-[13px] tracking-[1.42px] hidden md:inline-flex">SERIES</p>
                    </div>
                </a>
            </div>
            {/* user image div */}
            <div className="flex">
                <img src="https://lh3.googleusercontent.com/a-/AOh14GjkbYYp7lahAZhwF2jCOwBnPjXXYZhGNfuvvi9O8dQ=s96-c" 
                className="w-12 h-12 rounded-full"/>
            </div>
        </div>
    )
}

export default Header
