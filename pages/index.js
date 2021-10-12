import Head from 'next/head'
import Header from '../components/Header';
import Main from '../components/Main';

export default function Home() {
  return (
    <div className="">
        <Head>
          <title>Disney +</title>
        </Head>
       <Header/>
       <Main />
       
    </div>
  )
}
