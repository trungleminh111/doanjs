import React, { useState } from 'react'
import { BsArrowRightShort } from 'react-icons/bs';
import { BsArrowLeftShort } from 'react-icons/bs';
const Banner = () => {
    const [currenSlide,setCurrenSlide] = useState(0);
    const data = [
        "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
        "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
        "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
        "https://amazonproone.vercel.app/static/media/img4.8f7fc6b56e74dba2b6f9.jpg",
        "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg"
    ];
    const prevSlide =()=>{
        setCurrenSlide(currenSlide === 0?4:(prev)=>prev-1)
    }
    const nextSlide =()=>{
        setCurrenSlide(currenSlide === 4?0:(prev)=>prev+1)
    }
    console.log(currenSlide);
    return (
        <div className='w-full h-auto overflow-x-hidden'>
            <div className='w-screen h-[650px] relative'>
                <div style={{transform:`translateX(-${currenSlide*100}vw)`}} className='w-[400vw] h-full flex transition-transform duration-1000'>
                    <img className='w-screen h-full object-cover' src={data[0]} alt="ImgOne" loading='priority' />
                    <img className='w-screen h-full object-cover' src={data[1]} alt="ImgTwo" loading='priority' />
                    <img className='w-screen h-full object-cover' src={data[2]} alt="ImgThree" loading='priority' />
                    <img className='w-screen h-full object-cover' src={data[3]} alt="ImgFour" loading='priority' />
                    <img className='w-screen h-full object-cover' src={data[4]} alt="ImgFive" loading='priority' />
                </div>
                <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
                    <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                        <BsArrowLeftShort />
                    </div>
                    <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                        <BsArrowRightShort />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner