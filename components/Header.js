import Image from 'next/image';
import Logo from '../public/images/logo.svg';

function Header() {
    return (
        // container
        <div className="h-16 bg-[#090b13] p-2">
            {/* logo */}
            <div className="w-20">
                <Image src={Logo} layout="responsive" />
            </div>
            {/* menu */}
            <div>

            </div>
        </div>
    )
}

export default Header
