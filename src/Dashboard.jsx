import React from 'react'
import CarCard from './components/CarCard'
import Metrics from './components/general/Metrics'
import Sidebar from './components/general/Sidebar'
import Navbar from './components/general/Navbar'
import Layout from './components/Layout'

const Dashboard = () => {
  return (
    <>
      <Layout>
        <CarCard />
      </Layout>
    </>
  )
}

export default Dashboard