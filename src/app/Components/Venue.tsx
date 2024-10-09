'use client'

import Image from 'next/image'
import QRCode from 'react-qr-code'
import venue from '../assets/venue.png'

export default function Component() {
  return (
    <div className="w-full mt-2">
      {/* Top section */}
      <div className="bg-[#c8e6b5] p-4 sm:p-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-2/3 md:pr-8 mb-8 md:mb-0">
            <p className="text-[#677e58] font-medium text-xs mb-4 text-left md:text-right">
              A simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
              book. A simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. A simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-8xl font-medium text-[#83ad68] text-left md:text-right mt-4">scan here.</h2>
          </div>
          <div className="flex justify-center md:justify-end items-center w-full md:w-1/3">
            <QRCode value="https://example.com" size={200} className="opacity-70" />
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-[#8fb378] p-4 sm:p-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <p className="text-[#eaffdd] text-xs mb-2 text-left md:text-right">Hazuri Bagh at Noor Mahal</p>
            <Image
              src={venue}
              alt="Hotel Rambagh Palace"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="h-4"></div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#eef7e9] mb-4">Venue.</h1>
            <p className="text-[#cfffb1] text-sm max-w-2xl text-left">
              A simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. A simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. A simply dummy
              text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}