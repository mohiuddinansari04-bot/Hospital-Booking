import React from 'react'

function Header() {
  return (
    <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1>Hospital Booking</h1>
      <div>
        <nav>
          <ul>
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