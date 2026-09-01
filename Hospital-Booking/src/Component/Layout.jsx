import React from 'react'

function Layout() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <h1 className="text-4xl font-bold text-center mb-4">
          Welcome to the Hospital Booking App
        </h1>
        <p className="text-center text-lg">Your trusted partner for quality healthcare services</p>
      </div>

      {/* Service 1: Day Care Appointments */}
      <div className="p-6 mt-10">
        <div className="flex items-center justify-between gap-10 bg-white rounded-lg shadow-lg p-8">
          {/* Left side */}
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Day Care Appointments
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Get convenient and reliable day care services without the need for an overnight hospital stay. Book appointments with experienced doctors and healthcare professionals for consultations, minor procedures, follow-up care, and other same-day treatments.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our day care services are designed to provide you with expert medical attention while allowing you to recover in the comfort of your own home. We offer flexible scheduling and personalized care plans to suit your needs.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Choose a suitable time, find the right specialist, and manage your appointment easily—all in one place with our user-friendly platform.
            </p>
          </div>

          {/* Right side */}
          <div className="w-1/2 flex justify-end">
            <img
              className="w-full max-w-md rounded-lg shadow-md"
              src="https://png.pngtree.com/thumb_back/fh260/background/20240419/pngtree-smiling-doctor-or-consultant-sitting-at-a-desk-his-neck-looking-image_15663381.jpg"
              alt="Doctor"
            />
          </div>
        </div>
      </div>

      {/* Service 2: Emergency Services */}
      <div className="p-6">
        <div className="flex items-center justify-between gap-10 bg-white rounded-lg shadow-lg p-8 flex-row-reverse">
          {/* Right side text */}
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              24/7 Emergency Services
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our round-the-clock emergency department is always ready to handle medical emergencies of any severity. With state-of-the-art equipment and a highly trained medical team, we ensure rapid response and expert care when you need it most.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Whether it's trauma, acute illness, or any life-threatening condition, our emergency specialists provide immediate assessment, stabilization, and treatment. We work with paramedics and emergency responders to ensure seamless care.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Book an emergency consultation or walk in directly to our ER. Average wait time: under 15 minutes from arrival to medical assessment.
            </p>
          </div>

          {/* Left side image */}
          <div className="w-1/2">
            <img
              className="w-full max-w-md rounded-lg shadow-md"
              src="https://png.pngtree.com/thumb_back/fh260/background/20240419/pngtree-ambulance-with-doctor-isolated-on-white-background-image_15663377.jpg"
              alt="Emergency Services"
            />
          </div>
        </div>
      </div>

      {/* Service 3: Surgical Services */}
      <div className="p-6">
        <div className="flex items-center justify-between gap-10 bg-white rounded-lg shadow-lg p-8">
          {/* Left side */}
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              Advanced Surgical Services
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our surgical department features cutting-edge operating theaters equipped with the latest minimally invasive surgical technology. Our experienced surgeons specialize in various surgical procedures including general surgery, orthopedic, cardiac, and laparoscopic procedures.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We provide comprehensive pre-operative consultations, detailed surgical planning, and exceptional post-operative care. Our team ensures patient safety and comfort throughout the surgical journey with personalized attention.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              From routine procedures to complex surgeries, we use the most advanced techniques to minimize recovery time and ensure optimal outcomes for our patients.
            </p>
          </div>

          {/* Right side */}
          <div className="w-1/2 flex justify-end">
            <img
              className="w-full max-w-md rounded-lg shadow-md"
              src="https://png.pngtree.com/thumb_back/fh260/background/20240419/pngtree-modern-operating-room-with-surgical-equipment-image_15663379.jpg"
              alt="Surgical Services"
            />
          </div>
        </div>
      </div>

      {/* Service 4: Diagnostic Services */}
      <div className="p-6">
        <div className="flex items-center justify-between gap-10 bg-white rounded-lg shadow-lg p-8 flex-row-reverse">
          {/* Right side text */}
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-purple-600 mb-4">
              Comprehensive Diagnostic Services
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our state-of-the-art diagnostic center provides a full range of imaging and laboratory services. With advanced equipment including CT scans, MRI, ultrasound, and digital X-ray, we deliver precise and timely diagnoses.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our experienced radiologists and pathologists work closely with your physician to ensure accurate interpretation of results. Quick turnaround times and easy report access through our patient portal make diagnosis faster than ever.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We maintain the highest quality standards and safety protocols to ensure reliable results and patient safety during all diagnostic procedures.
            </p>
          </div>

          {/* Left side image */}
          <div className="w-1/2">
            <img
              className="w-full max-w-md rounded-lg shadow-md"
              src="https://png.pngtree.com/thumb_back/fh260/background/20240419/pngtree-medical-laboratory-with-modern-equipment-image_15663380.jpg"
              alt="Diagnostic Services"
            />
          </div>
        </div>
      </div>

      {/* Service 5: Specialty Departments */}
      <div className="p-6">
        <div className="flex items-center justify-between gap-10 bg-white rounded-lg shadow-lg p-8">
          {/* Left side */}
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-indigo-600 mb-4">
              Specialized Medical Departments
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We house dedicated departments for various medical specialties including Cardiology, Orthopedics, Neurology, Pediatrics, Obstetrics & Gynecology, and more. Each department is staffed with board-certified specialists and advanced medical equipment.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our multidisciplinary approach ensures coordinated care for complex medical conditions. Specialists collaborate to provide holistic treatment plans tailored to each patient's unique needs.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Whether you need routine care or treatment for a complex condition, our specialized departments are equipped to handle it with expertise and compassion.
            </p>
          </div>

          {/* Right side */}
          <div className="w-1/2 flex justify-end">
            <img
              className="w-full max-w-md rounded-lg shadow-md"
              src="https://png.pngtree.com/thumb_back/fh260/background/20240419/pngtree-team-of-doctors-standing-in-hospital-corridor-image_15663378.jpg"
              alt="Specialty Departments"
            />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="p-6 mt-10 mb-10 bg-blue-50 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-blue-600 mb-4">Ready to Book Your Appointment?</h3>
        <p className="text-gray-700 text-lg mb-6">
          Experience world-class healthcare at your convenience. Browse our available specialists and schedule your appointment today.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition">
          Book Now
        </button>
      </div>

    </div>
  )
}

export default Layout