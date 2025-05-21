import TestsPage from '@/components/Tests/TestsPage'
import React from 'react'

const page = async({params}: {params: Promise<{category: string}>}) => {
  const category = (await params).category
  return (
    <>
        <TestsPage category={category}/>
    </>
  )
}

export default page