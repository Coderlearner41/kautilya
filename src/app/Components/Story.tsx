import Image from 'next/image'
import story from '../assets/story.png'

export default function Story(){
    return (
        <div className="w-full min-h-screen bg-[#933e63] relative overflow-hidden flex justify-center items-center">
        <Image
          src={story}
          alt="Wedding moment 2"
          width={700}
          height={100}
          className="my-6 max-w-full h-auto"
        />
      </div>
    )
}