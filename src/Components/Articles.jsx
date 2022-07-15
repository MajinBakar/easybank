import React from 'react'
import currency from '../assets/image-currency.jpg'
import restaurant from '../assets/image-restaurant.jpg'
import plane from '../assets/image-plane.jpg'
import confetti from '../assets/image-confetti.jpg'

const Articles = () => {
  return (
    <div className='flex flex-col sm:pl-14 md:pl-20 lg:pl-32 xl:pl-40 2xl:pl-40 pb-10 pt-16 bg-slate-50 font-public sm:min-h-screen'>
        <div className='pb-8'>
        <h1 className='text-4xl text-[#2B2F4A] mt-10 mb-5 text-center sm:text-start'>Latest Articles</h1>
        </div>

        <div className='flex flex-row flex-wrap items-start gap-x-4 gap-y-2 md:gap-x-8 md:gap-y-4 justify-center sm:justify-start'>

            <div className='flex flex-col h-96 max-w-[17rem] mt-4 rounded-md overflow-hidden bg-white '>    
            <div className='h-1/2'>
                <img src={currency} alt="Articles" className='w-[17rem] max-h-[181px] contain'/>
                </div>
            <div className='h-1/2 m-4 pl-2 pr-6'>
                <p className='text-gray-400 text-xs'>By Claire Robinson</p>
                <h2 className='text-lg text-[#2B2F4A] font-medium leading-none py-2 cursor-pointer hover:text-[#31d35c]'>Receive money in any currency with no fees</h2>
                <p className='text-sm text-gray-400'>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single … </p>
            </div>
            </div>

            <div className='flex flex-col max-w-[17rem] h-96 mt-4 rounded-md overflow-hidden bg-white justify-center'>
                <div className='h-1/2 w-full'>
                    <img src={restaurant} alt="Articles"  className='cover' />
                </div>
                <div className='h-1/2 m-4 pl-2 pr-6'>
                    <p className='text-gray-400 text-xs'>By Wilson Hutton</p>
                    <h2 className='text-lg text-[#2B2F4A] font-medium leading-none py-2 cursor-pointer hover:text-[#31d35c]' >Treat yourself without worrying about money </h2>
                    <p className='text-sm text-gray-400'>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
                </div>
            </div>

            <div className='flex flex-col max-w-[17rem] h-96 mt-4 rounded-md overflow-hidden bg-white'>
            <div className='h-1/2'>
                <img src={plane} alt="Articles" className='cover' />
            </div>
            <div className='h-1/2 m-4 pl-2 pr-6'>
                <p className='text-gray-400 text-xs'>By Wilson Hutton</p>
                <h2 className='text-lg text-[#2B2F4A] font-medium leading-none py-2 cursor-pointer hover:text-[#31d35c]'>Take your EasyBank card wherever you go</h2>
                <p className='text-sm text-gray-400'>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
            </div>
            </div>

            <div className='flex flex-col max-w-[17rem] h-96 mt-4 rounded-md overflow-hidden bg-white'>
            <div className='h-1/2'>
                <img src={confetti} alt="Articles"  className='cover'/>
            </div>
            <div className='h-1/2 m-4 pl-2 pr-6'>
                <p className='text-gray-400 text-xs'>By Claire Robinson</p>
                <h2 className='text-lg text-[#2B2F4A] font-medium leading-none py-2 cursor-pointer hover:text-[#31d35c]'>Our invite-only Beta accounts are now live! </h2>
                <p className='text-sm text-gray-400'>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
            </div>
            </div>

        </div>
        
    </div>
  )
}

export default Articles