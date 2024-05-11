import React, { useState } from 'react'

const Accordioncustom = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button onClick={() => { setIsOpen(!isOpen) }}>
                <div className='flex gap-1'>
                    <span className={`${isOpen ? 'hidden' : ''} mt-2`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                    </span>
                    <span className={`${isOpen ? '' : 'hidden'} mt-2`} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                    </span>
                    <span>
                        Teaching
                    </span>
                </div>
            </button>
            <div className={`${isOpen ? '' : 'hidden'}`}>
                <div>
                    Study space
                </div>
            </div>
        </div>
    )
}

export default Accordioncustom