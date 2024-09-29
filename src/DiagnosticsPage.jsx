import React from 'react'
import Layout from './components/Layout'
import LineChart from './components/general/LineChart'
import Repairs from './components/Repairs'
import GenerateReport from './components/GenerateReport'
import { useParams, Link } from "react-router-dom"; // Import the useParams hook

const DiagnosticsPage = () => {
  return (
    <>
    <Layout>
        <Breadcrumb />
        <LineChart />
        <Repairs isDiagnostics={true}/>
        <GenerateReport />
    </Layout>  
    </>
  )
}

export default DiagnosticsPage

export function Breadcrumb() {
  const { variable } = useParams(); // Get the variable from the URL
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
        <li>
          <Link
            to="/car"
            className="text-blue transition duration-150 ease-in-out hover:text-blue-600 focus:text-blue-600 active:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 dark:focus:text-blue-500 dark:active:text-blue-600"
          >
            CarName
          </Link>
        </li>
        <li>
          <span className="mx-2 text-neutral-500">
            {">"}
          </span>
        </li>
        <li>
          <Link
            to="/car"
            className="text-blue transition duration-150 ease-in-out hover:text-blue-600 focus:text-blue-600 active:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 dark:focus:text-blue-500 dark:active:text-blue-600"
          >
            Diagnostics
          </Link>
        </li>
        <li>
          <span className="mx-2 text-neutral-500 dark:text-neutral-400">
            {">"}
          </span>
        </li>
        <li className="text-neutral-500 dark:text-neutral-400">{variable}</li>
      </ol>
    </nav>
  );
}