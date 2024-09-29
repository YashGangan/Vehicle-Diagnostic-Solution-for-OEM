import React from 'react'
import Layout from './components/Layout'
import LineChart from './components/general/LineChart'
import Repairs from './components/Repairs'

const CarPage = () => {
  return (
    <>
    <Layout>
        <LineChart />
        <Repairs isDiagnostics={true}/>
    </Layout>  
    </>
  )
}

export default CarPage