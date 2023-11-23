import React from 'react';
import { Footer, Navbar, Projects, Header, About, Technologies, Experience } from '@/components/UI/Components';


const Home = () => {
  return (    
    <div className="bg_app">
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