import React from 'react'

function Layout() {
  return (
    <div className="p-6 bg-gray-200 min-h-screen">

      <h1 className="text-3xl font-bold text-center">
        Welcome to the Hospital Booking App
      </h1>

      <div className="flex items-center justify-between gap-10 mt-10">

        {/* Left side */}
        <div className="w-1/2">
          <h2 className="text-3xl font-bold">
            Day Care Appointments
          </h2>

          <p className="mt-4 text-lg">
            Get convenient and reliable day care services without the need
            for an overnight hospital stay. Book appointments with
            experienced doctors and healthcare professionals for
            consultations, minor procedures, follow-up care, and other
            same-day treatments. Choose a suitable time, find the right
            specialist, and manage your appointment easily—all in one place.
          </p>
        </div>

        {/* Right side */}
        <div className="w-1/2 flex justify-end">
          <img
            className="w-full max-w-md rounded-lg"
            src="https://png.pngtree.com/thumb_back/fh260/background/20240419/pngtree-smiling-doctor-or-consultant-sitting-at-a-desk-his-neck-looking-image_15663381.jpg"
            alt="Doctor"
          />
        </div>

      </div>

    </div>
  )
}

export default Layout