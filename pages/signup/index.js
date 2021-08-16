import Image from 'next/image';
import Link from 'next/link';
import Input from '../../comps/Input';
import { useSpring, animated } from 'react-spring';

const SignUp = () => {
    const slideToRight = useSpring({
        config: { duration: 250 },
        from: { opacity: 0, x: 100 },
        to: { opacity: 1, x: 0 },
        delay: 250,
    });

    const slideToLeft = useSpring({
        config: { duration: 250 },
        from: { opacity: 0, x: -100 },
        to: { opacity: 1, x: 0 },
        delay: 250,
    });

    const fade = useSpring({
        config: { duration: 100 },
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 700,
    });

    return(
        <>  
        <div className="flex h-screen w-screen justify-center items-center">
            
            <animated.form style={slideToLeft} className="max-w-screen-md bg-white flex items-center justify-center flex-col px-6 h-screen flex-1 mb-6" action="/welcome" method="post"> 
            
                <Link href="/">
                    <figure class="lg:mb-10 mb-4 cursor-pointer bg-black rounded-full">
                        <Image src="/icons/logo-kanpla-white.png" alt="Kanpla logo" width={100} height={100}/>
                    </figure>
                </Link>

                    <h1 className="text-2xl lg:text-5xl font-bold text-gray-700 lg:mb-6 mb-2 drop-shadow-xl">Tilmelde</h1>
                    
                    <Input 
                        icon="fa-envelope"
                        type="text"
                        placeholder="Email"
                        nameInput="email"
                    />

                    <Input 
                        icon="fa-lock"
                        type="password"
                        placeholder="Adgangskode"
                        nameInput="psw"
                    />

                    <Input 
                        icon="fa-check"
                        type="password"
                        placeholder="Bekræft adgangskode"
                        nameInput="psw-check"
                    />

                    <div className="max-w-sm w-full h-14 mt-3 ml-5 rounded-2xl grid grid-cols-10 py-1.5">
                        <input className="col-span-1 text-center mt-2" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" required/>
                        <label className="col-span-9 text-gray-500" for="vehicle1">Jeg accepterer Handelsvilkårene og <br/> Persondatapolitikken</label>
                    </div>
                    
                    <button className="rounded-xl bg-green-700 text-white  px-10 py-3.5 ml-2 shadow-lg filter drop-shadow-sm mt-8 transition duration-500 hover:bg-green-600" type="submit" value="login">Tilmeld dig</button>

                    <div className="lg:hidden mt-10 border-t-2 border-gray-300">
                        <p className="text-gray-600 mt-4">En af ​​Kanpla?<Link href="/login"><span className="text-green-700 ml-1">Log ind</span></Link></p>
                    </div>
            </animated.form>

            <animated.div style={slideToRight} className="bg-green-800 flex-1 h-screen hidden lg:block shape-r">
                <div className="absolute xl:top-24 top-12 xl:right-16 right-6 text-center"> 
                        <h3 className="text-white text-4xl font-semibold">En af os?</h3>
                        <p className="text-white mt-1">Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit, sed do eiusmod tempor </p>
                        <Link href="login">
                            <button className="mt-4 rounded-xl border bg-none text-white px-10 py-2.5 mr-2 transition duration-500 hover:bg-gray-400">Log ind</button>
                        </Link>
                </div>
            </animated.div>
            <animated.div style={fade} className="absolute bottom-0 hidden lg:block right-36 xl:right-80 mb-12">
                <Image src="/icons/nyhedsbrev.svg" alt="Login icon" width={400} height={400} />
            </animated.div>
        </div>
        </>
    )
}

export default SignUp;
