import Spinner from './_child/Spinner';
import Error from './_child/Error';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper'

// Import Swiper styles
import 'swiper/css';
import Author from './_child/Author';
import Link from 'next/link';
import Image from 'next/image';
import SwrFetcher from '../lib/SwrFetcher';


const Section1 = () => {
    const { data, isLoading, isError } = SwrFetcher('api/trending')
    // if(data) console.log(data)

    if(isLoading) return <Spinner/>
    if (isError) return <Error />

    SwiperCore.use([Autoplay])

    const bg = {
        background: "url('/images/banner.png')no-repeat",
        backgroundPosition: 'right'
    }

  return (
    <section className='py-16' style={bg}>
        <div className='container mx-auto md:px-20'>
            <h1 className='font-bold text-4xl pb-12 text-center'>Trending</h1>

            <Swiper
                slidesPerView={1}
                autoplay={{
                    delay:3000
                }}
            >

            {data.map((value, index) => (
                <SwiperSlide key={index}>
                    <Slide data={value} />
                </SwiperSlide>
            ))
            }
            </Swiper>

            
        </div>
    </section>
  )
}

export default Section1


const Slide = ({data}) => {
    const { id, category, img, title, published, description, author } = data;

    return (
        <div className='grid md:grid-cols-2 '>
            <div className='image'>
                <Link href={`/posts/${id}`}>
                    <Image src={img || "/"} alt="image" width={500} height={100} />
                </Link>
            </div>
            <div className='info flex justify-center flex-col'>
                <div className='cat flex my-5'>
                    <Link href={`/posts/${id}`}><h4 className='text-orange-600 hover:text-orange-800'> {category || "Unknown"}</h4></Link>
                    <Link href={`/posts/${id}`}><h4 className='text-gray-800 hover:text-gray-800'> - {published || "Unknown"}</h4></Link>
                </div>
                <div className='title'>
                    <Link href={`/posts/${id}`}><h2 className='text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600'>{title || "Unknown"}</h2></Link>
                </div>
                <p className='text-gray-500 py-3'>{description || "Description"}</p>

                {author ? <Author {...author} /> : null}
            </div>
        </div>
    )
};

