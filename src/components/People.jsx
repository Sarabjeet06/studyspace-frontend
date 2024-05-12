import React from 'react'
import { useState } from 'react'
import { LuUserPlus } from "react-icons/lu";
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import { IoMdMore } from "react-icons/io";
import InviteUserModal from './inviteUserModal';
import JoinClassModal from './joinClassModal';

const People = ({ name }) => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    return (
        <div>
            <div className='max-w-4xl mx-auto p-2'>

                <div className='flex p-5 text-4xl font-bold justify-between text-blue-500 rounded-md fon'>
                    <div className='font-thin'>
                        {name}
                    </div>
                    <div className='hover:bg-slate-100 rounded-full p-2'>
                        <div
                            onClick={() => {
                                setOpen2(true);
                            }}
                            className="border-3 rounded-md"
                        >
                            {" "}
                            <LuUserPlus size={30} />
                        </div>
                    </div>
                </div>

                <div className='text-blue-500'>
                    <hr className='border-t-2 border-blue-400' />
                </div>

                <div className='flex relative'>
                    <Image src="/images/User.jpg" width={60} height={50} alt='User Card Image' className='rounded-full md:-bottom-8 md:right-10 md:z-50' />
                    <div className='flex p-3 justify-between'>
                        {name}
                        <div className='absolute hover:bg-slate-100 p-2 rounded-full right-6'>
                            <IoMdMore />
                        </div>
                    </div>
                    <hr />
                </div>
                <div className='flex relative'>
                    <Image src="/images/User.jpg" width={60} height={50} alt='User Card Image' className='rounded-full md:-bottom-8 md:right-10 md:z-50' />
                    <div className='flex p-3 justify-between'>
                        {name}
                        <div className='absolute hover:bg-slate-100 p-2 rounded-full right-6'>
                            <IoMdMore />
                        </div>
                    </div>
                    <hr />
                </div>
                <div className='flex relative'>
                    <Image src="/images/User.jpg" width={60} height={50} alt='User Card Image' className='rounded-full md:-bottom-8 md:right-10 md:z-50' />
                    <div className='flex p-3 justify-between'>
                        {name}
                        <div className='absolute hover:bg-slate-100 p-2 rounded-full right-6'>
                            <IoMdMore />
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
            <InviteUserModal open={open2} setOpen={setOpen2} />
        </div >
    )
}

export default People