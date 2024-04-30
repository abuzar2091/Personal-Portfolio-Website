'use client'
import Image from "next/image"
import Link from "next/link"
function Footer() {
    return (
      <footer className="bg-black text-gray-400 py-12">
          <div className="flex flex-col items-center gap-6  w-full ">
           <div className="flex gap-8">
           <Link href={"https://www.instagram.com/abuzar.ali_/"}>
            <Image src="/social-media/insta.png"  alt="instagram" 
            height={36} width={32}
            className="h-8 hover:opacity-50"/>
           </Link >
           <Link href={"https://www.instagram.com/abuzar.ali_/"}>
            <Image src="/social-media/facebook.png" alt="facebook"
            height={36} width={36}
            className="h-8 hover:opacity-50"/>
           </Link>
           <Link href={"https://www.instagram.com/abuzar.ali_/"}>
            <Image src="/social-media/twitter.png" alt="twitter" 
             height={36} width={36}
            className="h-8 hover:opacity-50"/>
           </Link>
           <Link href={"https://www.linkedin.com/in/abuzar-ali-1602a4232/"}>
            <Image src="/social-media/linkedin.png" alt="linkedin" 
             height={36} width={36}
            className="h-8 hover:opacity-50"/>
           </Link>
           <Link href={"https://github.com/abuzar2091"}>
            <Image src="/social-media/github.png" alt="github" 
             height={36} width={36}
            className="h-9 hover:opacity-50"/>
           </Link>
           </div>
           <div className="flex text-white text-md font-semibold">
        
            <ul className="flex  justify-center items-center gap-10">
              <li>
                <Link
                  href="#home"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about-me"
                  className="hover:text-white transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#contact-me"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact me
                </Link>
              </li>
            </ul>
           </div>
          </div>
          <p className="text-center text-sm pt-4">© 2024 
          Future Developer / Last update April-2024
          </p>
      </footer>
    )
  }
  
export default Footer