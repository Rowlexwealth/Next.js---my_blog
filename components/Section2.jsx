
import Image from 'next/image'
import Link from 'next/link'
import Author from './_child/Author'
import Fetch from './../lib/Fetch';
import SwrFetcher from '../lib/SwrFetcher';
import Spinner from './_child/Spinner';
import Error from './_child/Error';

const Section2 = () => {
    // Fetch(3).then (res => console.log(res))

    const { data, isLoading, isError } = SwrFetcher('api/posts')
    // if(data) console.log(data)

    if(isLoading) return <Spinner/>
    if (isError) return <Error />

  return (
    <section className='container mx-auto md:px-20 py-10'>
        <h1 className='font-bold text-4xl py-12 text-center'>Latest Post</h1>

        {/* grid columns */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
            {data.map((value, index)=>(
                <Post data={value} key={index}></Post>
            ))}
        </div>
    </section>
  )
}

export default Section2




const Post = ({ data }) => {
    const {id, category, img, title, published, author}= data;
    
    return (
       <div className='item'>
        <div className='images'>
        <Link href={`/posts/${id}`}>
            <Image src={img} alt="Image" width={500} height={500} />
        </Link>
        </div>
        <div className='info flex justify-center flex-col py-4'>
            <div className='cat flex'>
                <Link href={`/posts/${id}`}><h4 className='text-orange-600 hover:text-orange-800'>{category || "Unknown"}</h4></Link>
                <Link href={`/posts/${id}`}><h4 className='text-gray-800 hover:text-gray-800'>-{published || "Unknown"}</h4></Link>
            </div>
            <div className='title'>
                <Link href={`/posts/${id}`}><h2 className='text-xl font-bold text-gray-800 hover:text-gray-600'>{title || "Title"}</h2></Link>
            </div>
            <p className='text-gray-500 py-3'>Even the all-powerfull Pointing has no conrol about the blind texts it is on almost unorthographic life One day however a small line of blind text by the name of Lorem ipsum decided to leave for the far World of Grammar.</p>

            {author ? <Author {...author} /> : null}
        </div>
        
       </div> 
    )
}