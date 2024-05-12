import React, { useState } from 'react'
import Homenavbar from '@/components/Homenavbar'

const calenderpage = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <div>
        <Homenavbar menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
       <div> CalenderPage</div>
    </div>
  )
}

export default calenderpage