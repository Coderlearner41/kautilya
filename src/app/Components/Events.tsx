import Image from 'next/image'
import mehndi from '../assets/mehndi.png'
import Haldi from '../assets/Haldi.png'
import reception from '../assets/Reception.png'


export default function Component() {
  return (
    <div className="w-full  bg-[#c8e6b5]  p-8 relative left-[-50px]">
      {/* Header */}
      <header className="mb-8 min-h-full mt-20 ml-20 mb-10">
        <h1 className="text-8xl font-bold text-[#e75480] mb-4">events.</h1>
        <div className="d-flex">
        <p className="text-[#c37d9b] mb-6 text-2xl max-w-xl">
          a simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
          it to make a type specimen book.
        </p>
        <div className="flex row relative left-[100px]">
          <div className='h-20'></div>
          <div className="flex space-x-4 h-10">
          <button className="bg-[#d96599] text-white px-4 py-2 rounded-full text-sm">Mehandi</button>
          <button className="bg-[#ffbede] text-white px-4 py-2 rounded-full text-sm">Haldi</button>
          <button className="bg-[#d96599] text-white px-4 py-2 rounded-full text-sm">Reception</button>
        </div>
        </div>
        </div>
      </header>

      {/* Event sections */}
      {/* <div className="d-flex justify-content-center align-items-center"> */}
      <section className="space-y-8 bg-[#ffffff] w-screen">
        {/* Mehandi */}
        <div>
          <Image
            src={mehndi}
            alt="Mehandi ceremony"
            width={1500}
            height={400}
            className="relative top-[20px] left-[25px]"
          />
          <div className="h-10"></div>
          <div className="flex column my-10 ml-10">
          <h2 className="text-4xl font-bold text-[#e75480] mb-2" style={{fontSize:"120px"}}>Mehandi</h2>
          <p className="text-[#c37d9b] font-medium text-sm ml-5 relative top-[-20px]" style={{width:"30vw"}}>
            a simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          </div>
        </div>

        {/* Haldi */}
        <div>
          <Image
            src={Haldi}
            alt="Mehandi ceremony"
            width={1500}
            height={400}
            className="relative left-[25px]"
          />
          <div className="h-10"></div>
          <div className="flex column ml-10">
          <h2 className="text-4xl font-bold text-[#e75480] mb-2" style={{fontSize:"120px"}}>Haldi</h2>
          <p className="text-[#c37d9b] font-medium text-sm ml-5 relative top-[-20px]" style={{width:"30vw"}}>
            a simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          </div>
        </div>
        {/* Reception */}
        <div>
          <Image
            src={reception}
            alt="Mehandi ceremony"
            width={1500}
            height={400}
            className="relative left-[25px]"
          />
          <div className="h-10"></div>
          <div className="flex column ml-10 relative top-[-10px]">
          <h2 className="text-4xl font-bold text-[#e75480]" style={{fontSize:"120px"}}>Reception</h2>
          <p className="text-[#c37d9b] font-medium text-sm ml-5 relative top-[-20px]" style={{width:"30vw"}}>
            a simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          </div>
        </div>
      </section>
      {/* </div> */}
    </div>
  )
}