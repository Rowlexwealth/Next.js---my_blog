import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import Author from './Author';
import Spinner from './Spinner';
import Error from './Error';
import SwrFetcher from './../../lib/SwrFetcher';

const Related = () => {
    const { data, isLoading, isError } = SwrFetcher('api/posts')
    // if(data) console.log(data)

    if(isLoading) return <Spinner />
    if (isError) return <Error />

  return (
    <section>
        <h1 className='font-bold text-3xl py-10'>Related</h1>

        <div className="flex flex-col gap-10">
            {data.map((value, index)=>(
                <Post key={index} data={value}></Post>
            ))}
        </div>
    </section>
  )
}

export default Related


const Post = ({ data }) => {
    const {id, title, category, img, published, author } = data;
    return (
        <div className="flex gap-5">
            <div className='image flex flex-col justify-start'>
                <Link href={`/posts/${id}`}>
                    <Image src={img} alt='image' className='rounded' width={300} height={350} />
                </Link>
            </div>
            <div className='info flex justify-center flex-col'>
                <div className='cat flex'>
                    <Link href={`/posts/${id}`}><h4 className='text-orange-600 hover:text-orange-800'>{category || "Unknown"}</h4></Link>
                    <Link href={`/posts/${id}`}><h4 className='text-gray-800 hover:text-gray-800'> -{published || "Unknown"}</h4></Link>
                </div>
                <div className='title'>
                    <Link href={`/posts/${id}`}><h2 className='text-xl font-bold text-gray-800 hover:text-gray-600'>{title || "No Title"}</h2></Link>
                </div>

                {author ? <Author {...author} /> : null}
            </div>
        </div>
    )
}