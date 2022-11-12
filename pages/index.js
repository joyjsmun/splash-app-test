import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
   <div className='w-[100vw] h-[100vh]'>
    {/* <div id="header">
      <div id="logo" className='font-nato'>splash</div>
      <div id="menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div> */}
      <div className='absolute left-0 top-0  w-full h-full'
        style={{
          background: "url(/statics/bg-home-desktop.svg)",
          backgroundSize: "140%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}>
      </div>
   </div>
  )
}
