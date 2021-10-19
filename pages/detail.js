import Head from 'next/head';
import Header from '../components/Header';

function Detail() {
    return (
        <div>
             <Head>
                 <title>Disney +</title>
            </Head>
            <Header/>
            <div className="homeContainer bg-home-img bg-center bg-cover bg-no-repeat bg-fixed inset-0 -z-1 ">
                {/* bg component */}
                <div className="relative h-full ">
                    <img src="https://cdn.wallpapersafari.com/63/91/EGjUcK.jpg" className="h-screen object-cover md:object-fill fixed top-16  left-0 bottom-0 right-0 opacity-[0.8] " alt="" />
                </div>
            </div>
        </div>
    )
}

export default Detail
