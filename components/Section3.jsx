import Image from 'next/image'
import Link from 'next/link'
import Author from './_child/Author'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper'
// Import Swiper styles
import 'swiper/css';
import Spinner from './_child/Spinner';
import Error from './_child/Error';
import SwrFetcher from '../lib/SwrFetcher';


const Section3 = () => {
    const { data, isLoading, isError } = SwrFetcher('api/popular')
    // if(data) console.log(data)

    if(isLoading) return <Spinner />
    if (isError) return <Error />

    SwiperCore.use([Autoplay])

  return (
    <section className='container mx-auto md:px-20 py-16'>
        <h1 className='font-bold text-4xl py-12 text-center'>Most Popular</h1>

        {/* swiper */}
        <Swiper 
            breakpoints={{
                640 : {
                    slidesPerView : 2,
                    spaceBetween : 30
                }
            }}
            autoplay={{
            delay:5000
        }}
        >
            {data.map((value, index) => (
                <SwiperSlide key={index} >
                    <Post data={value} />
                </SwiperSlide>
            ))
            }
        </Swiper>

    </section>
  )
}

export default Section3





const Post = ({ data }) => {
    const { id, title, category, img, published, description, author } = data;
    
    return (
        <div className='grid'>
            <div className='images'>
                <Link href={`/posts/${id}`}>
                    <Image src={img} alt="Image" width={500} height={400} />
                </Link>
            </div>
            <div className='info flex justify-center flex-col py-4'>
                <div className='cat flex'>
                    <Link href={`/posts/${id}`}><h4 className='text-orange-600 hover:text-orange-800'>{category}</h4></Link>
                    <Link href={`/posts/${id}`}><h4 className='text-gray-800 hover:text-gray-800'>- {published}</h4></Link>
                </div>
                <div className='title'>
                    <Link href={`/posts/${id}`}><h2 className='text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600'>{title}</h2></Link>
                </div>
                <p className='text-gray-500 py-3'>{description}</p>

                {author ? <Author {...author} /> : null}
            </div>
       </div> 
    )
}