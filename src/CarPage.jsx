import React from 'react'
import { Link } from 'react-router-dom'
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
      <Breadcrumb />
      <CarHero />
      <Metrics />
      <RadarChart />
      <Repairs isDiagnostics={false}/>
      <RepairHistory />
      <GenerateReport />
    </Layout>  
    </>
  )
}

export default CarPage


export function Breadcrumb() {
  return (
    <nav className="rounded-md mx-10">
      <ol className="list-reset flex">
        <li>
          <Link
            to="/"
            className="text-blue transition duration-150 ease-in-out hover:text-blue-600 focus:text-blue-600 active:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 dark:focus:text-blue-500 dark:active:text-blue-600"
          >
            Home
          </Link>
        </li>
        <li>
          <span className="mx-2 text-neutral-500">
            {">"}
          </span>
        </li>
        <li className="text-neutral-500">CarName</li>
      </ol>
    </nav>
  );
}