import Head from 'next/head';
import Header
 from '../components/Header';
function Detail() {
    return (
        <div>
             <Head>
                 <title>Disney +</title>
            </Head>
            <Header/>
            <div className="homeContainer bg-home-img bg-center bg-cover bg-no-repeat bg-fixed inset-0 -z-1 ">

            </div>
        </div>
    )
}

export default Detail
