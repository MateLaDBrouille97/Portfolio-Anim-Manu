'use client';
// import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import Projects from "../components/Projects"
import Description from '../components/Description';
import Contact from "../components/Contact";



}

export default function Home() {

  

  


  const [isLoading, setIsLoading] = useState(true);
  const [user,setUser]=useState<any>()
  const [portfolio,setPortfolio]=useState<any>([])

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


  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await fetch('/api/portfolio');
        const portfolio = await response.json();
        setPortfolio(portfolio);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPortfolio();
  }, []);

 

  return (
    <>
    <main className="main ">
      <Landing user={user}/>
      <div className='flex justify-center items-center'>
           <Description user={user}/>
      </div>
   
      <Projects portfolio={portfolio}/>
      <Contact user={user}/>
    </main>
    
    </>
    
  )
}