import React from 'react'
import { FaHospitalUser } from "react-icons/fa";

function Header() {
  const arr=["Home","About","Contact"]
  return (
    <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold flex "><FaHospitalUser className="mr-2 mt-1" /> Hospital-Booking </h1>
      <div className="flex items-center" >
        <nav className="flex items-center gap-4">
          <ul className="flex flex-col sm:flex-row gap-4">
            {arr.map((item) => (
              <li key={item} className="hover:underline">
                <a href={`/${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header