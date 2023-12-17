import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex gradient min-h-screen flex-col items-center justify-between p-24 max-md:px-4 ${inter.className}`}
    >
      <h1 className="heading text-white text-[4.8rem] md:text-[3.3rem] leading-[0px] text-center max-md:leading-[3.2rem] max-md:text-[3.2rem] tracking-tighter  ">
        Welcome to IFASA Hub
      </h1>
      <Image src="/arc.svg" width={450} height={450} priority alt='header'></Image>
      <div className="flex gap-2 mt-4">
        <Link
          href="/login"
          className="py-[15px] px-6 rounded-full bg-secondary text-white font-medium "
        >
          Login to IFASA Hub
        </Link>
      </div>
    </main>
  );
}
