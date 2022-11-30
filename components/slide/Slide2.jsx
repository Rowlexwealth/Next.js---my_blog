// import Image from "next/image"
// import Link from "next/link"
// import Author from "../_child/Author"

// const Slide2 = ({data}) => {
//     const {id, category, img, title, published, author}= data;

//     return (
//         <div className='grid md:grid-cols-2 '>
//             <div className='image'>
//                 <Link href={'/'}>
//                     <Image src={img || "/"} width={500} height={500} />
//                 </Link>
//             </div>
//             <div className='info flex justify-center flex-col'>
//                 <div className='cat flex my-5'>
//                     <Link href={'/'}><h4 className='text-orange-600 hover:text-orange-800'> {category || "Unknown"}</h4></Link>
//                     <Link href={'/'}><h4 className='text-gray-800 hover:text-gray-800'> - {published || "Unknown"}</h4></Link>
//                 </div>
//                 <div className='title'>
//                     <Link href={'/'}><h2 className='text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600'>{title || "Unknown"}</h2></Link>
//                 </div>
//                 <p className='text-gray-500 py-3'>{description || "Description"}</p>

//                 {author ? <Author/> : null}
//             </div>
//         </div>
//     )
// };

// export default Slide2