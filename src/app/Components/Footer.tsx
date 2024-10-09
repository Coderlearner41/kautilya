import Image from 'next/image'
import leftLotus from '../assets/leftLotus.png'
import rightLotus from '../assets/rightLotus.svg'

export default function Footer() {
  return (
    <footer className="relative bg-[#c8e6b5] min-h-[400px] flex flex-col items-center justify-center p-4 sm:p-8 text-center">
      <button className="absolute top-4 right-4 bg-[#d3ebd3] text-[#6b8e6b] px-4 py-2 mt-20 sm:mt-40 rounded-full text-sm hover:bg-[#c1e0c1] transition-colors">
        locate
      </button>
      
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#608f41] mb-4 sm:mb-6 mt-40 sm:mt-60">
        We are excited!
      </h2>
      
      <p className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl text-xs sm:text-sm text-[#86bf62] mb-6 sm:mb-8">
        A simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard
        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. A simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
      </p>
      
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-[#9ce46f] text-[#587446] px-4 sm:px-6 py-2 sm:py-3 rounded-full w-32 sm:w-40 text-xs sm:text-sm hover:bg-[#c1e0c1] transition-colors"
      >
        back to top
      </button>

      <div className="w-full grid grid-cols-3 gap-4 items-center justify-items-center mt-8 relative lg:top-[20px] sm:mt-12">
      <Image
        src={leftLotus}
        alt="Left Lotus"
        width={150}
        height={150}
        className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto"
      />
      <div className="w-full h-full"></div>
      <Image
        src={rightLotus}
        alt="Right Lotus"
        width={150}
        height={150}
        className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto"
      />
    </div>
    </footer>
  )
}