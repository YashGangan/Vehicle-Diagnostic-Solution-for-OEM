import React from 'react'
import CarHero from './components/CarHero'
import Layout from './components/Layout'
import Metrics from './components/general/Metrics'
import Repairs from './components/general/Repairs'

const CarPage = () => {
  return (
    <>
    <Layout>
      <CarHero />
      <Metrics />
      <Repairs />
    </Layout>  
    </>
  )
}

export default CarPage