import Image from 'next/image';
import Button from '../comps/Button';
import { useSpring, animated } from 'react-spring';

const Home = () => {
  const slideToLeft = useSpring({
    config: { duration: 350 },
    from: { opacity: 0, x: -100 },
    to: { opacity: 1, x: 0 },
    delay: 300,
  });

  const slideUp = useSpring({
    config: { duration: 550 },
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    delay: 700,
  });

  return (
    <>
    <header className="bg-green-600 v-screen h-screen">

      <div className="md:px-16">
        <figure class="max-w-screen-lg mx-auto pt-10 md:pt-20 mb-8">
          <Image src="/icons/kanpla-logo-white.png" alt="Kanpla logo" width={208} height={100.45}/>
        </figure>
        
        <div  className="max-w-screen-lg mx-auto px-6">
          <animated.h1 style={slideToLeft} className="text-white text-4xl lg:text-7xl font-bold mb-6 filter drop-shadow-xl">Din online <br/> kantineplatform</animated.h1>
          <h2 className="text-white text-md lg:text-2xl font-normal text-green-900">Med Kanpla kan du bestille lækker mad, <br/> produceret af din egen kantine.</h2>
        </div>

        <div className="max-w-screen-lg flex justify-start mx-auto px-6 mt-6 relative z-10">    
          <a href="https://apps.apple.com/us/app/kanpla/id1500582659" target="_blank">
            <Image className="mr-4" src="/icons/appstore.svg" alt="Apple store logo" width={119} height={40}/>
          </a>
          <a href="https://play.google.com/store/apps/details?id=dk.kanpla.parents" target="_blank">
            <Image src="/icons/googleplay.png" alt="Google play logo" width={134} height={40}/>
          </a>
        </div>

        <animated.div style={slideUp} className="absolute bottom-0 right-0 w-screen h-1/2 lg:h-3/4 z-0">
          <Image src="/images/kanpla-hero.png" alt="App Kanpla ordering" layout="fill" objectFit="cover"/>
        </animated.div>
        
        <div className="flex justify-center absolute bottom-0 inset-x-0 py-16 md:px-16 px-6 max-w-screen-sm mx-auto md:top-8 md:block md:mr-0 md:h-4 md:max-w-max">
          <Button 
            url="/signup" 
            background="bg-white" 
            textColor="text-green-500" 
            margin="mr-2" 
            hoverBg="hover:bg-gray-100"
            title="Tilmeld"
          />

          <Button 
            url="/login" 
            background="bg-green-700" 
            textColor="text-white" 
            margin="ml-2" 
            hoverBg="hover:bg-green-900"
            title="Log ind"
          />
        </div>
      </div>

    </header>
    </>
  )
}

export default Home;
