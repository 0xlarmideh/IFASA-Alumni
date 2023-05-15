import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-[2.4rem] tracking-tighter mb-6">
        Welcome to IFASA Hub
      </h1>
      <div className="flex gap-2">
        <Link
          href="/login"
          className="border-2 py-[15px] px-6 rounded-full bg-sky-600 text-white "
        >
          Login to IFASA Hub
        </Link>
        <Link
          href="/signup"
          className="border-2 py-[15px] px-6 rounded-full bg-black text-white "
        >
          Create an account
        </Link>
      </div>
    </main>
  );
}
