import React from 'react';
import Head from 'next/head';
import { Footer, Navbar, Projects, Header, About, Technologies, Experience } from '@/components/UI/Components';


const Home = () => {
  return (    
    <div className="bg_app">
      <Head>
        <link rel="icon" href='/images/profile_logo.png' type='image/x-icon' sizes='16x16'/>
      </Head>
      <Navbar />
      <Header />
      <main>
        <About />
        <Experience />
        <Technologies />
        <Projects />
      </main>      
      <Footer />
    </div>
  );
}

export default Home;