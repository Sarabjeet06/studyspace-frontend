import Card from '@/components/Card'
import HomePageLayout from '@/components/HomePageLayout'
import Homenavbar from '@/components/Homenavbar'
import Homesidemenubar from '@/components/Homesidemenubar'
import React, { useState } from 'react'

const index = () => {
  const [className, setClassName] = useState("Science")
  const [classBtn, setClassBtn] = useState("Enter Class Room")
  const [classDescription, setClassDescription] = useState("Non-Medical")
  return (
    <HomePageLayout>
          <div class="flex flex-wrap md:justify-between justify-center items-center md:p-16 p-6 gap-10">
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
    </HomePageLayout>

  )
}

export default index