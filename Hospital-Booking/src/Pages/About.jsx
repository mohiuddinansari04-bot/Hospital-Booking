import React from 'react'

function About() {
  return (
    <section className="py-16 px-6 bg-white">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl font-bold text-center mb-10">
      About Our Hospital
    </h2>

    <div className="flex flex-col md:flex-row items-center gap-10">

      {/* Image */}
      <div className="md:w-1/2">
        <img
          src="/hospital.jpg"
          alt="Hospital"
          className="w-full rounded-xl shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="md:w-1/2">

        <h3 className="text-2xl font-bold mb-4">
          Making Healthcare Simple and Accessible
        </h3>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Our hospital booking platform makes it simple for patients
          to find the right doctor and book appointments quickly.
          From day care services to specialist consultations, we
          provide a convenient way to manage your healthcare needs.
        </p>

        <div className="space-y-3">
          <p>✓ Easy and quick appointment booking</p>
          <p>✓ Experienced healthcare professionals</p>
          <p>✓ Convenient appointment scheduling</p>
          <p>✓ Wide range of healthcare services</p>
        </div>

      </div>

    </div>

  </div>
</section>
  )
}

export default About