import Image from 'next/image';
import BG from '../assets/bride&groom.png';
import { La_Belle_Aurore } from '@next/font/google';

const laBelleAurore = La_Belle_Aurore({
  subsets: ['latin'],
  weight: '400',
});

export default function Isection() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-gray-100">
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-[1080px] relative">
        <Image
          src={BG}
          alt="Bride and Groom"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center items-center bg-pink-100">
        <div className="max-w-md text-center relative top-[-100px] mt-20 lg:mt-0"> {/* Added mt-5 for mobile */}
          <h1 className="text-4xl md:text-5xl text-left lg:text-6xl font-bold text-pink-500 mb-4">
            MEET<br />BRIDE<br />&GROOM
          </h1>
          <p className={`${laBelleAurore.className} text-3xl md:text-4xl text-left lg:text-5xl text-pink-400 mb-8`}>
            Kavya & Rohan
          </p>
          <p className="text-[#C37D9B] mb-4 text-left">
            A simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book.
          </p>
          <p className="text-[#C37D9B] text-left">
            A simply dummy text of the printing and typesetting industry. Lorem Ipsum
          </p>
        </div>
      </div>
    </div>
  );
}
