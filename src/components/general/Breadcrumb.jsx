import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumb({a, b, c}) {
  return (
    <nav className="bg-grey-light w-full rounded-md">
      <ol className="list-reset flex">
        <li>
          <Link
            to="/"
            className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            Home
          </Link>
        </li>
        <li>
          <span className="mx-2 text-neutral-500 dark:text-neutral-400">
            {"<"}
          </span>
        </li>
        <li>
          <Link
            to="#"
            className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            Library
          </Link>
        </li>
        <li>
          <span className="mx-2 text-neutral-500 dark:text-neutral-400">
            {">"}
          </span>
        </li>
        <li className="text-neutral-500 dark:text-neutral-400">Data</li>
      </ol>
    </nav>
  );
}