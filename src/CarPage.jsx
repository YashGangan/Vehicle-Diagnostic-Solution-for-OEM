import React from 'react'
import CarHero from './components/CarHero'
import Layout from './components/Layout'
import Metrics from './components/Metrics'
import Repairs from './components/Repairs'
import RepairHistory from './components/RepairHistory'
import GenerateReport from './components/GenerateReport'
import RadarChart from './components/general/RadarChart'

const CarPage = () => {
  return (
    <>
    <Layout>
      <CarHero />
      <Metrics />
      <Repairs isDiagnostics={false}/>
      <RepairHistory />
      <RadarChart />
      <GenerateReport />
    </Layout>  
    </>
  )
}

export default CarPage