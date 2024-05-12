import React, { useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const Homenavbar = ({ menuClicked, setMenuClicked }) => {

    return (
        <div>
            <div className="fixed z-50 top-0 w-full flex justify-between border border-b-2 border-gray-200 bg-white px-3 py-2 ">
                <div className='flex gap-2'>
                    <div className="hover:cursor-pointer hover:bg-gray-200 p-2  hover:rounded-full" onClick={() => { setMenuClicked(!menuClicked) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </div>

                </div>
                <div className="text-lg uppercase leading-8">StudySpace</div>
                <div className='flex '>

                    <Popover>

                        <PopoverTrigger>
                            <div className='hover:cursor-pointer p-2 hover:bg-gray-200  hover:rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                </svg>
                            </div>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className='border-b-1 border-gray-300'>Create class</div>
                            <div>Join class</div>
                        </PopoverContent>
                    </Popover>


                    <div className='p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Homenavbar