import styles from "@/styles/Home.module.css"
import Bicycle from '@/components/img/bicycle.png'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative bg-[url('../components/img/bg.jpg')] bg-cover h-[800px] w-[800px] border-2 border-gray-200 mx-auto mt-8">
      <Image src={Bicycle.src} alt="Bicycle" width={150} height={118} className={'absolute left-0 top-[209px] ' + styles.move}/>
    </div>
  )
}