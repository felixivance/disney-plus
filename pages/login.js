
import Head from 'next/head';
import Header from '../components/Header';


function login() {
    return (
       <div>
            <Head>
            <title>Disney +</title>
            </Head>
         <Header/>
         <div className="homeContainer bg-home-img bg-center bg-cover bg-no-repeat bg-fixed inset-0 -z-1">

            <div className="relative h-full">
                {/* main */}
                <img className="h-screen object-cover md:object-fill fixed top-16  left-0 bottom-0 right-0 opacity-[0.3] " src="/images/login-background.jpg" alt="" />

                {/* content */}
                <div className="flex flex-col  h-full   ">
                    <div className="mt-32 pl-5 pr-5">
                       
                        <img src="/images/cta-logo-one.svg" alt="" />
                        
                         <div className="pt-5 ">
                            <button className="font-semibold bg-blue-600 p-5 rounded-md w-full tracking-wide"> GET ALL THERE </button>
                        </div>
                        <p className="pt-5 leading-5 tracking-wide font-mono text-center">Join to watch exclusive shows on disney plus. And more beautiful description..
                         Lol sijui niongezee nini apa ndio ikae original</p>


                         <img src="/images/cta-logo-two.png" className="pt-12" alt="" />

                    </div>
                    

                </div>

            </div>
            
         </div>
        
       </div>
    )
}

export default login
