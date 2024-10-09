import Image from 'next/image';
import mehndi from '../assets/mehndi.png';
import Haldi from '../assets/Haldi.png';
import reception from '../assets/Reception.png';

export default function Component() {
  return (
    <div className="w-full bg-[#c8e6b5] p-0 md:p-8">
      {/* Header */}
      <header className="mb-8 min-h-full mt-10 md:mt-20 mx-auto text-center px-4 md:px-0">
        <h1 className="text-5xl md:text-8xl font-bold text-[#e75480] mb-4">events.</h1>
        <div className="flex flex-col md:flex-row justify-center">
          <p className="text-[#c37d9b] mb-6 text-lg md:text-2xl max-w-xl mx-auto">
            A simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book.
          </p>
          <div>
            <div className="md:h-40"></div>
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 md:space-y-4 space-y-4 justify-center mx-auto mt-4 md:mt-0">
            <button className="bg-[#d96599] text-white px-4 py-2 rounded-full text-sm">Mehandi</button>
            <button className="bg-[#ffbede] text-white px-4 py-2 rounded-full text-sm">Haldi</button>
            <button className="bg-[#d96599] text-white px-4 py-2 rounded-full text-sm">Reception</button>
          </div>
          </div>
        </div>
      </header>

      {/* Event sections */}
      <section className="space-y-8 bg-[#ffffff] w-full">
        {/* Mehandi */}
        <div className="flex flex-col items-center">
          <Image
            src={mehndi}
            alt="Mehandi ceremony"
            width={1500}
            height={400}
            className="w-full h-auto"
          />
          <div className="h-10"></div>
          <div className="flex flex-col items-center px-4 md:px-10 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-[#e75480] mb-2 text-center">Mehandi</h2>
            <p className="text-[#c37d9b] font-medium text-sm text-center w-full md:w-[90%] md:max-w-[30vw]">
              A simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        {/* Haldi */}
        <div className="flex flex-col items-center">
          <Image
            src={Haldi}
            alt="Haldi ceremony"
            width={1500}
            height={400}
            className="w-full h-auto"
          />
          <div className="h-10"></div>
          <div className="flex flex-col items-center px-4 md:px-10 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-[#e75480] mb-2 text-center">Haldi</h2>
            <p className="text-[#c37d9b] font-medium text-sm text-center w-full md:w-[90%] md:max-w-[30vw]">
              A simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        {/* Reception */}
        <div className="flex flex-col items-center">
          <Image
            src={reception}
            alt="Reception ceremony"
            width={1500}
            height={400}
            className="w-full h-auto"
          />
          <div className="h-10"></div>
          <div className="flex flex-col items-center px-4 md:px-10 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-[#e75480] mb-2 text-center">Reception</h2>
            <p className="text-[#c37d9b] font-medium text-sm text-center w-full md:w-[90%] md:max-w-[30vw]">
              A simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}