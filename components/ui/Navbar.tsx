import React from 'react'
import Image from 'next/image'
import logo from '/img/logo.png';
import Link from 'next/link';
import {Avatar, AvatarImage,AvatarFallback} from '@/components/ui/avatar';

const Navbar = () => {
  return (
    <div className='bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between text-white'>
        <Link href = '/'>
        <Image src={logo} alt='Site Logo' width={40} />        
        </Link>


        <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadch' />
            <AvatarFallback className='text-black'>BT</AvatarFallback>
        </Avatar>
    </div>
  )
}

export default Navbar