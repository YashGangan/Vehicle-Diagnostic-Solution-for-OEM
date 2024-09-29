import React from 'react'
import Layout from './components/Layout'
import LineChart from './components/general/LineChart'
import Repairs from './components/Repairs'
import GenerateReport from './components/GenerateReport'

const CarPage = () => {
  return (
    <>
    <Layout>
        <LineChart />
        <Repairs isDiagnostics={true}/>
        <GenerateReport />
    </Layout>  
    </>
  )
}

export default CarPage