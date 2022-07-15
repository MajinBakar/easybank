import React from 'react'
import online from "../assets/icon-online.svg"
import budget from "../assets/icon-budgeting.svg"
import onboarding from "../assets/icon-onboarding.svg"
import api from "../assets/icon-api.svg"

const Skills = () => {
  return (
    <div className='flex flex-col sm:pl-20 md:pl-20 lg:pl-32 xl:pl-40 2xl:pl-40 font-public sm:min-h-screen bg-neutral-100'>
        <div className='px-10 sm:px-0'>
            <h1 className='text-4xl text-[#2B2F4A] mt-20 mb-5 text-center sm:text-start'>Why choose Easybank ?</h1>
            <p className='text-gray-400 text-lg text-center sm:text-start'>We leverage  Open Banking  to turn your bank  account into your financial hub. <br />Control your finances like never before.</p>
        </div>
        <div className='flex flex-row flex-wrap items-start mt-14'>
            <div className='flex flex-col items-center mt-4 px-10 sm:px-0 sm:items-start sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 2xl:w-1/4'>
                <img src={online} alt="online" className='h-[90px] w-[90px] mb-6' />
                <h2 className='text-[#2B2F4A] text-xl mb-4'>Online Banking</h2>
                <p className='text-gray-400 text-sm sm:mr-24 text-center sm:text-start'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
            </div>
            <div className='flex flex-col items-center mt-4 px-10 sm:px-0 sm:items-start sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 2xl:w-1/4'>
                <img src={budget} alt="budget" className='h-[90px] w-[90px] mb-6'/>
                <h2 className='text-[#2B2F4A] text-xl mb-4'>Simple Budgeting</h2>
                <p className='text-gray-400 text-sm sm:mr-24 text-center sm:text-start'>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
            </div>
            <div className='flex flex-col items-center mt-4 px-10 sm:px-0 sm:items-start sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 2xl:w-1/4'>
                <img src={onboarding} alt="onboarding" className='h-[90px] w-[90px] mb-6'/>
                <h2 className='text-[#2B2F4A] text-xl mb-4'>Fast Onboarding</h2>
                <p className='text-gray-400 text-sm sm:mr-24 text-center sm:text-start'>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
            </div>
            <div className='flex flex-col items-center mt-4 mb-10 sm:mb-0 px-10 sm:px-0 sm:items-start sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 2xl:w-1/4'>
                <img src={api} alt="api" className='h-[90px] w-[90px] mb-6'/>
                <h2 className='text-[#2B2F4A] text-xl mb-4'>Open API</h2>
                <p className='text-gray-400 text-sm sm:mr-24 text-center sm:text-start'>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
            </div>
        </div>

    </div>
  )
}

export default Skills