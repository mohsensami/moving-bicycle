import Head from "next/head";
import styles from "@/styles/Home.module.css"
import Bicycle from '@/components/img/bicycle.png'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Head>
        <title>Moving Bicycle</title>
    </Head> 
    <div className="relative bg-[url('../components/img/bg.jpg')] border-2 border-gray-200 mx-auto mt-8
    bg-cover md:h-[800px] md:w-[800px] h-[450px] w-[450px]">
      <Image src={Bicycle.src} alt="Bicycle" width={150} height={118} className={`absolute md:left-0 md:top-[209px] left-0 top-[75px] ${styles.move}`}/>
    </div>
    </>
  )
}