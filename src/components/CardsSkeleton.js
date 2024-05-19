import React from 'react'
import CardSkeleton from './CardSkeleton'

const CardsSkeleton = () => {
  return (
    <div className='flex flex-wrap justify-center md:justify-between space-y-3'>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
    </div>
  )
}

export default CardsSkeleton