import Link from 'next/link'
import React from 'react'
import { ImFacebook, ImTwitter, ImYoutube } from 'react-icons/im'

export default function  Header() {
  return (
    <header className='bg-gray-50'>
      <div className='xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3'>
        <div className='md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0'>
          <input className='input-text' type="text" placeholder='Search'/>
        </div>
        <div className='shrink w-80 sm:order-2'>
          <Link href={'/'}>
          <p className='font-bold uppercase text-3xl'>Rowland</p>
          </Link>
        </div>
        <div className='w-96 order-3 flex justify-center'>
          <div className='flex gap-6 text-2xl'>
            <Link href={'/'}><ImFacebook color='#888888'/></Link>
            <Link href={'/'}><ImTwitter color='#888888' /></Link>
            <Link href={'/'}><ImYoutube color='#888888'/></Link>
          </div>
        </div>
      </div>
    </header>
  )
}
