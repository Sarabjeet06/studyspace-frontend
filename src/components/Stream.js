import React, { useContext, useMemo, useState } from 'react'
import Image from 'next/image'
import { Appcontext } from '@/context/AppContext'
import { useRouter } from 'next/router';



export default function Stream() {

  const [isVisible, setIsVisible] = useState(true)
  const context = useContext(Appcontext);
  const router = useRouter();
  const {id} = router.query;
  const {spaceList} = context;
  const handleClick = () => {
    setIsVisible(!isVisible)
  }
  const CurrSpace = useMemo(() => {
    return spaceList?.classrooms?.find(space => space?.classroom_id === id) ||
           spaceList?.joined_classrooms?.find(space => space?.classroom_id === id);
  }, [id, spaceList]);

  console.log(CurrSpace);

  return (
    <div className=''>
      <div className='w-full'>
        <div className='relative h-64 w-full bg-blue-500 rounded-xl'>
          <Image 
          unoptimized
          quality={100}
          src={CurrSpace?.classroom_background_url ||  "https://res.cloudinary.com/dqpirrbuh/image/upload/v1714684229/zy4i_hjsz_210617_qqbclc.jpg"}
            className='object-cover h-full w-full rounded-xl'
            width={100}
            height={100}> 
          </Image>
          <div className='absolute top-0 left-0 w-full rounded-lg h-full bg-gradient-to-t from-black/30 to-white/10'></div>
          <div className='absolute bottom-5 left-6'>
            <div className='text-white text-4xl font-bold'>{CurrSpace?.classroom_name || "No name"}</div>
            <div className='text-white text-lg'>{CurrSpace?.classroom_section || "No name"}</div>
          </div>
        </div>
        <div className='flex lg:flex-row flex-col gap-8 mt-8'>
          <div className='lg:flex lg:flex-col gap-3 hidden rounded shadow-md w-52 h-fit min-h-48 p-3 text-center bg-white'>
            <div className='font-semibold'>Upcoming work</div>
            <div>No upcoming work</div>
          </div>
          <div className='w-full py-3'>
            <div className='w-full h-fit py-3 px-5 rounded-lg border-b-[1px] shadow-[0px_3px_6px_2px_rgba(0,0,0,0.15)] bg-white' >
              
                {isVisible && <button className={`w-full h-full text-sm text-left text-gray-500 p-5`} onClick={handleClick}>Announce something to the class</button>}

                {
                  !isVisible && <div className='flex flex-col items-end py-1 gap-2'>
                    <textarea className={`bg-gray-100 w-full h-full text-sm text-left text-black px-5 py-3 rounded outline-none`}  name="announcement" id="announcement">
                    </textarea>
                    <div className='flex gap-3'>
                      <button className='w-fit px-3 py-1 bg-blue-500 text-white hover:bg-blue-600 rounded'>Post</button>
                      <button onClick={handleClick} className='w-fit px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded'>cancel</button>
                    </div>
                  </div>
                }
              

            </div>
            <div>
              <div className='flex gap-4 w-full h-20 my-6 px-5 items-center border-[1.5px] border-gray-300 rounded-md bg-white hover:bg-gray-100 cursor-pointer'>
                <div className='relative w-12 h-12 rounded-full bg-blue-500'>
                  <Image
                    className='absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto'
                    src='/images/assignment-icon.png'
                    width={30}
                    height={30}
                  />
                </div>
                <div className='text-center'>Assignment heading</div>
              </div> 
              <div className='flex gap-4 w-full h-20 my-6 px-5 items-center border-[1.5px] border-gray-300 rounded-md bg-white hover:bg-gray-100 cursor-pointer'>
                <div className='relative w-12 h-12 rounded-full bg-blue-500'>
                  <Image
                    className='absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto'
                    src='/images/notes-icon.png'
                    width={30}
                    height={30}
                  />
                </div>
                <div className='text-center'>Notes heading</div>
              </div> 
              <div className='flex gap-4 w-full h-20 my-6 px-5 items-center border-[1.5px] border-gray-300 rounded-md bg-white hover:bg-gray-100 cursor-pointer'>
                <div className='relative w-12 h-12 rounded-full bg-blue-500'>
                  <Image
                    className='absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto'
                    src='/images/announcement-icon.png'
                    width={30}
                    height={30}
                  />
                </div>
                <div className='text-center'>Announcement heading</div>
              </div> 
            </div>         
          </div>
        </div>
      </div>
    </div>
  )
}
