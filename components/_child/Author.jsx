import Image from 'next/image'
import Link from 'next/link'

const Author = ({name, img, designation}) => {
  
  if(!name && !img) return null;

  return (
    <div className='author flex py-5'>
      <Image src={img} alt="image" width={60} height={60} className='rounded-full' />
        <div className='flex flex-col justify-center px-4'>
          <Link href={'/'}>
            <h1 className='text-md font-bold text-gray-800 hover:text-gray-600'>
              {name}
            </h1>
            <span className='text-sm text-gray-500'>{designation}</span>
          </Link>
        </div>
    </div>
  )
}

export default Author