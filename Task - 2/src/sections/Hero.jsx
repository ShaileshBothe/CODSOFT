import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from '../constants/index.js';
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";


// ErrorBoundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

const Hero = () => {


    const isSmall = useMediaQuery({maxWidth: 440});

    const isMobile = useMediaQuery({maxWidth : 768})

    const isTablet = useMediaQuery({maxWidth : 768, maxWidth : 1024})

    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    // const x = useControls('HackerRoom', {
    //     rotationX : {
    //         value : 2.5,
    //         min : -10,
    //         max : 10
    //     },
    //     rotationY : {
    //         value : 2.5,
    //         min : -10,
    //         max : 10
    //     },
    //     rotationZ : {
    //         value : 2.5,
    //         min : -10,
    //         max : 10
    //     },
    //     positionX : {
    //         value : 0,
    //         min : -10,
    //         max : 10
    //     },
    //     positionY : {
    //         value : 0,
    //         min : -10,
    //         max : 10
    //     },
    //     positionZ : {
    //         value : 0,
    //         min : -10,
    //         max : 10
    //     },
    //     scale : {
    //         value : 1,
    //         min : 0.1,
    //         max : 10
    //     }

    // })

  return (
    <section className="min-h-screen w-full flex fle-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Shailesh <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <ErrorBoundary>
        {/* <Leva/> */}
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 30]} />

              <HeroCamera>
              <HackerRoom 
            //   scale={0.07} 
            //   position={[0,0,0]} 
            //   rotation={[0, 0, 0]}
            position={[2,-8,2]} 
              rotation={[0, -Math.PI, 0]}
              scale = {isMobile ? 0.08 : 0.1}
              />
              </HeroCamera>
              

                <group>
                    
                    <Target position={sizes.targetPosition}/>
                    <ReactLogo position={sizes.reactLogoPosition}/>
                    <Cube position={sizes.cubePosition}/>
                    <Rings position={sizes.ringPosition}/>
                </group>
            

              <ambientLight intensity={1}/>
              <directionalLight position={[10,10,10]} intensity={0.5}/>
            </Suspense>
          </Canvas>
        </ErrorBoundary>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
            <a href="#about">
                <Button name="Let's Work Together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
            </a>
      </div>
    </section>
  );
};

export default Hero;
