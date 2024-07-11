import React from 'react'
import logo from '../../../../public/Vector.png'
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className='bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between text-white' >
      <Link href='/'>
      <Image 
      src={logo}
      width={40}
      alt='admin logo'
      />
      </Link>
      <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback className='Text-black' >AV</AvatarFallback>
</Avatar>

    </div>
  )
}

export default Navbar