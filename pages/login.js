
import Head from 'next/head';
import Header from '../components/Header';


function login() {
    return (
       <div>
            <Head>
            <title>Disney +</title>
            </Head>
         <Header/>
         <div className="relative h-full">
             {/* main */}
             <img className="h-screen object-cover md:object-fill fixed top-16  left-0 bottom-0 right-0 " src="/images/login-background.jpg" alt="" />
         </div>
       </div>
    )
}

export default login
