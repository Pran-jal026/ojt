
import React from 'react';
import Header from '../components/header/Header';
import './Courses.css';

const CoursesPage = () => {
  return (
    <div className="p-4 max-w-xl mx-auto font-serif">
      <Header/>
      <h1 className="text-2xl font-bold text-center text-blue-800 mb-2">Our Academic Programs</h1>
      <p className="text-center mb-6">
        Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs
        designed to equip students with the knowledge and skills demanded by today's dynamic global landscape.
        Our curriculum is regularly updated to reflect industry trends and academic advancements.
      </p>

      <h2 className="text-xl font-bold mb-2">Discover Campus Life</h2>
      <div className="mb-6">
        <video controls className="rounded-md w-full shadow">
          <source src="clg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-center text-sm mt-2 italic">Get a glimpse of the vibrant academic and social life at Vivekanand College.</p>
      </div>

      <h2 className="text-xl font-bold mb-2">Undergraduate Programs (UG)</h2>
      <ul className="mb-4 list-disc list-inside">
        <li>
          <strong>Bachelor of Science (B.Sc.)</strong>
          <ul className="list-disc ml-5">
            <li>Computer Science (3 years)</li>
            <li>Information Technology (3 years)</li>
            <li>Biotechnology (3 years)</li>
          </ul>
        </li>
        <li>
          <strong>Bachelor of Commerce (B.Com)</strong>
          <ul className="list-disc ml-5">
            <li>Accounting & Finance (3 years)</li>
            <li>Banking & Insurance (3 years)</li>
          </ul>
        </li>
        <li>
          <strong>Bachelor of Arts (B.A.)</strong>
          <ul className="list-disc ml-5">
            <li>English Literature (3 years)</li>
            <li>Psychology (3 years)</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-xl font-bold mb-2">Postgraduate Programs (PG)</h2>
      <ul className="mb-4 list-disc list-inside">
        <li>
          <strong>Master of Science (M.Sc.)</strong>
          <ul className="list-disc ml-5">
            <li>Computer Science (2 years)</li>
            <li>Information Technology (2 years)</li>
          </ul>
        </li>
        <li><strong>Master of Commerce (M.Com)</strong> (2 years)</li>
        <li><strong>Master of Arts (M.A.)</strong> (2 years)</li>
      </ul>

      <h2 className="text-xl font-bold mb-2">Program Details & Fee Structure (Annual)</h2>
      <table className="w-full table-auto border border-gray-400 mb-6">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Program Type</th>
            <th className="border p-2">Course Name</th>
            <th className="border p-2">Duration</th>
            <th className="border p-2">Annual Fee (INR)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">UG</td>
            <td className="border p-2">B.Sc. Computer Science</td>
            <td className="border p-2">3 Years</td>
            <td className="border p-2">₹ 85,000</td>
          </tr>
          <tr>
            <td className="border p-2">UG</td>
            <td className="border p-2">B.Com, Accounting & Finance</td>
            <td className="border p-2">3 Years</td>
            <td className="border p-2">₹ 70,000</td>
          </tr>
          <tr>
            <td className="border p-2">PG</td>
            <td className="border p-2">M.Sc. Information Technology</td>
            <td className="border p-2">2 Years</td>
            <td className="border p-2">₹ 95,000</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-xl font-bold mb-2">Specialized & Vocational Courses</h2>
      <p className="mb-4">
        In addition to traditional degree programs, we offer various certificate and diploma courses
        in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development,
        providing specialized training for career enhancement.
      </p>

      <p className="mb-2">Have questions about a specific course?</p>
      <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
        Inquire About Courses
      </button>
    </div>
  );
}

export default CoursesPage;
