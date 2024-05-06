import Homenavbar from '@/components/Homenavbar'
import React, { useState } from 'react'

const teachingpage = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <div>
      <Homenavbar menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
       <div> CalenderPage</div>
    </div>
  )
}

export default teachingpage