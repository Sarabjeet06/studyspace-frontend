import Card from '@/components/Card'
import Homenavbar from '@/components/Homenavbar'
import Homesidemenubar from '@/components/Homesidemenubar'
import React, { useState } from 'react'

const index = () => {
  const [className, setClassName] = useState("Science")
  const [classBtn, setClassBtn] = useState("Enter Class Room")
  const [classDescription, setClassDescription] = useState("Non-Medical")
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <div>
      <Homenavbar menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
      <div className='w-full sm:flex gap-0 bg-gray-50'>
        <div className={`${menuClicked ? 'w-2/12' : 'w-1/12'} ${menuClicked ? 'block' : 'hidden'} sm:block`}>
          <Homesidemenubar menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
        </div>
        <div className={`${menuClicked ? 'w-10/12' : 'w-11/12'}`} >
          <div class="grid lg:grid-cols-3 md:grid-cols-2 ml-8 gap-4 px-8 py-10 my-6">
            <Card className= {"Java"} classBtn = {classBtn} classDescription = {"Programming"} ImagePath = {"/images/Programming.avif"} ImageUser={"/images/User.jpg"} />
            <Card className= {"Python"} classBtn = {classBtn} classDescription = {"Programming"} ImagePath={"/images/Programming.jpg"} ImageUser={"/images/User2.jpg"} />
            <Card className= {"English"} classBtn = {classBtn} classDescription = {"Language"} ImagePath={"/images/English.avif"} ImageUser={"/images/User3.jpg"} />
            <Card className= {"Physics"} classBtn = {classBtn} classDescription = {"12th class"} ImagePath={"/images/Physics.avif"} ImageUser={"/images/User4.avif"} />
            <Card className= {"Chemistry"} classBtn = {classBtn} classDescription = {"12th class"} ImagePath={"/images/Chemistry.avif"} ImageUser={"/images/User.jpg"} />
            <Card className= {"Maths"} classBtn = {classBtn} classDescription = {"12th class"} ImagePath={"/images/Maths.avif"} ImageUser={"/images/User2.jpg"} />
            <Card className= {"Physical Education"} classBtn = {classBtn} classDescription = {"12th class"} ImagePath={"/images/Physical-Education.avif"} ImageUser={"/images/User3.jpg"} />
            <Card className= {className} classBtn = {classBtn} classDescription = {classDescription} ImagePath={"/images/Science.jpg"} ImageUser={"/images/User4.avif"} />
            <Card className= {className} classBtn = {classBtn} classDescription = {classDescription} ImagePath={"/images/Science.jpg"} ImageUser={"/images/User.jpg"} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default index