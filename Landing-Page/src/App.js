import { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import Slogan from './components/Slogan/Slogan';
import Content from './components/Content/Content';
function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleSize = () =>{
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', handleSize)
    handleSize();
    return () => {
      window.removeEventListener('resize', handleSize)
    }
  },[])

  useEffect(() => {
    if(windowSize.width < 500){
      setIsMobile(true)
    }
    else{
      setIsMobile(false)
    }
    console.log(windowSize)
  }, [windowSize])
  return (
    <div className="font-sora h-screen overflow-y-auto overflow-x-hidden px-4 py-8 bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 from-white/80 to-pink-500 dark:text-white text-black md:px-20">
      <NavBar isMobile={isMobile}/>
      <Slogan/>
      <Content/>
    </div>
  );
}

export default App;
