import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SwrFetcher from '../lib/SwrFetcher'
import Author from './_child/Author'
import Error from './_child/Error'
import Spinner from './_child/Spinner'

const Section4 = () => {
    const { data, isLoading, isError } = SwrFetcher('api/popular')
    // if(data) console.log(data)

    if(isLoading) return <Spinner />
    if (isError) return <Error />

  return (
    <section className='container mx-auto md:px-20 py-16'>
        <div className='grid lg:grid-cols-2'>
            <div className='item'>
                <h1 className='font-bold text-4xl py-12'>Business</h1>
                <div className="flex flex-col gap-6">
                    {data[1] ? <Post data={data[1]}></Post> : null}
                    {data[2] ? <Post data={data[2]}></Post> : null}
                    {data[3] ? <Post data={data[3]}></Post> : null}
                </div>
            </div>
            <div className='item'>
                <h1 className='font-bold text-4xl py-12'>Travel</h1>
                <div className='flex flex-col gap-6'>
                    {data[2] ? <Post data={data[2]}></Post> : null}
                    {data[3] ? <Post data={data[3]}></Post> : null}
                    {data[4] ? <Post data={data[4]}></Post> : null}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section4




const Post = ({data}) => {
    const {id, title, category, img, published, author} = data;

    return (
        <div className="flex gap-5">
            <div className='image flex flex-col justify-start'>
                <Link href={`/posts/${id}`}>
                    <Image src={img} alt="Image" className='rounded' width={300} height={350} />
                </Link>
            </div>
            <div className='info flex justify-center flex-col'>
                <div className='cat flex'>
                    <Link href={`/posts/${id}`}><h4 className='text-orange-600 hover:text-orange-800'>{category}</h4></Link>
                    <Link href={`/posts/${id}`}><h4 className='text-gray-800 hover:text-gray-800'>- {published}</h4></Link>
                </div>
                <div className='title'>
                    <Link href={`/posts/${id}`}><h2 className='text-xl font-bold text-gray-800 hover:text-gray-600'>{title}</h2></Link>
                </div>

                {author ? <Author {...author} /> : null}
            </div>
        </div>
    )
}