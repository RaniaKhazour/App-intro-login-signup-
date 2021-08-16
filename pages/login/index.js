import Image from 'next/image';
import Link from 'next/link';
import Input from '../../comps/Input';
import { useSpring, animated } from 'react-spring';

export default function Login() {
    const slideToLeft = useSpring({
        config: { duration: 250 },
        from: { opacity: 0, x: 100 },
        to: { opacity: 1, x: 0 },
        delay: 250,
    });

    const slideToRight = useSpring({
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
            <animated.div style={slideToRight} className="bg-green-800 flex-1 h-screen hidden lg:block shape-l">
                <div className="absolute xl:top-24 top-12 xl:left-16 left-6 text-center"> 
                    <h3 className="text-white text-4xl font-semibold">Ny her?</h3>
                    <p className="text-white mt-1">Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit, sed do eiusmod tempor </p>
                    <Link href="signup">
                        <button className="mt-4 rounded-xl border bg-none text-white px-10 py-2.5 mr-2 transition duration-500 hover:bg-gray-400">Tilmeld</button>
                    </Link>
                </div>
            </animated.div>

            <animated.form style={slideToLeft} className="flex items-center justify-center flex-col px-6 h-screen flex-1 mb-12" action="/welcome" method="post"> 
                    <Link href="/">
                        <figure class="lg:mb-10 mb-4 cursor-pointer bg-black rounded-full">
                            <Image src="/icons/logo-kanpla-white.png" alt="Kanpla logo" width={100} height={100}/>
                        </figure>
                    </Link>

                    <h1 className="text-2xl lg:text-5xl font-bold text-gray-700 lg:mb-6 mb-2 drop-shadow-xl">Log ind</h1>

                    <div className="max-w-sm w-full h-14 mt-3 rounded-2xl bg-gray-100 flex justify-around py-1.5 shadow-sm flex-row">
                        <i className="fas fa-envelope text-center mt-2 text-gray-500 text-lg flex-1"></i>
                        <input className="bg-transparent outline-none border-none font-semibold text-lg text-gray-800 flex-4" type="text" placeholder="Email" name="email" required></input>
                    </div>
                    
                    {/* <Input 
                        icon="fa-envelope"
                        type="text"
                        placeholder="Email"
                        nameInput="email"
                    /> */}

                    <Input 
                        icon="fa-lock"
                        type="password"
                        placeholder="Adgangskode"
                        nameInput="psw"
                    />

                    <button className="rounded-xl bg-green-700 text-white  px-10 py-3.5 ml-2 shadow-lg filter drop-shadow-sm mt-8 transition duration-500 hover:bg-green-600" type="submit" value="login">Log ind</button>
                    <a href="/#!" className="text-gray-500 text-sm mt-4">Glemt?</a>

                    <div className="lg:hidden mt-10 border-t-2 border-gray-300">
                        <p className="text-gray-600 mt-4">Ny på Kanpla? <Link href="/signup"><span className="text-green-700 ml-1">Tilmelde</span></Link></p>
                    </div>
            </animated.form>

            <animated.div style={fade} className="absolute bottom-0 hidden lg:block left-36 xl:left-80 mb-20">
                <Image src="/icons/login.svg" alt="Login icon" width={400} height={380} />
            </animated.div>
        </div>
        </>
    )
}