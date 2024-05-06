import Card from '@/components/Card'
import React, { useState } from 'react'

const index = () => {
  const [name, setName] = useState("Sukhbir");
  return (
    <div className="grid lg:grid-cols-3 gap-4 px-8 py-10 my-6">
      <Card name={name} />
      <Card name={name} />
      <Card name={name} />
      <Card name={name} />
      <Card name={name} />
      <Card name={name} />
    </div>

  )
}

export default index