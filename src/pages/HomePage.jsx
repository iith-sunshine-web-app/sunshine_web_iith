import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const hierarchyData = [
    { level: 'Faculty in Charge (FIC)', position: 'Faculty Member (Overall Head)', path: '/team/Faculty' },
    { level: 'Counselling Team', position: 'Professional Psychologists & Counsellors', path: '/team/Counsellors' },
    { level: 'Faculty Representatives', position: 'One Faculty from each Department', path: '/team/Faculty' },
    { level: 'Student Team', position: 'Mentors (PG/PhD), Buddies (UG), Well-being Representatives', path: '/team/Students' },
  ];

  return (
    <div className="flex flex-col w-full">

      {/* --- (Welcome Note) --- */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto border-2 border-orange-400 bg-orange-50 rounded-3xl p-10 shadow-md">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Welcome to Sunshine
          </h1>
          <h2 className="text-xl font-semibold text-orange-700 mb-8">
            Your Campus Counselling Cell
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            At Sunshine, we believe that mental health is just as important as physical health. Our mission is to create a safe, supportive, and stigma-free environment where students and staff can openly express their feelings, receive professional guidance, and build emotional resilience.
          </p>
          <p className="text-lg text-gray-800 font-medium">
            Whether you're facing academic stress, relationship challenges, identity concerns, or just need someone to talk to — we're here for you.
          </p>
        </div>
      </section>

      {/* --- 2. HIERARCHY TABLE --- */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-10">Organizational Structure</h2>
          <div className="overflow-hidden rounded-lg shadow-lg border border-gray-200">
            <table className="min-w-full bg-white">
              <thead className="bg-teal-600 text-white">
                <tr>
                  <th className="py-3 px-6 text-left uppercase font-semibold text-sm">Level / Role</th>
                  <th className="py-3 px-6 text-left uppercase font-semibold text-sm">Composition</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {hierarchyData.map((row, index) => (
                  <tr 
                    key={index} 
                    onClick={() => row.path && navigate(row.path)}
                    className={`
                      ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                      ${row.path ? 'cursor-pointer hover:bg-teal-100 hover:text-teal-900 transition-colors duration-200' : ''}
                      `}
                  >
                    <td className="py-4 px-6 border-b border-gray-200 font-medium flex items-center justify-between">
                      {row.level}
                      {row.path && <span className="text-teal-500 text-xs">↗</span>}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">{row.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --- 3. INFO GRID (Who we are / What we offer) --- */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Who we are */}
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-orange-400">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Who We Are</h3>
            <p className="text-gray-600 leading-relaxed">
              Sunshine is your on-campus resource for emotional and mental well-being. Staffed by qualified psychologists and trained peer mentors, our goal is to provide confidential, empathetic, and culturally sensitive support.
            </p>
            <div className="mt-6">
              <p className="font-semibold text-gray-700">Reach out to us at:</p>
              <a href="mailto:office.sunshine@campus.iith.ac.in" className="text-teal-600 hover:underline">office.sunshine@campus.iith.ac.in</a>
            </div>
          </div>

          {/* Card 2: What we offer */}
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-teal-400">
            <h3 className="text-xl font-bold text-gray-800 mb-4">What We Offer</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start"><span className="text-teal-500 mr-2">•</span> One-on-one counselling (in-person & virtual)</li>
              <li className="flex items-start"><span className="text-teal-500 mr-2">•</span> Crisis intervention</li>
              <li className="flex items-start"><span className="text-teal-500 mr-2">•</span> Group therapy sessions</li>
              <li className="flex items-start"><span className="text-teal-500 mr-2">•</span> Mental health awareness campaigns and workshops</li>
            </ul>
          </div>

          {/* Card 3: Our Principles */}
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-400">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Principles</h3>
            <ul className="space-y-3 text-gray-600 font-medium">
              {[
                "Confidentiality",
                "Non-judgmental support",
                "Inclusivity",
                "Empathy and empowerment"
              ].map((principle, index) => (
                <li key={index} className="flex items-center">
                  {/* The Icon */}
                  <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  {/* The Text */}
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      {/* --- 4. EMERGENCY SECTION --- */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto border-2 border-red-300 bg-red-50 rounded-3xl p-10 shadow-md">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Side: Text */}
            <div className="text-center md:text-left md:w-1/2">
              <h3 className="text-3xl font-bold text-red-800 mb-3">Need Help Now?</h3>
              <p className="text-gray-700 text-lg">
                If you are in distress or need immediate support, please don't hesitate to reach out. We are here for you.
              </p>
            </div>
            
            {/* Right Side: Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
              
              {/* Card 1: Campus Emergency */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-red-100">
                <p className="font-bold text-red-600 mb-1">Campus Emergency</p>
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Available 24/7</p>
                <div className="font-mono text-gray-800 font-medium">
                  <a href="tel:8331036080" className="hover:text-red-600 hover:underline">8331036080</a>/81/82
                </div>
              </div>

              {/* Card 2: National Helplines */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-red-100">
                <p className="font-bold text-gray-700 mb-2">National Helplines</p>
                <div className="text-sm space-y-1 text-gray-600">
                  <p>iCall: <span className="font-mono text-gray-900">9152987821</span></p>
                  <p>Vandrevala: <span className="font-mono text-gray-900">18602662345</span></p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- 5. CARE TEAM & APPROACH --- */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Care Team</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Our care team is made up of experienced professionals and empathetic peers who are dedicated to walking with you on your healing journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Counsellors Link/Placeholder */}
            <div className="bg-teal-50 p-8 rounded-2xl border border-teal-100 text-center">
              <h3 className="text-2xl font-bold text-teal-800 mb-4">Meet Our Counsellors</h3>
              <p className="text-gray-600 mb-6">
                Connect with our professional psychologists who are here to guide you.
              </p>
              <Link to="/team/Counsellors" className="inline-block bg-teal-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-teal-700 transition-colors shadow-md">
                View Counsellor Details
              </Link>
            </div>

            {/* Right: Approach */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Therapeutic Approach</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['CBT, REBT, Mindfulness', 'Trauma-informed', 'Client-centered', 'Strength-based', 'Evidence-based practices'].map((approach, index) => (
                  <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                    <span className="text-gray-700 font-medium">{approach}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. FOOTER NOTE --- */}
      <section className="py-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-medium mb-6">
            You matter. Your well-being matters. Whether you're thriving, surviving, or struggling, Sunshine is here for you.
          </p>
          <p className="text-lg opacity-90 mb-8">
            🌻 Healing begins with a conversation. Let’s start one today.
          </p>
        </div>
      </section>

    </div>
  );
}

export default HomePage;
