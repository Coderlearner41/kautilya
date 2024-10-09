'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import Events from './Components/Events'
import Venue from './Components/Venue'
import Footer from './Components/Footer'
import Isection from './Components/Isection'
import Gallery from './Components/Gallery'
import GalleryM from './Components/GalleryM'
import EventsM from './Components/EventsM'
import Image from 'next/image'
import { La_Belle_Aurore } from 'next/font/google'
import rightleaf from './assets/rightleaf.svg'
import lotus from './assets/lotus.svg'
import story from './assets/story.png'
import flower from './assets/flower.svg'
import leftleaf from './assets/leftleaf.svg'

const laBelleAurore = La_Belle_Aurore({
  subsets: ['latin'],
  weight: '400',
})

export default function Home() {
  return (
    <div className="firstpage bg-[#c8e6b5] w-full min-h-screen relative">
      <div className="container mx-auto px-4">
        <div className="text-center pt-8">
          <span className="text-[#d96599] text-2xl sm:text-3xl md:text-4xl relative top-[-20px] sm:top-[-30px] md:top-[-40px]">October 18</span>
        </div>
        <div className="invitation flex flex-col md:flex-row justify-between items-center my-8 md:w-full lg:w-screen md:relative md:right-0 lg:right-40">
        {/* Move the leaf to the start */}
        <Image 
          src={leftleaf} 
          width={150} 
          height={300} 
          alt="Left leaf" 
          className="flex-shrink-0 md:self-start hidden md:block" 
        />

        <div className="center flex flex-col items-center md:mx-5">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <span className={`names ${laBelleAurore.className} text-[#d96599] text-4xl sm:text-5xl md:text-7xl lg:text-9xl`}>Kavya</span>
            <Image 
              src={flower} 
              width={150} 
              height={150} 
              alt="Flower" 
              className="my-4 md:mx-4 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]" 
            />
            <span className={`names ${laBelleAurore.className} text-[#d96599] text-4xl sm:text-5xl md:text-7xl lg:text-9xl`}>Rohan</span>
          </div>
          <button className="bg-[#4D7E72] text-white rounded-full px-4 py-2 sm:px-6 sm:py-2 mt-6 md:mt-8 text-sm sm:text-base">Save the       date</button>
        </div>

        <div className="hidden md:block flex-shrink-0" style={{width:"120px"}}></div>
      </div>

        <Image 
          src={rightleaf} 
          width={150} 
          height={1200}  
          alt="Right leaf" 
          className="hidden md:block absolute h-10 top-[80px] right-0 " 
          style={{height: "160vh"}} 
        />

        <div className="flex justify-center items-center md:top-20">
          <div className="flex justify-center items-center relative top-16">
            <TimeUnit value={23} unit="days" bgColor="bg-[#f7fabd]" />
            <TimeUnit value={23} unit="minutes" bgColor="bg-[#d9d9d9]" zIndex="z-10" />
            <TimeUnit value={23} unit="seconds" bgColor="bg-[#f7fabd]" />
          </div>
        </div>

      </div>

      <div className="salutation bg-[#933e63] min-h-screen mt-16 py-16 mt-3">
        <div className="container mx-auto px-4">
          <div className="text-white flex flex-col items-center justify-center">
            <div className="text-center relative my-20 md:my-40">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">October 19</h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl mb-8">WE ARE GETTING MARRIED</h2>
              <p className="max-w-2xl mx-auto text-sm sm:text-base opacity-80 relative z-10 px-4 md:px-0">
                This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industrys standard dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
              <Image 
                src={lotus}
                width={200} 
                height={200} 
                alt="Lotus" 
                className="absolute left-[-100px] md:left-[-250px] lg:left-[-425px] top-[150px] z-0 hidden md:block"
              />
            </div>
          </div>
        </div>
      </div>

      <Isection />
      <div className="hidden lg:block">
        <Gallery />
      </div>

      <div className="block lg:hidden">
        <GalleryM />
      </div>

      <div className="w-full min-h-screen bg-[#933e63] relative overflow-hidden hidden md:flex justify-center items-center order-3 md:order-2">
        <Image
          src={story}
          alt="Wedding moment 2"
          width={700}
          height={100}
          className="my-6 max-w-full h-auto"
        />
      </div>
      <div className="hidden lg:block">
        <Events />
      </div>

      <div className="block lg:hidden">
        <EventsM />
      </div>
      <Venue />
      <Footer />
    </div>
  )
}

function TimeUnit({ value, unit, bgColor, zIndex = '' }: { value: number; unit: string; bgColor: string; zIndex?: string }) {
  return (
    <div className={`${bgColor} ${zIndex} rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 flex flex-col justify-center items-center -mx-1 sm:-mx-2 relative`}>
      <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">{value}</div>
      <div className="text-[10px] sm:text-xs">{unit}</div>
    </div>
  )
}