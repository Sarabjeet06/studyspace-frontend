import React, { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Homesidemenubar = ({ menuClicked, setMenuClicked }) => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <div className='fixed z-10 left-0 top-14'>
            <div className={`flex flex-col gap-5 h-screen border-r-2 border-gray-200 overflow-x-auto   ${menuClicked ? '' : ' items-center'}  bg-slate-100  `} onMouseEnter={() => { setMenuClicked(true) }} onMouseLeave={() => { setMenuClicked(false) }}>
                <Link href="/space" className={`w-full flex gap-4 ${menuClicked ? '' : ''} ${pathname === '/space' ? 'hover:bg-blue-200' : ''} hover:bg-blue-100 hover:cursor-pointer hover:rounded-md  px-2 py-1`}>
                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                        </svg>
                    </div>
                    <div className={` rounded-full ${menuClicked ? '' : 'hidden '}`}>Home</div>
                </Link>
                <Link href="/space/calendar" className={` flex gap-4 ${menuClicked ? '' : ''} ${pathname === '/space/calendar' ? 'hover:bg-blue-200' : ''} hover:bg-blue-100 hover:cursor-pointer hover:rounded-md  px-2 py-1`}>
                    <div className='mt-2 '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                        </svg>
                    </div>
                    <div className={`rounded-full mt-1 ${menuClicked ? '' : 'hidden '}`}>Calendar</div>
                </Link>
                <div className={` flex gap-4 ${menuClicked ? 'pl-2' : ''} hover:bg-blue-100 hover:cursor-pointer hover:rounded-md  px-2 py-1`}>


                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className='mt-2 ml-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                                    </svg>
                                </div>
                                <div className={` rounded-full mt-1 ${menuClicked ? '' : 'hidden '}`}>Teaching</div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div>Study space</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>


                </div>
                <div className={` flex gap-4 ${menuClicked ? '' : ''} hover:bg-blue-100 hover:cursor-pointer hover:rounded-md  px-2 py-1`}>


                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className='mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
                                    </svg>
                                </div>
                                <div className={` rounded-full mt-1 ${menuClicked ? '' : 'hidden '}`}>Spaces</div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div>C++ padho</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>


                </div>
                <Link href='/space/archeiveclasses' className={` flex gap-4 ${menuClicked ? 'pl-2' : ''} ${pathname === '/space/archeiveclasses' ? 'hover:bg-blue-200' : ''} hover:bg-blue-100 hover:cursor-pointer hover:rounded-md px-2 py-1`}>
                    <div className='mt-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0" />
                        </svg>
                    </div>
                    <div className={` rounded-full mt-1 ${menuClicked ? '' : 'hidden '}`}>Archieved</div>
                </Link>
            </div>
        </div>
    )
}

export default Homesidemenubar