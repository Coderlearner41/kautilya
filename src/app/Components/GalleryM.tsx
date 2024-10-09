import Image from 'next/image'
import gallery1 from '../assets/gallery1.png'
import gallery2 from '../assets/gallery2.png'
import gallery3 from '../assets/gallery3.png'
import { useState } from 'react'

export default function Gallery() {
    const [isAttending, setIsAttending] = useState(false)
  return (
    <div className="w-full relative z-10 bg-pink-200">
      <div className="w-full min-h-screen flex flex-col lg:flex-row">
        {/* Left side - Text content */}
        <div className="w-full lg:w-1/2 bg-pink-400 p-8 flex flex-col justify-center" >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{background: "linear-gradient(104.08deg, #FFA8CE -4.31%, #FFD7E8 56.37%, #D66998 98.7%, #FFB8D7 136.79%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
            Gallery<br />&Moments
          </h2>
          <p className="text-[40px] md:text-2xl text-[#fed2e2] mb-8">
            your beautiful moments.
          </p>
        </div>

        {/* Right side - Image gallery */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-2 p-2 bg-[#fdfdfd]">
          <div className="col-span-1 row-span-2">
            <Image
              src={gallery1}
              alt="Main wedding moment"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Image
              src={gallery2}
              alt="Wedding moment 1"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Image
              src={gallery3}
              alt="Wedding moment 2"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Attendance section - visible on all screen sizes */}
      <div className="relative bg-white p-8 rounded-b-lg shadow-md">
        <div className="relative z-10">
          <h2 className="text-3xl font-semibold text-pink-600 mb-6 text-center mt-5">
            Are you Attending?
          </h2>
          <div className="flex justify-center">
            <button
              onClick={() => setIsAttending(!isAttending)}
              className={`px-6 py-2 rounded-full text-lg font-medium transition-colors ${
                isAttending
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              }`}
            >
              {isAttending ? "I am attending" : "Click to Attend"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}