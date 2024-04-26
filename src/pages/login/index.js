import React from 'react'
import Image from 'next/image'

const loginPage = () => {
    return (
        <div className='flex gap-0'>
            <div className="w-1/2 bg-green-100 h-screen hidden md:block">
                <Image className='h-screen w-full' src="/images/loginPhoto.jpg" width={500} height={500} alt='student' />
            </div>
            <div className='w-full flex justify-center md:w-1/2'>
                <div className='w-10/12 h-screen flex  flex-col justify-center align-middle gap-2 md:w-3/4'>
                    <div className='flex justify-center uppercase text-lg font-sans'>study space</div>
                    <div>
                        <form className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-2' >
                                <label className='w-full text-gray-600 text-sm'>Email</label>
                                <input className="w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-green-400 focus:border-green-400 sm:text-sm" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-gray-600 text-sm'>Password</label>
                                <input type='password' className="px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-green-400 focus:border-green-400 sm:text-sm" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <button type='submit' className='bg-gray-800 px-3 py-2 text-gray-200 rounded-md hover:bg-gray-700' >Login</button>
                            </div>
                        </form>
                        <div className='flex justify-around my-10 '>
                            <div className='w-5/12 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent relative top-2'></div>
                            <div className='w-1/12 text-gray-900 text-sm ml-4'>or</div>
                            <div className='w-5/12 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent relative top-2'></div>
                        </div>
                        <div className='w-full flex gap-2 '>
                            <button className='w-full px-3 py-2 border border-gray-800 rounded-md'>Login with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default loginPage