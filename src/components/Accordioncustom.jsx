import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Accordioncustom = ({ menuClicked }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    useEffect(() => {
        if (menuClicked) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    },[menuClicked]);

    return (
        <div>
            <button onClick={() => { setIsOpen(!isOpen) }}>
                <div className='flex gap-1'>
                    <span className={`${isOpen ? 'hidden' : ''} mt-1`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                    </span>
                    <span className={`${isOpen ? '' : 'hidden'} mt-1`} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                    </span>
                    <span className={`${menuClicked ? '' : 'pr-3'}`} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                        </svg>
                    </span>
                    <span className={`${menuClicked ? '' : 'hidden'}`} >
                        Teaching
                    </span>
                </div>
            </button>
            <div className={`${isOpen ? '' : 'hidden'} `}>
                <Link href="/space/room">
                    Study space
                </Link>
            </div>
        </div>
    )
}

export default Accordioncustom