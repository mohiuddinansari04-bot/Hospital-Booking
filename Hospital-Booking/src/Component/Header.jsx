import React from 'react'

function Header() {
  return (
    <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold">Hospital Booking</h1>
      <div className="flex items-center" >
        <nav className="flex items-center gap-4">
          <ul className="flex flex-col sm:flex-row gap-4">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header