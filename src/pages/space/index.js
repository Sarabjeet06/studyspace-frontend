import Card from '@/components/Card'
import Homenavbar from '@/components/Homenavbar'
import Homesidemenubar from '@/components/Homesidemenubar'
import React, { useState } from 'react'

const index = () => {

  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <div>
      <Homenavbar menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
      <div className='w-full flex gap-0 bg-gray-50'>
        <div className={`${menuClicked ? 'w-2/12' : 'w-1/12'}`}>
          <Homesidemenubar menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
        </div>
        <div className={`${menuClicked ? 'w-10/12' : 'w-11/12'}`} >
          <div class="grid lg:grid-cols-3 md:grid-cols-2 ml-8 gap-4 px-8 py-10 my-6">
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