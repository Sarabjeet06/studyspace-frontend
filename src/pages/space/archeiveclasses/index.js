import Homenavbar from '@/components/Homenavbar'
import Homesidemenubar from '@/components/Homesidemenubar';
import React, { useState } from 'react'

const archeiveclasses = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <div>
      <Homenavbar menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
      <div className='w-full flex '>
        <div className={`${menuClicked ? 'w-2/12' : 'w-1/12'}`}>
          <Homesidemenubar menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
        </div>
        <div className={`${menuClicked ? 'w-10/12' : 'w-11/12'}`} >
          <div>archeiveclasses</div>
        </div>
      </div>

    </div>
  )
}

export default archeiveclasses