import React from 'react'

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 mt-10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold text-white">Hospital Booking</h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Trusted care for every patient. Book appointments, connect with specialists,
              and manage your healthcare journey with confidence.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Appointments</a></li>
              <li><a href="#" className="hover:text-white">Doctors</a></li>
              <li><a href="#" className="hover:text-white">Departments</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>123 Health Avenue, New York, NY</li>
              <li>+1 (800) 555-0199</li>
              <li>support@hospitalbooking.com</li>
              <li>Mon - Sat: 8:00 AM - 8:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          © 2026 Hospital Booking. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer