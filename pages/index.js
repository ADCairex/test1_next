/* ./pages/index.js               */
import Head from 'next/head';
import { Navbar } from '../components/NavBar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Test 1</title>
        
      </Head>
      <Navbar />
      <div>Hello World</div>
    </div>
  );
}