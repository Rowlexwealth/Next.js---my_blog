import React from 'react'
import Format from '../../layout/Format';
import Image from 'next/image';
import Related from '../../components/_child/Related';
import Fetch from '../../lib/Fetch';
import Author from '../../components/_child/Author';
import SwrFetcher from './../../lib/swrFetcher';
import Spinner from './../../components/_child/Spinner';
import Error from './../../components/_child/Error';
import { useRouter } from 'next/router';
import { SWRConfig } from 'swr';


const Page = ({ fallback }) => {

    const router = useRouter()
    const { postId } = router.query;
    const { data, isLoading, isError } = SwrFetcher(`api/posts/${postId}`)
    if(isLoading) return <Spinner />
    if(isError) return <Error />

    return (
        <SWRConfig value={{ fallback }}>
            <Article {...data} />
        </SWRConfig>
    )
}

export default Page


const Article = ({ id, subtitle, title, img, description, author }) => {

  return (
    <Format>
        <section className='container mx-auto md:px-2 py-16 w-1/2'>
            <div className="flex justify-center">
            {author ? <Author {...author} /> : null}
            </div>

            <div className='post py-10'>
                <h1 className='font-bold text-3xl text-center pb-5'>{title || "No Title"}</h1>
                <p className='text-gray-500 text-xl text-center'>{subtitle || "No Titlle"}</p>

                <div className='py-10'>
                    <Image src={img} alt='image' width={900} height={500}/>
                </div>

                <div className='content text-gray-600 text-lg flex flex-col gap-4'>
                    {description}
                </div>
            </div>
            <Related/>
        </section>
    </Format>
  )
}





export async function getStaticProps({ params })
 {
    const posts = await Fetch(params.postId)

    return (
        {props : {
            fallback : {
                '/api/posts': posts
            }
        }}
    )
}

export async function getStaticPaths(){
    const posts = await Fetch();

    const paths = posts.map(value => {
        return {
            params : {
                postId:value.id.toString()
            }
        }
    })

    return {
        paths,
        fallback:false
    }
}