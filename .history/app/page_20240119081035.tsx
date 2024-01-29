'use client';
// import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import Projects from "../components/Projects"
import Description from '../components/Description';
import Contact from "../components/Contact";


import { usePortfolioContext } from '@/contexts/PortfolioContext';


interface PortfolioContext {
  data: any;
  
}

export default function Home() {

  

  


  const [isLoading, setIsLoading] = useState(true);
  const [user,setUser]=useState<any>()

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])


  

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/author');
        const author = await response.json();
        setUser(author);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

 

  return (
    <>
    <main className="main ">
      <Landing user={user}/>
      <div className='flex justify-center items-center'>
           <Description user={user}/>
      </div>
   
      <Projects/>
      <Contact user={user}/>
    </main>
    
    </>
    
  )
}