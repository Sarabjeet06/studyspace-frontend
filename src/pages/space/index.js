import Card from '@/components/Card'
import Homenavbar from '@/components/Homenavbar'
import Homesidemenubar from '@/components/Homesidemenubar'
import React, { useState } from 'react'

const index = () => {

  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <div>
      <Homenavbar menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
      <div className='w-full sm:flex gap-0 bg-gray-50'>
        <div className={`${menuClicked ? 'w-2/12' : 'w-1/12'} ${menuClicked ? 'block' : 'hidden'} sm:block`}>
          <Homesidemenubar menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
        </div>
        <div className={`${menuClicked ? 'w-11/12' : 'w-11/12'} mx-auto`} >
          <div class="flex flex-wrap overflow-y-auto mx-auto sm:ml-2 ml-2 gap-4 sm:px-8 px-2 py-10 my-6">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>

  )
}

export default index